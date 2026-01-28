import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import Logo from "../../public/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-[#B8860B] font-bold border-b-2 border-[#B8860B]"
      : "text-white hover:text-[#B8860B] transition-all";

  return (
    <nav className="bg-blue-900 sticky top-0 z-100 shadow-lg">
      <div className="flex justify-between items-center xl:px-30 lg:px-20 px-10 h-20">
        {/* Logo */}
        <Link to="/" onClick={() => setIsOpen(false)}>
          <img src={Logo} alt="Logo" className="w-16 h-16 object-contain" />
        </Link>

        {/* Desktop Menu */}
        <div className="gap-8 hidden md:flex items-center">
          {["/", "/about-us", "/team", "/services", "/contact"].map((path) => {
            const label =
              path === "/"
                ? "HOME"
                : path.replace("/", "").replace("-", " ").toUpperCase();

            return (
              <NavLink
                key={path}
                to={path}
                end={path === "/"}
                className={linkClass}
              >
                {label}
              </NavLink>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden text-3xl text-white cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-blue-900 transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out md:hidden z-[-1] pt-24 px-10`}
      >
        <div className="flex flex-col gap-8 text-xl">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={linkClass}
          >
            Home
          </NavLink>
          <NavLink
            to="/about-us"
            onClick={() => setIsOpen(false)}
            className={linkClass}
          >
            About Us
          </NavLink>
          <NavLink
            to="/team"
            onClick={() => setIsOpen(false)}
            className={linkClass}
          >
            Team
          </NavLink>
          <NavLink
            to="/services"
            onClick={() => setIsOpen(false)}
            className={linkClass}
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className={linkClass}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
