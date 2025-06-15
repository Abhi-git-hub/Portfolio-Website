import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar({ theme, toggleTheme }) {
  const location = useLocation();

  return (
    <nav className={`navbar ${theme}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <div className="logo-gradient" />
        </div>
        <ul className="navbar-links">
          <li className={location.pathname === '/' ? 'active' : ''}><Link to="/">Home</Link></li>
          <li className={location.pathname === '/about' ? 'active' : ''}><Link to="/about">About</Link></li>
          <li className={location.pathname === '/projects' ? 'active' : ''}><Link to="/projects">Projects</Link></li>
          <li className={location.pathname === '/video-edits' ? 'active' : ''}><Link to="/video-edits">Video Edits</Link></li>
          <li className={location.pathname === '/certifications' ? 'active' : ''}><Link to="/certifications">Certifications</Link></li>
          <li className={location.pathname === '/contact' ? 'active' : ''}><Link to="/contact">Contact</Link></li>
        </ul>
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === 'light' ? (
            <span className="theme-icon sun"></span>
          ) : (
            <span className="theme-icon moon"></span>
          )}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;