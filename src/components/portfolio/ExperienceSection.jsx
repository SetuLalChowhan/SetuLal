import React from "react";
import { motion } from "motion/react";
import { Calendar, MapPin, Building2, GraduationCap } from "lucide-react";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Softvence Agency",
    location: "Mohakhali Wireless, Medona Tower, Dhaka, Bangladesh",
    period: "November 2024 - Present",
    type: "Full-time",
    description:
      "Contributing to the development of modern and responsive web applications using React and Next.js.",
    responsibilities: [
      "Developed and maintained responsive user interfaces using React, Next.js, and Tailwind CSS.",
      "Collaborated with backend developers to integrate REST APIs for dynamic data handling.",
      "Worked closely with designers to implement pixel-perfect UI and enhance user experience.",
      "Optimized frontend performance, ensuring fast load times and smooth user interactions.",
      "Utilized Git for version control and participated in team code reviews to maintain code quality.",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Git",
      "REST API Integration",
    ],
  },
  {
    role: "Junior Frontend Developer",
    company: "QuilCraft",
    location: "Remote",
    period: "December 2023 - November 2024",
    type: "Part-time",
    description:
      "Worked on developing and enhancing user interfaces for client projects with a focus on responsive design and performance.",
    responsibilities: [
      "Built and maintained responsive UI components using React.js and Tailwind CSS.",
      "Collaborated with backend developers to integrate REST APIs for dynamic data rendering.",
      "Optimized website performance, improving load times and user experience.",
      "Worked closely with designers to ensure pixel-perfect UI implementation.",
      "Utilized Git for version control and participated in code reviews for collaborative development.",
    ],
    technologies: [
      "React.js",
      "Tailwind CSS",
      "JavaScript",
      "Git",
      "REST API Integration",
    ],
  },
];

const education = [
  {
    degree: "Master of Science in Computer Science and Engineering",
    school: "Jahangirnagar University",
    location: "Savar, Dhaka, Bangladesh",
    year: "2023 - 2024",
    description:
      "Focused on advanced concepts of computer science, research methodologies, and software development.",
    achievements: [
      "Completed thesis on web application development",
      "Participated in seminars and research workshops",
    ],
  },
  {
    degree: "Bachelor of Science in Computer Science and Engineering",
    school: "University of Information Technology and Sciences (UITS)",
    location: "Dhaka, Bangladesh",
    year: "2018 - 2022",
    description:
      "Specialized in software engineering and web development. Actively involved in tech events and student activities.",
    achievements: [
      "Senior Executive at UITS Computer Club",
      "Organized programming contests and skill-development seminars",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 bg-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Experience & Education
          </h2>
          <div className="w-16 h-1 bg-emerald-500 rounded-full mb-6"></div>
        </motion.div>

        <div className="space-y-16">
          {/* Work Experience */}
          <div>
            <h3 className="text-2xl font-semibold text-emerald-400 mb-8 flex items-center gap-3">
              <Building2 className="w-6 h-6" />
              Work Experience
            </h3>
            <div className="space-y-12 border-l border-white/10 ml-3 pl-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="absolute w-3 h-3 bg-emerald-500 rounded-full -left-[38px] top-2 ring-4 ring-black"></div>

                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                    <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                    <span className="inline-flex items-center gap-2 text-sm text-emerald-400 font-medium bg-emerald-500/10 px-3 py-1 rounded-full w-fit">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-neutral-400 text-sm mb-6">
                    <span className="flex items-center gap-2">
                      <Building2 className="w-4 h-4" />
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                    <span className="inline-block px-2 py-0.5 border border-white/10 rounded-md text-xs">
                      {exp.type}
                    </span>
                  </div>

                  <p className="text-neutral-300 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <ul className="space-y-3 mb-6">
                    {exp.responsibilities.map((task, i) => (
                      <li key={i} className="flex gap-3 text-neutral-400">
                        <span className="mt-1.5 w-1.5 h-1.5 bg-emerald-500/50 rounded-full shrink-0"></span>
                        <span className="leading-relaxed">{task}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-4">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs font-medium px-3 py-1 bg-white/5 border border-white/10 rounded-full text-neutral-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold text-cyan-400 mb-8 flex items-center gap-3">
              <GraduationCap className="w-6 h-6" />
              Education
            </h3>
            <div className="space-y-12 border-l border-white/10 ml-3 pl-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="absolute w-3 h-3 bg-cyan-500 rounded-full -left-[38px] top-2 ring-4 ring-black"></div>

                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                    <h4 className="text-xl font-bold text-white">
                      {edu.degree}
                    </h4>
                    <span className="inline-flex items-center gap-2 text-sm text-cyan-400 font-medium bg-cyan-500/10 px-3 py-1 rounded-full w-fit">
                      <Calendar className="w-4 h-4" />
                      {edu.year}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-neutral-400 text-sm mb-6">
                    <span className="flex items-center gap-2">
                      <GraduationCap className="w-4 h-4" />
                      {edu.school}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {edu.location}
                    </span>
                  </div>

                  <p className="text-neutral-300 mb-6 leading-relaxed">
                    {edu.description}
                  </p>

                  <ul className="space-y-3">
                    {edu.achievements.map((item, i) => (
                      <li key={i} className="flex gap-3 text-neutral-400">
                        <span className="mt-1.5 w-1.5 h-1.5 bg-cyan-500/50 rounded-full shrink-0"></span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
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
