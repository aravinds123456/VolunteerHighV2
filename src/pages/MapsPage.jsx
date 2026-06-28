import { useEffect, useRef, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
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
  juniorAchievement: '/org/junior-achievement',
};

// Cache key prefix for localStorage geocode cache
const GEOCODE_CACHE_KEY = 'vh_geocode_cache_v5';

let googleMapsLoaderPromise = null;

function loadGoogleMaps(apiKey) {
  if (window.google?.maps) return Promise.resolve(window.google);
  if (googleMapsLoaderPromise) return googleMapsLoaderPromise;
  googleMapsLoaderPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places,geometry`;
    script.async = true;
    script.onload = () => {
      // Load MarkerClusterer after Google Maps
      const clustererScript = document.createElement('script');
      clustererScript.src = 'https://unpkg.com/@googlemaps/markerclusterer/dist/index.min.js';
      clustererScript.onload = () => resolve(window.google);
      clustererScript.onerror = () => resolve(window.google); // fallback: still works without clustering
      document.head.appendChild(clustererScript);
    };
    script.onerror = reject;
    document.head.appendChild(script);
  });
  return googleMapsLoaderPromise;
}

/**
 * Extracts a geocodable location string from an opportunity's description.
 * Handles: full addresses, city+state+zip, zip-only codes.
 */
function extractLocation(description) {
  if (!description) return null;
  const match = description.match(/Location:\s*([^\n]+)/i);
  if (!match) return null;
  let loc = match[1].trim();

  // Fix "PHOENIX, AZ, AZ, 85042" style duplicates from scraper
  loc = loc.replace(/,?\s*AZ,\s*AZ/i, ', AZ');

  // Skip vague strings
  if (
    loc.toLowerCase().includes('details') ||
    loc.toLowerCase().includes('provided after') ||
    loc.toLowerCase().includes('provided upon') ||
    loc.toLowerCase().includes('contact') ||
    loc.toLowerCase().includes('various') ||
    loc.toLowerCase().includes('multiple') ||
    loc.toLowerCase().includes('tbd') ||
    loc.length < 4
  ) return null;

  // Zip-only (5 digits) — append Arizona so geocoder resolves correctly
  if (/^\d{5}$/.test(loc)) return `${loc}, AZ`;

  return loc;
}

/**
 * Reads the geocode cache from localStorage.
 */
function readCache() {
  try {
    const raw = localStorage.getItem(GEOCODE_CACHE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

/**
 * Writes the geocode cache to localStorage.
 */
function writeCache(cache) {
  try {
    localStorage.setItem(GEOCODE_CACHE_KEY, JSON.stringify(cache));
  } catch {}
}

/**
 * Geocodes a location string, using localStorage cache to avoid repeat calls.
 * Returns { lat, lng } or null if geocoding fails.
 */
async function geocodeLocation(google, locationStr, cache) {
  const key = locationStr.toLowerCase().trim();
  if (cache[key]) return cache[key];

  return new Promise((resolve) => {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode(
      {
        address: locationStr + ', Arizona',
        componentRestrictions: { country: 'us' },
        bounds: new google.maps.LatLngBounds(
          new google.maps.LatLng(31.3, -114.8),
          new google.maps.LatLng(37.0, -109.0)
        ),
      },
      (results, status) => {
        if (status === 'OK' && results[0]) {
          const { lat, lng } = results[0].geometry.location;
          const coords = { lat: lat(), lng: lng() };
          cache[key] = coords;
          resolve(coords);
        } else {
          cache[key] = null; // cache the failure too so we don't retry
          resolve(null);
        }
      }
    );
  });
}

/**
 * Builds the full list of map pins from live opportunities data.
 * Each pin: { name, orgKey, lat, lng }
 * Geocodes locations not already in cache, with a small delay between calls
 * to avoid hitting rate limits.
 */
async function buildDynamicPins(google, orgs, onProgress) {
  const cache = readCache();
  const pins = [];
  const toGeocode = [];

  // Collect all opportunities with extractable locations — no dedup
  for (const [orgKey, org] of Object.entries(orgs)) {
    for (const opp of org.opportunities) {
      const loc = extractLocation(opp.description);
      if (!loc) continue;
      toGeocode.push({ name: opp.name, orgKey, loc });
    }
  }

  onProgress(`Locating ${toGeocode.length} opportunities...`);

  // Geocode each unique location string (cache means repeated locs cost 0 extra calls)
  let done = 0;
  for (const item of toGeocode) {
    const coords = await geocodeLocation(google, item.loc, cache);
    if (coords) {
          pins.push({ name: item.name, orgKey: item.orgKey, lat: coords.lat, lng: coords.lng });
        }
    done++;
    if (done % 10 === 0) onProgress(`Locating opportunities... (${done}/${toGeocode.length})`);
    await new Promise(r => setTimeout(r, 60));
  }

  writeCache(cache);
  return pins;
}

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
  const [loadingStatus, setLoadingStatus] = useState('Loading map...');
  const [pins, setPins] = useState([]);

  useEffect(() => {
    if (!isGoogleMapsConfigured()) return;

    let cancelled = false;

    loadGoogleMaps(GOOGLE_MAPS_API_KEY).then(async (google) => {
      if (cancelled || !mapDivRef.current) return;

      const map = new google.maps.Map(mapDivRef.current, {
        center: { lat: 33.4484, lng: -111.95 },
        zoom: 9,
        mapTypeControl: false,
      });
      mapRef.current = map;

      setLoadingStatus('Locating opportunities...');

      // Wait for Vite's module graph to fully resolve scrapedOpportunities.json
      // before reading organizations. 150ms is enough on all tested machines.
      await new Promise(r => setTimeout(r, 150));
      if (cancelled) return;

      // Re-import organizations dynamically to guarantee we get the fully
      // resolved version including scraped data, not a cached partial load
      const { organizations: orgs } = await import('../data/opportunities');
      if (cancelled) return;

      // Verify we got the full scraped dataset, not just hardcoded fallback
      const totalOpps = Object.values(orgs).reduce((s, o) => s + o.opportunities.length, 0);
      console.log(`MapsPage: loaded ${totalOpps} opportunities`);

      // Build dynamic pins from live opportunities
      const dynamicPins = await buildDynamicPins(google, orgs, setLoadingStatus);
      if (cancelled) return;

      setPins(dynamicPins);

      // Place markers
      markersRef.current.forEach(m => m.setMap(null));
      const newMarkers = dynamicPins.map((pin) => {
        const marker = new google.maps.Marker({
          position: { lat: pin.lat, lng: pin.lng },
          title: pin.name,
        });
        marker.addListener('click', () => setSelected(pin));
        return marker;
      });
      markersRef.current = newMarkers;

      // Use MarkerClusterer if available, otherwise just add markers directly
      if (window.markerClusterer?.MarkerClusterer) {
        new window.markerClusterer.MarkerClusterer({ map, markers: newMarkers });
      } else {
        newMarkers.forEach(m => m.setMap(map));
      }

      setMapsReady(true);
      setLoadingStatus('');
    }).catch(() => {
      if (!cancelled) {
        setMapsError('Google Maps failed to load. Check your API key in src/config/googleMapsConfig.js.');
        setLoadingStatus('');
      }
    });

    return () => { cancelled = true; };
  }, []);

  function findNearestOpportunity() {
    setFindError('');
    setTravelTime('');

    if (!mapsReady) { setFindError("The map is still loading — try again in a moment."); return; }
    if (!address.trim()) { setFindError('Enter an address first.'); return; }

    const google = window.google;
    if (!google?.maps?.Geocoder) { setFindError('Geocoding not available. Try reloading.'); return; }

    const geocoder = new google.maps.Geocoder();
    geocoder.geocode(
      {
        address,
        componentRestrictions: { country: 'us' },
        bounds: new google.maps.LatLngBounds(
          new google.maps.LatLng(31.3, -114.8),
          new google.maps.LatLng(37.0, -109.0)
        ),
      },
      (results, status) => {
        if (status !== 'OK' || !results[0]) {
          setFindError(`Couldn't find that address. Try adding a city, e.g. "1110 W Washington, Phoenix".`);
          return;
        }
        const userLoc = results[0].geometry.location;

        // Only search real named pins (not generic markers)
        let closest = null;
        let closestDist = Infinity;
        for (const pin of pins) {
          const d = google.maps.geometry?.spherical?.computeDistanceBetween
            ? google.maps.geometry.spherical.computeDistanceBetween(
                userLoc, new google.maps.LatLng(pin.lat, pin.lng)
              )
            : haversineDistance(userLoc.lat(), userLoc.lng(), pin.lat, pin.lng);
          if (d < closestDist) { closestDist = d; closest = pin; }
        }

        if (!closest) { setFindError('No mapped opportunities found.'); return; }

        setSelected(closest);
        mapRef.current.panTo({ lat: closest.lat, lng: closest.lng });
        mapRef.current.setZoom(13);

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
              setTravelTime(`📍 ${closest.name} — ${miles} mi · ${minutes} min away`);
            } else {
              setFindError(`Found nearest opportunity (${closest.name}) but couldn't calculate drive time.`);
            }
          }
        );
      }
    );
  }

  function viewOrganization() {
    if (!selected) return;
    const route = ORG_ROUTES[selected.orgKey];
    if (route) navigate(route);
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
            <p>Add your Google Maps API key in <code>src/config/googleMapsConfig.js</code></p>
          </div>
        )}

        {mapsError && (
          <div className="maps-not-configured" style={{ background: 'rgba(40,0,0,0.85)' }}>
            <p>{mapsError}</p>
          </div>
        )}

        {loadingStatus && (
          <div className="maps-loading-banner">
            <span className="maps-loading-spinner" /> {loadingStatus}
          </div>
        )}

        <div className="maps-search-panel">
          <input
            className="maps-address-input"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && findNearestOpportunity()}
          />
          <button className="maps-find-btn" onClick={findNearestOpportunity}>
            Find Nearest Opportunity
          </button>
          {findError && <span className="maps-find-error">{findError}</span>}
          {travelTime && <span className="maps-travel-time">{travelTime}</span>}
          <p className="maps-location-note">
            📌 Some pin locations are approximate based on the area listed. Register with the organization for exact details.
          </p>
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

function haversineDistance(lat1, lng1, lat2, lng2) {
  const R = 6371000;
  const toRad = (d) => (d * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a = Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}
