import React, { type ReactNode } from "react";

interface CardProps {
  headText: string;
  icon?: ReactNode;
  subText: string;
  footerText: string;
  br?: string;
}

const Card: React.FC<CardProps> = ({
  headText,
  icon,
  subText,
  footerText,
  br,
}) => {
  return (
    <div
      className={`bg-white w-[400px] min-h-[350px] lg:h-[441px] rounded-[20px] flex justify-center items-center shadow-md p-5 sm:p-6`}
      style={{ boxShadow: "0px 0px 15px #00000012" }}
    >
      <div className="flex flex-col items-start w-[8000000px] justify-center">
        {/* Icon */}
        {icon && <div className="mb-3 sm:mb-4">{icon}</div>}

        {/* Head Text */}
        <h1 className="font-bold font-poppins text-[#1A1A1A] text-[18px] sm:text-[20px] lg:text-[24px] leading-snug mb-1">
          {headText}
        </h1>

        {/* Optional line break or extra heading */}
        {br && (
          <p className="font-bold font-poppins text-[#1A1A1A] text-[18px] sm:text-[20px] lg:text-[24px] leading-snug mb-2">
            {br}
          </p>
        )}

        {/* Subtext */}
        <p className="font-inter font-semibold text-[14px] sm:text-[15px] lg:text-[16px] text-[#9FA7AF] mb-4 leading-relaxed">
          {subText}
        </p>

        {/* Footer Text */}
        <h6 className="text-[#7ABCFF] font-inter font-semibold text-[14px] sm:text-[15px] lg:text-[16px]">
          {footerText}
        </h6>
      </div>
    </div>
  );
};

export default Card;
