import React from "react";
import { motion } from "framer-motion";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { FaFacebookF, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";

const ContactInfo = () => {
  const contactData = [
    {
      icon: <HiPhone />,
      label: "Call Us",
      val: "+95 9 123 456 789",
    },
    {
      icon: <HiMail />,
      label: "Email Us",
      val: "info@onetechmm.com",
    },
    {
      icon: <HiLocationMarker />,
      label: "Location",
      val: "Yangon, Myanmar",
    },
  ];

  return (
    <div className="flex flex-col gap-5">
      {contactData.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className="bg-white dark:bg-slate-900/60 p-6 rounded-4xl shadow-xl dark:shadow-2xl border border-slate-100 dark:border-white/5 flex items-center gap-6 backdrop-blur-md group hover:border-brand-gold/30 transition-all duration-300"
        >
          {/* Icon Container - Gold for all to keep it clean */}
          <div className="bg-brand-navy dark:bg-brand-gold text-brand-gold dark:text-brand-navy p-4 rounded-2xl text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
            {item.icon}
          </div>

          <div>
            <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-1">
              {item.label}
            </p>
            <p className="text-brand-navy dark:text-white font-black text-lg tracking-tight">
              {item.val}
            </p>
          </div>
        </motion.div>
      ))}

      {/* Social Links Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-brand-navy dark:bg-slate-900/80 p-8 rounded-[2.5rem] text-center border border-white/5 shadow-2xl relative overflow-hidden"
      >
        {/* Subtle Background Glow */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-gold/10 blur-2xl rounded-full"></div>

        <h4 className="font-black text-white dark:text-brand-gold mb-6 uppercase italic tracking-widest text-sm">
          Follow Our Socials
        </h4>

        <div className="flex justify-center gap-5">
          {[
            { icon: <FaFacebookF />, link: "#" },
            { icon: <FaLinkedinIn />, link: "#" },
            { icon: <FaTelegramPlane />, link: "#" },
          ].map((soc, idx) => (
            <motion.a
              key={idx}
              href={soc.link}
              whileHover={{ y: -5, scale: 1.1 }}
              className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-xl text-brand-gold hover:bg-brand-gold hover:text-brand-navy transition-all duration-300 border border-white/10"
            >
              {soc.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ContactInfo;
