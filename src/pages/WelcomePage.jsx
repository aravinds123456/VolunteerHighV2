import { useNavigate } from 'react-router-dom';
import './WelcomePage.css';

export default function WelcomePage() {
  const navigate = useNavigate();

  return (
    <div className="welcome-page">
      <div className="welcome-content">
        <div className="welcome-icon-box">
          {/* magnifyingglass.circle SF Symbol equivalent */}
          <img
            src="/welcomepageimage.png"
            alt="VolunteerHigh"
            className="welcome-image"
          />
        </div>

        <h1 className="welcome-title">Welcome to VolunteerHigh</h1>

        <button className="welcome-next-btn" onClick={() => navigate('/home')}>
          Get Started
        </button>
      </div>
    </div>
  );
}


