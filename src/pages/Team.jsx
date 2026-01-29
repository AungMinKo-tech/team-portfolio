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
    <main className="bg-bg-light dark:bg-bg-dark py-24 px-6 min-h-screen transition-colors duration-500 relative overflow-hidden">
      {/* Background Decor*/}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Page Title Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-black text-brand-navy dark:text-white uppercase italic tracking-tighter leading-tight">
              The People Behind <br />
              <span className="text-brand-gold">One Tech MM</span>
            </h1>

            {/* Divider Line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 100 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="h-2 bg-brand-gold mx-auto mt-6 rounded-full shadow-[0_0_15px_rgba(184,134,11,0.4)]"
            ></motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-slate-600 dark:text-slate-400 mt-8 font-medium text-lg max-w-xl mx-auto"
          >
            Passionate innovators committed to turning your digital visions into
            reality.
          </motion.p>
        </div>

        {/* Team Cards Grid */}
        <Card members={members} />
      </div>
    </main>
  );
};

export default Team;
