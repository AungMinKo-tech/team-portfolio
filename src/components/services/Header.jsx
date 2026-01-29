import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <section className="py-20 bg-main text-center px-6">
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-4xl md:text-5xl font-black text-white uppercase italic"
      >
        Our <span className="text-team-name">Expertise</span>
      </motion.h1>
      <p className="text-gray-600 mt-4 max-w-xl mx-auto text-sm md:text-base font-medium">
        Our technology services to help your business succeed in the digital
        world.
      </p>
    </section>
  );
};

export default Header;
