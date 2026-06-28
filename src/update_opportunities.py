"""
Combined scraper -- runs HandsOn Phoenix + City of Flagstaff scrapers and
writes one JSON file shaped to match VolunteerHigh's opportunities.js data
structure (see src/data/opportunities.js in the React app).

Run manually:
    python3 update_opportunities.py

This is also the script GitHub Actions runs on a schedule (see
.github/workflows/update-opportunities.yml).

Output: scraped_opportunities.json, written next to this script.
Copy/move that file into the React app's src/data/ folder (or point the
app's import path at it directly -- see opportunities_loader.js).
"""

import json
import sys
from pathlib import Path
from datetime import datetime, timezone

from handson_phoenix_scraper import fetch_handson_phoenix_opportunities
from flagstaff_scraper import fetch_flagstaff_opportunities

OUTPUT_PATH = Path(__file__).parent / "scraped_opportunities.json"


def to_react_shape(handson_items, flagstaff_items):
    """
    Reshapes scraped data into the same {title, note, opportunities: [{name, description}]}
    structure used by src/data/opportunities.js, so it can be dropped straight in.
    """
    handson_opportunities = []
    for item in handson_items:
        date_line = f"{item['date']} | {item['startTime']} - {item['endTime']}" if item.get("date") else ""
        location_line = f"Location: {item['location']}" if item.get("location") else ""
        slots_line = f"Volunteers still needed: {item['volunteersStillNeeded']}" if item.get("volunteersStillNeeded") else ""

        description_parts = [item.get("description", "")]
        if date_line:
            description_parts.append(date_line)
        if location_line:
            description_parts.append(location_line)
        if slots_line:
            description_parts.append(slots_line)

        handson_opportunities.append({
            "name": item.get("name", ""),
            "description": "\n\n".join(p for p in description_parts if p),
            "link": item.get("link", ""),
            "date": item.get("date", ""),
        })

    flagstaff_opportunities = []
    for item in flagstaff_items:
        if item.get("isCanceled"):
            continue  # skip canceled events from the live listing

        date_line = f"{item['date']} | {item['startTime']} - {item['endTime']}" if item.get("date") else ""
        location_line = f"Location: {item['location']}" if item.get("location") else ""
        category_line = f"Category: {item['category']}" if item.get("category") else ""

        slot_lines = []
        for slot in item.get("volunteerSlots", []):
            spots = slot.get("availableSpots")
            spots_text = f" ({spots} spots available)" if spots is not None else ""
            slot_lines.append(f"• {slot.get('position', '')} - {slot.get('description', '')}{spots_text}")

        description_parts = [item.get("description", "")]
        if date_line:
            description_parts.append(date_line)
        if location_line:
            description_parts.append(location_line)
        if category_line:
            description_parts.append(category_line)
        if slot_lines:
            description_parts.append("\n".join(slot_lines))

        flagstaff_opportunities.append({
            "name": item.get("name", ""),
            "description": "\n\n".join(p for p in description_parts if p),
            "date": item.get("date", ""),
            "link": "https://volunteer.flagstaffaz.gov/Calendar",
        })

    return {
        "handsOnGreaterPhoenix": {
            "title": "HandsOn Greater Phoenix",
            "note": None,
            "opportunities": handson_opportunities,
        },
        "cityOfFlagstaff": {
            "title": "City of Flagstaff",
            "note": None,
            "opportunities": flagstaff_opportunities,
        },
    }


def main():
    print("Fetching HandsOn Greater Phoenix opportunities...")
    try:
        handson_items = fetch_handson_phoenix_opportunities()
        print(f"  -> {len(handson_items)} opportunities found")
    except Exception as e:
        print(f"  -> FAILED: {e}")
        handson_items = []

    print("Fetching City of Flagstaff opportunities (this takes ~15-20s due to per-event detail calls)...")
    try:
        flagstaff_items = fetch_flagstaff_opportunities()
        print(f"  -> {len(flagstaff_items)} opportunities found")
    except Exception as e:
        print(f"  -> FAILED: {e}")
        flagstaff_items = []

    if not handson_items and not flagstaff_items:
        print("\nBoth scrapers returned nothing -- not overwriting the existing JSON file.")
        print("This usually means a site changed its API or is temporarily down.")
        sys.exit(1)

    data = to_react_shape(handson_items, flagstaff_items)
    data["_meta"] = {
        "lastUpdated": datetime.now(timezone.utc).isoformat(),
        "handsOnCount": len(handson_items),
        "flagstaffCount": len(flagstaff_items),
    }

    OUTPUT_PATH.write_text(json.dumps(data, indent=2, ensure_ascii=False))
    print(f"\nWrote {OUTPUT_PATH}")
    print(f"  HandsOn Greater Phoenix: {len(handson_items)} opportunities")
    print(f"  City of Flagstaff: {len(flagstaff_items)} opportunities")


if __name__ == "__main__":
    main()
