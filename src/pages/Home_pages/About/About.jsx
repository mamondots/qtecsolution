import { baseUrl } from "../../../redux/api/baseApi";
import { useGetAboutQuery } from "../../../redux/features/about/aboutApi";
import SectionHead from "../../../utilits/SectionHead";

import mission from "../../../assets/image/mission.png";
import vision from "../../../assets/image/vission.png";
import value from "../../../assets/image/value.png";
import FixModals from "../../../utilits/FixModals";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const About = () => {
  const { data } = useGetAboutQuery("");

  // Separate animation controls for each section
  const missionControls = useAnimation();
  const visionControls = useAnimation();
  const valueControls = useAnimation();
  const imageControls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true, // Ensure the animation triggers only once when it enters the viewport
  });

  useEffect(() => {
    if (inView) {
      missionControls.start("visible");
      visionControls.start("visible");
      valueControls.start("visible");
      imageControls.start("visible");
    } else {
      missionControls.start("hidden");
      visionControls.start("hidden");
      valueControls.start("hidden");
      imageControls.start("hidden");
    }
  }, [missionControls, visionControls, valueControls, inView, imageControls]);

  const cardVariants = {
    hidden: {
      opacity: 0,
      x: 50,
    },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.3, // Staggered animation for each item
        ease: "easeOut", // Smooth transition
        duration: 0.8, // Duration for the animation
      },
    }),
  };

  const cardVariant2 = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1, // Staggered animation for each item
        ease: "easeOut", // Smooth transition
        duration: 0.8, // Duration for the animation
      },
    }),
  };

  return (
    <div
      id="about"
      className="xl:py-32 lg:py-32 md:py-24 py-20 2xl:px-80 xl:px-28 lg:px-20 md:px-12 px-8 overflow-hidden"
    >
      <div>
        {data?.data?.slice(0, 1).map((about, index) => (
          <div key={about._id} className="w-full">
            <div className="flex lg:flex-row  flex-col-reverse lg:justify-start justify-center lg:items-start items-center 2xl:gap-20 lg:gap-12 gap-12 w-full">
              <motion.div
                ref={ref}
                initial="hidden"
                variants={cardVariant2}
                animate={imageControls}
                custom={index}
                className="lg:w-2/4"
              >
                <img className="rounded" src={baseUrl + about.image} alt="" />
              </motion.div>
              <div className="lg:w-3/4 xl:mt-0 lg:mt-0 mt-4">
                <div>
                  <SectionHead
                    subTitle="ABOUT US"
                    title={
                      <span>
                        {about.title.split(" ").slice(0, -1).join(" ")}{" "}
                        <span className="text-[#74D09D]">
                          {about.title.split(" ").slice(-1)}
                        </span>
                      </span>
                    }
                  ></SectionHead>

                  <div className="mt-4">
                    {/* details function */}
                    <div className="flex flex-col gap-3 text-[#262626]/70">
                      <p>{about.details.slice(0, 240)}</p>
                      <p className="relative">
                        {about.details.slice(240, 419) ||
                          "Let's Talk about Company"}
                        <FixModals about={about}></FixModals>
                      </p>
                    </div>

                    {/* mission, vision, value */}
                    <div className="flex flex-col gap-3 mt-8">
                      <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={missionControls}
                        variants={cardVariants}
                        custom={index}
                        className="bg-[#CDF5DD]/50 relative overflow-hidden group cursor-pointer border flex lg:flex-row md:flex-row flex-col items-center gap-2 xl:rounded-full lg:rounded-full md:rounded-full rounded px-4 py-2"
                      >
                        <img
                          src={mission}
                          alt="mission"
                          className="z-10 lg:flex md:flex hidden"
                        />
                        <p className="text-[#262626]/80 group-hover:text-[#fff] duration-300 z-10">
                          <span className="font-semibold group-hover:text-[#262626]">
                            Mission:{" "}
                          </span>
                          {about.mission}
                        </p>
                        <div className="absolute inset-0 w-full h-full bg-[#74D09D] xl:rounded-full lg:rounded-full md:rounded-full rounded origin-right transform scale-x-0 group-hover:scale-x-100 group-hover:origin-left transition-transform duration-700 ease-in-out"></div>
                      </motion.div>
                      <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={visionControls}
                        variants={cardVariants}
                        custom={index + 1} // Adjust for staggered delay
                        className="bg-[#DDEBB0]/50 relative overflow-hidden group cursor-pointer border flex items-center gap-2 xl:rounded-full lg:rounded-full md:rounded-full rounded px-4 py-2"
                      >
                        <img
                          src={vision}
                          alt="vision"
                          className="z-10 lg:flex md:flex hidden"
                        />
                        <p className="text-[#262626]/80 group-hover:text-[#fff] duration-300 z-10">
                          <span className="font-semibold group-hover:text-[#262626]">
                            Vision:{" "}
                          </span>
                          {about.vision}
                        </p>
                        <div className="absolute inset-0 w-full h-full bg-[#74D09D] xl:rounded-full lg:rounded-full md:rounded-full rounded origin-right transform scale-x-0 group-hover:scale-x-100 group-hover:origin-left transition-transform duration-700 ease-in-out"></div>
                      </motion.div>
                      <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={valueControls}
                        variants={cardVariants}
                        custom={index + 2} // Adjust for staggered delay
                        className="bg-[#A6C291]/50 relative overflow-hidden group cursor-pointer border flex items-center gap-2 xl:rounded-full lg:rounded-full md:rounded-full rounded px-4 py-2"
                      >
                        <img
                          src={value}
                          alt="value"
                          className="z-10 lg:flex md:flex hidden"
                        />
                        <p className="text-[#262626]/80 group-hover:text-[#fff] duration-300 z-10">
                          <span className="font-semibold group-hover:text-[#262626]">
                            Value:{" "}
                          </span>
                          {about.value}
                        </p>
                        <div className="absolute inset-0 w-full h-full bg-[#74D09D] xl:rounded-full lg:rounded-full md:rounded-full rounded origin-right transform scale-x-0 group-hover:scale-x-100 group-hover:origin-left transition-transform duration-700 ease-in-out"></div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
