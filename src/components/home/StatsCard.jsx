import React from "react";
import { motion } from "framer-motion";

const stats = [
  {
    label: "Happy Clients",
    count: "20+",
    color: "border-brand-gold",
    textColor: "text-brand-navy",
  },
  {
    label: "Projects Done",
    count: "30+",
    color: "border-brand-navy",
    textColor: "text-brand-gold",
  },
  {
    label: "Years Exp.",
    count: "5+",
    color: "border-brand-gold",
    textColor: "text-brand-navy",
  },
  {
    label: "Team Experts",
    count: "10+",
    color: "border-brand-navy",
    textColor: "text-brand-gold",
  },
];

export default function StatsCard() {
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
      {stats.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -10 }}
          className={`bg-white dark:bg-slate-800/40 p-8 rounded-2xl shadow-md border-b-4 ${item.color} text-center backdrop-blur-sm transition-all`}
        >
          <h3
            className={`text-3xl md:text-5xl font-black ${item.textColor} dark:text-white`}
          >
            {item.count}
          </h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base mt-3 font-semibold tracking-wide uppercase">
            {item.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
