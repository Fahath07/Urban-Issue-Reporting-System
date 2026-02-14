import React from 'react';
import '../styles/about.css';

const About = () => {
  return (
    <div className="about-page" style={{
      backgroundImage: 'linear-gradient(rgba(150, 181, 203, 0.95), rgba(203, 221, 233, 0.95)), url(/Urban-Design-Trends-in-High-Density-Living.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      <div className="container about-container">
        <h1 className="about-title">About Us</h1>
        
        <div className="card">
          <h2>Our Mission</h2>
          <p>The Urban Issue Reporting & Resolution Platform is dedicated to making cities better by empowering citizens to report civic issues and enabling efficient resolution by government departments.</p>
        </div>

        <div className="card">
          <h2>How It Works</h2>
          <p><strong>Citizens</strong> can easily report urban issues like potholes, garbage overflow, broken streetlights, and water leakage through our simple interface.</p>
          <p><strong>Admins</strong> review all reported issues and assign them to the appropriate departments for resolution.</p>
          <p><strong>Department Officers</strong> receive assigned issues and update their status as they work towards resolution.</p>
        </div>

        <div className="card">
          <h2>Our Vision</h2>
          <p>We envision cleaner, safer, and more livable cities where every citizen has a voice and every issue gets the attention it deserves.</p>
        </div>

        <div className="grid grid-3 about-features">
          <div className="card about-feature-card">
            <h3 className="about-feature-title">Fast Response</h3>
            <p>Issues are quickly assigned to relevant departments</p>
          </div>
          <div className="card about-feature-card">
            <h3 className="about-feature-title">Transparent</h3>
            <p>Track your issue status in real-time</p>
          </div>
          <div className="card about-feature-card">
            <h3 className="about-feature-title">Accountable</h3>
            <p>Every issue is documented and tracked</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
