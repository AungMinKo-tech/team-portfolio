import React from "react";
import HeroPhoto from "../assets/hero.png";
import ServicesPreview from "../components/home/ServicesPreview";
import Testimonials from "../components/home/Testimonial";
import WhyChooseUs from "../components/home/WhyChoose";

export default function Home() {
  return (
    <main className="bg-main">
      <section className="flex padding items-center">
        <div className="w-[50%]">
          <div className="w-[70%] flex flex-col justify-center gap-5">
            <h1 className="text-6xl font-bold text-blue-600">
              One <span className="text-team-name font-extrabold">Tech MM</span>
            </h1>
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repellendus cumque ratione dignissimos deleniti soluta possimus.
            </p>
            <button className="button w-40 h-12 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
              Explore More
            </button>
          </div>
        </div>

        <div className="w-[50%] flex justify-end">
          <img
            src={HeroPhoto}
            alt="Hero"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      <section className="px-6 md:px-20 pb-10 flex justify-center mt-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl">
          {[
            {
              label: "Happy Clients",
              count: "20+",
              color: "border-[#B8860B]",
              text: "text-blue-600",
            },
            {
              label: "Projects Done",
              count: "30+",
              color: "border-blue-600",
              text: "text-[#B8860B]",
            },
            {
              label: "Years Exp.",
              count: "5+",
              color: "border-[#B8860B]",
              text: "text-blue-600",
            },
            {
              label: "Experts",
              count: "10+",
              color: "border-blue-600",
              text: "text-[#B8860B]",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className={`bg-white p-3 md:p-4 rounded-xl shadow-sm border-b-4 ${stat.color} text-center transition-transform hover:-translate-y-1`}
            >
              <h3 className={`text-xl md:text-2xl font-black ${stat.text}`}>
                {stat.count}
              </h3>
              <p className="text-gray-400 text-[9px] md:text-[10px] mt-1 font-bold uppercase tracking-tighter">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <ServicesPreview />
      <WhyChooseUs />
      <Testimonials />
    </main>
  );
}
