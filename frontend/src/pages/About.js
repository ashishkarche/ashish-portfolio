// components/About.js
import React from 'react';
import profilePic from '../assets/profile.jpeg';

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-content">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hi! I'm Ashish, and I hail from Pune, often called the 'Queen of the Deccan. Driven by a deep interest in coding, I pursued a Bachelor’s in Computer Engineering from Ajeenkya DY Patil School of Engineering under Savitribai Phule Pune University. I had the opportunity to work as a web developer intern with Let's Grow More, which helped me refine my technical skills. Outside of coding, I’m passionate about sports, especially badminton, and enjoy singing.
          </p>
          <p>
            When I'm not coding, you can find me exploring new tech trends, contributing to open-source projects, or
            learning new skills. I’m always looking for exciting projects and collaborations that challenge me to grow.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
