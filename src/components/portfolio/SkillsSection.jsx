import React from "react";
import { motion } from "motion/react";

const skills = [
  { name: "React.js", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Framer Motion", category: "Frontend" },
  { name: "Responsive Design", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "REST APIs", category: "Backend" },
  { name: "MongoDB (Basic)", category: "Backend" },
  { name: "Git", category: "Tools" },
  { name: "Figma (Basic)", category: "Tools" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 bg-black">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Tech Stack</h2>
          <p className="text-xl text-neutral-400">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-neutral-900/50 hover:bg-neutral-800 transition-colors border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 group"
            >
              <span className="text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors">
                {skill.name}
              </span>
              <span className="text-xs uppercase tracking-widest text-neutral-500 font-medium">
                {skill.category}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
