import React from "react";
import ProjectItem from "./ProjectItem"; // Assuming you have a ProjectItem component

function ProjectList({ projects }) {
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projects.map((project) => (
          <ProjectItem
            key={project.id} // Assuming each project object has a unique id
            name={project.name}
            about={project.about}
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
