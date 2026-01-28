import React from "react";
import { motion } from "framer-motion";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { FaFacebook, FaLinkedin, FaTelegram } from "react-icons/fa";

const Contact = () => {
  return (
    <main className="min-h-screen bg-[#f2f2f2] pb-20">
      {/* Header */}
      <section className="py-20 bg-blue-900 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-black text-white uppercase italic"
        >
          Get In <span className="text-team-name">Touch</span>
        </motion.h1>
        <p className="text-blue-100 mt-4 max-w-lg mx-auto text-sm">
          For your project or any other inquiries, please contact us at any
          time.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 -mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 1. Contact Info Cards */}
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
                <div
                  className={`${item.color} text-white p-4 rounded-2xl text-2xl`}
                >
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

          {/* 2. Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl"
          >
            <h2 className="text-2xl font-black text-blue-900 mb-8 uppercase italic">
              Send Us a Message
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-gray-500 uppercase ml-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="bg-[#f8f8f8] p-4 rounded-2xl border-none focus:ring-2 focus:ring-team-name outline-none transition"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-gray-500 uppercase ml-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="bg-[#f8f8f8] p-4 rounded-2xl border-none focus:ring-2 focus:ring-team-name outline-none transition"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-gray-500 uppercase ml-2">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="How can we help you?"
                  className="bg-[#f8f8f8] p-4 rounded-2xl border-none focus:ring-2 focus:ring-team-name outline-none transition resize-none"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-blue-600 text-white font-black py-4 rounded-2xl uppercase tracking-widest shadow-lg shadow-blue-200 hover:bg-blue-700 transition"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
