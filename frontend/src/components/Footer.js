// components/Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
  <footer className="footer">
    <p className="footer-text">Connect with me on social media</p>
    <div className="social-links">
      <a href="https://www.linkedin.com/in/ashish-karche-1a422b317/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
      </a>
      <a href="https://github.com/ashishkarche" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} className="social-icon" />
      </a>
      <a href="https://twitter.com/ashishkarche" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} className="social-icon" />
      </a>
    </div>
    <p className="footer-copy">&copy; {new Date().getFullYear()} Ashish Karche. All rights reserved.</p>
  </footer>
);

export default Footer;
