"use client";
import React, { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  opacity: number;
  targetOpacity: number;
  opacitySpeed: number;
}

function Stars() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let stars: Star[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      const starCount = 100;
      stars = [];
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5,
          vx: (Math.random() - 0.5) * 0.5, // Horizontal drift
          vy: Math.random() * 0.5 + 0.1, // Vertical fall
          opacity: Math.random(),
          targetOpacity: Math.random(),
          opacitySpeed: 0.01 + Math.random() * 0.02,
        });
      }
    };

    const updateStars = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        star.x += star.vx;
        star.y += star.vy;

        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
        if (star.x > canvas.width) star.x = 0;
        if (star.x < 0) star.x = canvas.width;

        if (star.opacity > star.targetOpacity) {
          star.opacity -= star.opacitySpeed;
          if (star.opacity <= star.targetOpacity) {
            star.targetOpacity = Math.random();
          }
        } else {
          star.opacity += star.opacitySpeed;
          if (star.opacity >= star.targetOpacity) {
            star.targetOpacity = Math.random();
          }
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(updateStars);
    };

    resizeCanvas();
    updateStars();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-1"
      style={{ width: "100%", height: "100%" }}
    />
  );
}

export default Stars;
