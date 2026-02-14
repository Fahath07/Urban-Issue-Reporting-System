import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-hero" style={{ 
        backgroundImage: 'linear-gradient(rgba(40, 114, 161, 0.85), rgba(31, 90, 127, 0.85)), url(/urban-21.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <h1>Urban Issue Reporting Platform</h1>
        <p>Report civic issues and help make your city better</p>
        <div className="home-hero-buttons">
          <Link to="/about" className="btn btn-primary">Learn More</Link>
          <Link to="/contact" className="btn btn-success">Contact Us</Link>
        </div>
      </div>

      <div className="container home-content">
        <h2 className="home-section-title">How It Works</h2>
        
        <div className="grid grid-3">
          <div className="card home-card-center">
            <div className="home-icon">📝</div>
            <h3>Report Issues</h3>
            <p>Citizens can easily report civic problems like potholes, garbage overflow, and more.</p>
          </div>
          
          <div className="card home-card-center">
            <div className="home-icon">👨💼</div>
            <h3>Admin Management</h3>
            <p>Admins can view all issues and assign them to appropriate departments.</p>
          </div>
          
          <div className="card home-card-center">
            <div className="home-icon">🔧</div>
            <h3>Department Action</h3>
            <p>Department officers can update status and resolve issues efficiently.</p>
          </div>
        </div>

        <div className="home-categories">
          <h2 className="home-section-title">Issue Categories</h2>
          
          <div className="grid grid-2">
            <div className="card">
              <h3>🚧 Potholes</h3>
              <p>Report damaged roads and potholes affecting traffic.</p>
            </div>
            
            <div className="card">
              <h3>🗑️ Garbage Overflow</h3>
              <p>Report overflowing garbage bins and waste management issues.</p>
            </div>
            
            <div className="card">
              <h3>💡 Street Lights</h3>
              <p>Report non-functional or damaged street lights.</p>
            </div>
            
            <div className="card">
              <h3>💧 Water Leakage</h3>
              <p>Report water pipe leaks and drainage problems.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
