import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import p1 from "@/assets/images/p1.png";
import p3 from "@/assets/images/p3.png";
import p4 from "@/assets/images/p4.png";
import p5 from "@/assets/images/lob.jpg";
import p6 from "@/assets/images/cv.jpg";
import p7 from "@/assets/images/duke.jpg";
import p8 from "@/assets/images/malik.jpg";
import p9 from "@/assets/images/micka.jpg";
import anna from "@/assets/images/anna.jpg";
import stakd from "@/assets/images/stakd.jpg";
import aviation from "@/assets/images/aviation.jpg";
import teleImage from "@/assets/images/teleImage.jpg";

const allProjects = [
  {
    title: "TeleHealth Consultation",
    collab: "Full-Stack System • Next.js & NestJS",
    image: teleImage,
    live: "https://telecommunication-sy4h.vercel.app/",
    featured: true,
  },
  {
    title: "LobFile Cloud Storage",
    collab: "File Architecture • React & Laravel",
    image: p5,
    live: "https://lobfile.com/",
    featured: true,
  },
  {
    title: "Stakd Creative Platform",
    collab: "Brand Approvals • PostgreSQL & Prisma",
    image: stakd,
    live: "https://getstakd.co/",
    featured: true,
  },
  {
    title: "Aviation Insider",
    collab: "Pilot Assessment • React & Modern UI",
    image: aviation,
    live: "https://aviationinsider.com/",
    featured: true,
  },
  {
    title: "Dubai Car Rental",
    collab: "Booking Platform • Node.js & React",
    image: p3,
    live: "https://hirecardrive.com/",
    featured: false,
  },
  {
    title: "Compound Agency",
    collab: "Editorial Website • React & Laravel",
    image: p8,
    live: "https://compoundmmc.com/",
    featured: false,
  },
  {
    title: "Construction Calculator",
    collab: "Estimation Engine • Modern Web",
    image: p9,
    live: "https://micka231.netlify.app/",
    featured: false,
  },
  {
    title: "Duke Auto Repair",
    collab: "Service Booking • SQL & React",
    image: p7,
    live: "https://dukeautorepair.com/",
    featured: false,
  },
  {
    title: "Hobby Nexus Commerce",
    collab: "E-Commerce & Bidding • Stripe & PostgreSQL",
    image: p1,
    live: "https://thehobbynexus.com/",
    featured: false,
  },
  {
    title: "Proxima Ventures",
    collab: "Venture Showcase • React & Motion",
    image: p4,
    live: "https://proxima21.netlify.app/",
    featured: false,
  },
  {
    title: "AnnaNewa Platform",
    collab: "Web Application • Next.js & MongoDB",
    image: anna,
    live: "https://ananewa.vercel.app/",
    featured: false,
  },
  {
    title: "Cv Maker Engine",
    collab: "Document Builder • Node.js & React",
    image: p6,
    live: "https://procv2.netlify.app/app",
    featured: false,
  },
];

const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll
    ? allProjects
    : allProjects.filter((p) => p.featured);

  return (
    <section
      id="projects"
      className="w-full bg-[#f8f8f2] py-24 md:py-28 px-6"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Section Heading: 30-48px weight 600 Studio Ink, left-aligned, no kicker, 32-48px gap below */}
        <div className="mb-10 md:mb-12">
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-semibold text-[#1a1a1a] tracking-[-1.2px] leading-[1.2] text-left">
            Collaborations & Projects
          </h2>
        </div>

        {/* 2-Column Grid at 32px gap, full-bleed image card, 12px radius, no border, no shadow */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedProjects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative block w-full aspect-[16/10] sm:aspect-[16/9] rounded-[12px] overflow-hidden bg-[#e5e5dc] focus:outline-none"
            >
              {/* Full bleed image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Soft dark vignette gradient on top/left to ensure white text clarity */}
              <div
                className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/65 via-[#1a1a1a]/20 to-transparent pointer-events-none"
                aria-hidden="true"
              />

              {/* White text overlaid top-left: 20px weight 600 (name), 14px weight 400 (collab credit) */}
              <div className="absolute top-6 left-6 right-6 flex items-start justify-between pointer-events-none z-10">
                <div>
                  <h3 className="text-[20px] font-semibold text-[#ffffff] tracking-[-0.5px] leading-[1.4]">
                    {project.title}
                  </h3>
                  <p className="text-[14px] font-normal text-[#ffffff]/90 tracking-[-0.35px] leading-[1.43] mt-1">
                    {project.collab}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#1a1a1a]/40 backdrop-blur-sm flex items-center justify-center text-[#ffffff] opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Dark Filled Button: #1a1a1a bg, #ffffff text, 16px weight 500, padding 16px 24px, 8px radius, centered solitary action */}
        <div className="mt-14 md:mt-16 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-[#1a1a1a] text-[#ffffff] text-[16px] font-medium tracking-[-0.4px] px-6 py-4 rounded-[8px] hover:opacity-90 active:opacity-95 transition-opacity"
          >
            {showAll ? "Show Featured Only" : "Explore All Collaborations"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
