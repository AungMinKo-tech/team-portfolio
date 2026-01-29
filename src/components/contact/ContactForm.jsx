import React from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  return (
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
  );
};

export default ContactForm;
