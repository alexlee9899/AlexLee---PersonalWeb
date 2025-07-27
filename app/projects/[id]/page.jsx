"use client";

import React from "react";
import { projectsData, projectDetails } from "../../../public/cvdata";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

const ProjectDetails = ({ params }) => {
  const projectId = parseInt(params.id);
  const project = projectsData.find((p) => p.id === projectId);
  const details = projectDetails[projectId];

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col bg-[#121212] text-white">
        <Navbar />
        <div className="container mx-auto px-12 py-4 flex-grow">
          <div className="flex flex-col items-center justify-center min-h-[50vh]">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <Link
              href="/#projects"
              className="flex items-center text-purple-500 hover:text-purple-400"
            >
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              Back to Projects
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mx-auto px-12 py-4 flex-grow">
        <Link
          href="/#projects"
          className="flex items-center text-purple-500 hover:text-purple-400 mb-6"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          Back to Projects
        </Link>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <div className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden bg-[#181818]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                style={{ objectFit: "contain" }}
                className="rounded-xl"
                priority
              />
            </div>

            <div className="flex gap-4 mt-6">
              <Link
                href={project.gitUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-6 py-3 w-full sm:w-fit rounded-full text-white mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-center ${
                  !project.gitUrl && "opacity-50 cursor-not-allowed"
                }`}
              >
                GitHub Repository
              </Link>
              <Link
                href={project.previewUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-6 py-3 border-[2px] w-full sm:w-fit rounded-full bg-transparent text-white hover:bg-slate-800 border border-white text-center ${
                  !project.previewUrl && "opacity-50 cursor-not-allowed"
                }`}
              >
                Visit Project
              </Link>
            </div>
          </div>

          <div className="text-white">
            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tag.map((tag, index) => (
                <span
                  key={index}
                  className="bg-[#181818] px-4 py-2 rounded-full text-[#ADB7BE] text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="bg-[#181818] rounded-xl p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">
                Project Description
              </h2>
              <p className="text-[#ADB7BE] mb-6">{project.description}</p>

              <h2 className="text-xl font-semibold mb-4">Project Features</h2>
              <ul className="text-[#ADB7BE] list-disc pl-5 space-y-2">
                {details &&
                  details.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
              </ul>
            </div>

            <div className="bg-[#181818] rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {details &&
                  details.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className={`${tech.class} px-3 py-1 rounded-full text-sm`}
                    >
                      {tech.name}
                    </span>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectDetails;
