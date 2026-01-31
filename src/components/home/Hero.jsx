import React from "react";
import { motion } from "framer-motion";
import HeroPhotoLight from "@/assets/heroLight.png";
import HeroPhotoDark from "@/assets/heroDark.png";
import { Link } from "react-router-dom";
import SparklesEffect from "../../ui/SparklesEffect";

export default function Hero() {
  const arrowVariants = {
    initial: { x: -10, opacity: 0, width: 0 },
    hover: {
      x: 0,
      opacity: 1,
      width: "auto",
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };
  return (
    <div className="transition-colors duration-500">
      <section className="flex flex-col md:flex-row items-center min-h-[80vh] gap-10 px-6 pt-32 md:pt-20 md:px-30">
        <SparklesEffect />
        {/* Left Side: Content */}
        <div className="w-full md:w-[50%] flex justify-center md:justify-start md:pt-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[80%] flex flex-col gap-6"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-brand-navy dark:text-white leading-tight">
              One{" "}
              <span className="text-brand-gold font-extrabold italic">
                Tech MM
              </span>
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
              Leading the future with innovative technology solutions. We
              empower businesses in Myanmar to scale digitally with trust and
              excellence.
            </p>
            <div className="flex gap-4">
              <Link to="/services">
                <motion.button
                  initial="initial"
                  whileHover="hover"
                  whileTap={{ scale: 0.95 }}
                  className="relative px-8 py-3 bg-brand-navy dark:bg-brand-gold text-white font-bold rounded-full shadow-lg flex items-center justify-center overflow-hidden cursor-pointer"
                >
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />

                  <span className="relative z-10">Explore More</span>

                  <motion.span
                    variants={arrowVariants}
                    className="relative z-10 flex items-center ml-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={3}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </motion.span>
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Image with Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-[50%] flex justify-end relative"
        >
          <img
            src={HeroPhotoLight}
            alt="Hero Light"
            className="w-full h-auto object-contain block dark:hidden"
          />

          {/* Dark Mode Image */}
          <img
            src={HeroPhotoDark}
            alt="Hero Dark"
            className="w-full h-auto object-contain hidden dark:block"
          />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="px-6 md:px-20 pb-20 flex justify-center mt-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl"
        >
          {[
            {
              label: "Happy Clients",
              count: "20+",
              color: "border-brand-gold",
            },
            {
              label: "Projects Done",
              count: "30+",
              color: "border-brand-navy",
            },
            { label: "Years Exp.", count: "5+", color: "border-brand-gold" },
            { label: "Experts", count: "10+", color: "border-brand-navy" },
          ].map((stat, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-slate-800/50 p-6 rounded-2xl shadow-xl border-b-4 ${stat.color} text-center backdrop-blur-sm transition-all hover:shadow-2xl hover:-translate-y-2`}
            >
              <h3 className="text-3xl font-black text-brand-navy dark:text-brand-gold">
                {stat.count}
              </h3>
              <p className="text-slate-400 dark:text-slate-400 text-xs mt-2 font-bold uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
