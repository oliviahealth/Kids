import Mission from "@/components/Mission";
import React from "react";
import Navbar from '@/components/Navbar';


const LandingPage: React.FC = () => {
  return (
    
    <div className="landing-page relative">
      <Navbar />
      <div className="image-container">
        <img src='/images/background.png' alt="Landing Page Image" />
      </div>
      <div className="empty-container"
        style={{
          height: '800px'
        }}
      ></div>
      <Mission />
    </div>
  );
}

export default LandingPage;
