import React from "react";
import { motion } from "framer-motion";

export default function Techskill() {
  return (
    <section className="py-20 bg-main px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-black text-center text-blue-900 mb-12 uppercase">
          Our Expertise
        </h2>
        <div className="space-y-6">
          {[
            { skill: "Web Development", level: "85%" },
            { skill: "UI/UX Design", level: "80%" },
            { skill: "App Development", level: "85%" },
          ].map((s, i) => (
            <div key={i}>
              <div className="flex justify-between mb-2">
                <span className="font-bold text-blue-900">{s.skill}</span>
                <span className="font-bold text-team-name">{s.level}</span>
              </div>
              <div className="w-full bg-white rounded-full h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: s.level }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="bg-blue-600 h-full rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
