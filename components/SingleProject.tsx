import Link from "next/link";
import React from "react";
import * as motion from "motion/react-client";
import { childrenVariants } from "./RecentProjects";
import Image from "next/image";
import { Dot } from "lucide-react";
function SingleProject({
  title,
  setModal,
  index,
  link,
  img,
  skills,
  job,
  to,
  
}: {
  title: string;
  setModal: React.Dispatch<
    React.SetStateAction<{ active: boolean; index: number }>
  >;
  index: number;
  link: string;
  img: string;
  skills: string[];
  job: string;
  to: string;
}) {
  return (
    <motion.div variants={childrenVariants}>
      <Link
        href={to}
        className="flex  w-full flex-col relative justify-between items-center group md:hover:opacity-50  px-8 md:px-24 border-b  border-gray-300 transition-all duration-200 cursor-pointer"
        onMouseEnter={() => setModal({ active: true, index })}
        onMouseLeave={() => setModal({ active: false, index })}
      >
        <div className="flex justify-center z-1000 overflow-hidden items-center rounded md:hidden relative bg-transparent w-full h-40">
          <Image
            src={img}
            alt="image"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={`object-cover ${
              img === "/mobile-black.png" ? "w-25" : "w-40"
            }`}
          />
        </div>
        <div className="flex flex-col mt-4 md:mt-0 w-full  justify-center relative md:static py-8 md:py-5">
          <div className="flex justify-between  items-center w-full">
            <h1 className="text-md md:text-3xl font-medium md:group-hover:-translate-x-2.5 transition-all duration-400">
              {title}
            </h1>
            <p className="text-xs md:text-base text-gray-600 md:group-hover:translate-x-2.5 transition-all duration-400">
              {job}
            </p>
          </div>

          <div className="absolute md:top-4 top-0 left-0">_0{index + 1}</div>
        </div>
        <div className="flex flex-wrap gap-1 w-full items-center pb-5 ">
          {skills.map((skill, i) => (
            <span key={i} className="flex   items-center">
              {skill}

              {i !== skills.length - 1 && (
                <span className="">
                  <Dot className="text-gray-600" size={35} />
                </span>
              )}
            </span>
          ))}
        </div>
      </Link>
    </motion.div>
  );
}

export default SingleProject;
