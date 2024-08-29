import React from "react";
import ProjectCard from "./ProjectCard";
const projectsData = [
  {
    id: 1,
    title: "Game-Hub (Active)",
    description:
      "A dynamic game discovery platform built with React.js, designed to help you explore and find yourfavorite games from a curated selection of hundreds.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/alexlee9899/game-hub",
    previewUrl: "https://game-hub-phi-liard.vercel.app/",
  },
  {
    id: 2,
    title: "JoyUS",
    description:
      "An app that lets users create events, join events of interest, and share updates about their activities.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Personal Web",
    description:
      "An online personal website that presents all aspects of your personal information in a diversified way, making it easy to make a lasting impression on job applications.",
    image: "/images/projects/3.png",
    tag: ["All", "Web", "E-commerce"],
    gitUrl: "https://github.com/alexlee9899/PersonalWeb",
    previewUrl: "https://personal-web-lime-one.vercel.app/",
  },
];
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
