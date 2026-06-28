import { GEMINI_API_KEY, GEMINI_MODEL_NAME, isFirebaseConfigured } from '../config/firebaseConfig';

const SYSTEM_INSTRUCTION = `You are Quest AI, a friendly volunteer recommendation engine for VolunteerHigh, a platform helping Arizona high school students find volunteer opportunities.

Rules:
1. The UI already shows a greeting, so jump straight to helping when the user sends their first message.
2. When the user shares their interests and/or location, search the provided opportunity database and recommend the single best match. Include the name, a brief reason why it fits, and key details like date, time, and location.
3. Answer follow-up questions accurately using the database.
4. Keep responses conversational, warm, and concise.
5. If no opportunities match well, say so honestly and suggest they check back soon as new opportunities are added daily.`;

let conversationHistory = [];
let systemContext = null;

export async function sendQuestMessage(prompt, opportunitiesContext) {
  if (!isFirebaseConfigured()) {
    throw new Error("Quest AI isn't configured yet. Add your Gemini API key in src/config/firebaseConfig.js.");
  }

  if (!systemContext) {
    systemContext = SYSTEM_INSTRUCTION + '\n\nVolunteer opportunities database:\n' + opportunitiesContext;
  }

  conversationHistory.push({ role: 'user', parts: [{ text: prompt }] });

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL_NAME}:generateContent?key=${GEMINI_API_KEY}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: systemContext }] },
        contents: conversationHistory,
        generationConfig: { maxOutputTokens: 1000, temperature: 0.7 },
      }),
    }
  );

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err?.error?.message || `API error ${response.status}`);
  }

  const data = await response.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text ?? '';
  conversationHistory.push({ role: 'model', parts: [{ text }] });
  return text;
}

export function resetQuestChat() {
  conversationHistory = [];
  systemContext = null;
}
