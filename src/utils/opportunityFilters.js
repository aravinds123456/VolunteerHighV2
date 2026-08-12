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
 * Returns true if a YYYY-MM-DD date string is today or in the future.
 * Also checks description text for a date pattern like "2026-06-27 |" as fallback,
 * since scraped opportunities may embed the date in the description rather than
 * a dedicated field. Opportunities with no detectable date are always kept.
 */
export function isUpcoming(dateString, description) {
  let dateToCheck = dateString;

  if (!dateToCheck && description) {
    const match = description.match(/(\d{4}-\d{2}-\d{2})\s*\|/);
    if (match) dateToCheck = match[1];
  }

  if (!dateToCheck) return true;

  const date = new Date(dateToCheck + 'T23:59:59');
  if (isNaN(date.getTime())) return true;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return date >= today;
}

/**
 * Runs the cleanup pipeline on scraped opportunities:
 * - Decodes HTML entities (Chef&#39;s -> Chef's)
 * - Removes opportunities whose date has already passed
 *
 * Age filtering has been removed. The regex-based approach was too fragile —
 * it was silently dropping valid opportunities that described age differently
 * or not at all (e.g. "Morning Kitchen Crew", "Kid Connection"). All scraped
 * opportunities are now shown; the date filter ensures expired ones are hidden.
 */
export function cleanScrapedOpportunities(opportunities) {
  return opportunities
    .map(opp => ({
      ...opp,
      name: decodeHtmlEntities(opp.name),
      description: decodeHtmlEntities(opp.description),
    }))
    .filter(opp => isUpcoming(opp.date, opp.description));
}
