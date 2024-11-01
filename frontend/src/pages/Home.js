import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  return (
    <div className="landing-page">
      <div className="profile-content">
        {/* Profile Section */}
        <section className="profile-section">
          <h1 className="name mt-3">
            Ashish Karche <span className="pronouns">he/him</span>
          </h1>
          <p className="tagline text">
            Recent Computer Engineering Graduate specializing in full-stack web development with expertise
            in Java, MERN stack (MongoDB, Express.js, React, Node.js), and SpringBoot. Experienced in
            building scalable, high-performance applications and implementing RESTful APIs. Strong skills in
            problem-solving and database management (MySQL, MongoDB). Passionate about leveraging
            modern technologies to create innovative solutions.
          </p>
        </section>

        {/* Social Buttons */}
        <div className="social-buttons">
          <a
            href="https://www.linkedin.com/in/ashish-karche-1a422b317/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-button btn"
            aria-label="LinkedIn Profile"
          >
            <FontAwesomeIcon icon={faLinkedin} className="me-2" />
            LinkedIn
          </a>
          <a
            href="https://github.com/ashishkarche"
            target="_blank"
            rel="noopener noreferrer"
            className="social-button btn"
            aria-label="GitHub Profile"
          >
            <FontAwesomeIcon icon={faGithub} className="me-2" />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
