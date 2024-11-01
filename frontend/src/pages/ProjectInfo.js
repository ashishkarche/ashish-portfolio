import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'; // Import Link from react-router-dom
import axios from 'axios';
import ChatWidget from '../components/ChatWidget'; // Import ChatWidget
import Footer from '../components/Footer'; // Import Footer

const ProjectInfo = () => {
  const { id } = useParams(); // Get the project ID from the URL parameters
  const [project, setProject] = useState(null); // State to hold the project data
  const [relatedProjects, setRelatedProjects] = useState([]); // State to hold related projects
  const [error, setError] = useState(null); // State to hold any errors

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await axios.get(`https://ashish-portfolio-server.vercel.app/api/projects/${id}`); // Fetch the main project
        setProject(response.data); // Set the project data from the response

        // Fetch all projects to find related ones
        const allProjectsResponse = await axios.get(`https://ashish-portfolio-server.vercel.app/api/projects`);
        setRelatedProjects(allProjectsResponse.data); // Set related projects data
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
    <>
      <div className="project-info-section">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-button">
          View Project
        </a>
      </div>

      <div className="related-projects">
        <h3>Related Projects</h3>
        <div className="row">
          {relatedProjects
            .filter((relatedProject) => relatedProject.id !== project.id) // Exclude the current project
            .map((relatedProject) => (
              <div key={relatedProject.id} className="related-project-card col-md-4 mb-4"> {/* Ensure proper layout */}
                <Link to={`/projects/${relatedProject.id}`} className="project-card2 shadow"> {/* Make the card clickable */}
                  <h4 className="project-title2">{relatedProject.title}</h4>
                  <p className="project-description2">{relatedProject.description}</p>
                </Link>
              </div>
            ))}
        </div>
      </div>


      <ChatWidget /> {/* Add ChatWidget here */}
      <Footer /> {/* Add Footer here */}
    </>
  );
};

export default ProjectInfo;
