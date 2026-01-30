import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaTelegramPlane,
} from "react-icons/fa";
import { members } from "@/data/team.js";

const Card = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {members?.map((m, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="bg-white dark:bg-slate-900/60 rounded-3xl overflow-hidden shadow-lg border border-slate-100 dark:border-white/5 group backdrop-blur-sm"
        >
          {/* Image Container */}
          <div className="relative h-72 overflow-hidden">
            <img
              src={m.avator}
              alt={m.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Social */}
            <div className="absolute inset-0 bg-brand-navy/60 backdrop-blur-sm flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
              <SocialIcon href={m.socials?.facebook} icon={<FaFacebookF />} />
              <SocialIcon href={m.socials?.linkedin} icon={<FaLinkedinIn />} />
              <SocialIcon href={m.socials?.github} icon={<FaGithub />} />
              <SocialIcon
                href={m.socials?.telegram}
                icon={<FaTelegramPlane />}
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6 text-center">
            <h3 className="text-xl font-black text-brand-navy dark:text-white uppercase italic tracking-tight">
              {m.name}
            </h3>
            <p className="text-brand-gold font-bold text-[10px] uppercase tracking-widest mt-1 mb-3">
              {m.role}
            </p>
            <div className="w-8 h-0.5 bg-brand-gold/30 mx-auto mb-3 rounded-full"></div>
            <p className="text-slate-500 dark:text-slate-400 text-xs italic leading-relaxed line-clamp-2 px-4">
              "{m.bio}"
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// Social Icon Component
const SocialIcon = ({ href, icon }) => (
  <a
    href={href || "#"}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 bg-white/10 hover:bg-brand-gold text-white hover:text-brand-navy rounded-full flex items-center justify-center transition-all duration-300 border border-white/20 hover:border-brand-gold shadow-lg"
  >
    {icon}
  </a>
);

export default Card;
