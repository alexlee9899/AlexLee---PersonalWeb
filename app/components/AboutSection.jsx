"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import aboutme from "../../public/images/projects/aboutme.png";
import { skillsData, educationData, experienceData } from "../../public/cvdata";

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const handleTabChange = (name) => {
    startTransition(() => {
      setTab(name);
    });
  };

  const renderSkills = () => {
    return (
      <ul
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gridAutoRows: "auto",
          gap: "10px",
          listStyleType: "none",
          padding: 0,
          margin: 0,
        }}
      >
        {skillsData.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    );
  };

  const renderEducation = () => {
    return (
      <ul className="space-y-4">
        {educationData.map((edu, index) => (
          <li key={index}>
            <div className="font-semibold">{edu.degree}</div>
            <div className="text-sm text-gray-400">
              {edu.institution} ({edu.period})
            </div>
          </li>
        ))}
      </ul>
    );
  };

  const renderExperience = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {experienceData.map((exp, index) => (
          <div key={index} className="bg-[#181818] rounded-xl p-4 h-full">
            <div className="font-semibold">{exp.position}</div>
            <div className="text-sm text-gray-400 mb-2">{exp.period}</div>
            <ul className="list-disc pl-5 space-y-1 text-sm text-[#ADB7BE]">
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };

  const renderTabContent = () => {
    switch (tab) {
      case "skills":
        return renderSkills();
      case "education":
        return renderEducation();
      case "experience":
        return renderExperience();
      default:
        return null;
    }
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-12 xl:gap-26 sm:py-16">
        <div className="pt-6">
          <Image
            className="rounded-xl"
            src={aboutme}
            width={500}
            height={500}
            alt="Me"
          />
        </div>
        <div>
          <h2 className="text-4xl font-bold text-white mb-4 sm:py-4">
            About Me
          </h2>
          <p className="text-base text-[#ADB7BE] lg:text-lg">
            Alex Lee is a dedicated software engineer focused on full-stack
            development with solid foundations in both frontend and backend
            technologies. With three years of programming experience, he can
            build visually appealing and efficient software solutions. He is
            pursuing a Master's degree in Information Technology at UNSW,
            focusing on Web Development and AI applications. Alex excels in
            teamwork and problem-solving, effectively addressing challenges and
            contributing significant value to projects.
          </p>
          <div className="flex mt-8 gap-3">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experience
            </TabButton>
          </div>
          <div className="mt-8">{renderTabContent()}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
