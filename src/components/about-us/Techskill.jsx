import React from "react";
import { motion } from "framer-motion";

export default function Techskill() {
  const skills = [
    { skill: "Web Development", level: "85%" },
    { skill: "UI/UX Design", level: "80%" },
    { skill: "App Development", level: "85%" },
  ];

  return (
    <section className="py-24 px-6 transition-colors duration-500">
      <div className="max-w-4xl mx-auto">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black text-brand-navy dark:text-white uppercase italic tracking-tighter">
            Our <span className="text-brand-gold">Expertise</span>
          </h2>
          <div className="w-20 h-1.5 bg-brand-gold mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Skill Bars */}
        <div className="space-y-10">
          {skills.map((s, i) => (
            <div key={i} className="group">
              <div className="flex justify-between mb-3 items-end">
                <span className="font-black text-brand-navy dark:text-white text-lg uppercase italic tracking-wide">
                  {s.skill}
                </span>
                <span className="font-black dark:text-brand-gold text-xl italic">
                  {s.level}
                </span>
              </div>

              {/* Progress Bar Container */}
              <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-4 overflow-hidden p-1 shadow-inner">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: s.level }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 2,
                    delay: i * 0.2,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="bg-brand-navy dark:bg-brand-gold h-full rounded-full relative shadow-lg"
                >
                  <div className="absolute top-0 right-0 h-full w-2 bg-white/30 blur-sm rounded-full"></div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
