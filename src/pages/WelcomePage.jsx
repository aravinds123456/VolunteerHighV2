import { useNavigate } from 'react-router-dom';
import './WelcomePage.css';

/**
 * Mirrors WelcomePage.swift:
 *   ZStack { LinearGradient(gradientTop -> gradientBottom) ... }
 *   RoundedRectangle(30) + magnifyingglass.circle icon
 *   "Welcome to Volunteer Search" title
 *   "Next" button -> MainScreen (macOS) / FeaturesPage (iOS)
 *
 * Since this is a web build (desktop-equivalent target), "Next" routes
 * straight to the home page, matching the `#else MainScreen()` branch.
 */
export default function WelcomePage() {
  const navigate = useNavigate();

  return (
    <div className="welcome-page">
      <div className="welcome-content">
        <div className="welcome-icon-box">
          {/* magnifyingglass.circle SF Symbol equivalent */}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10" />
            <circle cx="10.5" cy="10.5" r="3.2" />
            <line x1="12.8" y1="12.8" x2="15" y2="15" strokeLinecap="round" />
          </svg>
        </div>

        <h1 className="welcome-title">Welcome to Volunteer Search</h1>

        <button className="welcome-next-btn" onClick={() => navigate('/home')}>
          Get Started
        </button>
      </div>
    </div>
  );
}
