import React from 'react'
import { IoCheckmark } from "react-icons/io5";
import { IoCheckmarkCircle } from "react-icons/io5";
import HeroImage from "../assets/image2.png";


const Mobiledev: React.FC = () => {
  return (
    <div className="flex items-center justify-center flex-col w-full">
      <div className="flex items-center justify-center bg-[#001F3F] w-full h-[300px]">
        <div className="flex items-center justify-center bg-[#001F3F] w-[90] flex-col">
          <h1 className=" font-poppins text-[20px] font-bold lg:text-[35px] text-center">
            Mobile <br /> Development
          </h1>
          <p className="font-inter font-medium text-[16px] text-[#FFFFFF] text-center mt-2">
            Encompasses building and maintaining websites, including front-end
            (user <br /> interface) and back-end (server-side) development.
          </p>
        </div>
      </div>
      <div className="w-full flex py-20 flex-col items-center justify-center">
        <div className="flex justify-center flex-col items-start w-[90%] mb-10">
          <h1 className="font-poppins text-black font-bold text-[#9FA7AF] text-[36px]">
            Service Description
          </h1>
          <p className="font-inter text-[16px] text-[#9FA7AF] mt-5">
            Web Development is the process of creating and building websites or
            web applications that are accessible via the internet. It <br />{" "}
            involves a range of tasks, including designing the user interface,
            developing the back-end functionality, and ensuring that the <br />{" "}
            website or web app is responsive and user-friendly. Web development
            encompasses both the visual aspects of a website and its <br />{" "}
            underlying technical infrastructure.
          </p>
        </div>
        <div className="w-full h-[600px] mt-5 flex items-center justify-between px-[5%]">
          <div className="w-[45%] h-[500px] overflow-hidden rounded-lg flex items-center justify-center">
            <img
              src={HeroImage}
              alt="Hero"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="flex flex-col gap-7  justify-center">
            <div className="flex items-center gap-5 hover:text-blue-600 transition-colors duration-300">
              <IoCheckmarkCircle className="text-[#0A84FF] w-[25px] h-[24px]" />
              <h1 className="text-[30px] text-[#1A1A1A] font-bold font-poppins">
                UI/UX Design
              </h1>
            </div>

            <div className="flex items-center gap-5 hover:text-blue-600 transition-colors duration-300">
              <IoCheckmarkCircle className="text-[#0A84FF] w-[25px] h-[24px]" />
              <h1 className="text-[30px] text-[#1A1A1A] font-bold font-poppins">
                Front-end Development
              </h1>
            </div>

            <div className="flex items-center gap-5 hover:text-blue-600 transition-colors duration-300">
              <IoCheckmarkCircle className="text-[#0A84FF] w-[25px] h-[24px]" />
              <h1 className="text-[30px] text-[#1A1A1A] font-bold font-poppins">
                Back-end Development
              </h1>
            </div>

            <div className="flex items-center gap-5 hover:text-blue-600 transition-colors duration-300">
              <IoCheckmarkCircle className="text-[#0A84FF] w-[25px] h-[24px]" />
              <h1 className="text-[30px] text-[#1A1A1A] font-bold font-poppins">
                Responsive Design
              </h1>
            </div>

            <div className="flex items-center gap-5 hover:text-blue-600 transition-colors duration-300">
              <IoCheckmarkCircle className="text-[#0A84FF] w-[25px] h-[24px]" />
              <h1 className="text-[30px] text-[#1A1A1A] font-bold font-poppins">
                E-commerce Features
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex  items-center justify-center">
        <div className="w-[90%] flex flex-col items-center justify-center ">
          <h2 className="font-poppins font-medium text-[36px] text-black">
            Pick The Right Plan For You
          </h2>
          <div className="flex w-full items-center justify-between">
            <div className="w-full min-h-screen flex justify-center items-center py-20">
              <div className="w-[350px] bg-[radial-gradient(circle_at_15%_30%,rgba(10,132,255,0.25)_2%,#001F3F_9%)] shadow-2xl shadow-gray-400/50 rounded-[20px] p-8 flex flex-col items-center gap-8 py-20 ">
                <div className="w-full text-center">
                  <h2 className="font-light font-poppins text-[15px] text-[#FFFFFF]">
                    Starts from
                  </h2>
                  <p className="text-[40px] font-bold  mt-1 opacity-90">
                    $15,000
                  </p>
                </div>

                <div className="flex flex-col gap-8 w-[70%] items-start justify-center">
                  <div className="flex items-center gap-1">
                    <IoCheckmark className="text-[#0A84FF] w-6 h-6" />

                    <h1 className="text-[18px] font-normal font-sans">
                      1 Landing Page
                    </h1>
                  </div>

                  <div className="flex items-center gap-1">
                    <IoCheckmark className=" w-6 h-6 text-[#0A84FF]" />
                    <h1 className="text-[18px] font-normal font-sans">
                      Expert UI/UX Design
                    </h1>
                  </div>

                  <div className="flex items-center gap-1">
                    <IoCheckmark className=" w-6 h-6 text-[#0A84FF]" />
                    <h1 className="text-[18px] font-normal font-sans">
                      Fully Responsive
                    </h1>
                  </div>

                  <div className="flex items-center gap-1">
                    <IoCheckmark className=" w-6 h-6 text-[#0A84FF]" />
                    <h1 className="text-[18px] font-normal font-sans">
                      Unlimited Revisions
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full min-h-screen flex justify-center items-center py-20">
              <div className="w-[350px] bg-[radial-gradient(circle_at_15%_30%,rgba(10,132,255,0.25)_2%,#001F3F_9%)] shadow-2xl shadow-gray-400/50 rounded-[20px] p-8 flex flex-col items-center gap-8 py-20">
                <div className="w-full text-center">
                  <h2 className="font-light font-poppins text-[15px] text-[#FFFFFF]">
                    Starts from
                  </h2>
                  <p className="text-[40px] font-bold  mt-1 opacity-90">
                    $15,000
                  </p>
                </div>

                <div className="flex flex-col gap-8 w-[70%] items-start justify-center">
                  <div className="flex items-center gap-1">
                    <IoCheckmark className="text-[#0A84FF] w-6 h-6" />

                    <h1 className="text-[18px] font-normal font-sans">
                      1 Landing Page
                    </h1>
                  </div>

                  <div className="flex items-center gap-1">
                    <IoCheckmark className=" w-6 h-6 text-[#0A84FF]" />
                    <h1 className="text-[18px] font-normal font-sans">
                      Expert UI/UX Design
                    </h1>
                  </div>

                  <div className="flex items-center gap-1">
                    <IoCheckmark className=" w-6 h-6 text-[#0A84FF]" />
                    <h1 className="text-[18px] font-normal font-sans">
                      Fully Responsive
                    </h1>
                  </div>

                  <div className="flex items-center gap-1">
                    <IoCheckmark className=" w-6 h-6 text-[#0A84FF]" />
                    <h1 className="text-[18px] font-normal font-sans">
                      Unlimited Revisions
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full min-h-screen flex justify-center items-center py-20">
              <div className="w-[350px] bg-[radial-gradient(circle_at_15%_30%,rgba(10,132,255,0.25)_2%,#001F3F_9%)] shadow-2xl shadow-gray-400/50 rounded-[20px] p-8 flex flex-col items-center gap-8 py-20">
                <div className="w-full text-center">
                  <h2 className="font-light font-poppins text-[15px] text-[#FFFFFF]">
                    Starts from
                  </h2>
                  <p className="text-[40px] font-bold  mt-1 opacity-90">
                    $15,000
                  </p>
                </div>

                <div className="flex flex-col gap-8 w-[70%] items-start justify-center">
                  <div className="flex items-center gap-1">
                    <IoCheckmark className="text-[#0A84FF] w-6 h-6" />

                    <h1 className="text-[18px] font-normal font-sans">
                      1 Landing Page
                    </h1>
                  </div>

                  <div className="flex items-center gap-1">
                    <IoCheckmark className=" w-6 h-6 text-[#0A84FF]" />
                    <h1 className="text-[18px] font-normal font-sans">
                      Expert UI/UX Design
                    </h1>
                  </div>

                  <div className="flex items-center gap-1">
                    <IoCheckmark className=" w-6 h-6 text-[#0A84FF]" />
                    <h1 className="text-[18px] font-normal font-sans">
                      Fully Responsive
                    </h1>
                  </div>

                  <div className="flex items-center gap-1">
                    <IoCheckmark className=" w-6 h-6 text-[#0A84FF]" />
                    <h1 className="text-[18px] font-normal font-sans">
                      Unlimited Revisions
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button className="btn btn-outline border-[#0A84FF] rounded-full text-[#1A1A1A] cursor-pointer w-full">
            Get Started
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mobiledev