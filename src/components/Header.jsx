import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

const Header = () => {
  return (
    <header className="navbar">
      <div className="navbar-content">
        <Link to="/" className="navbar-brand">
          <img src="/logo.png" alt="Logo" className="navbar-logo" />
          SmartResolve
        </Link>
        
        <nav className="navbar-menu">
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/about" className="navbar-link">About</Link>
          <Link to="/contact" className="navbar-link">Contact</Link>
          <Link to="/dashboard" className="navbar-link">Dashboard</Link>
          <Link to="/issues" className="navbar-link">Issues</Link>
          <Link to="/login" className="navbar-link">Login</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
