import React from "react";
import * as motion from "motion/react-client";
function Button({ children }: { children: React.ReactNode }) {
  return (
    <a href="">
      <motion.button className="text-sm tracking-wider text-background font-semibold uppercase cursor-pointer  flex items-center justify-center text-center bg-sky-400 rounded px-6 py-2  ">
        {children}
      </motion.button>
    </a>
  );
}

export default Button;
