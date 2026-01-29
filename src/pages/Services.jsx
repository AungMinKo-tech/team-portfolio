import React from "react";
import {
  HiCode,
  HiColorSwatch,
  HiDeviceMobile,
  HiLightningBolt,
} from "react-icons/hi";
import Header from "../components/services/Header";
import Card from "../components/services/Card";
import CallToAction from "../components/services/CallToAction";

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
      <Header />
      <Card allServices={allServices} />
      <CallToAction />
    </main>
  );
};

export default Services;
