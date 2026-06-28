# Where each file goes

Copy each file into your project at the SAME relative path shown below,
overwriting what's there (except opportunityFilters.js, which is brand new).

src/utils/opportunityFilters.js     <- NEW FILE, create this file fresh
src/data/opportunities.js           <- REPLACE existing file
src/data/mapLocations.js            <- REPLACE existing file
src/components/NavBar.jsx           <- REPLACE existing file
src/components/NavBar.css           <- REPLACE existing file
src/pages/MapsPage.jsx              <- REPLACE existing file

After copying these in:
1. Make sure your dev server picks up the new utils/ folder (restart `npm run dev` if it doesn't hot-reload)
2. No new npm packages needed -- everything here is plain JS/React, no new dependencies

## What changed and why

- **opportunityFilters.js (new):** decodes HTML entities (Chef&#39;s -> Chef's),
  extracts minimum age from description text via regex, filters scraped
  opportunities to only those with an explicitly stated 12+ age requirement,
  and drops opportunities whose date has already passed.

- **opportunities.js:** now runs scraped HandsOn Phoenix + Flagstaff data
  through the new filter pipeline above. Also adds the requested note to
  HandsOn Greater Phoenix about contacting them to verify hours for
  "Referral" opportunities. The other 6 orgs are untouched.

- **mapLocations.js:** added representative city-level markers for HandsOn
  Phoenix and Flagstaff (now 100+ daily-changing opportunities each, too many
  to hand-map one by one). See the comment in the file for why this is a
  stopgap, not a full fix -- true per-opportunity geocoding is flagged as a
  good follow-up project.

- **NavBar.jsx / NavBar.css:** adds the "Organizations" dropdown menu (hover
  or click) listing all 8 orgs by full name, so users can jump to any org
  page from anywhere on the site.

- **MapsPage.jsx:** small addition so clicking the new representative city
  markers routes to the right org page (since they're not tied to one
  specific opportunity name like the old markers were).

## Things I could NOT verify and want you to check

- The independent left/right scrolling fix, the navy background theme,
  the search bar, and the "View / Apply" link button on each opportunity
  were ALREADY PRESENT in the files I had on my end going into this round
  (from earlier work). If your actual local files don't have these, it means
  your local copy and my reference copy have drifted apart -- let me know
  and I'll get you the OrgDetailPage.jsx / OrgDetailPage.css files too.
