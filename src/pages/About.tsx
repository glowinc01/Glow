import React from "react";
import HeroSection from "../components/HeroSection";
import HeroImage from "../assets/Group 1.png";
import Image1 from "../assets/image5.png"
import image2 from "../assets/image3.png"
import image3 from "../assets/image4.png"
import image4 from "../assets/image1.png"
// import image5 from "../assets/Group 5.png"

const About: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-full flex-col ">
      <HeroSection
        badgeText="About Us"
        imageUrl={HeroImage}
        title="We help online businesses grow."
        spanText="Together."
        description="We are architects of innovation, trailblazers of technological advancement, and partners in your success. As a dynamic and forward-thinking organization, we are dedicated to reshaping industries and empowering businesses to navigate the digital age with confidence."
      />
      {/* Hero Section */}
      <div className="hero bg-[#001F3FFC] min-h-screen">
        <div className="hero-content flex flex-col lg:flex-row-reverse justify-between items-center w-full px-4 sm:px-6 md:px-12 py-10">
          <img
            src={HeroImage}
            alt="Hero"
            className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl object-contain"
          />
          <div className="flex flex-col items-start justify-center space-y-10 mt-10 lg:mt-0">
            {/* Section 1 */}
            <div>
              <h1 className="font-bold font-poppins text-2xl sm:text-3xl md:text-4xl text-white">
                Flexible & Understanding
              </h1>
              <p className="mt-4 font-inter text-gray-400 text-base sm:text-lg leading-relaxed">
                We understand that life is full of twists and turns, and
                sometimes plans need to be adjusted. That's why we take a
                dynamic and accommodating approach to provide you with tailored
                solutions.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h1 className="font-bold font-poppins text-2xl sm:text-3xl md:text-4xl text-white">
                Growth & Development
              </h1>
              <p className="mt-4 font-inter text-gray-400 text-base sm:text-lg leading-relaxed">
                We understand that growth takes many forms – from personal
                development to organizational advancement. Our mission is to be
                your partner in this transformative journey, providing you with
                the resources, tools, and guidance you need to thrive.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h1 className="font-bold font-poppins text-2xl sm:text-3xl md:text-4xl text-white">
                Open & Transparent
              </h1>
              <p className="mt-4 font-inter text-gray-400 text-base sm:text-lg leading-relaxed">
                We understand that transparency is not just a buzzword; it's a
                guiding principle that influences everything we do. From our
                communication with clients, partners, and team members to our
                business practices and decision-making, we strive to be
                forthright and candid.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section: Why we are better */}
      <div className="hero flex flex-col py-20 px-4 sm:px-6 md:px-12 space-y-20">
        {/* Feature 1 */}
        <div className="hero-content flex flex-col lg:flex-row-reverse items-center justify-between gap-8">
          <img
            src={Image1}
            alt="Feature 1"
            className="w-full max-w-sm sm:max-w-md md:max-w-lg rounded-lg object-cover"
          />
          <div className="flex flex-col">
            <div className="text-[#001F3F] w-fit py-1 px-2 mb-5 rounded font-poppins text-sm sm:text-[16px] bg-[#0A84FF15]">
              Why we are better
            </div>
            <h1 className="font-bold font-poppins text-2xl sm:text-3xl md:text-4xl text-[#1A1A1A]">
              Transparent communication and collaboration
            </h1>
            <p className="mt-4 font-inter text-gray-400 text-base sm:text-lg leading-relaxed">
              We take pride in our exceptional team of experts who bring a
              wealth of experience to every project. With years of industry
              knowledge and a passion for innovation, our team is dedicated to
              delivering top-notch solutions that exceed your expectations.
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="hero-content flex flex-col lg:flex-row items-center justify-between gap-8">
          <img
            src={image2}
            alt="Feature 2"
            className="w-full max-w-sm sm:max-w-md md:max-w-lg rounded-lg object-cover"
          />
          <div className="flex flex-col">
            <h1 className="font-bold font-poppins text-2xl sm:text-3xl md:text-4xl text-[#1A1A1A]">
              Experience excellence with our expert team
            </h1>
            <p className="mt-4 font-inter text-gray-400 text-base sm:text-lg leading-relaxed">
              We take pride in our exceptional team of experts who bring a
              wealth of experience to every project. With years of industry
              knowledge and a passion for innovation, our team is dedicated to
              delivering top-notch solutions that exceed your expectations.
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="hero-content flex flex-col lg:flex-row-reverse items-center justify-between gap-8">
          <img
            src={image3}
            alt="Feature 3"
            className="w-full max-w-sm sm:max-w-md md:max-w-lg rounded-lg object-cover"
          />
          <div className="flex flex-col">
            <h1 className="font-bold font-poppins text-2xl sm:text-3xl md:text-4xl text-[#1A1A1A]">
              Customized solutions for your unique needs
            </h1>
            <p className="mt-4 font-inter text-gray-400 text-base sm:text-lg leading-relaxed">
              One size does not fit all, and we understand that your needs are
              unique. That's why we offer fully customized solutions tailored to
              your specific requirements. From the initial consultation to the
              final implementation, we collaborate closely with you to ensure
              the perfect fit for your goals.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="w-full flex flex-col items-center justify-center py-20 px-4 sm:px-6 md:px-12">
        <h1 className="text-[#1A1A1A] font-poppins font-bold text-2xl sm:text-3xl md:text-4xl mb-12 text-center">
          Meet our team
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl">
          {/* Team Member 1 */}
          <div className="flex flex-col items-center">
            <img
              src={image4}
              alt="Team member 1"
              className="w-full h-auto rounded-lg object-cover"
            />
            <p className="mt-3 text-[#1A1A1A] text-center font-medium text-lg sm:text-xl font-poppins">
              Edunfunke Maxwell
            </p>
            <p className="mt-2 text-gray-400 text-center font-medium text-sm sm:text-base font-poppins">
              Frontend Developer
            </p>
          </div>

          {/* Team Member 2 */}
          <div className="flex flex-col items-center">
            <img
              src={image4}
              alt="Team member 2"
              className="w-full h-auto rounded-lg object-cover"
            />
            <p className="mt-3 text-[#1A1A1A] text-center font-medium text-lg sm:text-xl font-poppins">
              Akalugwu Desmond
            </p>
            <p className="mt-2 text-gray-400 text-center font-medium text-sm sm:text-base font-poppins">
              UI UX Designer
            </p>
          </div>

          {/* Team Member 3 */}
          <div className="flex flex-col items-center">
            <img
              src={image4}
              alt="Team member 3"
              className="w-full h-auto rounded-lg object-cover"
            />
            <p className="mt-3 text-[#1A1A1A] text-center font-medium text-lg sm:text-xl font-poppins">
              Mumuni Abdulazeez
            </p>
            <p className="mt-2 text-gray-400 text-center font-medium text-sm sm:text-base font-poppins">
              Frontend Developer & Product Manager
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={image4}
              alt="Team member 3"
              className="w-full h-auto rounded-lg object-cover"
            />
            <p className="mt-3 text-[#1A1A1A] text-center font-medium text-lg sm:text-xl font-poppins">
              Egbon Gabu
            </p>
            <p className="mt-2 text-gray-400 text-center font-medium text-sm sm:text-base font-poppins">
              Close Tester
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={image4}
              alt="Team member 3"
              className="w-full h-auto rounded-lg object-cover"
            />
            <p className="mt-3 text-[#1A1A1A] text-center font-medium text-lg sm:text-xl font-poppins">
              David Chukwuchebem
            </p>
            <p className="mt-2 text-gray-400 text-center font-medium text-sm sm:text-base font-poppins">
              Backend Developer
            </p>
          </div>

          {/* Add more team members here if needed */}
        </div>
      </div>
    </div>
  );
};

export default About;
