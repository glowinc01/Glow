// HeroSection.tsx
import React from "react";

interface HeroSectionProps {
  imageUrl: string;
  title: string;
  description: string;
  badgeText: string;
  spanText?:string
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  imageUrl,
  title,
  description,
  badgeText,
  spanText
}) => {
  return (
    <div className="hero bg-white min-h-screen ">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse f">
        <img
          src={imageUrl}
          aria-hidden="true"
          className="w-2xl rounded-lg "
          alt=""
        />
        <div>
          <div className="text-[#001F3F] w-fit py-1 px-2 mb-7 rounded font-poppins text-[16px] bg-[#0A84FF15]">
            {badgeText}
          </div>
          <h1 className="font-bold font-poppins text-[36px] text-[#1A1A1A]">
            {title}
            <p className="text-[#0A84FF] font-poppins ">{spanText}</p>
          </h1>
          <p className="py-6 font-inter text-[#9FA7AF] text-[16px]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
