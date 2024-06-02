import Journey from "@/components/Journey";
import Mission from "@/components/Mission";
import React from "react";

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page relative">
      <div className="image-container">
        <img src='/images/background.png' alt="Landing Page Image" />
      </div>
      <div className="empty-container"
        style={{
          height: '500px'
        }}
      ></div>
      <div className="relative z-10" style={{ top: '100px' }}>
        <Journey />
      </div>
      <Mission />
    </div>
  );
}

export default LandingPage;
