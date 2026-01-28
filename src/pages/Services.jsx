import React from "react";
import { motion } from "framer-motion";
import {
  HiCode,
  HiColorSwatch,
  HiDeviceMobile,
  HiLightningBolt,
} from "react-icons/hi";

const Services = () => {
  const allServices = [
    {
      title: "Web Development",
      desc: "We create custom web solutions using the latest technologies.",
      icon: <HiCode />,
      features: ["React & Next.js", "PHP & Laravel", "Node.js", "Admin Panels"],
    },
    {
      title: "UI/UX Design",
      desc: "We create user-friendly and modern designs that are pleasing to the eye.",
      icon: <HiColorSwatch />,
      features: ["Figma Design", "Prototyping", "User Research"],
    },
    {
      title: "Mobile App",
      desc: "We build apps that can be used conveniently on both iOS and Android.",
      icon: <HiDeviceMobile />,
      features: ["React Native", "Smooth Performance", "App Store Publishing"],
    },
    {
      title: "Maintenance",
      desc: "We provide the support you need to keep your website active.",
      icon: <HiLightningBolt />,
      features: ["24/7 Support", "Bug Fixes", "Security Updates"],
    },
  ];

  return (
    <main className="bg-main">
      {/* 1. Page Header */}
      <section className="py-20 bg-main text-center px-6">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-4xl md:text-5xl font-black text-white uppercase italic"
        >
          Our <span className="text-team-name">Expertise</span>
        </motion.h1>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto text-sm md:text-base font-medium">
          Our technology services to help your business succeed in the digital
          world.
        </p>
      </section>

      {/* 2. Full Services Grid */}
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

      {/* 3. Call to Action (CTA) */}
      <section className="py-16 bg-main text-center px-6 mx-6 rounded-[3rem]">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">
          Ready to start your project with{" "}
          <span className="text-team-name">One Tech MM?</span>
        </h2>
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 text-white px-10 py-4 rounded-full font-black uppercase tracking-widest hover:bg-blue-700 transition shadow-lg"
        >
          Work With Us
        </motion.button>
      </section>
    </main>
  );
};

export default Services;
