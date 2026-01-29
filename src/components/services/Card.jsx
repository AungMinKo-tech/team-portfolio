import React from "react";
import { motion } from "framer-motion";

const Card = ({ allServices }) => {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {allServices.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6"
          >
            {/* Icon Container */}
            <div className="bg-main w-16 h-16 rounded-2xl flex items-center justify-center text-3xl text-blue-600 shrink-0">
              {s.icon}
            </div>

            {/* Content */}
            <div>
              <h3 className="text-2xl font-black text-blue-900 mb-3 uppercase italic leading-none">
                {s.title}
              </h3>
              <p className="text-gray-500 text-sm mb-5 leading-relaxed">
                {s.desc}
              </p>
              {/* Features Tags */}
              <div className="flex flex-wrap gap-2">
                {s.features.map((f, fi) => (
                  <span
                    key={fi}
                    className="text-[10px] font-bold bg-blue-50 text-blue-600 px-3 py-1 rounded-full uppercase"
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
