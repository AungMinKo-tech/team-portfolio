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

  // Container Animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Card Animation
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 px-6 bg-main overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Title Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-blue-900 uppercase tracking-tighter">
            Why Choose <span className="text-team-name">Us?</span>
          </h2>
          <div className="w-20 h-1.5 bg-team-name mx-auto mt-4 rounded-full"></div>
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
                rotateY: 10,
                boxShadow: "0px 10px 30px rgba(0,0,0,0.1)",
              }}
              className="bg-white p-8 rounded-3xl border-b-8 border-team-name cursor-pointer perspective-1000"
            >
              <div className="text-5xl mb-6 filter drop-shadow-md">
                {item.icon}
              </div>
              <h3 className="font-extrabold text-blue-900 text-xl mb-3 uppercase italic">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed font-medium">
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
