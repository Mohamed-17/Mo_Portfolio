"use client";
import { AnimatePresence } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import Slider from "./Slider";
import { motion } from "motion/react";

function Menu({
  isActive,
  setIsActive,
}: {
  isActive: boolean;
  setIsActive: (value: boolean) => void;
}) {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const menu = menuRef.current;
      const button = buttonRef.current;

      if (
        menu &&
        button &&
        !menu.contains(e.target as Node) &&
        !button.contains(e.target as Node)
      ) {
        setIsActive(false);
      }
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="relative"
      >
        <button
          ref={buttonRef}
          onClick={() => setIsActive(!isActive)}
          className="fixed top-5 right-8 z-10002 button rounded-full w-15 h-15 flex justify-center items-center cursor-pointer"
        >
          <div
            className={`burger  z-1000 ${
              isActive && "burgerActive"
            } cursor-pointer`}
          ></div>
        </button>
      </motion.div>

      <AnimatePresence mode="wait">
        {isActive && (
          <Slider
            isActive={isActive}
            setIsActive={setIsActive}
            refer={menuRef}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default Menu;
