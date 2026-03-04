import React from "react";

function Footer() {
  return (
    <div className="md:max-w-7xl md:mx-auto px-2 text-center   mt-10 text-white text-lg mb-4">
      <div className="flex flex-col flex-wrap gap-6 ">
        <h2>You Know How To Find Me</h2>

        <a
          href="https://github.com/Mohamed-17"
          target="_blank"
          className="hover:underline"
        >
          built by <span className="text-xl">Mo</span> {"<3"}{" "}
        </a>
      </div>
    </div>
  );
}

export default Footer;
