// Shared helpers for processing opportunity data (both hardcoded and scraped).

/**
 * Decodes common HTML entities that show up in scraped descriptions/names,
 * e.g. "Chef&#39;s Night" -> "Chef's Night", "St. Vincent&#39;s" -> "St. Vincent's".
 * Covers the entities actually seen in our scraped data; extend if new ones appear.
 */
export function decodeHtmlEntities(text) {
  if (!text) return text;
  return text
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#8217;/g, '\u2019')
    .replace(/&#8216;/g, '\u2018')
    .replace(/&#8220;/g, '\u201c')
    .replace(/&#8221;/g, '\u201d')
    .replace(/&nbsp;/g, ' ');
}

/**
 * Best-effort extraction of the minimum volunteer age from free-text
 * descriptions like:
 *   "The minimum age for this volunteer opportunity is 9 with a parent..."
 *   "Age: 12+"
 *   "Volunteers must be 16 years or older to sign up."
 *   "minimum age to volunteer for this opportunitiy is 8, however..."
 * Returns a number, or null if no age requirement could be confidently found.
 */
export function extractMinimumAge(text) {
  if (!text) return null;

  const patterns = [
    /minimum age[a-z\s]*(?:for this (?:volunteer )?(?:opportunity|opportunitiy|project)\s*)?is\s+(\d{1,2})/i,
    /age[a-z\s]*requirement[a-z\s]*(\d{1,2})/i,
    /must be\s+(\d{1,2})\s+years?\s+(?:of age\s+)?or older/i,
    /age:\s*(\d{1,2})\s*\+/i,
    /ages?\s+(\d{1,2})\+/i,
    /volunteers? must be at least\s+(\d{1,2})/i,
  ];

  for (const pattern of patterns) {
    const match = text.match(pattern);
    if (match) {
      const age = parseInt(match[1], 10);
      if (!isNaN(age) && age >= 0 && age <= 99) return age;
    }
  }

  return null;
}

/**
 * Returns true only if:
 *   1. An age requirement could be confidently detected in the text, AND
 *   2. That minimum age is >= 12
 * Opportunities with no detectable age requirement are excluded -- per the
 * requirement that age must be *specified* and *at least* 12, not merely
 * "not stated as under 12".
 */
export function meetsMinimumAge(text, minimumAge = 12) {
  const age = extractMinimumAge(text);
  return age !== null && age >= minimumAge;
}

/**
 * Returns true if a YYYY-MM-DD date string is today or in the future.
 * Opportunities with no date at all are kept (can't confidently say they've
 * expired), only ones with a clearly-past date are dropped.
 */
export function isUpcoming(dateString) {
  if (!dateString) return true;
  const date = new Date(dateString + 'T23:59:59');
  if (isNaN(date.getTime())) return true;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return date >= today;
}

/**
 * Runs the full cleanup pipeline on a raw scraped opportunities array:
 * decode entities, filter to 12+ with a stated age, filter to non-expired.
 * Hardcoded (non-scraped) data is intentionally NOT run through the age/date
 * filters, since the person curated that list by hand already.
 */
export function cleanScrapedOpportunities(opportunities) {
  return opportunities
    .map(opp => ({
      ...opp,
      name: decodeHtmlEntities(opp.name),
      description: decodeHtmlEntities(opp.description),
    }))
    .filter(opp => meetsMinimumAge(opp.description))
    .filter(opp => isUpcoming(opp.date));
}
