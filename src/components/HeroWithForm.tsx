import React from "react";
import { GoArrowRight, GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { IoCubeOutline } from "react-icons/io5";

const HeroWithForm: React.FC = () => {
  return (
    <>
      <div className="hero min-h-screen flex justify-center items-center">
        <div className="hero-content w-full items-center justify-between flex-col-reverse lg:flex-row-reverse gap-30 px-6 sm:px-10 lg:px-20 py-10">

          {/* LEFT SERVICES SECTION */}
          <div className="w-full lg:w-1/2 flex flex-col gap-10">
            {/* Card 1 */}
            <div className="flex justify-between items-center border-b pb-6 border-[#D9D9D9]">
              <div className="flex items-center gap-4">
                <IoCubeOutline className="text-[#001F3F] w-6 h-6" />
                <h1 className="text-[22px] sm:text-[26px] text-[#1A1A1A] font-bold font-poppins leading-snug">
                  Website <br /> Development
                </h1>
              </div>
              <Link to="/Webdev">
                <GoArrowUpRight className="w-8 h-8 text-[#1A1A1A]" />
              </Link>
            </div>

            {/* Card 2 */}
            <div className="flex justify-between items-center border-b pb-6 border-[#D9D9D9]">
              <div className="flex items-center gap-4">
                <IoCubeOutline className="text-[#001F3F] w-6 h-6" />
                <h1 className="text-[22px] sm:text-[26px] text-[#1A1A1A] font-bold font-poppins leading-snug">
                  Mobile App <br /> Development
                </h1>
              </div>
              <Link to="/Mobiledev">
                <GoArrowUpRight className="w-8 h-8 text-[#1A1A1A]" />
              </Link>
            </div>

            {/* Card 3 */}
            <div className="flex justify-between items-center border-b pb-6 border-[#D9D9D9]">
              <div className="flex items-center gap-4 hover:text-blue-600 transition-colors duration-300">
                <IoCubeOutline className="text-[#001F3F] w-6 h-6" />
                <h1 className="text-[22px] sm:text-[26px] text-[#1A1A1A] font-bold font-poppins leading-snug">
                  Digital Consulting
                </h1>
              </div>
              <GoArrowRight className="w-8 h-8 text-[#1A1A1A]" />
            </div>
          </div>

          {/* RIGHT FORM SECTION */}
          <div className="card w-full lg:w-1/2">
            <div className="card-body p-0 flex flex-col gap-5">
              <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#C1156F] to-[#7ABCFF] font-bold font-poppins text-[30px] sm:text-[36px] leading-tight">
                Get a free <br /> consultation
              </h1>

              <fieldset className="fieldset flex flex-col gap-4">
                <label className="label text-[16px]">Email</label>
                <input
                  type="email"
                  className="bg-[#FAFAFA] w-full h-[60px] sm:h-[70px] rounded-[5px] placeholder:text-[#9FA7AF] placeholder:text-[16px] sm:placeholder:text-[18px] placeholder:font-inter px-4"
                  placeholder="Email address"
                />

                <label className="label text-[16px]">Phone Number</label>
                <input
                  type="text"
                  className="bg-[#FAFAFA] w-full h-[60px] sm:h-[70px] rounded-[5px] placeholder:text-[#9FA7AF] placeholder:text-[16px] sm:placeholder:text-[18px] placeholder:font-inter px-4"
                  placeholder="Phone number"
                />

                <button className="rounded-[38px] h-[60px] sm:h-[70px] text-[16px] font-medium mt-4 bg-gradient-to-r from-[#C1156F] to-[#7ABCFF] text-white font-poppins">
                  Submit
                </button>
              </fieldset>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default HeroWithForm;
