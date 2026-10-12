import React from "react";
import { motion } from "motion/react";
import SetuAvatar from "@/assets/images/setuAvatar.jpg";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="w-full bg-[#f8f8f2] py-24 md:py-28 px-6"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Section Heading: 30-48px weight 600 Studio Ink, left-aligned, no kicker */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-semibold text-[#1a1a1a] tracking-[-1.2px] leading-[1.2] text-left">
            About & Perspective
          </h2>
        </div>

        {/* Testimonial Block: Two-column layout at 64px gap */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: square or portrait black-and-white photograph, 12px radius */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 w-full max-w-[420px]"
          >
            <div className="aspect-[4/5] sm:aspect-square rounded-[12px] overflow-hidden bg-[#e5e5dc]">
              <img
                src={SetuAvatar}
                alt="Setulal Chowhan Portrait"
                className="w-full h-full object-cover filter grayscale contrast-105"
              />
            </div>
          </motion.div>

          {/* Right: oversized quotation mark (48px) above a 30px weight 400 quote in Studio Ink */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Oversized opening quote mark: 48px Studio Ink */}
            <span
              className="text-[48px] font-serif leading-none text-[#1a1a1a] select-none"
              aria-hidden="true"
            >
              “
            </span>

            {/* 30px weight 400 quote in Studio Ink */}
            <blockquote className="text-[24px] sm:text-[28px] md:text-[30px] font-normal leading-[1.2] tracking-[-0.75px] text-[#1a1a1a] mt-2">
              Resilient software systems are built through quiet discipline — clean architecture, robust data models, and interfaces that never demand unnecessary attention.
            </blockquote>

            {/* Attribution below at 32px gap: 16px weight 600 name and underlined link */}
            <div className="mt-8 flex items-baseline gap-3">
              <span className="text-[16px] font-semibold tracking-[-0.4px] text-[#1a1a1a]">
                Setulal Chowhan
              </span>
              <span className="text-[14px] text-[#1a1a1a]/60">—</span>
              <a
                href="https://github.com/SetuLalChowhan"
                target="_blank"
                rel="noreferrer"
                className="text-[14px] font-medium text-[#1a1a1a] underline underline-offset-4 hover:opacity-75 transition-opacity"
              >
                Software Engineer at Softvence
              </a>
            </div>

            {/* Editorial Bio Copy */}
            <div className="mt-8 space-y-4 text-[16px] font-normal leading-[1.5] tracking-[-0.4px] text-[#1a1a1a]/80">
              <p>
                My focus centers on full-lifecycle web engineering. From structuring high-throughput backend services and PostgreSQL/MongoDB schemas with Node.js and NestJS, to shaping fluid, accessible frontend architectures using TypeScript, Next.js, and React.
              </p>
              <p>
                I prioritize maintainable patterns, type safety, deterministic state, and fast runtime execution.
              </p>
            </div>

            {/* Neutral Card White metric blocks: 12px radius, no shadows */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-[#ffffff] rounded-[12px] p-6 text-[#1a1a1a]">
                <div className="text-[32px] font-bold tracking-tight leading-none mb-1">
                  30+
                </div>
                <div className="text-[14px] tracking-[-0.35px] text-[#1a1a1a]/60">
                  Projects Completed
                </div>
              </div>
              <div className="bg-[#ffffff] rounded-[12px] p-6 text-[#1a1a1a]">
                <div className="text-[32px] font-bold tracking-tight leading-none mb-1">
                  2+
                </div>
                <div className="text-[14px] tracking-[-0.35px] text-[#1a1a1a]/60">
                  Years Production Exp.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
