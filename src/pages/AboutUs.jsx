import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import AboutPhoto from "@/assets/aboutUsPhoto.png";
import Header from "@/components/about-us/Header";
import Story from "@/components/about-us/Story";
import Techskill from "@/components/about-us/Techskill";

export default function AboutUs() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-bg-light dark:bg-bg-dark min-h-screen transition-colors duration-500 overflow-x-hidden"
    >
      <Header />
      <div className="space-y-12 md:space-y-24 pb-24">
        <Story AboutPhoto={AboutPhoto} />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <Techskill />
        </motion.div>
      </div>
    </motion.main>
  );
}
