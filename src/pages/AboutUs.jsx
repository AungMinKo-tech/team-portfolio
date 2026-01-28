import React from "react";
import { motion } from "framer-motion";
import HeroPhoto from "../assets/hero.png";

export default function AboutUs() {
  return (
    <main className="bg-main min-h-screen">
      {/* Header Section */}
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

      {/* Story Section*/}
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
            Established in 2025, One Tech MM is dedicated to transforming
            business visions into reality through innovative digital solutions.
            Our mission is to become the leading technology partner in Myanmar,
            empowering entrepreneurs with excellence and integrity.
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

      {/* Team Skills */}
      <section className="py-20 bg-main px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-center text-blue-900 mb-12 uppercase">
            Our Expertise
          </h2>
          <div className="space-y-6">
            {[
              { skill: "Web Development", level: "85%" },
              { skill: "UI/UX Design", level: "80%" },
              { skill: "App Development", level: "85%" },
            ].map((s, i) => (
              <div key={i}>
                <div className="flex justify-between mb-2">
                  <span className="font-bold text-blue-900">{s.skill}</span>
                  <span className="font-bold text-team-name">{s.level}</span>
                </div>
                <div className="w-full bg-white rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: s.level }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="bg-blue-600 h-full rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
