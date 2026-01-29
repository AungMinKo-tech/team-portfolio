import React from "react";
import { motion } from "framer-motion";

const Card = ({ allServices }) => {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto bg-bg-light dark:bg-bg-dark transition-colors duration-500">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {allServices.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
            className="bg-white dark:bg-slate-800/40 p-10 rounded-[2.5rem] shadow-sm border border-slate-100 dark:border-white/5 flex flex-col lg:flex-row gap-8 transition-colors duration-300"
          >
            {/* Icon Container - Navy Blue Background with Gold Icon */}
            <div className="bg-brand-navy dark:bg-brand-gold w-20 h-20 rounded-3xl flex items-center justify-center text-4xl text-brand-gold dark:text-brand-navy shrink-0 shadow-lg group-hover:rotate-6 transition-transform">
              {s.icon}
            </div>

            {/* Content Section */}
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-black text-brand-navy dark:text-white mb-3 uppercase italic leading-tight tracking-tight">
                {s.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 leading-relaxed">
                {s.desc}
              </p>

              {/* Features Tags */}
              <div className="flex flex-wrap gap-2">
                {s.features.map((f, fi) => (
                  <span
                    key={fi}
                    className="text-[10px] font-black bg-slate-100 dark:bg-brand-navy/50 text-brand-navy dark:text-brand-gold px-4 py-1.5 rounded-full uppercase tracking-wider border border-transparent dark:border-brand-gold/20"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Card;
