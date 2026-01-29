import React from "react";
import Hero from "../components/home/Hero";
import ServicesPreview from "../components/home/ServicesPreview";
import Testimonials from "../components/home/Testimonial";
import WhyChooseUs from "../components/home/WhyChoose";

export default function Home() {
  return (
    <main className="bg-main">
      <Hero />
      <ServicesPreview />
      <WhyChooseUs />
      <Testimonials />
    </main>
  );
}
