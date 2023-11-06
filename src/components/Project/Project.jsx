import ProjectCard from "./projectCard";

import ProjectData from "../Project/projectData";

import "./project.css";

const ProjectList = () => {

  return (
    <div className="all-projects-container">
      {ProjectData.projects.map((project, index) => (
        <div className="all-projects-project" key={index}>
          <ProjectCard
            img={project.img}
            title={project.title}
            description={project.description}
            linkText={project.linkText}
            link={project.link}
            linkText2={project.link2Text}
            link2={project.link2}
          />
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
