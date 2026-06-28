// ============================================================================
//  GEMINI API CONFIGURATION (Google AI Studio)
//  Replace the key below with your key from https://aistudio.google.com
// ============================================================================

export const GEMINI_API_KEY = "AQ.Ab8RN6ILQtJe2eUTlbveerBT6rJDhIghmyXY_hgBSSADpad49A"; // <-- paste your AI Studio key here

export const GEMINI_MODEL_NAME = "gemini-2.5-flash-lite";

// Kept for backwards compatibility with QuestPage.jsx
export function isFirebaseConfigured() {
  return Boolean(GEMINI_API_KEY);
}
