import { Inter, Josefin_Sans } from "next/font/google";
import React from "react";
import * as motion from "motion/react-client";
const ItalicJose = Josefin_Sans({
  subsets: ["latin"],
  style: "italic",
  weight: ["100", "200", "400", "600", "700"],
});

const parentVariants = {
  initial: {
    opacity: 0,
    x: -50,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.8,
      duration: 0.5,
    },
  },
};
const childVariants = {
  initial: {
    opacity: 0,
    x: -20,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

function Hero() {
  const firstSpan = "<span>";
  const lastSpan = "</span>";

  return (
    <div className="relative">
      <div
        className=" relative overflow-hidden lg:max-w-7xl px-5 md:px-15  lg:px-20 lg:mx-auto h-[calc(100vh-80px)] flex   flex-col gap-4 "
        id="home"
      >
        <motion.div
          variants={parentVariants}
          initial="initial"
          animate="animate"
          className={`text-5xl md:text-6xl lg:text-7xl   mt-20 lg:mt-58 flex flex-col   ${ItalicJose.className} `}
        >
          <motion.h1
            variants={childVariants}
            className="text-sky-500 font-bold uppercase w-fit"
          >
            <span>Frontend</span>
          </motion.h1>
          <motion.h1 variants={childVariants} className="pl-5 uppercase w-fit">
            <span>Developer</span>
          </motion.h1>
        </motion.div>
        <p className="text-[16px] md:text-xl leading-6 tracking-wide text-gray-400  sm:w-50 md:w-90 lg:w-130 ">
          {" "}
          Hi! I&apos;m Mohamed also known as Mo. A Frontend Developer with
          hands-on experience through building high-performance, scalable, and
          responsive web solutions.{" "}
        </p>
        <div className="w-100 flex justify-start items-start mt-5">
          <motion.a
            href="/assets/mo_resume2.pdf"
            target="_blank"
            className=" group relative"
          >
            <motion.button
              style={{
                borderRadius: "4px",
              }}
              whileHover={{
                scale: 1.2,
                boxShadow: "1px 3px 5px rgb(14, 165, 233)",
              }}
              className="text-sm tracking-wider text-background font-semibold uppercase cursor-pointer  flex items-center justify-center text-center bg-sky-400  px-6 py-2  "
            >
              Resume
            </motion.button>
          </motion.a>
        </div>
        <div className="flex-1 flex justify-end items-center  mt-20">
          <p className="flex-col flex gap-1 text-lg">
            <span className="text-sky-500 font-semibold ">{firstSpan}</span>
            <span className={` pl-4 text-lg tracking-wider leading-7 `}>
              Proficient in the latest web technologies and <br />
              frameworks, continuously expanding my skill set <br />
              to stay at the forefront of the industry.
            </span>
            <span className="text-sky-500 font-semibold ">{lastSpan}</span>
          </p>
        </div>
        <motion.div className="w-full flex justify-start items-center mb-5 gap-5"></motion.div>
      </div>
    </div>
  );
}

export default Hero;
