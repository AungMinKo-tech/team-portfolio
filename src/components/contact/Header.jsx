import React from "react";
import { motion } from "framer-motion";
import Snowfall from "react-snowfall";

const Header = () => {
  return (
    <section className="pt-24 pb-32 bg-brand-navy dark:bg-bg-dark text-center px-6 relative overflow-hidden transition-colors duration-500">
      <Snowfall />
      {/* Background Subtle Gradient Effect */}
      <div className="absolute inset-0 bg-linear-to-b from-black/20 to-transparent pointer-events-none z-1"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-brand-gold/5 blur-[120px] pointer-events-none z-1"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10"
      >
        <h1 className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter">
          Get In <span className="text-brand-gold">Touch</span>
        </h1>

        {/* Animated Divider */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="h-1.5 bg-brand-gold mx-auto mt-6 rounded-full shadow-[0_0_15px_rgba(184,134,11,0.5)]"
        ></motion.div>

        <p className="text-slate-300 dark:text-slate-400 mt-8 max-w-xl mx-auto text-lg font-medium leading-relaxed">
          For your project or any other inquiries, please contact us at any
          time. Our team is ready to assist you.
        </p>
      </motion.div>
    </section>
  );
};

export default Header;
