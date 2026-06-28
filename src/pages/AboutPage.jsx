import NavBar from '../components/NavBar';
import aboutImage from '../assets/images/Image2.png';
import lostOurHomesImg from '../assets/images/LostOurHomesImage.jpg';
import fmscImg from '../assets/images/FeedMyStarvingChildrenImage2.jpg';
import azSustainImg from '../assets/images/ArizonaSustainabilityAllianceImage.jpg';
import lostOurHomes2Img from '../assets/images/LostOurHomesImage2.jpg';
import './AboutPage.css';

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
            {"Created By A Student, for Students.\n\nVolunteerHigh is a platform designed to help high school students in Arizona discover meaningful volunteer opportunities\n in their local communities. Finding volunteer work can be difficult, with opportunities scattered across different websites and organizations.\nVolunteerHigh simplifies this process by displaying various organizations in one place."}
          </p>

          {/* Photo grid */}
          <div className="about-photo-grid">
            <img src={lostOurHomesImg} alt="Lost Our Home Pet Rescue volunteers" className="about-photo" />
            <img src={fmscImg} alt="Feed My Starving Children volunteers" className="about-photo" />
            <img src={azSustainImg} alt="Arizona Sustainability Alliance volunteers" className="about-photo" />
            <img src={lostOurHomes2Img} alt="Lost Our Home Pet Rescue volunteer" className="about-photo" />
          </div>
        </div>
      </div>
    </div>
  );
}
