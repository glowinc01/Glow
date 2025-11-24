import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";
import Card from "../components/Card";
import StarRating from "../components/StarRating";
import {Link} from "react-router-dom"

const testimonialsData = [
  {
    id: 1,
    subText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, sit. Nisi eveniet quo expedita illum dolores enim ratione placeat provident voluptatum molestias.",
    footerText: "Bisola Ann",
  },
  {
    id: 2,
    subText:
      "Explicabo quis commodi, voluptate numquam odio doloremque? Necessitatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    footerText: "David K.",
  },
  {
    id: 3,
    subText:
      "Enim ratione placeat provident voluptatum molestias. Explicabo quis commodi voluptate numquam odio doloremque.",
    footerText: "Sarah B.",
  },
  {
    id: 4,
    subText:
      "Nisi eveniet quo expedita illum dolores enim ratione placeat provident voluptatum molestias.",
    footerText: "John A.",
  },
];

const Testimonials: React.FC = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: "40px",
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 2, centerPadding: "30px" },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1, centerPadding: "60px" },
      },
      { breakpoint: 768, settings: { slidesToShow: 1, centerPadding: "30px" } },
      { breakpoint: 640, settings: { slidesToShow: 1, centerPadding: "10px" } },
    ],
  };

  return (
    <>
      <section className="w-full flex justify-center py-12 sm:py-16 bg-white overflow-hidden">
        <div className="w-[90%] flex flex-col-reverse lg:flex-row-reverse items-center gap-16">
          {/* Carousel Section */}
          <div className="w-full lg:w-[60%] ">
            <Slider {...sliderSettings}>
              {testimonialsData.map(({ id, subText, footerText }) => (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="px-2 sm:px-3"
                >
                  <div className="flex justify-center gap-5">
                    <Card
                      icon={<StarRating />}
                      headText=""
                      subText={subText}
                      footerText={footerText}
                      // Optional responsive card styling:
                      // className="shadow-lg rounded-2xl border border-gray-100 w-[95%] sm:w-[85%] md:w-[80%] lg:w-[90%] bg-white p-6"
                    />
                  </div>
                </motion.div>
              ))}
            </Slider>
          </div>

          {/* Text Section */}
          <motion.div
            className="w-full lg:w-[40%] text-center lg:text-left flex flex-col items-center lg:items-start"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-[#001F3F] w-fit py-1 px-3 mb-5 sm:mb-6 rounded font-poppins text-[14px] sm:text-[16px] bg-[#0A84FF15]">
              <p>Testimonials</p>
            </div>

            <h2 className="font-bold font-poppins text-[26px] sm:text-[32px] lg:text-[36px] text-[#1A1A1A] leading-snug mb-3 sm:mb-4">
              Trusted by more than <br className="hidden sm:block" />
              1000+ companies <br className="hidden sm:block" />
              around the world
            </h2>

            <p className="font-inter text-[#9FA7AF] text-[14px] sm:text-[16px] font-medium leading-relaxed max-w-lg">
              We’re more than just a business — we’re a community driven by our
              passion for serving customers with excellence. Our success grows
              with each person and company we support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="flex w-full justify-center items-center flex-col py-20 bg-white text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="font-poppins font-bold text-[48px] md:text-[60px] text-transparent bg-clip-text bg-gradient-to-r from-[#C1156F] to-[#7ABCFF] mb-6 leading-tight">
          Let’s build <br className="hidden md:block" /> something different
        </h3>

        <p className="font-inter font-medium text-[#9FA7AF] text-[16px] mb-8 max-w-2xl">
          Take the first step towards a brighter future and supercharge your
          business with cutting-edge technologies, expert guidance, and
          unparalleled support.
        </p>
        <Link to="/LetsTalk">
          <button className="flex items-center gap-2 btn border-none rounded-full bg-gradient-to-r from-[#C1156F] to-[#7ABCFF] text-white font-poppins px-10 py-6 hover:opacity-90 transition-all duration-300">
            <span>Get In Touch</span>
            <FaPhoneAlt />
          </button>
        </Link>
      </motion.section>
    </>
  );
};

export default Testimonials;
