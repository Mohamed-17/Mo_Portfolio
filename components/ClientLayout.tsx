"use client";
import React, { useContext, useRef } from "react";
import { AnimatePresence, useScroll, useTransform } from "motion/react";
import PreLoader from "@/components/PreLoader";
import { LoadingContext } from "@/context/LoadingContext";
import Footer from "./Footer";
import Navbar from "./header/Navbar";
import { motion } from "motion/react";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const loadingContext = useContext(LoadingContext);

  if (!loadingContext) {
    throw new Error("LoadingContext not found");
  }
  const refer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: refer,
    offset: ["start start", "end end"],
  });
  const height = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const { isLoading } = loadingContext;
  return (
    <main ref={refer}>
      <AnimatePresence mode="wait">
        {isLoading && <PreLoader />}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {!isLoading && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1,
            }}
            exit={{
              opacity: 0,
            }}
          >
            <motion.div
              className="fixed right-2 lg:right-7 top-[40%]  z-100 bg-sky-400 w-1.5   rounded"
              style={{
                height,
              }}
            ></motion.div>
            <motion.div className="fixed right-2 lg:right-7 h-[100px] top-[40%] bg-black/50 w-1.5   rounded"></motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <Navbar />

      {children}

      <Footer />
    </main>
  );
}
