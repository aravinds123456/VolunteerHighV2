"""
HandsOn Greater Phoenix volunteer opportunity scraper.
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
    resp = requests.get(
        "https://www.handsonphoenix.org/calendar",
        headers={"User-Agent": USER_AGENT},
        timeout=20,
    )
    resp.raise_for_status()
    match = re.search(
        r'name="calendar-search-block-id"\s+type="hidden"\s+value="(\d+)"',
        resp.text,
    )
    if not match:
        raise ValueError(
            "Could not find calendar-search-block-id on calendar page -- "
            "HandsOn site markup may have changed"
        )
    return match.group(1)


def clean_description(text: str) -> str:
    if not text:
        return ""
    text = html.unescape(text)
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip()


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
