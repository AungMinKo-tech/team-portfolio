import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "../components/home/Hero";
import ServicesPreview from "../components/home/ServicesPreview";
import Testimonials from "../components/home/Testimonial";
import WhyChooseUs from "../components/home/WhyChoose";

export default function Home() {
  return (
    <AnimatePresence>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-bg-light dark:bg-bg-dark min-h-screen transition-colors duration-500 overflow-x-hidden"
      >
        <Hero />

        {/* Section Spacing */}
        <div className="flex flex-col gap-0 md:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <ServicesPreview />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <WhyChooseUs />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <Testimonials />
          </motion.div>
        </div>

        {/* Background Decor */}
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-125 h-125 bg-brand-gold/5 blur-[120px] rounded-full hidden dark:block"></div>
          <div className="absolute bottom-[10%] right-[-5%] w-100 h-100 bg-brand-navy/10 blur-[100px] rounded-full hidden dark:block"></div>
        </div>
      </motion.main>
    </AnimatePresence>
  );
}
