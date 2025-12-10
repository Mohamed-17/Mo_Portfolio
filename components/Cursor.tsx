/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

function Cursor() {
  const y = useMotionValue(-9999);
  const x = useMotionValue(-9999);
  const sy = useSpring(y, { stiffness: 300, damping: 30 });
  const sx = useSpring(x, { stiffness: 300, damping: 30 });

  const [onMenu, setOnMenu] = useState(false);
  const [onText, setOnText] = useState(false);

  const handleCursor = (e: MouseEvent) => {
    const { clientY, clientX } = e;
    y.set(clientY);
    x.set(clientX);

    const target = e.target as HTMLElement;
    const menuElement = document.querySelector(".menu");

    if (menuElement && menuElement.contains(target)) {
      setOnMenu(true);
      setOnText(false);
    } else if (
      target.tagName === "H1" ||
      target.tagName === "H2" ||
      target.tagName === "P" ||
      target.tagName === "A" ||
      target.tagName === "SPAN" ||
      target.tagName === "BUTTON" ||
      target.tagName === "svg"
    ) {
      setOnText(true);
      setOnMenu(false);
    } else {
      setOnMenu(false);
      setOnText(false);
    }
  };
  useEffect(() => {
    window.addEventListener("mousemove", handleCursor, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleCursor);
    };
  }, [x, y]);

  const backgroundColor =  "white";
  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: coarse)").matches;
  if (isMobile) return null;
  return (
    <motion.div
      className="hidden lg:flex justify-center items-center cursor"
      style={{
        position: "fixed",
        mixBlendMode: onMenu ? "normal" : "difference",
        left: 0,
        top: 0,
        x: sx,
        y: sy,
        translateX: "-50%",
        translateY: "-50%",
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        zIndex: 10000,
        userSelect: "none",
        willChange: "transform",
        pointerEvents: "none",
      }}
      animate={{
        width: onMenu ? "60px" : onText ? "120px" : "30px",
        height: onMenu ? "60px" : onText ? "120px" : "30px",
        opacity: onMenu ? 0.4 : 1,
        backgroundColor,
        boxShadow: onMenu
          ? "0 0 8px rgba(0, 0, 0, 0.4)"
          : "0 0 6px rgba(255, 255, 255, 0.3)",
      }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 20,
      }}
    />
  );
}

export default Cursor;
