import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <section className="py-20 bg-blue-900 text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-black text-white uppercase italic"
      >
        Get In <span className="text-team-name">Touch</span>
      </motion.h1>
      <p className="text-blue-100 mt-4 max-w-lg mx-auto text-sm">
        For your project or any other inquiries, please contact us at any time.
      </p>
    </section>
  );
};

export default Header;
