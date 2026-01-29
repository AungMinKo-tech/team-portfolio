import React from "react";
import { motion } from "framer-motion";
import PersonOne from "../assets/person1.jpeg";
import PersonTwo from "../assets/person2.jpeg";
import PersonThree from "../assets/person3.jpeg";
import Card from "../components/team/Card";

const Team = () => {
  const members = [
    {
      name: "Aung Kyaw",
      role: "Founder & Lead Developer",
      img: PersonOne,
      bio: "Focuses on high-end scalable web solutions.",
    },
    {
      name: "Su Su",
      role: "Senior UI/UX Designer",
      img: PersonTwo,
      bio: "Specializes in creating user-centric digital experiences.",
    },
    {
      name: "Min Khant",
      role: "Project Manager",
      img: PersonThree,
      bio: "Expert in agile methodology and client communications.",
    },
  ];

  return (
    <main className="bg-main py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Page Title */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-blue-900 uppercase italic"
          >
            The People Behind{" "}
            <span className="text-team-name">One Tech MM</span>
          </motion.h1>
          <p className="text-gray-600 mt-4 font-medium">
            Meet our professional and creative team members.
          </p>
        </div>

        {/* Members */}
        <Card members={members} />
      </div>
    </main>
  );
};

export default Team;
