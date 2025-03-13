import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/logo/idea_tree .png";
import { navItems } from "../../utilits/navItems";
import { CgMenuLeft } from "react-icons/cg";
import MobileBar from "../MobileBar/MobileBar";

const NavBar = () => {
  const location = useLocation();
  const [selected, setSelected] = useState("");
  const [hovered, setHovered] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handelOpen = () => {
    setIsOpen(!isOpen);
  };

  // Automatically set the selected nav item based on the current URL
  useEffect(() => {
    const currentPath = location.pathname;
    const currentItem = navItems.find((item) => item.href === currentPath);
    setSelected(currentItem ? currentItem.label : "");
  }, [location]);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <div className="flex items-center justify-center relative top-8 z-[999]">
        <div
          className={`flex items-center justify-between tracking-wide  px-8 py-2  fixed transition-all duration-500 ${
            scrolled
              ? "bg-[#fff] shadow-lg border-b border-[#fff]/20 w-full 2xl:px-80 xl:px-40 lg:px-10  py-4"
              : " 2xl:w-2/3 xl:w-3/4 lg:w-full  md:w-5/6  w-full xl:rounded-full lg:rounded-e md:rounded-full lg:top-8 md:top-8 top-0 border border-[#74D09D]/20 bg-[#fff]"
          }`}
        >
          <Link to="/" className="w-[90px] h-[40px] cursor-pointer">
            <img src={logo} alt="IdeaTree logo" className="h-full w-full" />
          </Link>
          {/* For Desktop or Laptop Devices */}
          <div className="lg:flex items-center gap-2 hidden">
            {navItems?.map((navItem) => (
              <div
                key={navItem.label}
                onMouseEnter={() => setHovered(navItem.label)} // Set hover state
                onMouseLeave={() => setHovered(null)} // Clear hover state
              >
                <Link
                  to={navItem.href}
                  onClick={() => setSelected(navItem.label)} // Update selected state on click
                  className="relative px-2 py-2 rounded-full overflow-hidden"
                >
                  {/* Highlight animation */}
                  <AnimatePresence>
                    {(hovered === navItem.label ||
                      selected === navItem.label) && (
                      <motion.div
                        className="absolute inset-0 bg-[#74D09D] rounded-full"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                      />
                    )}
                  </AnimatePresence>
                  <span
                    className={`relative z-10 ${
                      hovered === navItem.label || selected === navItem.label
                        ? "text-[#fff]" // White text when hovered or selected
                        : scrolled
                        ? "text-[#74D09D]" // Green text when scrolled
                        : "text-[#74D09D]" // Default green text
                    }`}
                  >
                    {navItem.label}
                  </span>
                </Link>
              </div>
            ))}
          </div>
          {/* Mobile Menu Icon */}
          <div
            onClick={handelOpen}
            className={`lg:hidden block ${
              scrolled ? "text-[#262626]/80" : "text-[#74D09D]"
            }`}
          >
            <CgMenuLeft
              aria-label="click menu"
              className="text-2xl hover:text-[#262626] cursor-pointer duration-300"
            />
          </div>

          {/* Mobile Bar */}
          <AnimatePresence>
            {isOpen && (
              <>
                {/* Background Fade */}
                <motion.div
                  className="fixed inset-0 z-[999] bg-[#262626]/20 lg:hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setIsOpen(false)}
                />
                {/* Sliding Mobile Bar */}
                <motion.div
                  className="fixed top-0 left-0 bottom-0 z-[1000]  w-full"
                  initial={{ x: "-100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100%" }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <MobileBar
                    navItems={navItems}
                    setIsOpen={setIsOpen}
                    isOpen={isOpen}
                  />
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
