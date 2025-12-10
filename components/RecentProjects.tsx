import React from "react";
import { motion } from "motion/react";
import SingleProject from "./SingleProject";
import Modal from "./Modal";
import { projects } from "@/data/data";
import { GiSpinningRibbons } from "react-icons/gi";
const parentVariants = {
  init: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.5,
    },
  },
};
export const childrenVariants = {
  init: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

function RecentProjects() {
  const [modal, setModal] = React.useState({ active: false, index: 0 });

  return (
    <section
      className="mt-20 md:mt-40 lg:max-w-7xl px-5 md:px-15 lg:px-20 lg:mx-auto relative"
      id="work"
    >
      <div className="mb-5 md:mb-10">
        <h2 className="text-2xl text-secondary flex  w-fit items-center gap-3 font-semibold">
          <GiSpinningRibbons size={25} className="animate-spin text-white/80" />
          <span className="uppercase text-2xl">My Latest Projects</span>
        </h2>
      </div>
      <motion.div
        viewport={{
          once: true,
        }}
        variants={parentVariants}
        initial="init"
        whileInView="show"
      >
        <div className="flex flex-col gap-5">
          {projects.map((project, index) => (
            <SingleProject
              key={index}
              skills={project.skills}
              index={index}
              title={project.title}
              setModal={setModal}
              link={project.link}
              img={project.src2 || project.src}
              job={project.job}
              to={project.to}
            />
          ))}
        </div>
      </motion.div>
      <Modal modal={modal} projects={projects} />
    </section>
  );
}

export default RecentProjects;
