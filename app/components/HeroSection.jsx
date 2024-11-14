"use client";
import React from "react";
import Image from "next/image";
import coder from "../../public/images/projects/coder.png";
import { TypeAnimation } from "react-type-animation";
const HeroSection = () => {
  return (
    <section className="min-w-[500px]">
      <div className="grid sm:grid-cols-12">
        <div className="col-start-1 col-span-7 sm:text-left">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold min-h-[3em] w-[200px]">
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I&apos;m{" "}
            </span>
            <span className="block min-h-[3em]">
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Lee",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "Web developer",
                  1000,
                ]}
                wrapper="span"
                speed={3}
                style={{
                  fontSize: "1em",
                  display: "inline-block",
                }}
                repeat={3}
              />
            </span>
          </h1>
          <p className="text-[#ADB7BE] text-lg mb-6 lg:text-xl">
            Web Developer | UNSW Information Technology
          </p>
          <div>
            <a
              href="#contact"
              className="px-6 py-3 w-full sm:w-fit rounded-full text-white mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200"
            >
              Hire me
            </a>
            <a
              href="/ReseumOfAlex.pdf"
              download
              className="px-4 py-[10px] border-[2px] w-full mt-3 sm:w-fit rounded-full bg-transparent text-white hover:bg-slate-200 hover:text-black border border-white"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="col-start-8 col-span-5">
          <div className="mt-4 lg:mt-0 lg:ml-[-20px]">
            <Image
              className="rounded-full"
              src={coder}
              alt="lee"
              width={500}
              height={500}
              sizes="(min-width: 720px) 300px, 300px" // 根据屏幕大小调整图片尺寸
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
