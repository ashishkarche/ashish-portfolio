import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProjectInfo = () => {
  const { id } = useParams(); // Get the project ID from the URL parameters
  const [project, setProject] = useState(null); // State to hold the project data
  const [error, setError] = useState(null); // State to hold any errors

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await axios.get(`https://ashish-portfolio-server.vercel.app/api/projects/${id}`); // Adjust the URL as needed
        setProject(response.data); // Set the project data from the response
      } catch (err) {
        console.error('Error fetching project:', err);
        setError('Could not fetch project. Please try again later.'); // Set error message
      }
    };
    
    fetchProject(); // Call the function to fetch project data
  }, [id]); // Run the effect when the component mounts or when the ID changes

  if (error) return <div>{error}</div>; // Display error message if there's an error
  if (!project) return <div>Loading...</div>; // Show loading message while fetching data

  return (
    <div className="project-info-section">
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-button">
        View Project
      </a>
    </div>
  );
};

export default ProjectInfo;
