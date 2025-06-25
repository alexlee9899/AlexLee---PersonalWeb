import React from "react";
import ProjectCard from "./ProjectCard";
import { projectsData } from "../../public/cvdata";

const ProjectSection = () => {
  return (
    <>
      <h2
        className="text-white font-bold text-4xl text-center m-4 py-4"
        id="projects"
      >
        My Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-8 text-[#ADB7BE]">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectSection;
// Export project data for use in other components
export { projectsData };
