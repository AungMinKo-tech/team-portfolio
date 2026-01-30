import React from "react";
import { motion } from "framer-motion";
import {
  HiCode,
  HiColorSwatch,
  HiDeviceMobile,
  HiLightningBolt,
} from "react-icons/hi";
import Header from "@/components/services/Header";
import Card from "@/components/services/Card";
import CallToAction from "@/components/services/CallToAction";

const Services = () => {
  const allServices = [
    {
      title: "Web Development",
      desc: "We create custom web solutions using the latest technologies and best practices.",
      icon: <HiCode />,
      features: ["React & Next.js", "PHP & Laravel", "Node.js", "Admin Panels"],
    },
    {
      title: "UI/UX Design",
      desc: "We create user-friendly and modern designs that focus on conversion and accessibility.",
      icon: <HiColorSwatch />,
      features: [
        "Figma Design",
        "Prototyping",
        "User Research",
        "Design Systems",
      ],
    },
    {
      title: "Mobile App",
      desc: "High-performance native and cross-platform mobile applications for all devices.",
      icon: <HiDeviceMobile />,
      features: ["React Native", "Smooth Performance", "App Store Publishing"],
    },
    {
      title: "Maintenance",
      desc: "Reliable support and continuous updates to keep your platform secure and up-to-date.",
      icon: <HiLightningBolt />,
      features: [
        "24/7 Support",
        "Bug Fixes",
        "Security Updates",
        "Speed Optimization",
      ],
    },
  ];

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-bg-light dark:bg-bg-dark min-h-screen transition-colors duration-500 overflow-x-hidden"
    >
      <Header />

      <Card allServices={allServices} />
      <div className="pb-20">
        <CallToAction />
      </div>
    </motion.main>
  );
};

export default Services;
