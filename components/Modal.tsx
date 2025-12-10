"use client";
import { useEffect, useRef } from "react";
import { motion, cubicBezier } from "motion/react";
import Image from "next/image";
import { Project } from "@/types/types";
function Modal({
  modal,
  projects,
}: {
  modal: { active: boolean; index: number };
  projects: Project[];
}) {
  const { active, index } = modal;
  const modalRef = useRef<HTMLDivElement | null>(null);
  const cursor = useRef<HTMLDivElement | null>(null);
  const cursorLabel = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const moveModal = (e: MouseEvent) => {
      if (modalRef.current) {
        const { clientX, clientY } = e;

        if (cursor.current) {
          cursor.current.style.left = clientX + "px";
          cursor.current.style.top = clientY + "px";
        }

        if (cursorLabel.current) {
          cursorLabel.current.style.left = clientX + "px";
          cursorLabel.current.style.top = clientY + "px";
        }

        modalRef.current.style.left = clientX + "px";
        modalRef.current.style.top = clientY + "px";
      }
    };

    window.addEventListener("mousemove", moveModal);
    return () => window.removeEventListener("mousemove", moveModal);
  }, []);

  const scaleAnimation = {
    initial: { scale: 0, x: "-50%", y: "-50%" },
    enter: {
      scale: 1,
      x: "-50%",
      y: "-50%",
      transition: { duration: 0.4, ease: cubicBezier(0.76, 0, 0.24, 1) },
    },
    closed: {
      scale: 0,
      x: "-50%",
      y: "-50%",
      transition: { duration: 0.4, ease: cubicBezier(0.32, 0, 0.67, 0) },
    },
  };

  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: coarse)").matches;
  if (isMobile) return null;
  return (
    <>
      <motion.div
        ref={modalRef}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        className="h-[350px] w-[400px] overflow-hidden fixed pointer-events-none flex items-center justify-center z-50"
        style={{ left: 0, top: 0 }}
      >
        <div
          style={{
            top: index * -100 + "%",
            transition: "top 0.5s cubic-bezier(0.76, 0, 0.24, 1)",
          }}
          className="absolute w-full h-full top-0 left-0"
        >
          {projects.map((project, idx) => {
            const { src, color, id } = project;
            return (
              <div
                className="absolute w-full  h-[350px] flex items-center justify-center"
                style={{
                  backgroundColor: color,
                  top: idx * 100 + "%",
                  borderRadius: "10px",
                }}
                key={`modal_${idx}`}
              >
                <div
                  className={`relative w-[300px] ${id !== 4 ? "h-50" : "h-70"}`}
                >
                  <Image
                    src={src}
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="object-contain"
                    alt={project.title}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>

      <motion.div
        ref={cursor}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        className="w-20 h-20 rounded-full bg-blue-500 fixed pointer-events-none z-60"
        style={{
          left: 0,
          top: 0,
          transform: "translate(-50%, -50%)",
        }}
      />

      <motion.div
        ref={cursorLabel}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        className="fixed pointer-events-none z-70 text-white font-medium text-sm"
        style={{
          left: 0,
          top: 0,
          transform: "translate(-50%, -50%)",
        }}
      >
        View
      </motion.div>
    </>
  );
}

export default Modal;
