import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";

import HeroAnimation from "./HeroAnimation";
import HeroGraphic from "./HeroGraphic";

const HeroSection = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  // Scroll-based zoom out
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.85]);

  return (
    <section
      ref={targetRef}
      className="relative w-screen h-[175vh] bg-black overflow-hidden"
    >
      {/* Sticky container keeps everything centered */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center">
        <motion.div
          style={{ opacity, scale }}
          className="relative w-full h-full flex items-center justify-center"
        >
          {/* Background frame / graphic */}
          <div className="absolute inset-0 z-0 flex items-center justify-center">
            <HeroGraphic />
          </div>

          {/* Globe Animation (centered perfectly) */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="scale-75 md:scale-90 lg:scale-100">
              <HeroAnimation />
            </div>
          </div>

          {/* Text overlay (always centered) */}
          {/* <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white pointer-events-none">
            <h1 className="font-['KH Interference'] text-6xl md:text-8xl lg:text-[10rem] leading-none tracking-wider uppercase">
              Abhiyanthriki
            </h1>
            <h2 className="font-['KH Interference'] text-5xl md:text-7xl lg:text-[8rem] leading-none tracking-wider uppercase text-[#F64040] mt-2">
              2025
            </h2>
          </div> */}

          {/* Bottom text (corners aligned) */}
          <p className="absolute bottom-4 md:bottom-8 left-4 md:left-10 font-['KH Interference'] text-xs md:text-sm lg:text-base tracking-widest uppercase text-white z-20 pointer-events-none">
            Rajagiri School of Engineering and Technology
          </p>
          <p className="absolute bottom-4 md:bottom-8 right-4 md:right-10 font-['KH Interference'] text-xs md:text-sm lg:text-base tracking-widest uppercase text-white z-20 pointer-events-none">
            Oct 10 & 11
          </p>

          {/* Scroll arrow (centered bottom) */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
            <motion.a
              href="#about"
              aria-label="Scroll down"
              className="text-white cursor-pointer"
              initial={{ y: -5 }}
              animate={{ y: 5 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1.5,
                ease: "easeInOut",
              }}
            >
              <FiArrowDown className="w-8 h-8 md:w-10 md:h-10" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
