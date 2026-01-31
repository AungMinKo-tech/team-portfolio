import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  HiOutlineDesktopComputer,
  HiOutlineDeviceMobile,
  HiOutlineColorSwatch,
} from "react-icons/hi";

export default function ServicesPreview() {
  const services = [
    {
      title: "Web Development",
      desc: "Modern, fast, and responsive websites tailored for your business.",
      icon: <HiOutlineDesktopComputer />,
      link: "/services",
    },
    {
      title: "App Development",
      desc: "High-performance mobile applications for iOS and Android.",
      icon: <HiOutlineDeviceMobile />,
      link: "/services",
    },
    {
      title: "UI/UX Design",
      desc: "User-centric designs that provide great experiences and look amazing.",
      icon: <HiOutlineColorSwatch />,
      link: "/services",
    },
  ];

  return (
    <section className="py-24 px-6 transition-colors duration-500 flex flex-col items-center">
      {/* Header */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-black text-brand-navy dark:text-white uppercase tracking-tight">
            What We <span className="text-brand-gold">Do</span>
          </h2>
          <div className="w-16 h-1.5 bg-brand-gold mx-auto mt-3 rounded-full"></div>
        </motion.div>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {services.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              to={item.link}
              className="group block h-full bg-white dark:bg-slate-800/40 p-10 rounded-3xl border border-transparent hover:border-brand-gold/50 hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
            >
              {/* Icon */}
              <div className="text-5xl text-brand-navy dark:text-brand-gold mb-6 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-black text-brand-navy dark:text-white mb-4 uppercase italic tracking-wide">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                {item.desc}
              </p>

              {/* Learn More Link */}
              <span className="inline-flex items-center text-brand-gold font-bold text-xs uppercase tracking-[0.2em] group-hover:gap-2 transition-all">
                Learn More{" "}
                <span className="ml-1 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
