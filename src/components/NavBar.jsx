import { Link } from 'react-router-dom';
import volunteerHighLogo from '../assets/images/VolunteerHighLogo.png';
import { resetHomeAnimations } from '../hooks/useScrollEffects';
import './NavBar.css';

/**
 * Mirrors the repeated SwiftUI HStack nav bar:
 *   HStack(spacing: 42) { Logo | Spacer | Quest AI | Maps | About | FAQ's }
 *   .font(.system(size: 18, weight: .medium))
 *   .foregroundStyle(.white)
 *   .padding(.trailing, 160)
 *   .frame(height: 72)
 *   .background(Color.black)
 *
 * `current` controls which label renders as plain (non-link) text,
 * exactly like the Swift views that show the active page as `Text("X")`
 * instead of a NavigationLink.
 *
 * The logo's NavigationLink in ContentView.swift goes to MainScreen() — so it
 * routes to /home here, not the welcome screen. Clicking it also clears the
 * "home animations already played" flag, so the staggered partner-box
 * entrance plays again, matching the requested "only replay if the user
 * clicks the VolunteerHigh logo" behavior.
 */
export default function NavBar({ current }) {
  const items = [
    { key: 'quest', label: 'Quest AI', to: '/quest' },
    { key: 'maps', label: 'Maps', to: '/maps' },
    { key: 'about', label: 'About', to: '/about' },
    { key: 'faq', label: "FAQ's", to: '/faq' },
  ];

  return (
    <div className="navbar">
      <Link to="/home" className="navbar-logo-link" onClick={resetHomeAnimations}>
        <img src={volunteerHighLogo} alt="VolunteerHigh" className="navbar-logo" />
      </Link>

      <div className="navbar-spacer" />

      {items.map(item =>
        current === item.key ? (
          <span key={item.key} className="navbar-current">{item.label}</span>
        ) : (
          <Link key={item.key} to={item.to} className="navbar-link">{item.label}</Link>
        )
      )}
    </div>
  );
}
