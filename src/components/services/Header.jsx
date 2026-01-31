import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <section className="py-24 text-center px-6 transition-colors duration-500 overflow-hidden relative">
      {/* Background Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-5xl md:text-7xl font-black text-brand-navy dark:text-white uppercase italic tracking-tighter"
        >
          Our <span className="text-brand-gold">Expertise</span>
        </motion.h1>

        <div className="w-24 h-1.5 bg-brand-gold mx-auto mt-6 rounded-full"></div>

        <p className="text-slate-600 dark:text-slate-400 mt-8 max-w-2xl mx-auto text-base md:text-lg font-medium leading-relaxed">
          Innovative technology services designed to help your business scale
          and succeed in the ever-evolving digital landscape.
        </p>
      </motion.div>
    </section>
  );
};

export default Header;
