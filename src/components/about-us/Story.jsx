import React from "react";
import { motion } from "framer-motion";

export default function Story({ AboutPhoto }) {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 transition-colors duration-500">
      {/* Photo Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, x: -30 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full md:w-1/2 relative group"
      >
        <div className="absolute -inset-4 bg-brand-gold/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

        <img
          src={AboutPhoto}
          alt="Our Story"
          className="relative z-10 rounded-[3rem] group-hover:grayscale-0 transition-all duration-700 object-cover w-full h-100"
        />
      </motion.div>

      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full md:w-1/2 flex flex-col gap-8"
      >
        <div>
          <h2 className="text-4xl md:text-5xl font-black text-brand-navy dark:text-white uppercase italic tracking-tighter">
            Our <span className="text-brand-gold">Mission</span>
          </h2>
          <div className="w-20 h-1.5 bg-brand-gold mt-4 rounded-full"></div>
        </div>

        <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg font-medium">
          Established in 2025, One Tech MM is dedicated to transforming business
          visions into reality through innovative digital solutions. Our mission
          is to become the leading technology partner in Myanmar, empowering
          entrepreneurs with excellence and integrity.
        </p>

        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
          {/* Innovation Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-slate-800/50 p-6 rounded-2xl shadow-md border-l-8 border-brand-gold transition-colors"
          >
            <h4 className="font-black text-brand-navy dark:text-brand-gold uppercase italic text-lg">
              Innovation
            </h4>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">
              Always creating something new.
            </p>
          </motion.div>

          {/* Reliability Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-slate-800/50 p-6 rounded-2xl shadow-md border-l-8 border-brand-navy dark:border-white/20 transition-colors"
          >
            <h4 className="font-black text-brand-navy dark:text-brand-gold uppercase italic text-lg">
              Reliability
            </h4>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">
              You can count on us anytime.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
