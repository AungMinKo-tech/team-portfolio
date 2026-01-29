import React from "react";
import { motion } from "framer-motion";

export default function Story({ HeroPhoto }) {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="w-full md:w-1/2"
      >
        <img
          src={HeroPhoto}
          alt="Our Story"
          className="rounded-4xl shadow-2xl border-4 border-white grayscale hover:grayscale-0 transition-all duration-500"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 flex flex-col gap-6"
      >
        <h2 className="text-3xl font-bold text-blue-900 uppercase">
          Our <span className="text-team-name">Mission</span>
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Established in 2025, One Tech MM is dedicated to transforming business
          visions into reality through innovative digital solutions. Our mission
          is to become the leading technology partner in Myanmar, empowering
          entrepreneurs with excellence and integrity.
        </p>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-team-name">
            <h4 className="font-bold text-blue-900">Innovation</h4>
            <p className="text-xs text-gray-500">
              Always creating something new.
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-blue-600">
            <h4 className="font-bold text-team-name">Reliability</h4>
            <p className="text-xs text-gray-500">
              You can count on us anytime.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
