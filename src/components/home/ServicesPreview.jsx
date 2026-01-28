import React from "react";
import { Link } from "react-router-dom";

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
    <section className="py-16 px-6 bg-main flex flex-col items-center">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-600 uppercase tracking-tight">
          What We <span className="text-team-name">Do</span>
        </h2>
        <div className="w-16 h-1 bg-team-name mx-auto mt-2"></div>
      </div>

      {/* Card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {services.map((item, index) => (
          <Link
            to={item.link}
            key={index}
            className="group bg-[#f8f8f8] p-8 rounded-2xl border border-transparent hover:border-team-name hover:bg-white hover:shadow-xl transition-all duration-300"
          >
            <div className="text-4xl text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-blue-600 mb-3 uppercase italic">
              {item.title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              {item.desc}
            </p>
            <span className="text-team-name font-bold text-xs uppercase tracking-widest group-hover:underline">
              Learn More →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
