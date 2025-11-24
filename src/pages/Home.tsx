import React from "react";
import Hero from "../components/Hero";
import WhoWeAre from "../components/WhoWeAre";
import LatestProject from "../components/LatestProject";
import image from "../assets/minimalism-web-design-1536x922 2.png";

const Home: React.FC = () => {
  return (
    <div className="vh-100 w-full bg-white">
      <Hero />
      <WhoWeAre />
      <div className="w-full px-6 sm:px-10 lg:px-20 pt-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        {/* Left Section (Title + Tag) */}
        <div>
          <div className="text-[#001F3F] w-fit py-1 px-2 mb-4 rounded font-poppins text-[14px] sm:text-[16px] bg-[#0A84FF15]">
            <p>Our Work</p>
          </div>
          <h1 className="font-bold font-poppins text-[28px] sm:text-[32px] lg:text-[36px] text-[#1A1A1A]">
            Our Latest Works
          </h1>
        </div>

        {/* Button */}
        <button className="btn btn-outline border-[#0A84FF] rounded-full text-[#1A1A1A] font-poppins text-[14px] sm:text-[16px] px-6 py-2 cursor-pointer w-fit sm:w-fit">
          View More
        </button>
      </div>

      {/* Project Grid */}
      <div className="w-full flex justify-center py-10 sm:py-16 items-center">
        <div className="w-[90%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center">
          <LatestProject
            image={image}
            title="Enhancing Market Reach with E-commerce Integration"
            description="Discover how our IT consulting agency revolutionized XYZ Corporation's operations with a custom dashboard, providing real-time insights, reducing downtime."
            tags="View Project"
          />
          <LatestProject
            image={image}
            title="Enhancing Market Reach with E-commerce Integration"
            description="Discover how our IT consulting agency revolutionized XYZ Corporation's operations with a custom dashboard, providing real-time insights, reducing downtime."
            tags="View Project"
          />
          <LatestProject
            image={image}
            title="Enhancing Market Reach with E-commerce Integration"
            description="Discover how our IT consulting agency revolutionized XYZ Corporation's operations with a custom dashboard, providing real-time insights, reducing downtime."
            tags="View Project"
          />
          <LatestProject
            image={image}
            title="Enhancing Market Reach with E-commerce Integration"
            description="Discover how our IT consulting agency revolutionized XYZ Corporation's operations with a custom dashboard, providing real-time insights, reducing downtime."
            tags="View Project"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;


