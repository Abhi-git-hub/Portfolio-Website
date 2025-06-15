import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'
function Navbar({ theme, toggleTheme }) {
  const location = useLocation();

  return (
    <nav className={`navbar ${theme}`}>
      <div className="navbar-logo">
        <Link to="/">Abhi Yadav </Link>
      </div>
      <ul className="navbar-links">
        <li className={location.pathname === '/' ? 'active' : ''}><Link to="/">Home</Link></li>
        <li className={location.pathname === '/about' ? 'active' : ''}><Link to="/about">About</Link></li>
        <li className={location.pathname === '/certifications' ? 'active' : ''}><Link to="/certifications">Certifications</Link></li>
        <li className={location.pathname === '/projects' ? 'active' : ''}><Link to="/projects">Projects</Link></li>
        <li className={location.pathname === '/contact' ? 'active' : ''}><Link to="/contact">Contact</Link></li>
      </ul>
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
    </nav>
  );
}

export default Navbar;