import React from "react";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <section className="py-20 px-6 bg-main text-white text-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl text-blue-500 uppercase italic"
      >
        About One<span className="text-team-name"> Tech MM</span>
      </motion.h1>
      <p className="mt-4 text-[#002B5B] max-w-2xl mx-auto">
        We are a team of passionate creators, building the future of digital
        experiences in Myanmar.
      </p>
    </section>
  );
}
