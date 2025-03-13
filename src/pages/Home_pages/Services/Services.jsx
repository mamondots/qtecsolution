import { Link } from "react-router-dom";
import { baseUrl } from "../../../redux/api/baseApi";
import { useGetServicesQuery } from "../../../redux/features/services/serviceApi";
import SectionHead from "../../../utilits/SectionHead";
import { useEffect } from "react";
import { motion } from "framer-motion";

const Services = () => {
  const { data: services } = useGetServicesQuery();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Define animation variants
  const variants = {
    hidden: (direction) => ({
      opacity: 0,
      x: direction === "left" ? -100 : 100,
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="bg-[#CDF5DD]/20">
      <div className="container">
        <div className="flex items-center justify-center">
          <SectionHead
            alDesign="item-center justify-center text-center"
            centerDesign="item-center flex justify-center text-center"
            subTitle="OUR SERVICES"
            title="Comprehensive Solutions for Sustainable Growth"
            shortInfo="We provide tailored services in industrial compliance,sustainability, skill development, and business growth—empowering businesses to thrive in an evolving landscape. "
          ></SectionHead>
        </div>

        <div className="mt-12">
          <div className="grid xl:grid-cols-2 gap-4 rounded-full">
            {services?.data
              ?.filter((service) => service.isActive === true)
              .slice(0, 4)
              .map((service, index) => (
                <motion.div
                  key={service.id}
                  custom={index % 2 === 0 ? "left" : "right"} // Alternate directions
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={variants}
                  className=""
                >
                  <div className="flex lg:flex-row md:flex-row flex-col justify-center relative group overflow-hidden items-center gap-4 bg-[#74D09D]/40 py-4 lg:px-4 md:px-4 px-2 lg:rounded-full md:rounded-full rounded duration-500 cursor-pointer">
                    <div className="w-[150px] h-[150px] lg:rounded-full md:rounded-full rounded border-4 border-[#fff] overflow-hidden">
                      <img
                        className="w-full h-full object-cover z-10"
                        src={baseUrl + service.image}
                        alt="Service Image"
                      />
                    </div>

                    <div className="lg:w-2/3 md:w-2/3 lg:px-0 md:px-0 px-2 text-[#262626] z-10 flex lg:items-start lg:justify-start md:items-start md:justify-start items-center justify-center flex-col text-center lg:text-start md:text-start">
                      <h2 className="font-semibold text-lg line-clamp-1">
                        {service.title}
                      </h2>
                      <p className="pt-2 text-[#262626]/60 line-clamp-3">
                        {service.details}..
                      </p>

                      <Link
                        to={`/service/${service._id}`}
                        className="relative inline-flex items-center origin-right gap-2 py-2 px-4 bg-[#74D09D] lg:rounded-full md:rounded-full rounded text-white font-rajdhani overflow-hidden group mt-4 border border-[#262626]/5 hover:border-[#fff]/50 duration-300"
                      >
                        <span className="relative z-10 text-sm ">
                          Read More
                        </span>
                        <div className="absolute inset-0 w-full h-full bg-[#65e09d] lg:rounded-full md:rounded-full rounded origin-right transform scale-x-0 group-hover:scale-x-100 group-hover:origin-left transition-transform duration-300 ease-in-out"></div>
                      </Link>
                    </div>
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent to-[#74D09D] xl:rounded-full lg:rounded-full md:rounded-full rounded origin-right transform scale-x-0 group-hover:scale-x-100 group-hover:origin-left transition-transform duration-500 ease-in-out"></div>
                  </div>
                </motion.div>
              ))}
          </div>

          <div className="mt-12 flex flex-col justify-center items-center">
            <Link
              to="/services"
              className="relative flex items-center origin-right gap-2 py-4 px-6 bg-[#74D09D] rounded-full text-white font-rajdhani overflow-hidden group"
            >
              <span className="relative z-10 tracking-widest lg:text-base text-sm">
                View All Services
              </span>
              <div className="absolute inset-0 w-full h-full bg-[#65e09d] rounded origin-right transform scale-x-0 group-hover:scale-x-100 group-hover:origin-left transition-transform duration-300 ease-in-out"></div>
            </Link>
            <p className="mt-4 font-semibold text-[#262626]/60">
              Need a Custom Project Plan?
              <Link
                to="/contact"
                className="text-[#65E09D] cursor-pointer ml-[2px] hover:text-[#e46565] duration-300"
              >
                Get in touch
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
