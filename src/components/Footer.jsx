import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-bg-dark text-white pt-20 pb-10 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/10 pb-12">
        {/* Brand Info */}
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-black uppercase italic tracking-tighter">
            One <span className="text-brand-gold">Tech MM</span>
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
            Leading technology solutions provider in Myanmar. We specialize in
            building cutting-edge digital dreams into reality.
          </p>
          {/* Social Icons*/}
          <div className="flex gap-4 text-slate-400">
            <div className="flex gap-4">
              {[
                {
                  icon: <FaFacebookF />,
                  link: "https://facebook.com/onetechmm",
                },
                {
                  icon: <FaLinkedinIn />,
                  link: "https://linkedin.com/company/onetechmm",
                },
                { icon: <FaTelegramPlane />, link: "https://t.me/onetechmm" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-300 hover:bg-brand-gold hover:text-brand-navy hover:border-brand-gold transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-5">
          <h3 className="font-bold text-lg text-white border-l-4 border-brand-gold pl-3">
            Navigation
          </h3>
          <div className="flex flex-col gap-3 text-slate-400 text-sm">
            <Link
              to="/"
              className="hover:text-brand-gold transition-colors underline-offset-4 hover:underline"
            >
              Home
            </Link>
            <Link
              to="/about-us"
              className="hover:text-brand-gold transition-colors underline-offset-4 hover:underline"
            >
              About Us
            </Link>
            <Link
              to="/team"
              className="hover:text-brand-gold transition-colors underline-offset-4 hover:underline"
            >
              Team Members
            </Link>
            <Link
              to="/services"
              className="hover:text-brand-gold transition-colors underline-offset-4 hover:underline"
            >
              Our Services
            </Link>
            <Link
              to="/contact"
              className="hover:text-brand-gold transition-colors underline-offset-4 hover:underline"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-5">
          <h3 className="font-bold text-lg text-white border-l-4 border-brand-gold pl-3">
            Get In Touch
          </h3>
          <div className="flex flex-col gap-2">
            <p className="text-slate-400 text-sm">Yangon, Myanmar</p>
            <p className="text-slate-400 text-sm">info@onetechmm.com</p>
            <p className="text-brand-gold font-black text-xl mt-2 tracking-tight">
              +95 9 123 456 789
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-10">
        <p className="text-[10px] md:text-xs text-slate-500 uppercase tracking-[0.2em]">
          © 2026 <span className="text-brand-gold font-bold">One Tech MM</span>.
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
