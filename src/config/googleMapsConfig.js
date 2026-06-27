// ============================================================================
//  GOOGLE MAPS CONFIGURATION
//  >>> AIzaSyDyePdZI22sIGwZ84yK5mwOzjhtrVwq8us <<<
// ============================================================================
//
// This replaces MapKit (Maps.swift) with the Google Maps JavaScript API,
// per your request to swap MapKit for Google Maps on the web build.
//
// To activate the Maps page:
//   1. Go to https://console.cloud.google.com/google/maps-apis
//   2. Create/select a project, then enable:
//        - "Maps JavaScript API"
//        - "Places API" (used for the address search / "Find Nearest Opportunity")
//        - "Directions API" (used for travel-time, mirrors MKDirections)
//   3. Create an API key under "Credentials" and paste it below.
//   4. Restart the dev server (`npm run dev`).
//
// Until this is filled in, the Maps page will show a banner explaining the
// map can't load yet, but the rest of the page (search bar, sidebar, layout)
// is otherwise fully built and matches the SwiftUI version.

export const GOOGLE_MAPS_API_KEY = "AIzaSyDyePdZI22sIGwZ84yK5mwOzjhtrVwq8us";

export function isGoogleMapsConfigured() {
  return Boolean(GOOGLE_MAPS_API_KEY);
}
