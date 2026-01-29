import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-16 bg-main text-center px-6 mx-6 rounded-[3rem]">
      <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">
        Ready to start your project with{" "}
        <span className="text-team-name">One Tech MM?</span>
      </h2>
      <Link to="/contact">
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 text-white px-10 py-4 rounded-full font-black uppercase tracking-widest hover:bg-blue-700 transition shadow-lg"
        >
          Work With Us
        </motion.button>
      </Link>
    </section>
  );
};

export default CallToAction;
