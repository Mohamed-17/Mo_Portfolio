"use client";
import React, { useContext } from "react";
import dynamic from "next/dynamic";
import { LoadingContext } from "@/context/LoadingContext";
import Hero from "@/components/Hero";
import Cursor from "@/components/Cursor";
import Stars from "@/components/Stars";
const About = dynamic(() => import("@/components/About"));
const RecentProjects = dynamic(() => import("@/components/RecentProjects"));
const Stack = dynamic(() => import("@/components/Stack"));

function HomePage() {
  const loadingContext = useContext(LoadingContext);

  if (!loadingContext) {
    throw new Error("Error to find context");
  }
  const { isLoading } = loadingContext;

  return (
    <main className=" text-white bg-white">
      {!isLoading && (
        <>
          <div className="hidden md:block">
            <Cursor />
          </div>
          <section className="bg-background  overflow-hidden">
            <Stars />
            <Hero />
            <RecentProjects />
            <Stack />
            <About />
          </section>
        </>
      )}
    </main>
  );
}

export default HomePage;
