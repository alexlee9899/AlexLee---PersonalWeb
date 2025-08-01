import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

const ProjectCard = ({
  title,
  description,
  imgUrl,
  gitUrl,
  previewUrl,
  id,
}) => {
  return (
    <div>
      <div className="h-52 md:h-72 rounded-t-xl relative group overflow-hidden">
        <Image
          src={imgUrl}
          alt={title}
          fill
          style={{ objectFit: "contain", backgroundColor: "#181818" }}
          className="transition-transform group-hover:scale-105 duration-300"
        />
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 z-10">
          {/* <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link> */}
          {previewUrl && (
            <Link
              href={previewUrl}
              className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            >
              <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
            </Link>
          )}
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
        <Link href={`/projects/${id}`} className="hover:text-purple-500">
          <h5 className="text-xl font-semibold mb-2">{title}</h5>
        </Link>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
