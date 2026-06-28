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

      geocoder.geocode({ address }, (results, status) => {
        try {
          if (status !== 'OK' || !results[0]) {
            setFindError(`Couldn't find that address (Google said: "${status}"). Try a more complete address, e.g. "123 Main St, Phoenix, AZ".`);
            return;
          }
          const userLoc = results[0].geometry.location;

          let closest = null;
          let closestDist = Infinity;
          for (const loc of mapLocations) {
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
                const minutes = Math.round(result.routes[0].legs[0].duration.value / 60);
                setTravelTime(`${closest.name}: ${minutes} minutes away`);
              } else {
                setFindError(`Found the nearest opportunity (${closest.name}), but couldn't calculate drive time (Google said: "${dirStatus}").`);
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

    // The representative HandsOn Phoenix / Flagstaff city markers (added once
    // those orgs grew to 100+ live, daily-changing opportunities) aren't tied
    // to one specific opportunity name, so they're matched by name prefix
    // instead and routed straight to that org's page.
    if (selected.name.startsWith('HandsOn Greater Phoenix opportunities')) {
      navigate(ORG_ROUTES.handsOnGreaterPhoenix);
      setSelected(null);
      return;
    }
    if (selected.name.startsWith('City of Flagstaff opportunities')) {
      navigate(ORG_ROUTES.cityOfFlagstaff);
      setSelected(null);
      return;
    }

    const orgKey = findOrgByOpportunityName(selected.name);
    if (orgKey && ORG_ROUTES[orgKey]) {
      navigate(ORG_ROUTES[orgKey]);
    }
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
            <span className="maps-sheet-name">{selected.name}</span>
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
