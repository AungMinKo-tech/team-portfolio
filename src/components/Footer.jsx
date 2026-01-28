import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white pt-12 pb-6 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-white/10 pb-10">
        {/* Brand Info */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-black uppercase italic">
            One <span className="text-team-name">Tech MM</span>
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            Leading technology solutions provider in Myanmar. We build your
            dreams into reality.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-lg">Quick Links</h3>
          <div className="flex flex-col gap-2 text-gray-300 text-sm">
            <Link to="/" className="hover:text-team-name">
              Home
            </Link>
            <Link to="/about-us" className="hover:text-team-name">
              About Us
            </Link>
            <Link to="/team" className="hover:text-team-name">
              Team Member
            </Link>
            <Link to="/services" className="hover:text-team-name">
              Our Services
            </Link>
            <Link to="/contact" className="hover:text-team-name">
              Contact
            </Link>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-lg">Contact Us</h3>
          <p className="text-gray-300 text-sm">Yangon, Myanmar</p>
          <p className="text-gray-300 text-sm">info@onetechmm.com</p>
          <p className="text-team-name font-bold text-lg">+95 9 123 456 789</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6">
        <p className="text-[10px] md:text-sm text-gray-400">
          © 2026 One Tech MM. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
