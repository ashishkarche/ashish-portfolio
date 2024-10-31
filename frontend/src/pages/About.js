// components/About.js
import React from 'react';
import profilePic from '../assets/profile.jpeg'; // Update the path to your profile picture

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-content">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hi! I'm Ashish Vikas Karche, a passionate software developer with a strong background in web development. 
            I specialize in creating modern, responsive websites and applications using technologies like React, Node.js, 
            and Express. My goal is to craft intuitive, user-centered digital experiences that make a difference.
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
