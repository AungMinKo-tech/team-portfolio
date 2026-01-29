import React from "react";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Expert Team",
      desc: "Professional developers with years of experience.",
      icon: "👨‍💻",
    },
    {
      title: "Fast Delivery",
      desc: "We value your time and meet every deadline.",
      icon: "⚡",
    },
    {
      title: "Modern Tech",
      desc: "Using the latest tools for better performance.",
      icon: "🚀",
    },
    {
      title: "Client First",
      desc: "Your satisfaction is our primary goal.",
      icon: "🤝",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="py-24 px-6 bg-bg-light dark:bg-bg-dark overflow-hidden transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-brand-navy dark:text-white uppercase tracking-tighter">
            Why Choose <span className="text-brand-gold">Us?</span>
          </h2>
          <div className="w-24 h-1.5 bg-brand-gold mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Animated Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 20px 40px rgba(0,0,0,0.1)",
              }}
              className="bg-white dark:bg-slate-800/50 p-8 rounded-3xl border-b-8 border-brand-gold dark:border-brand-navy cursor-pointer backdrop-blur-sm transition-colors shadow-sm"
            >
              <div className="text-5xl mb-6 filter drop-shadow-md">
                {item.icon}
              </div>
              <h3 className="font-extrabold text-brand-navy dark:text-brand-gold text-xl mb-3 uppercase italic">
                {item.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-300 text-sm leading-relaxed font-medium">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
