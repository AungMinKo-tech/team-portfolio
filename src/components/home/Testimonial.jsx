import React from "react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const reviews = [
    {
      name: "U Ba",
      role: "CEO, ABC Co.",
      text: "One Tech MM ရဲ့ ဝန်ဆောင်မှုက မြန်ဆန်ပြီး အရည်အသွေး အရမ်းကောင်းပါတယ်။",
    },
    {
      name: "Daw Su",
      role: "Founder, Fashion Hub",
      text: "ကျွန်မတို့ရဲ့ Website ကို စိတ်တိုင်းကျ ဖန်တီးပေးလို့ ကျေးဇူးအများကြီးတင်ပါတယ်။",
    },
  ];

  return (
    <section className="py-24 px-6 transition-colors duration-500">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-brand-navy dark:text-white uppercase italic tracking-tighter">
            What Clients <span className="text-brand-gold">Say</span>
          </h2>
          <div className="w-20 h-1.5 bg-brand-gold mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="p-10 bg-white dark:bg-slate-800/40 rounded-3xl relative shadow-xl border border-slate-100 dark:border-white/5"
            >
              {/* Quote Icon - Gold Color */}
              <span className="text-7xl text-brand-gold absolute top-2 left-6 opacity-20 font-serif">
                “
              </span>

              <p className="text-slate-600 dark:text-slate-300 relative z-10 mb-6 leading-relaxed italic text-lg">
                {r.text}
              </p>

              <div className="border-t border-slate-100 dark:border-white/10 pt-4">
                <h4 className="font-bold text-brand-navy dark:text-brand-gold text-xl">
                  {r.name}
                </h4>
                <p className="text-xs text-slate-400 dark:text-slate-500 font-bold uppercase tracking-widest mt-1">
                  {r.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
