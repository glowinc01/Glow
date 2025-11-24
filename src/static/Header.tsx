import React, { useState, useEffect } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Disable scrolling when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  return (
    <div className="flex w-full h-[70px] justify-center items-center bg-white sticky top-0 z-50 opacity-95 shadow-sm">
      <header className="w-[90%] flex justify-between items-center">
        {/* LOGO */}
        <div className="w-[100px] h-full flex justify-center items-center">
          <Link to="/">
            <img src={Logo} alt="Logo" className="w-auto h-[40px]" />
          </Link>
        </div>

        {/* NAV LINKS (Desktop) */}
        <nav className="hidden md:flex justify-center items-center space-x-8 font-inter">
          <Link
            to="/"
            className="text-black font-poppins text-[15px] font-medium hover:text-[#0A84FF] transition-colors"
          >
            Main
          </Link>
          <Link
            to="/Services"
            className="text-black font-poppins text-[15px] font-medium hover:text-[#0A84FF] transition-colors"
          >
            Services
          </Link>
          <Link
            to="/Work"
            className="text-black font-poppins text-[15px] font-medium hover:text-[#0A84FF] transition-colors"
          >
            Work
          </Link>
          <Link
            to="/About"
            className="text-black font-poppins text-[15px] font-medium hover:text-[#0A84FF] transition-colors"
          >
            About
          </Link>
        </nav>

        {/* BUTTON (Desktop only) */}
        <div className="hidden md:flex w-[120px] justify-center items-center">
          <Link to="/LetsTalk">
            <button className="border border-[#0A84FF] rounded-full text-[#1A1A1A] px-4 py-2 font-poppins text-[15px] transition-none hover:bg-transparent">
              Let's Talk
            </button>
          </Link>
        </div>

        {/* MOBILE MENU ICON */}
        <div className="flex md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-[#1A1A1A] focus:outline-none"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </header>

      {/* OFF-CANVAS MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-[75%] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-5 border-b border-gray-200">
          <img src={Logo} alt="Logo" className="h-[35px]" />
          <button
            className="text-3xl text-[#1A1A1A]"
          >
            <HiX />
          </button>
        </div>

        <nav className="flex flex-col items-start space-y-6 px-8 py-8 font-poppins text-[16px] font-medium">
          <Link
            to="/"
            className="text-black"
          >
            Main
          </Link>
          <Link
            to="/Services"
            className="text-black"
          >
            Services
          </Link>
          <Link
            to="/Work"
            className="text-black"
          >
            Work
          </Link>
          <Link
            to="/About"
            className="text-black"
          >
            About
          </Link>
          <Link
            to="/LetsTalk"
            className="border border-[#0A84FF] rounded-full text-[#1A1A1A] px-6 py-2 mt-4 cursor-pointer"
          >
            Let's Talk
          </Link>
        </nav>
      </div>

      {/* BACKDROP OVERLAY */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-opacity-30 backdrop-blur-sm md:hidden z-40"
        ></div>
      )}
    </div>
  );
};

export default Header;
