import React from "react";
import Logo from "../assets/logo.png";
import Testimonials from "../components/Testimonials";
import {
  FaArrowUp,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";
// import { useState, useReducer } from "react";

// type State = {
//   openList:boolean
// }

// type Action = {type: "increment" | "decrement" | "reset"}

// const reducer = (state:State, action:Action):State => {
//   switch(action.type){
//     case: "increment"
//       openList: {!state.openList}

//   }
// }

const Footer: React.FC = () => {
  // const [count, setCount] =  useState(0)
  // const [color, setColor] = useState("bg-red-900")
  // const [background, setBackground] = useReducer(reducer,{openList: false})
  return (
    <>
      <Testimonials />
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => window.scrollTo({ top: 20, behavior: "smooth" })}
          className="py-4 px-4 bg-blue-400 rounded-full shadow-lg cursor-pointer hover:bg-blue-500 transition"
        >
          <FaArrowUp className="text-white text-[30px]" />
        </button>
      </div>

      <footer className="bg-[#001F3F] text-white flex flex-col items-center justify-center">
        <div className="w-[90%] flex flex-col md:flex-row flex-wrap justify-between items-start gap-10 py-10">
          <aside className="flex flex-col items-start md:w-[220px] w-full">
            <div className="w-[100px] h-full flex justify-start items-center mb-4">
              <img src={Logo} alt="Glow Logo" className="w-[100px]" />
            </div>
            <p className="text-[15px] text-gray-300">
              Lagos, Nigeria <br />
              glowinc01@gmail.com
            </p>

            <div className="flex items-center mt-4 space-x-4">
              <FaFacebook className="text-[#0A84FF] w-6 h-6 cursor-pointer hover:opacity-80 transition" />
              <FaXTwitter className="text-[#0A84FF] w-6 h-6 cursor-pointer hover:opacity-80 transition" />
              <FaLinkedin className="text-[#0A84FF] w-6 h-6 cursor-pointer hover:opacity-80 transition" />
              <FaInstagram className="text-[#0A84FF] w-6 h-6 cursor-pointer hover:opacity-80 transition" />
            </div>
          </aside>

          {/* MAIN LINKS */}
          <nav className="flex flex-col gap-2 w-full sm:w-auto">
            <h6 className="font-inter font-bold text-[18px] mb-2">Main</h6>
            <a className="link link-hover text-gray-300 hover:text-[#0A84FF] transition">
              Who we are
            </a>
            <a className="link link-hover text-gray-300 hover:text-[#0A84FF] transition">
              What we do
            </a>
            <a className="link link-hover text-gray-300 hover:text-[#0A84FF] transition">
              Testimonials
            </a>
            <a className="link link-hover text-gray-300 hover:text-[#0A84FF] transition">
              Advertisement
            </a>
          </nav>

          {/* COMPANY LINKS */}
          <nav className="flex flex-col gap-2 w-full sm:w-auto">
            <h6 className="font-inter font-bold text-[18px] mb-2">Company</h6>
            <a className="link link-hover text-gray-300 hover:text-[#0A84FF] transition">
              Work
            </a>
            <a className="link link-hover text-gray-300 hover:text-[#0A84FF] transition">
              Service
            </a>
            <a className="link link-hover text-gray-300 hover:text-[#0A84FF] transition">
              About
            </a>
            <a className="link link-hover text-gray-300 hover:text-[#0A84FF] transition">
              Press kit
            </a>
          </nav>

          {/* RESOURCES LINKS */}
          <nav className="flex flex-col gap-2 w-full sm:w-auto">
            <h6 className="font-inter font-bold text-[18px] mb-2">Resources</h6>
            <a className="link link-hover text-gray-300 hover:text-[#0A84FF] transition">
              Case Studies
            </a>
            <a className="link link-hover text-gray-300 hover:text-[#0A84FF] transition">
              FAQS
            </a>
            <a className="link link-hover text-gray-300 hover:text-[#0A84FF] transition">
              Cookie policy
            </a>
          </nav>
        </div>

        {/* COPYRIGHT SECTION */}
        <aside className="border-t border-gray-700 w-full flex justify-center py-4 px-6 text-center">
          <p className="font-inter text-[14px] text-gray-400">
            Glow © {new Date().getFullYear()} — All rights reserved.
          </p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
