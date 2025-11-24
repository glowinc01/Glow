import React from "react";
import HeroSection from "../components/HeroSection";
import HeroImage from "../assets/Group 1.png";
import LatestProject from "../components/LatestProject";
import image from "../assets/minimalism-web-design-1536x922 2.png";

const Work: React.FC = () => {
  return (
    <div>
      <HeroSection
        badgeText="Our Work"
        imageUrl={HeroImage}
        title="Case Studies"
        description="Explore the transformative journey as Tech collaboratively empowers clients to achieve their digital innovation goals."
      />

      {/* TOP SECTION */}
      <div className="w-full px-6 sm:px-10 lg:px-20 pt-10 flex flex-col lg:flex-row justify-between gap-5">
        <div>
          <div className="text-[#001F3F] w-fit py-1 px-2 mb-4 sm:mb-7 rounded font-poppins text-[14px] sm:text-[16px] bg-[#0A84FF15]">
            <p>Our Work</p>
          </div>
          <h1 className="font-bold font-poppins text-[26px] sm:text-[32px] lg:text-[36px] text-[#1A1A1A]">
            Our Latest Works
          </h1>
        </div>

        <button className="btn btn-outline border-[#0A84FF] rounded-full text-[#1A1A1A] cursor-pointer w-fit">
          View More
        </button>
      </div>

      {/* PROJECT LIST */}
      <div className="w-full flex flex-col justify-center py-10 sm:py-16 lg:py-20 items-center">
        <div className="w-[95%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {[...Array(6)].map((_, index) => (
            <LatestProject
              key={index}
              image={image}
              title="Enhancing Market Reach with E-commerce Integration"
              description="Discover how our IT consulting agency revolutionized XYZ Corporation's operations with a custom dashboard, providing real-time insights, reducing downtime."
              tags="View Project"
            />
          ))}
        </div>

        {/* PAGINATION */}
        <div className="join mt-10">
          <button className="join-item btn">1</button>
          <button className="join-item btn">2</button>
          <button className="join-item btn">...</button>
          <button className="join-item btn">99</button>
          <button className="join-item btn">100</button>
        </div>
      </div>
    </div>
  );
};

export default Work;
