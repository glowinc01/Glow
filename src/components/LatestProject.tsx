import React from "react";

interface CardProps {
  image: string;
  title: string;
  description: string;
  tags?: string;
}

const latestProject: React.FC<CardProps> = ({
  image,
  title,
  description,
  tags,
  
}) => {
  return (
    <div className="w-full flex justify-center">
      <div
        className={`bg-white shadow-none border-none rounded-none 
    w-full max-w-[600px] sm:w-[90%] md:w-[350px] lg:w-[400px] 
    flex flex-col justify-center items-center card bg-base-100`}
      >
        <figure className="w-full">
          <img
            src={image}
            alt={title}
            className="w-full h-auto object-cover rounded-t-none"
          />
        </figure>

        <div className="card-body px-4 sm:px-5 md:px-6">
          <h2 className="card-title font-poppins font-bold text-[18px] sm:text-[16px] text-[#1A1A1A] leading-tight">
            {title}
          </h2>

          <p className="font-semibold font-inter text-[#9FA7AF] text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed">
            {description}
          </p>

          <p className="text-[#7ABCFF] font-inter text-[15px] sm:text-[16px] mt-2 cursor-pointer hover:underline">
            {tags}
          </p>
        </div>
      </div>
    </div>
  );
};

export default latestProject;
