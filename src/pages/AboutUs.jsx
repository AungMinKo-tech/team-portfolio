import React from "react";
import HeroPhoto from "../assets/hero.png";
import Header from "../components/about-us/Header";
import Story from "../components/about-us/Story";
import Techskill from "../components/about-us/Techskill";

export default function AboutUs() {
  return (
    <main className="bg-main">
      <Header />
      <Story HeroPhoto={HeroPhoto} />
      <Techskill />
    </main>
  );
}
