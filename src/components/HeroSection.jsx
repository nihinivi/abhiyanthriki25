import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';

// Import your custom components
import HeroAnimation from './HeroAnimation'; 
import HeroGraphic from './HeroGraphic'; // <-- Import HeroGraphic

const HeroSection = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"], 
  });

  // Create scroll-based animations for a "zoom out" effect
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    // The section has extra height to allow for the scroll effect
    <section 
      ref={targetRef} 
      className="relative w-screen h-[175vh] bg-black" // Removed the repeating pattern background
    >
      {/* This 'sticky' container holds the scene in view while scrolling */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* This is the main animated container that scales and fades */}
        <motion.div style={{ opacity, scale }} className="relative w-screen h-screen">

          {/* 1. Background Graphic (Bottom Layer) */}
          <div className="absolute inset-0 z-0">
            <HeroGraphic />
          </div>

          {/* 2. 3D Globe Animation (Middle Layer, centered and smaller) */}
          <div className="absolute inset-5 flex items-center justify-center z-2">
            <div className="scale-75 md:scale-85"> {/* Makes the globe smaller */}
              <HeroAnimation />
            </div>
          </div>

          {/* 3. Text Content (Top Layer) */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white pointer-events-none z-20">
            <div className="flex flex-col items-center">
              <h1 className="font-['KH Interference'] text-6xl md:text-9xl lg:text-[10rem] leading-none tracking-wider uppercase">
                Abhiyanthriki
              </h1>
              <h2 className="font-['KH Interference'] text-5xl md:text-8xl lg:text-[8rem] leading-none tracking-wider uppercase text-[#F64040]">
                2025
              </h2>
            </div>
          </div>
          
          {/* College Name and Date positioned at bottom corners */}
          <p className="absolute bottom-4 md:bottom-8 left-4 md:left-10 font-['KH Interference'] text-xs md:text-base tracking-widest uppercase text-white pointer-events-none z-20">
            Rajagiri School of Engineering and Technology
          </p>
          <p className="absolute bottom-4 md:bottom-8 right-4 md:right-10 font-['KH Interference'] text-xs md:text-base tracking-widest uppercase text-white pointer-events-none z-20">
            Oct 10 & 11
          </p>

          {/* 4. Animated Scroll Down Arrow */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
            <motion.a
              href="#about"
              aria-label="Scroll down"
              className="text-white cursor-pointer"
              initial={{ y: -5 }}
              animate={{ y: 5 }}
              transition={{
                repeat: Infinity,
                repeatType: 'reverse',
                duration: 1.5,
                ease: 'easeInOut',
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

