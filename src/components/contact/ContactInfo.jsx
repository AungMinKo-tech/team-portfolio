import React from "react";
import { motion } from "framer-motion";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { FaFacebook, FaLinkedin, FaTelegram } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="lg:col-span-1 space-y-4">
      {[
        {
          icon: <HiPhone />,
          label: "Call Us",
          val: "+95 9 123 456 789",
          color: "bg-blue-600",
        },
        {
          icon: <HiMail />,
          label: "Email Us",
          val: "info@onetechmm.com",
          color: "bg-team-name",
        },
        {
          icon: <HiLocationMarker />,
          label: "Location",
          val: "Yangon, Myanmar",
          color: "bg-gray-800",
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
          className="bg-white p-6 rounded-3xl shadow-sm flex items-center gap-5 border border-gray-100"
        >
          <div className={`${item.color} text-white p-4 rounded-2xl text-2xl`}>
            {item.icon}
          </div>
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              {item.label}
            </p>
            <p className="text-blue-900 font-bold">{item.val}</p>
          </div>
        </motion.div>
      ))}

      {/* Social Links */}
      <div className="bg-main p-8 rounded-3xl text-center">
        <h4 className="font-bold text-blue-900 mb-4 uppercase">
          Follow Our Socials
        </h4>
        <div className="flex justify-center gap-4">
          <a
            href="#"
            className="text-2xl text-blue-600 hover:text-team-name transition"
          >
            <FaFacebook />
          </a>
          <a
            href="#"
            className="text-2xl text-blue-600 hover:text-team-name transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="#"
            className="text-2xl text-blue-600 hover:text-team-name transition"
          >
            <FaTelegram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
