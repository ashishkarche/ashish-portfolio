import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Track navbar state

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark fixed-top shadow-sm ${isScrolled ? 'navbar-scrolled' : 'navbar-transparent'}`}>
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" style={{ cursor: 'pointer' }}>
          <Typewriter
            options={{
              strings: ['Ashish Portfolio'],
              autoStart: true,
              loop: true,
              delay: 75,
              deleteSpeed: 50,
            }}
          />
        </Link>
        <button
          className={`navbar-toggler ${isOpen ? 'active' : ''}`}
          type="button"
          onClick={toggleNavbar}
          aria-expanded={isOpen}
          style={{ border: 'none', background: 'transparent' }} // Remove default button style
        >
          <span className={`cross-icon ${isOpen ? 'active' : ''}`}></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/resume" className="nav-link">Resume</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={() => { scrollToSection('about'); toggleNavbar(); }}>About</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={() => { scrollToSection('projects'); toggleNavbar(); }}>Projects</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
