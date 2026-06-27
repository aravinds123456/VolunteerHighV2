import { FIREBASE_CONFIG, GEMINI_MODEL_NAME, isFirebaseConfigured } from '../config/firebaseConfig';

// Mirrors the systemInstruction built in QuestView.swift's `model` computed property.
const SYSTEM_INSTRUCTION = `You are Quest AI, a friendly volunteer recommendation engine.
Here is the database of volunteer opportunities with full descriptions, locations, dates, and times:

Rules:
1. Greet the user warmly and request them to share their passion and location. (Note: The UI pre-populates this greeting).
2. Once provided, search the database to recommend the single best opportunity. Provide key details like dates and times.
3. The user can then ask follow-up questions (e.g. 'why?', 'tell me more', or details about the schedule). Answer them accurately.
4. Keep answers conversational, warm, and breif.
`;

let chatSessionPromise = null;

/**
 * Lazily imports the firebase SDK (so the app doesn't error out if it isn't
 * installed yet) and starts a chat session, mirroring:
 *   chatSession = model.startChat()
 */
async function getChatSession(opportunitiesContext) {
  if (chatSessionPromise) return chatSessionPromise;

  chatSessionPromise = (async () => {
    const { initializeApp } = await import('firebase/app');
    const { getAI, getGenerativeModel, GoogleAIBackend } = await import('firebase/ai');

    const app = initializeApp(FIREBASE_CONFIG);
    const ai = getAI(app, { backend: new GoogleAIBackend() });
    const model = getGenerativeModel(ai, {
      model: GEMINI_MODEL_NAME,
      systemInstruction: SYSTEM_INSTRUCTION + '\n' + opportunitiesContext,
    });

    return model.startChat();
  })();

  return chatSessionPromise;
}

/**
 * Sends a user message to Quest AI and returns the model's text response.
 * Mirrors `chat.sendMessage(prompt)` / `response.text`.
 */
export async function sendQuestMessage(prompt, opportunitiesContext) {
  if (!isFirebaseConfigured()) {
    throw new Error(
      "Quest AI isn't configured yet. Add your Firebase API key in src/config/firebaseConfig.js, then restart the dev server."
    );
  }

  const chat = await getChatSession(opportunitiesContext);
  const result = await chat.sendMessage(prompt);
  const response = await result.response;
  return response.text();
}
