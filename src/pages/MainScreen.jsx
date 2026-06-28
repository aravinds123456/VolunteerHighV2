import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import {
  useCountUp,
  useScrollVisibility,
  useScrollTransition,
  shouldPlayHomeAnimations,
  markHomeAnimationsPlayed,
} from '../hooks/useScrollEffects';
import heroImage from '../assets/images/Image.png';
import handsOnLogo from '../assets/images/HandsOnGreaterPhoenixLogo.jpg';
import azParksLogo from '../assets/images/AZStateParksandTrailsLogo.jpg';
import flagstaffLogo from '../assets/images/CityOfFlagstaffLogo.jpg';
import jaLogo from '../assets/images/JuniorAchievementOfArizonaLogo.jpg';
import fmscLogo from '../assets/images/FMSCLogo.jpg';
import azSustainLogo from '../assets/images/AZSustainabilityAllianceLogo.jpg';
import blmLogo from '../assets/images/BureauOfLandManagement.jpg';
import lostOurHomesLogo from '../assets/images/LostOurHomesPetRescueImageLogo.jpg';
import './MainScreen.css';

const PARTNERS_ROW1 = [
  { to: '/org/hands-on-greater-phoenix', img: handsOnLogo, name: 'HandsOn Greater Phoenix', circular: true },
  { to: '/org/arizona-state-parks', img: azParksLogo, name: 'Arizona State Parks and Trails', circular: false },
  { to: '/org/city-of-flagstaff', img: flagstaffLogo, name: 'City of Flagstaff', circular: true },
  { to: '/org/junior-achievement', img: jaLogo, name: 'Junior Achievement of Arizona', circular: true },
];

const PARTNERS_ROW2 = [
  { to: '/org/feed-my-starving-children', img: fmscLogo, name: 'Feed My Starving Children', circular: false },
  { to: '/org/az-sustainability-alliance', img: azSustainLogo, name: 'Arizona Sustainability Alliance', circular: true },
  { to: '/org/bureau-of-land-management', img: blmLogo, name: 'Bureau of Land Management Arizona', circular: false },
  { to: '/org/lost-our-homes-pet-rescue', img: lostOurHomesLogo, name: 'Lost Our Home Pet Rescue', circular: false },
];

function PartnerBox({ to, img, name, circular, isVisible, index, animationsEnabled }) {
  // When animations are disabled (repeat visit within the same session),
  // the box just renders fully visible immediately — no fly-in.
  const visible = !animationsEnabled || isVisible;
  return (
    <Link
      to={to}
      className={`partner-box${visible ? ' visible' : ''}${!animationsEnabled ? ' no-anim' : ''}`}
      style={animationsEnabled ? { transitionDelay: `${index * 0.28}s` } : undefined}
    >
      <img src={img} alt={name} className={circular ? 'circular' : ''} />
      <span className="org-name">{name}</span>
    </Link>
  );
}

export default function MainScreen() {
  const navigate = useNavigate();
  const [statsRef, statsVisible] = useScrollVisibility(0.3);
  const [partnersRef, partnersVisible] = useScrollVisibility(0.6);
  const [questRef, questIdentity] = useScrollTransition(0.35);
  const [mapsRef, mapsIdentity] = useScrollTransition(0.35);

  // Determined once on mount: should the staggered partner-box entrance
  // (and the stat count-up) play this time, or has it already played this
  // session? Clicking the VolunteerHigh logo (see NavBar.jsx) clears the
  // session flag before navigating here, allowing a fresh replay.
  const [animationsEnabled] = useState(() => shouldPlayHomeAnimations());

  useEffect(() => {
    if (animationsEnabled) {
      markHomeAnimationsPlayed();
    }
  }, [animationsEnabled]);

  const stat1 = useCountUp(90, statsVisible, 1500, !animationsEnabled);
  const stat2 = useCountUp(100, statsVisible, 1500, !animationsEnabled);
  const stat3 = useCountUp(92, statsVisible, 1500, !animationsEnabled);

  return (
    <div className="main-screen">
      <NavBar current={null} />

      <div className="main-scroll">
        {/* ---------- HERO ---------- */}
        <div className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
          <div className="hero-text">
            <p className="hero-brand">VolunteerHigh</p>
            <h1 className="hero-line1">Discover Meaningful</h1>
            <h1 className="hero-line2 blue">Student Service</h1>
            <p className="hero-sub">{"Together, we can make a lasting\nimpact and build a better tomorrow\nfor those in need"}</p>
          </div>
        </div>

        {/* ---------- PROJECT / STATS ---------- */}
        <div className="project-section">
          <h2 className="project-title">The VolunteerHigh Project</h2>
          <p className="project-sub">A platform that empowers students to find, explore, and engage in</p>
          <p className="project-sub second">
            meaningful local volunteer opportunities while creating lasting community impact.
          </p>

          <div className="stats-row" ref={statsRef}>
            <div className="stat-block">
              <div className="stat-rule">――――――</div>
              <p className="stat-number">{stat1}%+</p>
              <p className="stat-caption">{"of students participated in volunteer\nwork before entering\ncollege"}</p>
            </div>
            <div className="stat-block">
              <div className="stat-rule">――――――</div>
              <p className="stat-number">{stat2}+</p>
              <p className="stat-caption">{"volunteering hours by the\naverage high schooler before\ngraduating."}</p>
            </div>
            <div className="stat-block">
              <div className="stat-rule">――――――</div>
              <p className="stat-number">{stat3}%+</p>
              <p className="stat-caption">{"of admissions officers\nvalue 4-year volunteering"}</p>
            </div>
          </div>
        </div>

        {/* ---------- PARTNERS ---------- */}
        <div className="partners-divider-row" ref={partnersRef}>
          <div className="rule" />
          <span className="label">Our Partner Organizations</span>
          <div className="rule" />
        </div>

        <div className="partners-grid-wrap">
          <div className="partners-row">
            {PARTNERS_ROW1.map((p, i) => (
              <PartnerBox key={p.to} {...p} isVisible={partnersVisible} index={i} animationsEnabled={animationsEnabled} />
            ))}
          </div>
          <div className="partners-row">
            {PARTNERS_ROW2.map((p, i) => (
              <PartnerBox key={p.to} {...p} isVisible={partnersVisible} index={i + 4} animationsEnabled={animationsEnabled} />
            ))}
          </div>
        </div>

        {/* ---------- QUEST ---------- */}
        <div className="quest-section">
          <div className={`scroll-transition${questIdentity ? ' identity' : ''}`} ref={questRef}>
            <h2 className="quest-heading">Quest - Our Volunteering Recommendation Engine</h2>
            <p className="quest-body-text">
              {"Quest in an intelligent Volunteer Recommendation engine helps you to find the best volunteering opportunities tailored to your\ninterests and location. By analyzing your preferences and matching them with relevant organizations, Quest simplifies the search process and makes\ncommunity involvement more accessible. Quest is designed to help you find the best volunteer opportunities where you can\nmake the greatest impact while supporting a cause that geniunely matters to you."}
            </p>
            <button className="quest-cta" onClick={() => navigate('/quest')}>Use Quest</button>
          </div>
        </div>

        {/* ---------- MAPS ---------- */}
        <div className="maps-section">
          <div className={`scroll-transition${mapsIdentity ? ' identity' : ''}`} ref={mapsRef}>
            <h2 className="maps-heading">Maps</h2>
            <p className="maps-body-text">
              {"Want to find the nearest opportunity, and fast? Maps is our location-based volunteer discovery tool that helps\nyou to find the nearest opportunity. By displaying nearby opportunities on an interactive map, Maps makes it easy\nto explore opportunities based on your current location and identify places where you can get involved. Maps simplifies\nthe process of finding local volunteer opportunities, helping you connect with organizations in your community and make a\nmeaningful impact close to your home, while earning verified hours."}
            </p>
            <button className="maps-cta" onClick={() => navigate('/maps')}>Use Maps</button>
          </div>
        </div>
      </div>
    </div>
  );
}
