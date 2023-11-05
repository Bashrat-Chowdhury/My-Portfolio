import React from "react";
import { Link } from "react-router-dom";

import "./project.css";

const ProjectCard = (props) => {
  const { title, description, link, link2 } = props;

  return (
    <React.Fragment>
      <div className="project">
        <div className="project-container">
          <div className="project-title">{title}</div>
          <div className="project-description">{description}</div>
          <div className="project-link">
            <Link to={link}>
              <div className="project-link-text">Deployed App</div>
            </Link>
          </div>
          <div className="project-link">
            <Link to={link2}>
              <div className="project-link-text">Github Repo</div>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProjectCard;
