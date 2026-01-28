import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import PersonOne from "../assets/person1.jpeg";
import PersonTwo from "../assets/person2.jpeg";
import PersonThree from "../assets/person3.jpeg";

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
    <main className="bg-main min-h-screen py-20 px-6">
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

        {/* Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {members.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -15 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-4xl overflow-hidden shadow-xl group"
            >
              {/* Image Container */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={m.img}
                  alt={m.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                {/* Social Overlay */}
                <div className="absolute inset-0 bg-blue-900/40 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href="#"
                    className="bg-white p-2 rounded-full text-blue-900 hover:bg-team-name hover:text-white transition"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="#"
                    className="bg-white p-2 rounded-full text-blue-900 hover:bg-team-name hover:text-white transition"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="#"
                    className="bg-white p-2 rounded-full text-blue-900 hover:bg-team-name hover:text-white transition"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-blue-900">{m.name}</h3>
                <p className="text-team-name font-bold text-sm uppercase tracking-widest mt-1 mb-4">
                  {m.role}
                </p>
                <p className="text-gray-500 text-sm italic">"{m.bio}"</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Team;
