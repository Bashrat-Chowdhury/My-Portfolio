import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "./project.css";

const ProjectCard = (props) => {
  const { img, title, description, link, link2 } = props;


  return (
    <React.Fragment>
      <div className="project" id="project">
        <div className="project-container">
          <div className="project-title">{title}</div>
          <div className="project-description">{description}</div>
          <div className="project-link">
            <Link to={link}>
              <div className="project-link-text">Github Repo</div>
            </Link>
          </div>
          <div className="project-link">
            <Link to={link2}>
              <div className="project-link-text">Deployed App</div>
            </Link>
          </div>
          <div className="app-image-container"><img src={img} className="app-image" /></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProjectCard;
