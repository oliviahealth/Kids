import React from "react";

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <div className="image-container">
        <img src='/images/background.png' alt="Landing Page Image" />
      </div>
      <div className="empty-container"
        style={{
          height: '500px'
        }
        }
      >

      </div>
      <div className="gradient-container" 
          style={{
          height: '500px',
          flex: 1,
          background: 'linear-gradient(to bottom, #49DE95, #277850)',
          
        }}>
        </div>
    </div>
  );
}

export default LandingPage;

