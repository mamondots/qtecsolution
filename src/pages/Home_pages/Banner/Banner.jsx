/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaPlay } from "react-icons/fa6";
import SocialIcon from "../../../shared/SocialIcon/SocialIcon";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion } from "framer-motion";

import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import { useGetBannersQuery } from "../../../redux/features/banner/bannerApi";
import { baseUrl } from "../../../redux/api/baseApi";
import { Link } from "react-scroll";
import "./Banner.css";

const CustomPrevArrow = ({ onClick }) => {
  return (
    <motion.button
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.2,
        ease: "linear",
        delay: 0.5,
      }}
      onClick={onClick}
      className="absolute top-1/2 xl:left-[20vh] lg:left-[4vh] transform -translate-y-1/2 z-10 xl:w-[50px] xl:h-[50px] lg:w-[30px] lg:h-[30px] border border-[#74D09D] hover:bg-[#74D09D] duration-300 rounded-full lg:flex hidden items-center justify-center group"
      style={{ boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)" }}
    >
      <HiOutlineArrowLongLeft className="xl:text-3xl lg:text-xl text-[#74D09D] group-hover:text-[#fff] z-[60] duration-300" />
    </motion.button>
  );
};

const CustomNextArrow = ({ onClick }) => {
  return (
    <motion.button
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.2,
        ease: "linear",
        delay: 0.5,
      }}
      onClick={onClick}
      className="absolute top-1/2 xl:right-[20vh] lg:right-[17vh] md:right-[4vh]  transform -translate-y-1/2 z-10 xl:w-[50px] xl:h-[50px] lg:w-[30px] lg:h-[30px] border border-[#74D09D] hover:bg-[#74D09D] duration-300 rounded-full lg:flex hidden items-center justify-center group"
      style={{ boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)" }}
    >
      <HiOutlineArrowLongRight className="xl:text-3xl lg:text-xl text-[#74D09D] group-hover:text-[#fff] z-[60] duration-300" />
    </motion.button>
  );
};

const Banner = () => {
  const { data: banners, isLoading } = useGetBannersQuery("");

  const [currentSlide, setCurrentSlide] = useState(0);

  var settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => setCurrentSlide(index),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 850,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.5 },
    },
  };
  const itemVariant2 = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.7 },
    },
  };

  const itemVariant3 = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.8 },
    },
  };
  const itemVariant4 = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.8 },
    },
  };
  const itemVariant5 = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.8 },
    },
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#262626]  z-[999] fixed w-full">
        <div className="w-16 h-16 border-4 border-green-500 border-dotted rounded-full animate-spin"></div>
      </div>
    );
  }

  // if (isLoading) {
  //   return (
  //     <div className="flex justify-center items-center min-h-screen bg-[#fff] fixed w-full z-[999]">
  //       <div className="h-14 w-3/5 bg-[#05050511] rounded-full absolute top-[4vh]"></div>
  //       {/* Skeleton Loader */}
  //       <div className="animate-pulse w-full max-w-screen-xl px-8 py-28 space-y-6">
  //         <div className="h-10 w-3/5 bg-[#05050511] rounded"></div>
  //         <div className="h-6 w-4/5 bg-[#05050511] rounded"></div>
  //         <div className="h-6 w-2/5 bg-[#05050511] rounded"></div>
  //         <div className="h-12 w-40 bg-[#05050511] rounded mt-8"></div>
  //         <div className="flex gap-4 mt-4">
  //           <div className="h-12 w-12 bg-[#05050511] rounded-full"></div>
  //           <div className="h-12 w-12 bg-[#05050511] rounded-full"></div>
  //           <div className="h-12 w-12 bg-[#05050511] rounded-full"></div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="mt-[-65px]">
      <Slider {...settings}>
        {banners?.data
          ?.filter(
            (banner) => banner.type === "MAIN" && banner.isActive === true
          )
          .map((banner, index) => {
            const titleWords = banner.title.split(" ");
            const lastWord = titleWords.pop();
            const remainingTitle = titleWords.join(" ");

            return (
              <motion.div
                key={banner._id}
                initial="hidden"
                animate={currentSlide === index ? "visible" : "hidden"}
                variants={containerVariants}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <div
                  className="relative xl:py-40 lg:py-28 py-28 2xl:px-80 xl:px-60 lg:px-20 md:px-20 px-8 flex items-center justify-center bg-cover bg-center 2xl:h-[100vh] xl:h-[120vh] lg:h-[120vh]"
                  style={{
                    backgroundImage: `url(${baseUrl + banner.image})`,
                  }}
                >
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-[#262626]/80 bg-opacity-50"></div>

                  {/* Content */}
                  <div className="z-10 xl:mt-40 lg:mt-40 md:mt-28 mt-20 text-[#fff]">
                    <motion.h3
                      variants={itemVariants}
                      className="2xl:text-6xl xl:text-4xl lg:text-3xl text-2xl font-semibold leading-tight  lg:w-[60%] w-full"
                    >
                      {remainingTitle}{" "}
                      <span className="text-[#74D09D]">{lastWord}</span>
                    </motion.h3>

                    <motion.p
                      variants={itemVariant2}
                      className="mt-4 xl:w-[70%] lg:w-[90%] leading-relaxed text-lg font-light text-[#fff]/90"
                    >
                      {banner.details.slice(0, 280)}
                    </motion.p>

                    <div className="mt-12 flex items-center gap-8">
                      <motion.div variants={itemVariant3}>
                        <Link
                          to="about"
                          smooth={true}
                          duration={1000}
                          className="relative flex items-center origin-right gap-2 py-4 px-6 bg-[#74D09D] rounded text-white font-rajdhani overflow-hidden group cursor-pointer"
                        >
                          <span className="relative z-10 tracking-widest lg:text-base text-sm">
                            Explore More
                          </span>
                          <div className="absolute inset-0 w-full h-full bg-[#65e09d] rounded origin-right transform scale-x-0 group-hover:scale-x-100 group-hover:origin-left transition-transform duration-300 ease-in-out"></div>
                        </Link>
                      </motion.div>
                      <motion.div
                        variants={itemVariant4}
                        className="border border-[#A6C291] p-1 rounded"
                      >
                        <Link
                          to="gallery"
                          smooth={true}
                          duration={1000}
                          className="w-[46px] h-[46px] rounded bg-[#A6C291] text-[#fff] flex items-center justify-center cursor-pointer"
                        >
                          <FaPlay className="text-xl" />
                        </Link>
                      </motion.div>
                    </div>

                    <motion.div
                      initial="hidden"
                      animate={currentSlide === index ? "visible" : "hidden"}
                      variants={itemVariant5}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      className="mt-12"
                    >
                      <SocialIcon></SocialIcon>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
      </Slider>
    </div>
  );
};

export default Banner;
