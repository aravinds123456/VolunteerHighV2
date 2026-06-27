// ============================================================================
//  FIREBASE / GEMINI CONFIGURATION
//  >>> AIzaSyCpcKvphedHystESwmLwS0qEjVyEmx0IQQ <<<
// ============================================================================
//
// Quest AI (src/pages/QuestPage.jsx) calls the Firebase AI Logic SDK (Gemini),
// mirroring QuestView.swift's `FirebaseAI.firebaseAI(backend: .googleAI())`.
//
// To activate Quest AI:
//   1. Go to https://console.firebase.google.com → create/select a project.
//   2. Add a Web App to that project, copy the config object it gives you,
//      and paste its values into FIREBASE_CONFIG below.
//   3. In the Firebase console, enable "Firebase AI Logic" (Gemini API) for
//      the project — this is what QuestView.swift's GenerativeModel relies on.
//   4. Run `npm install firebase` in this project's root folder.
//   5. Restart the dev server (`npm run dev`).
//
// Until this is filled in, Quest AI will show a small banner in the UI saying
// the AI key hasn't been configured yet, but the rest of the page (chat UI,
// layout, styling) is otherwise fully built and matches the SwiftUI version.

export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyCpcKvphedHystESwmLwS0qEjVyEmx0IQQ",          // <-- PASTE YOUR FIREBASE API KEY HERE
  authDomain: "volunteerhigh-web.firebaseapp.com",       // e.g. "your-project.firebaseapp.com"
  projectId: "volunteerhigh-web",        // e.g. "your-project-id"
  storageBucket: "volunteerhigh-web.firebasestorage.app",    // e.g. "your-project.appspot.com"
  messagingSenderId: "242801172901",
  appId: "1:242801172901:web:30c787c09b94d7be3ac84c",
};

// Matches QuestView.swift's `modelName: "gemini-3.1-flash-lite"`
export const GEMINI_MODEL_NAME = "gemini-3.1-flash-lite";

export function isFirebaseConfigured() {
  return Boolean(FIREBASE_CONFIG.apiKey && FIREBASE_CONFIG.projectId);
}
