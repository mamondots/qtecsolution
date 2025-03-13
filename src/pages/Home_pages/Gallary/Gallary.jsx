import { motion } from "framer-motion";
// import { useGetVideosQuery } from "../../../redux/features/gallery/galleryApi";
import SectionHead from "../../../utilits/SectionHead";
import ImageSilder from "./ImageSilder/ImageSilder";

const Gallary = () => {
  // const { data: videos } = useGetVideosQuery();

  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0, x: -100 }, // Start off-screen
    visible: { opacity: 1, x: 0, transition: { duration: 1 } }, // Slide into view
  };
  const containerVariants2 = {
    hidden: { opacity: 0, x: 100 }, // Start off-screen
    visible: { opacity: 1, x: 0, transition: { duration: 1 } }, // Slide into view
  };

  return (
    <div
      id="gallery"
      className="lg:py-20 py-12 2xl:px-80 xl:px-28 lg:px-20 md:px-12 px-8 mx-auto"
    >
      <div className="flex items-center justify-center">
        <SectionHead
          alDesign="item-center justify-center text-center"
          centerDesign="item-center flex justify-center text-center"
          subTitle="Latest Activities"
          title="A Glimpse of Our Work"
          shortInfo="Explore our latest projects,
events, and initiatives as we
redefine industry standards and
drive sustainable
transformation."
        ></SectionHead>
      </div>

      <div className="mt-12 flex flex-col gap-4">
        {/* Image Gallery Animation */}
        <motion.div
          className="image-gallery"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <ImageSilder></ImageSilder>
        </motion.div>

        {/* Video Gallery Animation */}
        <motion.div
          className="video-gallery"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants2}
        >
          {/* <VideoSlider videos={videos}></VideoSlider> */}
        </motion.div>
      </div>
    </div>
  );
};

export default Gallary;
