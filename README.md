# VolunteerHigh — Web Version

A React + Vite conversion of your SwiftUI "VolunteerHigh" app, built to match
the original layout, colors, fonts, and behavior as closely as possible on the web.

## 1. Install dependencies

You'll need [Node.js](https://nodejs.org) (v18+) installed. Then, in this folder:

```bash
npm install
```

If you want Quest AI to work, also run:

```bash
npm install firebase
```

## 2. Add your API keys

### Quest AI (Firebase / Gemini)
Open **`src/config/firebaseConfig.js`** and paste your values into the
`FIREBASE_CONFIG` object — there are clearly marked blanks for each field
(apiKey, authDomain, projectId, etc). Instructions for getting these from the
Firebase console are in the comments at the top of that file.

### Maps (Google Maps — replacing MapKit)
Open **`src/config/googleMapsConfig.js`** and paste your key into:

```js
export const GOOGLE_MAPS_API_KEY = ""; // <-- PASTE YOUR GOOGLE MAPS API KEY HERE
```

Instructions for getting a key and which Google Cloud APIs to enable
(Maps JavaScript API, Places API, Directions API) are in the comments in
that same file.

## 3. Run it locally

```bash
npm run dev
```

This starts a local dev server — your terminal will print something like:

```
  ➜  Local:   http://localhost:5173/
```

Open that link in your browser. It should auto-open for you as well.

## Notes / things to double check

- **City of Flagstaff logo**: the seal image you shared came through as an
  inline chat image rather than an uploaded file, so I couldn't pull it
  programmatically. Drop the image file into `src/assets/images/CityOfFlagstaffLogo.jpg`
  (exact filename) to complete that organization's logo on the home page.
- **PlayfairDisplay font**: this was referenced in your SwiftUI code
  (`About.swift`, `ContentView.swift`) but the `.ttf` file wasn't among your
  uploads. I loaded the standard Playfair Display from Google Fonts instead,
  which should look identical or extremely close. If you have your original
  `PlayfairDisplay-Regular.ttf`, drop it into `src/assets/fonts/` and let me
  know — I'll switch the CSS to use it directly instead of the Google Fonts version.
- Everything else (Cormorant Garamond, both Noto Sans weights, all 8 org
  logos, both hero images, the VolunteerHigh logo) is wired in directly from
  your uploaded files.

## Project structure

```
src/
  assets/        fonts + images, copied directly from your Xcode project
  components/    NavBar, OrgDetailPage (shared across all 8 org pages)
  config/        <-- your Firebase + Google Maps API keys go here
  data/          opportunities.js (all org data) + mapLocations.js
  hooks/         scroll-triggered animation logic (mirrors SwiftUI's
                 onScrollVisibilityChange / TimelineView counters)
  pages/         one file per screen (WelcomePage, MainScreen, QuestPage,
                 MapsPage, AboutPage, FAQPage, + 8 org pages)
  services/      Quest AI's Firebase/Gemini call logic
```
