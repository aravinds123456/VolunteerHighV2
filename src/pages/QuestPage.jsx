import { useEffect, useRef, useState } from 'react';
import NavBar from '../components/NavBar';
import { sendQuestMessage } from '../services/questAI';
import { isFirebaseConfigured } from '../config/firebaseConfig';
import { organizations } from '../data/opportunities';
import './QuestPage.css';

/**
 * Mirrors QuestView.swift:
 *   "Quest AI" title in CormorantGaramond
 *   ScrollView of chat bubbles (user: blue/right, ai: gray/left + sparkles icon)
 *   Bottom input bar with placeholder text + send button
 *
 * A NavBar is added here (the original SwiftUI QuestView has none, since it's
 * reached via NavigationLink push with a native back button) so the toolbar
 * stays visible and consistent across every page on the web build.
 *
 * Firebase/Gemini wiring lives in src/services/questAI.js and
 * src/config/firebaseConfig.js — see that file for where to paste the API key.
 */
export default function QuestPage() {
  const [messages, setMessages] = useState([
    { sender: 'ai', text: "Hi! I'm Quest AI. Tell me your interests and location, and I will find the best volunteer opportunity near you!" }
  ]);
  const [userPrompt, setUserPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  // Builds the same opportunities JSON context QuestView.swift loads from
  // the bundled opportunities.json file, so Quest AI can reference it once configured.
  const opportunitiesContext = JSON.stringify(organizations);

  async function sendMessage() {
    if (!userPrompt.trim() || isLoading) return;
    const prompt = userPrompt;
    setUserPrompt('');
    setIsLoading(true);
    setMessages(prev => [...prev, { sender: 'user', text: prompt }]);

    try {
      const responseText = await sendQuestMessage(prompt, opportunitiesContext);
      setMessages(prev => [...prev, { sender: 'ai', text: responseText }]);
    } catch (err) {
      setMessages(prev => [...prev, { sender: 'ai', text: `Error: ${err.message}` }]);
    } finally {
      setIsLoading(false);
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <div className="quest-page-wrap">
      <NavBar current="quest" />

      <div className="quest-page">
        <h1 className="quest-title">Quest AI</h1>

        {!isFirebaseConfigured() && (
          <div className="quest-config-banner">
            Quest AI isn't connected yet. Add your Firebase API key in <code>src/config/firebaseConfig.js</code> to enable live responses.
          </div>
        )}

        <div className="quest-chat-scroll" ref={scrollRef}>
          {messages.map((m, i) => (
            <div key={i} className={`quest-message-row ${m.sender}`}>
              {m.sender === 'ai' && (
                <span className={`quest-avatar ai${isLoading && i === messages.length - 1 ? ' loading' : ''}`}>✨</span>
              )}
              <div className={`quest-bubble ${m.sender}`}>{m.text}</div>
              {m.sender === 'user' && <span className="quest-avatar user">👤</span>}
            </div>
          ))}
        </div>

        <div className="quest-input-bar">
          <div className="quest-input-wrap">
            <input
              className="quest-input"
              value={userPrompt}
              onChange={(e) => setUserPrompt(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            {!userPrompt && <span className="quest-input-placeholder">Ask Quest AI...</span>}
          </div>
          <button className="quest-send-btn" onClick={sendMessage}>
            {isLoading ? '⋯' : '➤'}
          </button>
        </div>
      </div>
    </div>
  );
}
