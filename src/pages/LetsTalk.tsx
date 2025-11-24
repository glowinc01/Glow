import React from "react";

const LetsTalk: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center  w-full">
      <div className="flex items-center justify-center w-full bg-[#001F3F] h-[300px]">
        <h1 className="font-poppins font-bold text-[35px] ">Talk to us</h1>
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="w-full items-center justify-center py-20 px-4 sm:px-8 lg:px-16">
          <div className="w-full flex   flex-col lg:flex-row justify-between items-start gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-4xl sm:text-5xl font-extrabold pb-4 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#C1156F] to-[#7ABCFF]">
                  Let's discuss your project
                </span>
              </h2>
              <p className="max-w-md text-gray-600 text-base mt-4">
                Our dedicated team of 5 experts is committed to understanding
                your unique requirements and helping you take your first steps
                with your innovative ideas.
              </p>
            </div>

            <div className="w-full lg:w-1/2 p-6 sm:p-8 bg-white rounded-xl shadow-2xl">
              <form className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Name*"
                  className="w-full p-4 bg-[#F5F5F5] rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0A84FF] transition-all duration-200"
                  required
                />

                {/* Input Field: Last Name */}
                <input
                  type="text"
                  placeholder="Last Name*"
                  className="w-full p-4 bg-[#F5F5F5] rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0A84FF] transition-all duration-200"
                  required
                />

                {/* Input Field: Email Address */}
                <input
                  type="email"
                  placeholder="Email address*"
                  className="w-full p-4 bg-[#F5F5F5] rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0A84FF] transition-all duration-200"
                  required
                />

                {/* Textarea Field: Message */}
                <textarea
                  placeholder="Message*"
                  rows={4}
                  className="w-full p-4 bg-[#F5F5F5] rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0A84FF] transition-all duration-200 resize-none"
                  required
                ></textarea>

                {/* Submit Button with Gradient */}
                <button
                  type="submit"
                  className="mt-2 w-full py-4 px-6 text-white font-semibold rounded-[38px] text-lg 
                         bg-gradient-to-r from-[#C1156F] to-[#7ABCFF] 
                         hover:from-[#E83C72] hover:to-[#2C95FF] 
                         transition-all duration-300 flex justify-center items-center gap-2 shadow-lg"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetsTalk;
