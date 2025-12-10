import React from "react";
import { GiSpinningRibbons } from "react-icons/gi";
import SingleStack from "./SingleStack";
import { backendStack, frontStack, studyStack, toolsStack } from "@/data/data";
function Stack() {
  const stacks = [
    {
      title: "Frontend",
      stack: frontStack,
    },
    {
      title: "Backend",
      stack: backendStack,
    },
    {
      title: "Tools",
      stack: toolsStack,
    },
    {
      title: "Studying",
      stack: studyStack,
    },
  ];
  return (
    <section className="min-h-screen mt-20 mb-5 md:mt-40 lg:max-w-7xl px-5 md:px-15 lg:px-20 lg:mx-auto ">
      <div className="flex items-center gap-3 ">
        <GiSpinningRibbons size={25} className="animate-spin duration-700" />
        <span className="uppercase text-2xl">My Stack</span>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 mt-10 flex-wrap ">
        {stacks.map((stack, index) => (
          <SingleStack key={index} stack={stack.stack} title={stack.title} />
        ))}
      </div>
    </section>
  );
}

export default Stack;
