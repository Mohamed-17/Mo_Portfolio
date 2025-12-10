import React from "react";
import * as motion from "motion/react-client";
import Image from "next/image";

type StackItem = {
  title: string;
  icon?: string;
  image?: string;
};

type SingleStackProps = {
  stack: StackItem[];
  title?: string;
};

const SingleStack: React.FC<SingleStackProps> = ({ stack, title }) => {
  const parentVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const childVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
          ease: "easeIn",
        }}
        className="flex-1  mt-10"
      >
        <span className="text-5xl  tracking-wide uppercase">
          {title ?? "FRONTEND"}
        </span>
      </motion.div>
      <motion.div
        variants={parentVariants}
        initial="hidden"
        whileInView={"show"}
        className="flex flex-wrap gap-10 w-full lg:w-[50%]"
      >
        {stack.map((lang, index) => (
          <motion.div
            variants={childVariants}
            key={index}
            className="flex items-center gap-4 relative"
          >
            <div className="w-10 h-10 flex items-center justify-center relative">
              {lang.image ? (
                <Image
                  src={lang.image}
                  alt={lang.title}
                  fill
                  className="object-contain"
                />
              ) : (
                <span
                  className="w-full h-full flex items-center [&>svg]:w-full [&>svg]:h-full"
                  aria-hidden
                  dangerouslySetInnerHTML={{
                    __html: lang.icon || "",
                  }}
                />
              )}
            </div>
            <span className="text-xl">{lang.title}</span>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default SingleStack;
