import React from "react";
import { motion } from "motion/react";

const experiences = [
  {
    role: "Software Engineer",
    company: "Softvence Agency",
    location: "Medona Tower, Mohakhali, Dhaka",
    period: "Nov 2024 — Present",
    type: "Full-time",
    description:
      "Engineering full-stack web applications, scalable backend services, and high-performance user interfaces using Node.js, TypeScript, Next.js, and React.",
    technologies: ["Node.js", "NestJS", "TypeScript", "Next.js", "React", "PostgreSQL", "MongoDB"],
  },
  {
    role: "Junior Software Engineer",
    company: "QuilCraft",
    location: "Remote",
    period: "Dec 2023 — Nov 2024",
    type: "Part-time",
    description:
      "Developed web applications, responsive modular components, and backend API integration workflows with React, TypeScript, and Node.js.",
    technologies: ["React.js", "TypeScript", "Node.js", "REST APIs", "Tailwind CSS"],
  },
];

const education = [
  {
    degree: "Master of Science in Computer Science & Engineering",
    school: "Jahangirnagar University",
    location: "Savar, Dhaka, Bangladesh",
    year: "2023 — 2024",
    description:
      "Advanced research methodologies in web application scalability, distributed software architectures, and algorithmic systems.",
  },
  {
    degree: "Bachelor of Science in Computer Science & Engineering",
    school: "University of Information Technology and Sciences (UITS)",
    location: "Dhaka, Bangladesh",
    year: "2018 — 2022",
    description:
      "Software engineering foundations, database design, data structures, and student leadership as Senior Executive of UITS Computer Club.",
  },
];

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="w-full bg-[#f8f8f2] py-24 md:py-28 px-6"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Section Heading: 30-48px weight 600 Studio Ink, left-aligned, no kicker */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-semibold text-[#1a1a1a] tracking-[-1.2px] leading-[1.2] text-left">
            Experience & Pedigree
          </h2>
        </div>

        {/* Editorial Work Experience List: 1px #1a1a1a hairline borders, horizontal layout */}
        <div className="space-y-16">
          <div>
            <h3 className="text-[20px] font-semibold text-[#1a1a1a] tracking-[-0.5px] mb-6">
              Professional Engagements
            </h3>
            <div className="border-t border-[#1a1a1a]">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.role + exp.company}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="py-8 border-b border-[#1a1a1a] flex flex-col md:flex-row md:items-start justify-between gap-6"
                >
                  {/* Left Column: 20px weight 600 title, description, skills */}
                  <div className="max-w-2xl">
                    <h4 className="text-[20px] font-semibold text-[#1a1a1a] tracking-[-0.5px] leading-[1.4]">
                      {exp.role}
                    </h4>
                    <p className="text-[14px] font-normal text-[#1a1a1a]/60 tracking-[-0.35px] mt-1">
                      {exp.company} • {exp.location}
                    </p>
                    <p className="mt-4 text-[16px] leading-[1.5] tracking-[-0.4px] text-[#1a1a1a]/80">
                      {exp.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[12px] font-medium text-[#1a1a1a] bg-black/5 px-2.5 py-0.5 rounded-[9999px]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: 14px meta line in Studio Ink at 60% opacity */}
                  <div className="md:text-right shrink-0">
                    <span className="text-[14px] font-medium text-[#1a1a1a] tracking-[-0.35px] block">
                      {exp.period}
                    </span>
                    <span className="text-[14px] text-[#1a1a1a]/60 tracking-[-0.35px] block mt-0.5">
                      {exp.type}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Academic Background */}
          <div>
            <h3 className="text-[20px] font-semibold text-[#1a1a1a] tracking-[-0.5px] mb-6">
              Academic Background
            </h3>
            <div className="border-t border-[#1a1a1a]">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="py-8 border-b border-[#1a1a1a] flex flex-col md:flex-row md:items-start justify-between gap-6"
                >
                  <div className="max-w-2xl">
                    <h4 className="text-[20px] font-semibold text-[#1a1a1a] tracking-[-0.5px] leading-[1.4]">
                      {edu.degree}
                    </h4>
                    <p className="text-[14px] font-normal text-[#1a1a1a]/60 tracking-[-0.35px] mt-1">
                      {edu.school} • {edu.location}
                    </p>
                    <p className="mt-3 text-[16px] leading-[1.5] tracking-[-0.4px] text-[#1a1a1a]/80">
                      {edu.description}
                    </p>
                  </div>

                  <div className="md:text-right shrink-0">
                    <span className="text-[14px] font-medium text-[#1a1a1a] tracking-[-0.35px]">
                      {edu.year}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
