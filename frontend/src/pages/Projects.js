// pages/Projects.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProjectCard from '../components/ProjectCard';

// Define local image paths for each project title
const projectImages = {
  'Coding Challenge Platform': '/assets/images/coding-challenge-platform.jpg',
  'Travel Company Website': '/assets/images/travel-company.jpg',
  'Secure File App - Hybrid Cryptography File Sharing': '/assets/images/secure-file-app.jpg',
  'AI-powered ChatBot': '/assets/images/ai-chatbot.jpg',
};

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('https://ashish-portfolio-server.vercel.app/api/projects');
        const projectsWithImages = response.data.map((project) => ({
          ...project,
          image: projectImages[project.title] || '/assets/images/default.jpg', // Fallback image
        }));
        setProjects(projectsWithImages);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError('Well, this is awkward! It seems our project-fetching elves are on a coffee break. Please try again in a moment!');
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className='project-section'>
      <h2>Projects</h2>
      {error && 
        <p className="error">
          {error}
        </p>
      }
      <div className="project-list">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
