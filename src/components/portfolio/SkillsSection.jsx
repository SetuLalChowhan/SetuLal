import React from "react";
import { motion } from "motion/react";
import {
  Cpu,
  Layers,
  Layout,
  Database,
  ShieldCheck,
  GitBranch,
} from "lucide-react";

const serviceCards = [
  {
    title: "System Architecture",
    description: "Backend architectures, modular design, and robust business logic.",
    skills: ["Node.js", "NestJS", "Express.js"],
    bgClass: "bg-[#ffffff]", // Neutral Service Card
    icon: Cpu,
  },
  {
    title: "Scalable REST APIs",
    description: "Type-safe endpoint design, authentication workflows, and microservices.",
    skills: ["TypeScript", "REST APIs", "Microservices"],
    bgClass: "bg-[#bedbff]", // Powder Blue
    icon: Layers,
  },
  {
    title: "Full-Stack Web Apps",
    description: "High-performance client-side and server-rendered web interfaces.",
    skills: ["Next.js", "React.js", "State Systems"],
    bgClass: "bg-[#a4f4cf]", // Mint Wash
    icon: Layout,
  },
  {
    title: "Database Modeling",
    description: "Schema architecture, relational integrity, migrations, and caching.",
    skills: ["PostgreSQL", "MongoDB", "Prisma ORM"],
    bgClass: "bg-[#ffc9c9]", // Blush Tint
    icon: Database,
  },
  {
    title: "System Optimization",
    description: "Query efficiency, bundle size reductions, and Core Web Vitals.",
    skills: ["Clean Code", "Web Vitals", "Security"],
    bgClass: "bg-[#bedbff]", // Powder Blue
    icon: ShieldCheck,
  },
  {
    title: "Engineering Workflows",
    description: "Version management, continuous delivery, and cross-team integration.",
    skills: ["Git", "Docker", "DevOps"],
    bgClass: "bg-[#a4f4cf]", // Mint Wash
    icon: GitBranch,
  },
];

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="w-full bg-[#f8f8f2] py-24 md:py-28 px-6"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Section Heading: 30-48px weight 600 Studio Ink, left-aligned, no kicker, 32-48px gap below */}
        <div className="mb-10 md:mb-12">
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-semibold text-[#1a1a1a] tracking-[-1.2px] leading-[1.2] text-left">
            Capabilities & Services
          </h2>
        </div>

        {/* 3-Column Grid at 32px gap, 12px radius, 32px padding, no border, no shadow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`${card.bgClass} rounded-[12px] p-8 flex flex-col justify-between min-h-[260px] text-[#1a1a1a] transition-transform duration-300 hover:-translate-y-1`}
              >
                {/* Top-Left: Label in 20px weight 600 Studio Ink */}
                <div>
                  <h3 className="text-[20px] font-semibold text-[#1a1a1a] tracking-[-0.5px] leading-[1.4]">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-[1.43] tracking-[-0.35px] text-[#1a1a1a]/70">
                    {card.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {card.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[12px] font-medium text-[#1a1a1a] bg-black/5 px-2.5 py-0.5 rounded-[9999px]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom-Right: 24px Icon in Studio Ink */}
                <div className="flex justify-end mt-6">
                  <Icon
                    size={24}
                    strokeWidth={1.8}
                    className="text-[#1a1a1a]"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
