import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import LogoLight from "../../public/logoLight.png";
import LogoDark from "../../public/logoDark.png";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-brand-gold font-bold border-b-2 border-brand-gold pb-1"
      : "text-black dark:text-white hover:text-brand-gold transition-all duration-300";

  return (
    <nav className="bg-bg-navbar dark:bg-bg-navbar-dark sticky top-0 z-100 shadow-lg">
      <div className="flex justify-between items-center xl:px-30 lg:px-20 px-10 h-20">
        {/* Logo */}
        <Link to="/" onClick={() => setIsOpen(false)}>
          {/* Light Mode */}
          <img
            src={LogoLight}
            alt="Logo Light"
            className="w-30 h-30 object-contain dark:hidden"
          />

          {/* Dark Mode */}
          <img
            src={LogoDark}
            alt="Logo Dark"
            className="w-30 h-30 object-contain hidden dark:block"
          />
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
        <ThemeToggle />

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
