import React from "react";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <section className="py-24 px-6 bg-bg-light dark:bg-bg-dark text-center relative overflow-hidden transition-colors duration-500">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-brand-gold/5 blur-[120px] pointer-events-none opacity-50 dark:opacity-100"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="text-5xl md:text-7xl font-black text-brand-navy dark:text-white uppercase italic tracking-tighter"
        >
          About One<span className="text-brand-gold"> Tech MM</span>
        </motion.h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="h-1.5 bg-brand-gold mx-auto mt-6 rounded-full"
        ></motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-8 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed"
        >
          We are a team of passionate creators, building the future of digital
          experiences in Myanmar.
        </motion.p>
      </div>
    </section>
  );
}
