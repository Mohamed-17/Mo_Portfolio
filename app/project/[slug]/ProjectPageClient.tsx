"use client";
import { useContext } from "react";
import Cursor from "@/components/Cursor";
import { LoadingContext } from "@/context/LoadingContext";
import Image from "next/image";
import { ArrowLeft, Dot, ExternalLink } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import Link from "next/link";
import Stars from "@/components/Stars";

type Project = {
  slug: string;
  link: string;
  year: string;
  image: string;
  tech: string[];
  desc: string;
  gitLink: string;
  features: string[];
};
const parentVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(4px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      staggerChildren: 0.5,
    },
  },
};
const childVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(4px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
};
export default function ProjectPageClient({ project }: { project: Project }) {
  const loadingContext = useContext(LoadingContext);
  if (!loadingContext) {
    throw new Error("LoadingContext not found");
  }
  const { isLoading, setIsLoading } = loadingContext;
  const router = useRouter();
  function handleBackRoute() {
    setIsLoading(true);
    router.back();
  }
  console.log(project);
  return (
    <>
      {!isLoading && (
        <>
          <div className="hidden md:block">
            <Cursor />
          </div>

          <Stars />
          <div className="absolute top-11 left-[10%] lg:left-[20%]">
            <button
              className="text-white flex items-center gap-2 cursor-pointer z-100"
              onClick={() => handleBackRoute()}
            >
              <ArrowLeft />
              <span>Back</span>
            </button>
          </div>
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: isLoading ? 0 : 1,
              y: isLoading ? 20 : 0,
            }}
            transition={{
              duration: 0.3,
              delay: 1,
            }}
            className="relative  lg:h-screen md:max-w-7xl md:mx-auto mt-20 z-1000"
          >
            <div className="px-10 md:px-20">
              <motion.div className="flex  lg:gap-8 relative">
                <h1 className="uppercase text-3xl lg:text-6xl tracking-wide italic text-white">
                  {project.slug}
                </h1>
                <div className="flex ml-5 gap-5">
                  <button className="text-white text-lg md:text-2xl relative w-15 ">
                    <Link
                      href={project.gitLink}
                      className="absolute -top-5 left-0 inline-block hover:text-sky-500"
                    >
                      {"</>"}
                    </Link>
                  </button>
                  <button className="text-white text-lg md:text-2xl relative w-15 ">
                    <Link
                      href={project.link}
                      target="_blank"
                      className="absolute -top-5  -left-8 inline-block hover:text-sky-500"
                    >
                      <ExternalLink size={25} />
                    </Link>
                  </button>
                </div>
              </motion.div>
              <motion.div
                className="mt-10 flex flex-col gap-10"
                variants={parentVariants}
                initial={"hidden"}
                animate={"show"}
              >
                <motion.div
                  variants={childVariants}
                  className="flex flex-col gap-2 text-white"
                >
                  <h3 className="text-white/80 ">Year</h3>
                  <span className="text-lg font-semibold">{project.year}</span>
                </motion.div>
                <motion.div
                  variants={childVariants}
                  className="flex flex-col gap-2 text-white"
                >
                  <h3 className="text-white/80">Tech ∧ Technique</h3>
                  <span className="text-lg">{project.tech.join(", ")}</span>
                </motion.div>
                <motion.div
                  variants={childVariants}
                  className="flex flex-col gap-2 text-white"
                >
                  <h3 className="text-white/80">Description</h3>
                  <span className="text-lg">{project.desc}</span>
                </motion.div>
                <motion.div
                  variants={childVariants}
                  className="flex flex-col gap-2 text-white"
                >
                  <h3 className="text-white/80">Key Features</h3>
                  <ul className="flex flex-col gap-2 mt-3">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex  items-center text-lg">
                        {" "}
                        <span>
                          <Dot />
                        </span>{" "}
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
          <motion.div className="px-10   max-w-7xl mx-auto mb-20">
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                filter: "filter(10px)",
              }}
              whileInView={{
                opacity: 1,
                filter: "filter(0px)",
                scale: 1,
              }}
              transition={{
                duration: 0.5,
              }}
              className="relative w-full group mt-10 h-50 md:h-150 lg:h-200 lg:mt-0"
            >
              <Image
                src={project.image}
                alt={project.slug}
                className="object-cover rounded "
                fill
              />
              <a
                href={project.link}
                target="_blank"
                className="absolute top-5 w-15 cursor-pointer justify-center items-center h-15 right-5 bg-gray-800/90 hidden group-hover:flex"
              >
                <ExternalLink color="#fff" />
              </a>
            </motion.div>
          </motion.div>
        </>
      )}
    </>
  );
}
