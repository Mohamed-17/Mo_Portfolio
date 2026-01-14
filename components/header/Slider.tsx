"use client";
import * as motion from "motion/react-client";
import { menuVariants, scale, slide } from "@/variants/vars";
import Curve from "./Curve";
import { ArrowUp } from "lucide-react";
const navItems = [
  {
    title: "Home",
    to: "home",
    href: "/",
    color: "#603538",
  },

  {
    title: "Projects",
    to: "work",
    href: "/work",
    color: "#5046d1",
  },

  {
    title: "About Me",
    to: "about",
    href: "/about",
    color: "#c78a27",
  },

  {
    title: "Contact",
    to: "contact",
    href: "/contact",
    color: "#1e546b",
  },
];
const social = [
  {
    title: "Github",
    to: "https://github.com/Mohamed-17",
  },
  {
    title: "Linkedin",
    to: "https://www.linkedin.com/in/mohamed-ashraf-68b36828a",
  },
  {
    title: "Resume",
    to: "/assets/mo_resume.pdf",
  },
];
function Slider({
  isActive,
  setIsActive,
  refer,
}: {
  isActive: boolean;
  setIsActive: (value: boolean) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  refer: any;
}) {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  return (
    <>
      <motion.div
        ref={refer}
        variants={menuVariants as any}
        initial="init"
        animate="enter"
        exit={"exit"}
        className="min-h-screen menu  z-1001 bg-white text-white w-[70%] md:w-110  fixed top-0 right-0"
      >
        <div className="box-border h-screen md:pr-5 pl-2 md:pb-5 text-black items-start flex flex-col ">
          <div className="flex flex-2  flex-col md:ml-5  lg:flex-row  md:p-10 items-center   md:gap-20 gap-10 mt-15 lg:mt-20">
            <div className="flex flex-col gap-5  md:mt-10">
              <h2 className="uppercase md:mb-5 mb-2 text-lg md:text-xl">
                Menu
              </h2>
              <ul className="md:space-y-5 space-y-2">
                {navItems.map((item, index) => (
                  <motion.li
                    key={index}
                    custom={index}
                    variants={slide as any}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                  >
                    <motion.div
                      variants={scale}
                      animate={isActive ? "open" : "closed"}
                      className={""}
                    />

                    <a
                      href={`#${item.to}`}
                      className="text-[1.2rem] group  flex items-center gap-3"
                      onClick={() => setIsActive(false)}
                    >
                      <motion.span
                        className={`w-4 h-4  group-hover:h-7  group-hover:w-7 flex items-center justify-center rounded-full `}
                        style={{
                          background: item.color,
                        }}
                        layout="size"
                      >
                        <span className="hidden group-hover:block ">
                          <ArrowUp size={20} className="rotate-35 text-white" />
                        </span>
                      </motion.span>
                      {item.title}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-5 ">
              <h2 className="uppercase md:mb-5 mb-1 text-lg md:text-xl">
                Social
              </h2>
              <ul className="md:space-y-5 space-y-2">
                {social.map((item, index) => (
                  <motion.li
                    key={index}
                    custom={index}
                    variants={slide as any}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                  >
                    <motion.a
                      variants={scale}
                      animate={isActive ? "open" : "closed"}
                      className={""}
                    />

                    <a
                      href={item.to}
                      target="_blank"
                      className="text-[1.2rem] hover:underline "
                      onClick={() => setIsActive(false)}
                    >
                      {item.title}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col flex-1 w-full mt-7 justify-end t md:p-10 gap-5 items-start mb-10 text-lg ">
            <div>
              <h4 className="uppercase  text-lg md:text-[1.2rem]">
                Get in touch{" "}
              </h4>
            </div>
            <div>
              <a href="mailto:muhamed77700m@gmail.com" className="underline">
                muhamed77700m@gmail.com
              </a>
            </div>
          </div>
        </div>
        <Curve />
      </motion.div>
    </>
  );
}

export default Slider;
