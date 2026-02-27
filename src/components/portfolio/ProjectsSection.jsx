import React from "react";
import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";

import p1 from "@/assets/images/p1.png";
import p2 from "@/assets/images/p2.png";
import p3 from "@/assets/images/p3.png";
import p4 from "@/assets/images/p4.png";
import p5 from "@/assets/images/lob.jpg";
import p6 from "@/assets/images/cv.jpg";
import p7 from "@/assets/images/duke.jpg";
import p8 from "@/assets/images/malik.jpg";
import anna from "@/assets/images/anna.jpg";

const projects = [
  {
    title: "LobFile File Management System",
    description:
      "A comprehensive file-management system that lets you upload, organize, and manage files efficiently, with secure storage and easy retrieval",
    image: p5,
    tags: ["React", "Laravel", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://lobfile.com/",
    featured: true,
  },
  {
    title: "AnnaNewa",
    description:
      "A modern web application built with Next.js and TypeScript, featuring a robust backend with Node.js and MongoDB for high performance and scalability.",
    image: anna,
    tags: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
    github: "https://github.com",
    live: "https://ananewa.vercel.app/",
    featured: true,
  },
  {
    title: "Cv Maker",
    description:
      "A full-stack CV builder built with React, Node js, featuring user authentication, customizable resume templates, real-time editing, PDF/Doc export.",
    image: p6,
    tags: ["React", "Node js", "MongoDB", "Tailwind CSS"],
    github: "https://procv2.netlify.app/app",
    live: "https://procv2.netlify.app/app",
    featured: true,
  },
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform built with React, Laravel, and PostgreSQL, featuring user authentication, payment integration, real-time bidding, standard purchasing, and an admin dashboard for product management.",
    image: p1,
    tags: ["React", "Laravel", "Stripe", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://thehobbynexus.com/",
    featured: true,
  },
  {
    title: "Garage Service Platform",
    description:
      "An online garage service platform where users can explore garage services, book appointments, and make payments easily. Built with React.js, Laravel, and SQL.",
    image: p7,
    tags: ["React.js", "Laravel", "SQL", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://dukeautorepair.com/",
    featured: true,
  },
  {
    title: "Dubai Car Rental Platform",
    description:
      "A car rental platform for Dubai where users can browse available cars and directly contact the seller via WhatsApp for bookings.",
    image: p3,
    tags: ["React", "Node.js", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://hirecardrive.com/",
    featured: false,
  },
  {
    title: "Proxima Ventures Website",
    description:
      "A modern company website for Proxima Ventures, dedicated to showcasing innovative business ideas with strong market potential. Built with React and Framer Motion, featuring smooth animations and a fully responsive design.",
    image: p4,
    tags: ["React", "Tailwind CSS", "Laravel"],
    github: "https://github.com",
    live: "https://proxima21.netlify.app/",
    featured: false,
  },
  {
    title: "Compound Website",
    description:
      "An agency website where users can explore company services and read blogs. Built with React, Laravel, and Tailwind CSS.",
    image: p8,
    tags: ["React", "Tailwind CSS", "Laravel"],
    github: "https://compoundmmc.com/",
    live: "https://compoundmmc.com/",
    featured: false,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Selected Works</h2>
          <div className="w-16 h-1 bg-emerald-500 rounded-full mb-6"></div>
          <p className="text-xl text-neutral-400 max-w-2xl">
            A selection of my recent projects, showcasing my expertise in
            frontend development and modern web technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden bg-neutral-900 border border-white/5"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <div className="absolute inset-0 bg-transparent group-hover:bg-neutral-900/40 z-10 transition-colors duration-500"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top filter grayscale-0 group-hover:grayscale scale-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
                />
              </div>

              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-neutral-400 hover:text-white transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="text-neutral-400 hover:text-white transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <p className="text-neutral-400 mb-6 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-neutral-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
