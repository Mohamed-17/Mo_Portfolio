"use client";
import React, { useContext, useState } from "react";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import { LoadingContext } from "@/context/LoadingContext";
import dynamic from "next/dynamic";

const DynamicMenu = dynamic(() => import("./Menu"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const loadingContext = useContext(LoadingContext);
  if (!loadingContext) throw new Error("There's no context");
  const { isLoading } = loadingContext;

  return (
    <>
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{
              opacity: 0,
              x: -100,
            }}
            animate={{
              opacity: "40%",
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: -100,
            }}
            transition={{
              duration: 0.3,
              ease: "easeIn",
            }}
            className="fixed inset-0 bg-black opacity-50 z-10 "
          ></motion.div>
        )}
      </AnimatePresence>

      {!isLoading && (
        <header className="relative h-20 ">
          <motion.div className="flex relative w-full justify-between items-center px-10">
            <DynamicMenu isActive={isActive} setIsActive={setIsActive} />
          </motion.div>
        </header>
      )}
    </>
  );
}

export default Navbar;
