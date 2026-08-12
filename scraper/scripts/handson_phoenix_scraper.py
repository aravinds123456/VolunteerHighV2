"""
HandsOn Greater Phoenix volunteer opportunity scraper.

Endpoint discovered via Chrome DevTools Network tab:
  POST https://www.handsonphoenix.org/search/getOpportunitiesCalendar
  Content-Type: multipart/form-data

The site renders nothing server-side -- the calendar page is just a shell,
and this endpoint is what its JavaScript calls to fetch real data. Calling
it directly skips the need for a headless browser entirely.

Confirmed response shape (verified via --debug against the live site):
{
  "message": "The request was success",
  "code": 200,
  "items": [
    {
      "dayDate": "2026-06-26",
      "occurrences": [
        {
          "opportunityName": "...",
          "description": "...",
          "startTime": "6:30 AM",
          "endTime": "9:00 AM",
          "locationCity": "Phoenix",
          "locationState": "AZ",
          "locationZipCode": "85003",
          "organizationServedName": "...",
          "volunteersStillNeeded": "4",
          "opportunityLink": "https://www.handsonphoenix.org/opportunity/...",
          ...
        }
      ]
    }
  ]
}

IMPORTANT: searchResultBlockId is NOT a stable constant. It identifies the
specific CMS content block rendering the search widget on the calendar page,
and it changes whenever the site admin re-publishes/rebuilds that page.
This is what broke the scraper silently in production before -- a hardcoded
ID went stale, the endpoint kept returning HTTP 200 with an empty "items"
list (no error, no exception), and the site quietly stopped updating.
get_current_block_id() below fetches the current ID fresh on every run
instead of trusting a value frozen in source code.
"""

import requests
import json
import html
import re
from datetime import date, timedelta

ENDPOINT = "https://www.handsonphoenix.org/search/getOpportunitiesCalendar"

USER_AGENT = (
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
    "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36"
)


def get_current_block_id():
    """
    Fetches the live calendar page and extracts the current
    searchResultBlockId from its markup. This value changes whenever the
    site admin re-publishes the calendar page, so it must never be
    hardcoded -- always look it up fresh.
    """
    resp = requests.get(
        "https://www.handsonphoenix.org/calendar",
        headers={"User-Agent": USER_AGENT},
        timeout=20,
    )
    resp.raise_for_status()
    match = re.search(r'searchResultBlockId["\']?\s*[:=]\s*["\']?(\d+)', resp.text)
    if not match:
        raise ValueError(
            "Could not find searchResultBlockId on calendar page -- "
            "HandsOn site markup may have changed"
        )
    return match.group(1)


def clean_description(text: str) -> str:
    """Decode HTML entities (e.g. &#39; -> ') and collapse excess blank lines."""
    if not text:
        return ""
    text = html.unescape(text)
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip()


# Mirrors the multipart form fields seen in DevTools. Empty string = "no filter".
# Date range defaults to today through 6 weeks out -- adjust as needed.
def build_payload(start: date, end: date, search_result_block_id: str):
    return {
        "searchResultBlockId": search_result_block_id,
        "isRecreateAction": "false",
        "IsFromShareUrl": "false",
        "searchvo_location_type": "",
        "searchvo_zip": "",
        "searchvo_issue_area": "",
        "searchvo_keyword": "",
        "searchvo_distance": "",
        "searchvo_age_volunteer": "",
        "searchvo_age_volunteer_specific_values": "",
        "searchvo_serve_this_organization": "",
        "searchvo_managed_by": "",
        "searchvo_population_served": "",
        "searchvo_duration": "",
        "searchvo_appropiate_groups_yes": "",
        "searchvo_appropiate_seniors_yes": "",
        "searchvo_appropiate_court_ordered_yes": "",
        "searchvo_opportunity_type": "",
        "searchvo_invitation_code": "",
        "searchvo_startfrom": start.isoformat(),
        "searchvo_endfrom": end.isoformat(),
        "searchvo_location_names": "",
        "searchvo_causes": "",
        "searchvo_availability": "",
        "searchvo_skills": "",
        "searchvo_activity_type": "",
        "searchvo_events": "",
        "searchvo_age_group": "",
        "searchvo_gender": "",
        "searchvo_view_by": "",
        "searchvo_searchresultblockid": search_result_block_id,
    }


def fetch_handson_phoenix_opportunities(weeks_ahead: int = 6, debug: bool = False):
    today = date.today()
    end = today + timedelta(weeks=weeks_ahead)

    block_id = get_current_block_id()
    if debug:
        print(f"--- Using searchResultBlockId: {block_id} ---")

    headers = {
        # Mimics a real browser request -- some sites reject requests
        # without these even if the endpoint itself is public.
        "Accept": "application/json, text/javascript, */*; q=0.01",
        "X-Requested-With": "XMLHttpRequest",
        "Referer": "https://www.handsonphoenix.org/calendar",
        "User-Agent": USER_AGENT,
    }

    payload = build_payload(today, end, search_result_block_id=block_id)

    resp = requests.post(ENDPOINT, data=payload, headers=headers, timeout=20)
    resp.raise_for_status()
    data = resp.json()

    if debug:
        print("--- RAW RESPONSE KEYS ---")
        print(list(data.keys()))
        items = data.get("items", [])
        print(f"\n--- {len(items)} day-groups returned ---")
        if items:
            print("\n--- FIRST ITEM (raw) ---")
            print(json.dumps(items[0], indent=2)[:3000])
        return data

    opportunities = []
    for day_group in data.get("items", []):
        day_date = day_group.get("dayDate", "")
        for occ in day_group.get("occurrences", []):
            location_parts = [
                occ.get("locationCity", ""),
                occ.get("locationState", ""),
                occ.get("locationZipCode", ""),
            ]
            location = ", ".join(p for p in location_parts if p)

            opportunities.append({
                "name": occ.get("opportunityName", ""),
                "description": clean_description(occ.get("description", "")),
                "date": day_date,
                "startTime": occ.get("startTime", ""),
                "endTime": occ.get("endTime", ""),
                "location": location,
                "organizationServed": occ.get("organizationServedName", ""),
                "volunteersStillNeeded": occ.get("volunteersStillNeeded", ""),
                "link": occ.get("opportunityLink", ""),
                "source": "HandsOn Greater Phoenix",
            })

    return opportunities


if __name__ == "__main__":
    import sys
    debug_mode = "--debug" in sys.argv

    result = fetch_handson_phoenix_opportunities(debug=debug_mode)

    if not debug_mode:
        print(json.dumps(result, indent=2))
        print(f"\nFound {len(result)} opportunities.")
