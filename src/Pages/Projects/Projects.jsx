import React, { useEffect } from "react";

import NavBar from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";

import ProjectList from "../../components/Project/Project";

import "./projects.css";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <div className="page-content">
        <NavBar active="projects" />
        <div className="content-wrapper">
          <div className="projects-container">
            <div className="title projects-title">My Projects</div>

            <div className="projects-list">
              <ProjectList />
            </div>
          </div>
          <div className="page-footer">
            <Footer />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Projects;
