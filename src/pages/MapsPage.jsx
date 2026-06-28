import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { mapLocations } from '../data/mapLocations';
import { findOrgByOpportunityName } from '../data/opportunities';
import { GOOGLE_MAPS_API_KEY, isGoogleMapsConfigured } from '../config/googleMapsConfig';
import './MapsPage.css';

const ORG_ROUTES = {
  handsOnGreaterPhoenix: '/org/hands-on-greater-phoenix',
  arizonaStateParks: '/org/arizona-state-parks',
  azSustainabilityAlliance: '/org/az-sustainability-alliance',
  bureauOfLandManagement: '/org/bureau-of-land-management',
  cityOfFlagstaff: '/org/city-of-flagstaff',
  feedMyStarvingChildren: '/org/feed-my-starving-children',
  lostOurHomesPetRescue: '/org/lost-our-homes-pet-rescue',
};

let googleMapsLoaderPromise = null;

// Dynamically injects the Google Maps JS script tag once, mirroring how
// MapKit is simply "available" natively — this is the web equivalent setup step.
function loadGoogleMaps(apiKey) {
  if (window.google?.maps) return Promise.resolve(window.google);
  if (googleMapsLoaderPromise) return googleMapsLoaderPromise;

  googleMapsLoaderPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places,geometry`;
    script.async = true;
    script.onload = () => resolve(window.google);
    script.onerror = reject;
    document.head.appendChild(script);
  });

  return googleMapsLoaderPromise;
}

/**
 * Mirrors Maps.swift:
 *   NavBar
 *   Map(position: $camera, selection: $selected) { Markers for each coordinate }
 *   Search panel: address TextField + "Find Nearest Opportunity" button
 *   travelTime label
 *   .sheet(item: $selected) -> "Click to View Organization" -> navigates to org page
 *
 * MapKit's MKLocalSearch / MKDirections are replaced with the Google Maps
 * Places + Directions equivalents.
 */
export default function MapsPage() {
  const navigate = useNavigate();
  const mapDivRef = useRef(null);
  const mapRef = useRef(null);
  const markersRef = useRef([]);

  const [address, setAddress] = useState('');
  const [travelTime, setTravelTime] = useState('');
  const [selected, setSelected] = useState(null);
  const [mapsReady, setMapsReady] = useState(false);
  const [mapsError, setMapsError] = useState('');
  const [findError, setFindError] = useState('');

  useEffect(() => {
    if (!isGoogleMapsConfigured()) return;

    let cancelled = false;
    loadGoogleMaps(GOOGLE_MAPS_API_KEY).then((google) => {
      if (cancelled || !mapDivRef.current) return;

      const map = new google.maps.Map(mapDivRef.current, {
        center: { lat: 33.4484, lng: -111.95 },
        zoom: 9,
        mapTypeControl: false,
      });
      mapRef.current = map;

      markersRef.current = mapLocations.map((loc) => {
        const marker = new google.maps.Marker({
          position: { lat: loc.lat, lng: loc.lng },
          map,
          title: loc.name,
        });
        marker.addListener('click', () => setSelected(loc));
        return marker;
      });

      setMapsReady(true);
    }).catch(() => {
      setMapsReady(false);
      setMapsError('Google Maps failed to load. Double check your API key in src/config/googleMapsConfig.js and that billing is enabled on the Google Cloud project.');
    });

    return () => { cancelled = true; };
  }, []);

  function findNearestOpportunity() {
    setFindError('');
    setTravelTime('');

    try {
      if (!mapsReady) {
        setFindError("The map hasn't finished loading yet — wait a moment and try again.");
        return;
      }
      if (!address.trim()) {
        setFindError('Enter an address first.');
        return;
      }

      const google = window.google;
      if (!google?.maps?.Geocoder) {
        setFindError('Google Maps geocoding is not available. Try reloading the page.');
        return;
      }

      const geocoder = new google.maps.Geocoder();

      // Bias toward Arizona so partial addresses like "1110 W Washington"
      // resolve correctly without needing city/state/zip
      geocoder.geocode({
        address,
        componentRestrictions: { country: 'us' },
        bounds: new google.maps.LatLngBounds(
          new google.maps.LatLng(31.3, -114.8), // SW Arizona
          new google.maps.LatLng(37.0, -109.0)  // NE Arizona
        ),
      }, (results, status) => {
        try {
          if (status !== 'OK' || !results[0]) {
            setFindError(`Couldn't find that address (Google said: "${status}"). Try a more complete address, e.g. "123 Main St, Phoenix, AZ".`);
            return;
          }
          const userLoc = results[0].geometry.location;

          let closest = null;
          let closestDist = Infinity;

          // Exclude the generic representative markers — only match real named opportunities
          const searchableLocations = mapLocations.filter(loc =>
            !loc.name.startsWith('HandsOn Greater Phoenix opportunities') &&
            !loc.name.startsWith('City of Flagstaff opportunities')
          );

          for (const loc of searchableLocations) {
            const d = google.maps.geometry?.spherical?.computeDistanceBetween
              ? google.maps.geometry.spherical.computeDistanceBetween(
                  userLoc, new google.maps.LatLng(loc.lat, loc.lng)
                )
              : haversineDistance(userLoc.lat(), userLoc.lng(), loc.lat, loc.lng);
            if (d < closestDist) {
              closestDist = d;
              closest = loc;
            }
          }
          if (!closest) {
            setFindError('No opportunities found.');
            return;
          }

          setSelected(closest);
          mapRef.current.panTo({ lat: closest.lat, lng: closest.lng });
          mapRef.current.setZoom(11);

          const directionsService = new google.maps.DirectionsService();
          directionsService.route(
            {
              origin: userLoc,
              destination: { lat: closest.lat, lng: closest.lng },
              travelMode: google.maps.TravelMode.DRIVING,
            },
            (result, dirStatus) => {
              if (dirStatus === 'OK') {
                const leg = result.routes[0].legs[0];
                const minutes = Math.round(leg.duration.value / 60);
                const miles = (leg.distance.value / 1609.34).toFixed(1);
                const displayName = closest.name
                  .replace(/HandsOn Greater Phoenix opportunities — /i, 'HandsOn: ')
                  .replace(/City of Flagstaff opportunities — /i, 'Flagstaff: ');
                setTravelTime(`📍 ${displayName} — ${miles} mi · ${minutes} min away`);
              } else {
                setFindError(`Found the nearest opportunity (${closest.name}), but couldn't calculate drive time.`);
              }
            }
          );
        } catch (innerErr) {
          console.error('Quest Maps geocode callback error:', innerErr);
          setFindError(`Something went wrong processing the result: ${innerErr.message}`);
        }
      });
    } catch (err) {
      console.error('Quest Maps findNearestOpportunity error:', err);
      setFindError(`Something went wrong: ${err.message}`);
    }
  }

  function viewOrganization() {
    if (!selected) return;

    const name = selected.name;

    // Representative city markers — route straight to org page
    if (name.startsWith('HandsOn Greater Phoenix opportunities')) {
      navigate(ORG_ROUTES.handsOnGreaterPhoenix); setSelected(null); return;
    }
    if (name.startsWith('City of Flagstaff opportunities')) {
      navigate(ORG_ROUTES.cityOfFlagstaff); setSelected(null); return;
    }

    // Try exact match first
    const orgKey = findOrgByOpportunityName(name);
    if (orgKey && ORG_ROUTES[orgKey]) {
      navigate(ORG_ROUTES[orgKey]); setSelected(null); return;
    }

    // Keyword fallback — covers markers whose names don't exactly match an opportunity
    const n = name.toLowerCase();
    if (n.includes('handson') || n.includes('hands on') || n.includes('homebase') ||
        n.includes('kiwanis') || n.includes('tempe town lake') || n.includes('trashtag') ||
        n.includes('topgolf') || n.includes('hope') || n.includes('isaac') ||
        n.includes('wildcat ranch') || n.includes('st. vincent') || n.includes('st vincent') ||
        n.includes('grief') || n.includes('maggie') || n.includes('rise and dine') ||
        n.includes('afternoon sort') || n.includes('pizza') || n.includes('administrative tasks')) {
      navigate(ORG_ROUTES.handsOnGreaterPhoenix); setSelected(null); return;
    }
    if (n.includes('state park') || n.includes('jerome') || n.includes('picacho') ||
        n.includes('rockin') || n.includes('catalina') || n.includes('red rock') ||
        n.includes('fort verde')) {
      navigate(ORG_ROUTES.arizonaStateParks); setSelected(null); return;
    }
    if (n.includes('flagstaff') || n.includes('bonito') || n.includes('southside') ||
        n.includes('hal jensen') || n.includes('picture canyon') || n.includes('mars hill') ||
        n.includes('full moon') || n.includes('mushroom') || n.includes('invasive weed') ||
        n.includes('garden maintenance')) {
      navigate(ORG_ROUTES.cityOfFlagstaff); setSelected(null); return;
    }
    if (n.includes('lost our home') || n.includes('shadow shift') || n.includes('shelter care') ||
        n.includes('pet rescue')) {
      navigate(ORG_ROUTES.lostOurHomesPetRescue); setSelected(null); return;
    }
    if (n.includes('fmsc') || n.includes('feed my starving') || n.includes('mobilepack')) {
      navigate(ORG_ROUTES.feedMyStarvingChildren); setSelected(null); return;
    }
    if (n.includes('junior achievement') || n.includes('jaaz') || n.includes('high school heroes')) {
      navigate('/org/junior-achievement'); setSelected(null); return;
    }
    if (n.includes('sustainability') || n.includes('azsustain')) {
      navigate(ORG_ROUTES.azSustainabilityAlliance); setSelected(null); return;
    }
    if (n.includes('bureau') || n.includes('blm') || n.includes('land management') ||
        n.includes('freedom 250') || n.includes('wood river')) {
      navigate(ORG_ROUTES.bureauOfLandManagement); setSelected(null); return;
    }

    // Last resort — still close the sheet
    setSelected(null);
  }

  return (
    <div className="maps-page">
      <NavBar current="maps" />

      <div className="maps-map-wrap">
        {isGoogleMapsConfigured() ? (
          <div className="maps-map-canvas" ref={mapDivRef} />
        ) : (
          <div className="maps-not-configured">
            <p>The map can't load yet — add your Google Maps API key in<br /><code>src/config/googleMapsConfig.js</code></p>
          </div>
        )}

        {mapsError && (
          <div className="maps-not-configured" style={{ background: 'rgba(40,0,0,0.85)' }}>
            <p>{mapsError}</p>
          </div>
        )}

        <div className="maps-search-panel">
          <input
            className="maps-address-input"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <button className="maps-find-btn" onClick={findNearestOpportunity}>
            Find Nearest Opportunity
          </button>
          {findError && <span className="maps-find-error">{findError}</span>}
          {travelTime && <span className="maps-travel-time">{travelTime}</span>}
        </div>
      </div>

      {selected && (
        <div className="maps-sheet-overlay" onClick={() => setSelected(null)}>
          <div className="maps-sheet" onClick={(e) => e.stopPropagation()}>
            <span className="maps-sheet-name">
              {selected.name
                .replace(/HandsOn Greater Phoenix opportunities — /i, 'HandsOn: ')
                .replace(/City of Flagstaff opportunities — /i, 'Flagstaff: ')}
            </span>
            <button className="maps-sheet-btn" onClick={viewOrganization}>
              Click to View Organization
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// Fallback distance calc if google.maps.geometry library isn't loaded
function haversineDistance(lat1, lng1, lat2, lng2) {
  const R = 6371000;
  const toRad = (d) => (d * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a = Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}
