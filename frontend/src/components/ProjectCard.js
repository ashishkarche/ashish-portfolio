// components / ProjectCard.js 
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const ProjectCard = ({ project }) => (
  <div className="col-md-4 mb-4">
    <Link to={`/projects/${project.id}`} className="project-card shadow"> {/* Make the card clickable */}
      {/* Add image for the project design */}
      {project.image && (
        <div className="project-image">
          <img src={project.image} alt={project.title} />
        </div>
      )}
      <div className="project-card-body">
        <h5 className="project-title">{project.title}</h5>
        <p className="project-description">{project.description}</p>
      </div>
    </Link>
  </div>
);

export default ProjectCard;
