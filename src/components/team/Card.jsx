import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Card = () => {
  let [members, setMembers] = useState([]);

  useEffect(() => {
    fetch("/team.json")
      .then((res) => res.json())
      .then(setMembers);
  }, []);

  if (!members) return <div className="text-center py-10">Loading Team...</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {members?.map((m, i) => (
        <motion.div
          key={i}
          className="bg-white dark:bg-slate-900/60 rounded-3xl overflow-hidden shadow-lg border border-slate-100 dark:border-white/5 group backdrop-blur-sm"
        >
          {/* Image Container */}
          <div className="relative h-64 overflow-hidden">
            <img
              src={m.avator}
              alt={m.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Social Overlay */}
            <div className="absolute inset-0 bg-brand-navy/40 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
              {/* Social Icons... */}
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6 text-center">
            <h3 className="text-xl font-black text-brand-navy dark:text-white uppercase italic tracking-tight">
              {m.name}
            </h3>
            <p className="text-brand-gold font-bold text-[10px] uppercase tracking-widest mt-1 mb-3">
              {m.role}
            </p>
            <div className="w-8 h-0.5 bg-brand-gold/30 mx-auto mb-3 rounded-full"></div>
            <p className="text-slate-500 dark:text-slate-400 text-xs italic leading-relaxed line-clamp-2">
              "{m.bio}"
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Card;
