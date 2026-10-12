import React from "react";
import { motion } from "motion/react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="w-full bg-[#f8f8f2] pt-28 md:pt-36 pb-20 md:pb-28 px-6"
    >
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-[1100px]"
        >
          {/* Display Headline: 88-96px, weight 700, line-height 1.00, letter-spacing -2.4px, in Studio Ink */}
          <h1 className="text-[44px] sm:text-[64px] md:text-[84px] lg:text-[96px] font-bold text-[#1a1a1a] leading-[1.00] tracking-[-2.4px] text-left">
            Software engineer architecting scalable systems and refined web experiences.
          </h1>

          {/* Subtitle: 20px, weight 400, Studio Ink at 60% opacity, 32px gap above, left-aligned */}
          <p className="mt-8 text-[18px] sm:text-[20px] font-normal leading-[1.4] tracking-[-0.5px] text-[#1a1a1a]/60 max-w-3xl text-left">
            Hi, I'm Setulal Chowhan — specialized in Node.js, NestJS, TypeScript, Next.js, and React. Dedicated to robust backend systems, clean architecture, and modern user-focused applications.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
