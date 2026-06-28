// Extracted verbatim from Maps.swift's `coordinates` array, for the 6
// organizations with small, stable, hand-curated opportunity lists.
//
// NOTE: HandsOn Greater Phoenix and City of Flagstaff are excluded from this
// static list on purpose. Since the scraper began running daily, those two
// orgs now have 100+ opportunities each that change every day — a fixed
// name-matched list like this one can't keep up with that, and would just
// go stale/incomplete immediately. The lines below add a small number of
// representative city-level markers for those two orgs instead, so Maps
// still shows roughly where their opportunities cluster, without pretending
// to cover the live, ever-changing full list.
//
// A proper fix -- geocoding each live opportunity's actual location on the
// fly, with caching so it doesn't re-geocode 100+ items on every page load
// -- is a bigger piece of work than fits cleanly alongside everything else
// in this round. Worth doing as a follow-up.

export const mapLocations = [
  { name: "TopGolf Competition - Gilbert", lat: 33.320189, lng: -111.74155 },
  { name: "Grief Peer Support Group Facilitators for Kids & Caregivers", lat: 33.679308, lng: -112.225847 },
  { name: "Heart of Isaac Community Center - Food Distribution", lat: 33.464236, lng: -112.126860 },
  { name: "From the Ground Up: Volunteer Day at the Ranch", lat: 33.372848, lng: -112.036277 },
  { name: "August 2026 Monthly Park Cleanup and Stinknet Removal - Kiwanis Park", lat: 33.366737, lng: -111.935198 },
  { name: "Chef's Night Off at HomeBase", lat: 33.497095, lng: -112.061546 },
  { name: "August 2026 #TrashTag Cleanup and Stinknet Removal - Tempe Town Lake", lat: 33.432562, lng: -111.921013 },
  { name: "Thrift Shop Assistants at Hope's Closet", lat: 33.451498, lng: -112.356531 },
  { name: "Administrative Tasks - Tempe Office", lat: 33.393317, lng: -111.948852 },
  { name: "Lost Our Homes Pet Rescue", lat: 33.403296, lng: -111.951717 },
  { name: "Jerome State Historic Park", lat: 34.753647, lng: -112.111248 },
  { name: "Picacho Peak State Park", lat: 32.646409, lng: -111.394838 },
  { name: "Rockin' River Ranch State Park", lat: 34.503340, lng: -111.830419 },
  { name: "Catalina State Park", lat: 32.418141, lng: -110.935255 },
  { name: "Red Rock State Park", lat: 34.839628, lng: -111.780522 },
  { name: "Volunteer Opportunity", lat: 33.363980, lng: -111.954203 },

  // Representative HandsOn Greater Phoenix markers (real opportunities cluster
  // around these cities -- see note above on why this isn't the full live list)
  { name: "HandsOn Greater Phoenix opportunities — Phoenix area", lat: 33.4484, lng: -112.0740 },
  { name: "HandsOn Greater Phoenix opportunities — Mesa area", lat: 33.4152, lng: -111.8315 },
  { name: "HandsOn Greater Phoenix opportunities — Glendale area", lat: 33.5387, lng: -112.1860 },
  { name: "HandsOn Greater Phoenix opportunities — Scottsdale area", lat: 33.4942, lng: -111.9261 },
  { name: "HandsOn Greater Phoenix opportunities — Tempe area", lat: 33.4255, lng: -111.9400 },

  // Representative City of Flagstaff markers
  { name: "City of Flagstaff opportunities — Downtown / Heritage Square", lat: 35.1985, lng: -111.6513 },
  { name: "City of Flagstaff opportunities — Picture Canyon", lat: 35.2276, lng: -111.5572 },
  { name: "City of Flagstaff opportunities — Bonito Community Garden", lat: 35.2038, lng: -111.6534 },
];
