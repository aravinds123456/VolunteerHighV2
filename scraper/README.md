# VolunteerHigh Scraper

Automatically fetches fresh volunteer opportunities from:
- HandsOn Greater Phoenix (via their getOpportunitiesCalendar API)
- City of Flagstaff (via Volunteer Flagstaff's CalendarEvents + CalendarActivityDetail APIs)

## Run manually

```bash
cd scraper/scripts
pip install requests
python3 update_opportunities.py
```

This writes `scraper/scripts/scraped_opportunities.json`. Copy that file into
`volunteerhigh/src/data/scrapedOpportunities.json` to make the live React app
pick up the new data (or just run the copy command below):

```bash
cp scraper/scripts/scraped_opportunities.json volunteerhigh/src/data/scrapedOpportunities.json
```

## Automatic daily updates

`.github/workflows/update-opportunities.yml` runs this automatically once a
day via GitHub Actions, and commits the refreshed
`scrapedOpportunities.json` straight into the repo. No server or manual step
needed once this is pushed to GitHub -- see the main setup steps for how to
enable it.

## Files

- `handson_phoenix_scraper.py` -- HandsOn Greater Phoenix scraper
- `flagstaff_scraper.py` -- City of Flagstaff scraper (2 API calls: list + per-event detail)
- `update_opportunities.py` -- runs both and writes the combined JSON output

## If a site changes and a scraper breaks

Run with `--debug` to inspect the raw API response and see what changed:

```bash
python3 handson_phoenix_scraper.py --debug
python3 flagstaff_scraper.py --debug
```

`update_opportunities.py` will refuse to overwrite the existing JSON file if
both scrapers return zero results, so a broken scraper won't wipe out the
live site's data -- it'll just stop updating until fixed.
