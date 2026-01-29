import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Card = ({ members }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {members.map((m, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -12 }}
          transition={{
            type: "spring",
            stiffness: 100,
            delay: i * 0.15,
          }}
          className="bg-white dark:bg-slate-900/60 rounded-[2.5rem] overflow-hidden shadow-xl dark:shadow-2xl border border-slate-100 dark:border-white/5 group backdrop-blur-sm transition-colors duration-500"
        >
          {/* Image Container */}
          <div className="relative h-80 overflow-hidden">
            <img
              src={m.img}
              alt={m.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0"
            />

            {/* Social Overlay - Improved for Dark Mode */}
            <div className="absolute inset-0 bg-brand-navy/60 dark:bg-brand-gold/20 flex items-center justify-center gap-5 opacity-0 group-hover:opacity-100 transition-all duration-400 backdrop-blur-[2px]">
              {[
                { icon: <FaFacebookF />, link: "#" },
                { icon: <FaLinkedinIn />, link: "#" },
                { icon: <FaGithub />, link: "#" },
              ].map((s, idx) => (
                <motion.a
                  key={idx}
                  whileHover={{ scale: 1.2 }}
                  href={s.link}
                  className="bg-white dark:bg-brand-navy p-3 rounded-full text-brand-navy dark:text-brand-gold hover:bg-brand-gold dark:hover:bg-white hover:text-white dark:hover:text-brand-navy shadow-lg transition-colors"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8 text-center">
            <h3 className="text-2xl font-black text-brand-navy dark:text-white uppercase italic tracking-tight transition-colors">
              {m.name}
            </h3>
            <p className="text-brand-gold font-black text-xs uppercase tracking-[0.2em] mt-2 mb-4">
              {m.role}
            </p>
            <div className="w-10 h-1 bg-brand-gold/30 mx-auto mb-4 rounded-full"></div>
            <p className="text-slate-500 dark:text-slate-400 text-sm italic leading-relaxed">
              "{m.bio}"
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Card;
