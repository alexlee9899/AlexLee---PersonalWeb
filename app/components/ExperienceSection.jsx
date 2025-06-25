import React from "react";
import { experienceData } from "../../public/cvdata";

const ExperienceSection = () => {
  return (
    <section className="text-white py-16" id="experience">
      <div className="container mx-auto px-12">
        <h2 className="text-4xl font-bold text-center mb-12">
          Work Experience
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className="bg-[#181818] rounded-xl p-6 hover:bg-[#1e1e1e] transition-all duration-300 h-full flex flex-col"
            >
              <div className="mb-4 pb-4 border-b border-gray-700">
                <h3 className="text-xl font-bold mb-1">
                  {exp.position.split(":")[0]}
                </h3>
                <h4 className="text-lg text-purple-400 mb-2">
                  {exp.position.split(":")[1]}
                </h4>
                <p className="text-sm text-gray-400">{exp.period}</p>
              </div>

              <ul className="list-disc pl-5 space-y-2 text-[#ADB7BE] flex-grow">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
