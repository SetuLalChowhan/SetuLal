import React from "react";
import { motion } from "motion/react";
import SetuAvatar from "@/assets/images/setuAvatar.jpg";
const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-neutral-950">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Text Content */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h2 className="text-4xl font-bold text-white mb-2">About Me</h2>
            <div className="w-16 h-1 bg-emerald-500 rounded-full mb-6"></div>
            <p className="text-xl text-neutral-300 font-medium leading-relaxed">
              Software Engineer dedicated to building scalable backend systems,
              robust APIs, and high-performance web applications.
            </p>
          </div>

          <div className="space-y-4 text-neutral-400 leading-loose">
            <p>
              My journey began with a strong curiosity for system architecture
              and software engineering, which evolved into deep expertise across{" "}
              <strong>Node.js</strong>, <strong>TypeScript</strong>,{" "}
              <strong>Next.js</strong>, and <strong>React</strong> while
              building reliable and scalable production applications.
            </p>
            <p>
              I specialize in full-lifecycle software development—from designing
              resilient RESTful APIs, database schemas (PostgreSQL, MongoDB,
              Prisma), and microservices to engineering responsive,
              pixel-perfect frontend interfaces. I prioritize clean, type-safe
              code, system performance, and exceptional user experiences.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 pt-4">
            <div className="border border-white/10 rounded-2xl p-6 bg-white/5 backdrop-blur-sm">
              <span className="block text-4xl font-bold text-white mb-2">
                30+
              </span>
              <span className="text-sm text-emerald-400 font-semibold tracking-wider">
                PROJECTS COMPLETED
              </span>
            </div>
            <div className="border border-white/10 rounded-2xl p-6 bg-white/5 backdrop-blur-sm">
              <span className="block text-4xl font-bold text-white mb-2">
                2+
              </span>
              <span className="text-sm text-emerald-400 font-semibold tracking-wider">
                YEARS EXPERIENCE
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Image / Visual Element */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative w-full aspect-[4/5] max-w-sm mx-auto rounded-3xl overflow-hidden ring-1 ring-white/10 group">
            <div className="absolute inset-0 bg-transparent group-hover:bg-emerald-500/10 mix-blend-overlay z-10 transition-all duration-500"></div>
            <img
              src={SetuAvatar}
              alt="Setulal Chowhan Professional"
              className="w-full h-full object-cover grayscale-0 group-hover:grayscale scale-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
            />
          </div>
          <div className="absolute -z-10 -top-8 -right-8 w-64 h-64 bg-emerald-500/20 blur-[100px] rounded-full"></div>
          <div className="absolute -z-10 -bottom-8 -left-8 w-64 h-64 bg-cyan-500/20 blur-[100px] rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
