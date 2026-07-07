import NavBar from '../components/NavBar';
import aboutImage from '../assets/images/Image2.png';
import './AboutPage.css';

/**
 * Mirrors About.swift:
 *   NavBar
 *   ZStack { Image2 background, "Our Mission" + body text }
 *   Divider row "About VolunteerHigh"
 *   Body paragraph in CormorantGaramond, yellow text, navy-deep background
 */
export default function AboutPage() {
  return (
    <div className="about-page">
      <NavBar current="about" />

      <div className="about-scroll">
        <div className="about-hero" style={{ backgroundImage: `url(${aboutImage})` }}>
          <div className="about-hero-text">
            <h1 className="about-mission-title">Our Mission</h1>
            <p className="about-mission-body">
              {"With the right tools and access to meaningful opportunities,\nany student can make a difference. VolunteerHigh empowers\nstudents to connect with\ncauses they care about, building lasting community\nimpact and growing service."}
            </p>
          </div>
        </div>

        <div className="about-section">
          <div className="about-divider-row">
            <div className="rule" />
            <span className="label">About VolunteerHigh</span>
            <div className="rule" />
          </div>

          <p className="about-body-text">
            {"Created By A Student, for Students.\n\nVolunteerHigh is a platform designed to help high school students in Arizona discover meaningful volunteer opportunities\n in their lcoal communities. Finding volunteer work can be difficult, with opportunities scattered across different websites and organizations.\nVolunteerHigh simplifies this process by displaying various organizations in one place."}
          </p>
        </div>
      </div>
    </div>
  );
}
