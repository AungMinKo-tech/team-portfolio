import React from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="lg:col-span-2 bg-white dark:bg-slate-900/60 p-8 md:p-12 rounded-[3rem] shadow-2xl border border-slate-100 dark:border-white/5 backdrop-blur-md transition-all duration-500"
    >
      <h2 className="text-3xl font-black text-brand-navy dark:text-brand-gold mb-10 uppercase italic tracking-tight">
        Send Us a{" "}
        <span className="text-brand-gold dark:text-white">Message</span>
      </h2>

      <form className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Name Input */}
          <div className="flex flex-col gap-3">
            <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] ml-2">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Name"
              className="bg-slate-50 dark:bg-white/5 p-5 rounded-2xl border border-slate-100 dark:border-white/10 text-brand-navy dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-brand-gold outline-none transition-all duration-300 shadow-sm"
            />
          </div>

          {/* Email Input */}
          <div className="flex flex-col gap-3">
            <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] ml-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="john@example.com"
              className="bg-slate-50 dark:bg-white/5 p-5 rounded-2xl border border-slate-100 dark:border-white/10 text-brand-navy dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-brand-gold outline-none transition-all duration-300 shadow-sm"
            />
          </div>
        </div>

        {/* Message Input */}
        <div className="flex flex-col gap-3">
          <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] ml-2">
            How can we help you?
          </label>
          <textarea
            rows="5"
            placeholder="Tell us about your project..."
            className="bg-slate-50 dark:bg-white/5 p-5 rounded-2xl border border-slate-100 dark:border-white/10 text-brand-navy dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-brand-gold outline-none transition-all duration-300 shadow-sm resize-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{
            scale: 1.02,
            boxShadow: "0 20px 40px rgba(184,134,11,0.2)",
          }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-brand-navy dark:bg-brand-gold text-white dark:text-brand-navy font-black py-5 rounded-2xl uppercase tracking-[0.3em] text-sm shadow-xl transition-all duration-300"
        >
          Send Message
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
