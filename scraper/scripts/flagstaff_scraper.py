"""
City of Flagstaff (Volunteer Flagstaff / Offero platform) opportunity scraper.

TWO endpoints are used, both discovered via Chrome DevTools Network tab:

1. List endpoint (gives titles, dates, ids -- but no description):
     POST https://volunteer.flagstaffaz.gov/api/Home/CalendarEvents
     Content-Type: application/json

2. Detail endpoint (gives the full description, location, volunteer slots --
   called once per event, using the `id` from the list endpoint):
     GET https://volunteer.flagstaffaz.gov/api/Home/CalendarActivityDetail/{id}

Like HandsOn Phoenix, this page is a JS shell -- the calendar grid renders
client-side. Calling these directly avoids needing a headless browser.

Confirmed detail response shape (verified against the live site):
{
  "ActivityId": "...",
  "ActivityTitle": "4th of July Parade Cleanup",
  "LongDescription": "Get ready to make a difference...",
  "PlaceName": "Heritage Square",
  "PlaceUrl": "https://www.google.com/maps/place/...",
  "ActivityCategory": "Community Clean Up",
  "ActivityDate": "Saturday, 04 July 2026",
  "ActivityTime": "11:30 AM - 12:30 PM",
  "VolunteerAssignments": [
    {
      "PositionName": "ALL Flagstaff Volunteers",
      "PositionDescription": "Cleanup Volunteers",
      "StartTime": "11:30 AM",
      "EndTime": "12:30 PM",
      "AvailableAssignmentCount": 19
    }
  ],
  ...
}

NOTE: this means one HTTP request per *unique* event id, on top of the one
list call. Recurring activities (e.g. "Invasive Weed... (1/9)" through
"(9/9)") all SHARE THE SAME id in the list response, so we only need to call
the detail endpoint once per unique id, not once per occurrence -- the
script below already de-duplicates by id to avoid wasted requests.
"""

import requests
import json
import time
from datetime import date, timedelta, datetime

LIST_ENDPOINT = "https://volunteer.flagstaffaz.gov/api/Home/CalendarEvents"
DETAIL_ENDPOINT = "https://volunteer.flagstaffaz.gov/api/Home/CalendarActivityDetail/{id}"

HEADERS = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Referer": "https://volunteer.flagstaffaz.gov/Calendar",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
                   "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36",
}


def fetch_event_list(weeks_ahead: int = 6):
    today = date.today()
    end = today + timedelta(weeks=weeks_ahead)

    payload = {
        "start": today.isoformat(),
        "end": end.isoformat(),
        "activityCategories": None,
        "ageGroups": None,
        "departments": None,
        "geographicAreas": None,
        "interests": None,
        "isAdminCalendar": False,
        "onlyShowActivitiesWithNoAssignments": False,
        "onlyShowActivitiesWithOpenAssignments": False,
        "onlyShowActivitiesWithOpenRegistration": False,
        "onlyShowRegisteredActivities": False,
        "onlyShowShiftsWithOpenSlots": False,
        "onlyShowVolunteerSchedule": False,
        "places": None,
        "showActivities": True,
        "showShifts": False,
        "showSiteVisits": False,
        "siteVisitTypes": None,
        "tiers": None,
        "volunteerCategories": None,
    }

    resp = requests.post(LIST_ENDPOINT, json=payload, headers=HEADERS, timeout=20)
    resp.raise_for_status()
    return resp.json()


def fetch_event_detail(event_id: str):
    url = DETAIL_ENDPOINT.format(id=event_id)
    resp = requests.get(url, headers=HEADERS, timeout=20)
    resp.raise_for_status()
    return resp.json()


def fetch_flagstaff_opportunities(weeks_ahead: int = 6, debug: bool = False, request_delay: float = 0.3):
    events = fetch_event_list(weeks_ahead)

    if debug:
        print(f"--- {len(events)} event occurrences returned from list endpoint ---")

    # De-duplicate by id -- recurring activities share one id across many
    # occurrences, and we only need the detail call once per id.
    unique_ids = list({ev["id"] for ev in events if ev.get("id")})

    if debug:
        print(f"--- {len(unique_ids)} unique activity ids -- fetching detail for each ---")

    details_by_id = {}
    for event_id in unique_ids:
        try:
            details_by_id[event_id] = fetch_event_detail(event_id)
        except requests.RequestException as e:
            if debug:
                print(f"Failed to fetch detail for {event_id}: {e}")
            details_by_id[event_id] = None
        time.sleep(request_delay)  # be polite to the server -- avoid hammering it

    if debug:
        first_id = unique_ids[0] if unique_ids else None
        if first_id:
            print("\n--- SAMPLE DETAIL (first id) ---")
            print(json.dumps(details_by_id[first_id], indent=2)[:2000])
        return events, details_by_id

    opportunities = []
    for ev in events:
        start_iso = ev.get("start", "")
        end_iso = ev.get("end", "")
        try:
            start_dt = datetime.fromisoformat(start_iso) if start_iso else None
            end_dt = datetime.fromisoformat(end_iso) if end_iso else None
        except ValueError:
            start_dt = end_dt = None

        detail = details_by_id.get(ev.get("id"))

        slots = []
        if detail and detail.get("VolunteerAssignments"):
            for slot in detail["VolunteerAssignments"]:
                slots.append({
                    "position": slot.get("PositionName", ""),
                    "description": slot.get("PositionDescription", ""),
                    "availableSpots": slot.get("AvailableAssignmentCount"),
                })

        opportunities.append({
            "name": ev.get("title", ""),
            "description": detail.get("LongDescription", "") if detail else "",
            "date": start_dt.date().isoformat() if start_dt else "",
            "startTime": start_dt.strftime("%-I:%M %p") if start_dt else "",
            "endTime": end_dt.strftime("%-I:%M %p") if end_dt else "",
            "location": detail.get("PlaceName", "") if detail else "",
            "locationMapUrl": detail.get("PlaceUrl", "") if detail else "",
            "category": detail.get("ActivityCategory", "") if detail else "",
            "department": ev.get("departmentName", ""),
            "volunteerSlots": slots,
            "isCanceled": ev.get("title", "").upper().startswith("CANCELED"),
            "source": "City of Flagstaff",
        })

    return opportunities


if __name__ == "__main__":
    import sys
    debug_mode = "--debug" in sys.argv

    result = fetch_flagstaff_opportunities(debug=debug_mode)

    if not debug_mode:
        print(json.dumps(result, indent=2))
        print(f"\nFound {len(result)} opportunities.")
