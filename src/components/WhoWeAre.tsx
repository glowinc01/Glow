import React from "react";
import HeroSection from "../components/HeroSection";
import HeroImage from "../assets/Group 1.png";
import Design from "../assets/design.png";
import Deploy from "../assets/deploy.png";
import Develop from "../assets/develop.png";
import Card from "../components/Card";
import { IoCubeOutline } from "react-icons/io5";
import heroImage from "../assets/hero-image.png";
import { FaPhoneAlt } from "react-icons/fa";
import subtract from "../assets/Subtract.png";

const WhoWeAre: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full overflow-hidden">
      {/* HERO SECTION */}
      <HeroSection
        badgeText="Who we are"
        imageUrl={HeroImage}
        title="We are more than just a company"
        description="We are architects of innovation, trailblazers of technological advancement, and partners in your success. As a dynamic and forward-thinking organization, we are dedicated to reshaping industries and empowering businesses to navigate the digital age with confidence."
      />

      {/* DESIGN / DEVELOP / DEPLOY */}
      <section className="w-[90%] mx-auto py-10 flex flex-col sm:flex-row items-center justify-around gap-10 text-center">
        <div className="flex flex-col items-center">
          <img src={Design} alt="Design" width={80} className="sm:w-[90px]" />
          <p className="font-poppins text-2xl sm:text-[36px] font-bold text-[#C2C2C2] mt-3">
            Design.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <img src={Develop} alt="Develop" width={80} className="sm:w-[90px]" />
          <p className="font-poppins text-2xl sm:text-[36px] font-bold text-[#C2C2C2] mt-3">
            Develop.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <img src={Deploy} alt="Deploy" width={80} className="sm:w-[90px]" />
          <p className="font-poppins text-2xl sm:text-[36px] font-bold text-[#C2C2C2] mt-3">
            Deploy.
          </p>
        </div>
      </section>

      {/* HOW CAN WE HELP YOU */}
      <section className="flex flex-col items-center justify-center py-10 w-[90%] mx-auto">
        <div className="flex flex-col items-center text-center mb-10">
          <div className="text-[#001F3F] w-fit py-1 px-2 mb-4 rounded font-poppins text-[14px] sm:text-[16px] bg-[#0A84FF15]">
            Who we are
          </div>
          <h3 className="font-poppins font-bold text-[26px] sm:text-[36px] text-[#1A1A1A]">
            How can we help you
          </h3>
        </div>

        {/* CARDS SECTION */}
        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-8">
          <Card
            headText="Mobile App"
            br="Development"
            subText="Creating captivating and user-friendly mobile applications that engage your audience and enhance your brand presence is a crucial aspect of business."
            footerText="Learn more"
            icon={
              <IoCubeOutline className="text-[#001F3F] w-[44px] h-[42px] mb-6" />
            }
          />

          <Card
            headText="Website"
            br="Development"
            subText="Creating captivating and user-friendly mobile applications that engage your audience and enhance your brand presence is a crucial aspect of business."
            footerText="Learn more"
            icon={
              <IoCubeOutline className="text-[#001F3F] w-[44px] h-[42px] mb-6" />
            }
          />

          <Card
            headText="Digital consulting"
            subText="Creating captivating and user-friendly mobile applications that engage your audience and enhance your brand presence is a crucial aspect of business."
            footerText="Learn more"
            icon={
              <IoCubeOutline className="text-[#001F3F] w-[44px] h-[42px] mb-6" />
            }
          />
        </div>
      </section>

      {/* DECORATIVE IMAGE */}
      <section className="relative w-[90%] mx-auto flex justify-end mb-[-90px]">
        <img
          src={subtract}
          alt=""
          className="w-[90px] sm:w-[125px] h-auto object-contain"
        />
      </section>

      {/* CTA SECTION */}
      <section
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-full flex justify-center items-center py-16 text-white text-center sm:text-left bg-black"
      >
        <div className="w-[90%] flex flex-col sm:flex-row justify-between items-center gap-8 ">
          <div className="flex flex-col items-center sm:items-start">
            <h1 className="text-[32px] sm:text-[48px] font-poppins font-bold leading-tight mb-4">
              Let's build <br /> something different
            </h1>
            <p className="text-[15px] sm:text-[16px] font-inter text-[#9FA7AF] max-w-[600px]">
              Take the first step towards a brighter future and supercharge your
              business with cutting-edge technologies, expert guidance, and
              unparalleled support.
            </p>
          </div>

          <button className="flex items-center cursor-pointer justify-center gap-2 border-none rounded-full bg-[#0A84FF] text-white font-poppins px-6 py-4 hover:bg-[#0066CC] transition-all">
            <span>Get In Touch</span>
            <FaPhoneAlt />
          </button>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;
