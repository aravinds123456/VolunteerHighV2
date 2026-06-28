import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import volunteerHighLogo from '../assets/images/VolunteerHighLogo.png';
import { resetHomeAnimations } from '../hooks/useScrollEffects';
import './NavBar.css';

const ORGANIZATIONS = [
  { label: 'HandsOn Greater Phoenix', to: '/org/hands-on-greater-phoenix' },
  { label: 'Arizona State Parks and Trails', to: '/org/arizona-state-parks' },
  { label: 'City of Flagstaff', to: '/org/city-of-flagstaff' },
  { label: 'Junior Achievement of Arizona', to: '/org/junior-achievement' },
  { label: 'Feed My Starving Children', to: '/org/feed-my-starving-children' },
  { label: 'Arizona Sustainability Alliance', to: '/org/az-sustainability-alliance' },
  { label: 'Bureau of Land Management Arizona', to: '/org/bureau-of-land-management' },
  { label: 'Lost Our Home Pet Rescue', to: '/org/lost-our-homes-pet-rescue' },
];

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
 *
 * "Organizations" is a click-to-open dropdown (not a route) so users can
 * jump straight to any of the 8 org pages from anywhere on the site.
 */
export default function NavBar({ current }) {
  const [orgMenuOpen, setOrgMenuOpen] = useState(false);
  const closeTimeoutRef = useRef(null);

  const items = [
    { key: 'quest', label: 'Quest AI', to: '/quest' },
    { key: 'maps', label: 'Maps', to: '/maps' },
    { key: 'about', label: 'About', to: '/about' },
    { key: 'faq', label: "FAQ's", to: '/faq' },
  ];

  function handleMenuEnter() {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setOrgMenuOpen(true);
  }

  function handleMenuLeave() {
    closeTimeoutRef.current = setTimeout(() => setOrgMenuOpen(false), 150);
  }

  return (
    <div className="navbar">
      <Link to="/home" className="navbar-logo-link" onClick={resetHomeAnimations}>
        <img src={volunteerHighLogo} alt="VolunteerHigh" className="navbar-logo" />
      </Link>

      <div className="navbar-spacer" />

      <div
        className="navbar-org-dropdown"
        onMouseEnter={handleMenuEnter}
        onMouseLeave={handleMenuLeave}
      >
        <button
          className={`navbar-link navbar-org-trigger${current === 'organizations' ? ' navbar-current' : ''}`}
          onClick={() => setOrgMenuOpen(o => !o)}
          aria-expanded={orgMenuOpen}
        >
          Organizations <span className="navbar-org-caret">▾</span>
        </button>

        {orgMenuOpen && (
          <div className="navbar-org-menu">
            {ORGANIZATIONS.map(org => (
              <Link
                key={org.to}
                to={org.to}
                className="navbar-org-menu-item"
                onClick={() => setOrgMenuOpen(false)}
              >
                {org.label}
              </Link>
            ))}
          </div>
        )}
      </div>

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
