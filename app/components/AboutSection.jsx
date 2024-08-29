"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul>
        <li>React.js</li>
        <li>Next.js</li>
        <li>Node.js</li>
        <li>TypeScript</li>
        <li>JavaScript</li>
        <li>PostgreSQL</li>
        <li>MongoDB</li>
        <li>Tailwind CSS</li>
        <li>Express.js</li>
        <li>Flask</li>
        <li>Git & GitHub</li>
        <li>RESTful APIs</li>
        <li>Prisma</li>
        <li>Jest</li>
        <li>IBM Watson Assistant</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul>
        <li>
          Master of Information Technology - University of New South Wales
        </li>
        <li>
          Bachelor of Information Technology - Henan Institute of Science and
          Technology
        </li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul>
        <li>Melfish: Front-End Developer (2023/10 - 2023/6)</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const handleTabChange = (name) => {
    startTransition(() => {
      setTab(name);
    });
  };
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-12 items-start px-4 xl:gap-26 sm:py-16">
        <Image
          className="rounded-xl"
          src="/Images/aboutme.png"
          width={500}
          height={500}
          alt="Me"
        />
        <div>
          <h2 className="text-4xl font-bold text-white mb-4 sm:py-4">
            About Me
          </h2>
          <p className="text-base text-[#ADB7BE] lg:text-lg">
            Alex Li is a dedicated software developer with a strong passion for
            both frontend and backend technologies. With three years of
            programming experience, he excels at crafting visually appealing and
            highly functional software solutions. Yanlin has demonstrated strong
            teamwork and problem-solving abilities, consistently tackling
            challenges and contributing significant value to each project.
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
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
