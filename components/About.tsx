"use client";
import React, { useEffect, useRef } from "react";
import { AnimatePresence, motion, useInView } from "motion/react";
import Text from "./Text";
const largeText = "i can't stop configuring my code editor";
const aboutDesign =
  "I believe in a user centered design approach, ensuring that every project I work on is tailored to meet the specific needs of its users. ";
function About() {
  const ref = useRef(null);
  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: true });
  const aboutMe = "This is me.";
  const parentVaraints = {
    hidden: {
      y: 20,
    },
    visible: {
      y: 0,

      transition: {
        staggerChildren: 0.3,
      },
    },
  };
  const childVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
    },
  };
  return (
    <section
      className="min-h-screen mt-20 mb-5 md:mt-40 lg:max-w-7xl px-5 md:px-15 lg:px-20 lg:mx-auto "
      id="about"
    >
      <main className="flex flex-col justify-center w-full">
        <div className="lg:w-250 " ref={ref}>
          <Text value={aboutDesign} />
        </div>
        <div className="mt-15">
          <div className="text-md text-gray-400">
            {aboutMe.split(" ").map((word, index) => (
              <motion.span
                initial={{
                  opacity: 0,
                  y: 20,
                  filter: "blur(4px)",
                }}
                whileInView={{
                  opacity: 0.6,
                  y: 0,
                  filter: "blur(0px)",
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  duration: 0.3,
                  delay: 0.3 * index,
                  ease: "easeInOut",
                }}
                key={index}
                className="inline-block mr-1 "
              >
                {word}
              </motion.span>
            ))}
          </div>
          <motion.div
            initial={{
              width: 0,
            }}
            whileInView={{
              width: "100%",
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
            className="w-full bg-white/70 h-0.5 mt-3"
          ></motion.div>
        </div>
        <motion.div
          variants={parentVaraints}
          initial="hidden"
          whileInView={"visible"}
          className="flex flex-col md:flex-row  mt-10  gap-10"
        >
          <motion.div variants={childVariants} className="flex-1 space-y-10">
            <h2 className="text-5xl ">
              I&apos;m <span className="text-sky-500 ">Mohamed</span>
            </h2>
            <p className="text-[22px] opacity-80">
              Web developer with a relentless drive for excellence, skilled in
              creating and maintaining functional and responsive web
              applications and websites.
            </p>
          </motion.div>
          <motion.div variants={childVariants} className="flex-2  ">
            <div className="space-y-5 text-[20px] opacity-80 w-full md:w-[70%] ">
              <p>
                {" "}
                A 23 year old frontend web developer , Dedicated to turning
                ideas into creative solutions. I specialize in creating seamless
                and intuitive user experiences.
              </p>
              <p>
                My approach focuses on creating scalable, high-performing
                solutions tailored to both user needs and business objectives.
                By prioritizing performance, accessibility, and responsiveness,
                I strive to deliver experiences that not only engage users but
                also drive tangible results.
              </p>
            </div>
          </motion.div>
        </motion.div>
        <div className="mt-25 text-center">
          <motion.div className="text-center flex flex-wrap justify-center">
            {largeText.split(" ").map((word, index) => (
              <motion.span
                key={index}
                initial={{
                  opacity: 0,
                  x: -20,
                  filter: "blur(4px)",
                }}
                animate={{
                  opacity: isInView ? 1 : 0,
                  x: isInView ? 0 : -20,
                  filter: isInView ? "blur(0px)" : "blur(4px)",
                }}
                transition={{
                  delay: 0.1 * index,
                  duration: 0.3,
                }}
                ref={textRef}
                className="text-xl mr-2 md:text-4xl text-cyan-400 uppercase"
              >
                {word === " " ? "\u00A0" : word}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </main>
    </section>
  );
}

export default About;
