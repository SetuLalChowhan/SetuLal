import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#f8f8f2] pt-24 md:pt-28 pb-16 px-6 border-t border-[#1a1a1a]">
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-baseline justify-between gap-6">
        <p className="text-[14px] font-normal tracking-[-0.35px] text-[#1a1a1a]">
          © {new Date().getFullYear()} Setulal Chowhan. All rights reserved.
        </p>

        <div className="flex items-center gap-8">
          <a
            href="#hero"
            className="text-[14px] font-normal tracking-[-0.35px] text-[#1a1a1a] hover:underline underline-offset-4"
          >
            Back to Top
          </a>
          <a
            href="https://github.com/SetuLalChowhan"
            target="_blank"
            rel="noreferrer"
            className="text-[14px] font-normal tracking-[-0.35px] text-[#1a1a1a] hover:underline underline-offset-4"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/setulal-chowhan/"
            target="_blank"
            rel="noreferrer"
            className="text-[14px] font-normal tracking-[-0.35px] text-[#1a1a1a] hover:underline underline-offset-4"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
