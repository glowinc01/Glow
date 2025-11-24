import React from "react";
import heroImage from "../assets/hero-image.png";
import { colors } from "../components/theme";

const Hero: React.FC = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-full min-h-[400px] flex justify-center items-center bg-black py-10 px-6 sm:px-10"
      >
        <div className="w-full max-w-[90%] flex flex-col justify-center items-start text-left">
          <h1 className="font-poppins font-bold text-white text-[32px] sm:text-[40px] md:text-[48px] leading-tight">
            Experience where <br className="hidden sm:block" /> creativity meets
            logic
          </h1>

          <div className="flex justify-start items-start sm:items-center gap-2 mt-6">
            <button className="btn btn-primary w-fit sm:w-auto text-[14px] sm:text-[16px] px-6 py-3 rounded-full">
              Start a project
            </button>

            <button
              className="btn btn-outline btn-info w-fit sm:w-auto text-[14px] sm:text-[16px] px-6 py-3 rounded-full"
              style={{ color: colors.background }}
            >
              Our works
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
