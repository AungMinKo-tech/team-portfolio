import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-24 px-6">
      <motion.div className="max-w-6xl mx-auto bg-brand-navy dark:bg-slate-900/80 p-12 md:p-20 text-center rounded-[3rem] shadow-2xl relative overflow-hidden border border-white/5 backdrop-blur-sm">
        {/* Subtle Glows */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-gold/10 blur-[100px] rounded-full"></div>

        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight uppercase italic">
            Ready to start your project with <br className="hidden md:block" />
            <span className="text-brand-gold">One Tech MM?</span>
          </h2>
          <Link to="/contact">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(184,134,11,0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand-gold text-brand-navy px-12 py-5 rounded-full font-black uppercase tracking-widest shadow-xl transition-all"
            >
              Work With Us
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default CallToAction;
