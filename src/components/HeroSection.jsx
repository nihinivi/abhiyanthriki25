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
        <motion.div style={{ opacity, scale }} className="relative w-full h-full">

          {/* 1. Background Graphic (Bottom Layer) */}
          <div className="absolute inset-0 z-0">
            <HeroGraphic />
          </div>

          {/* 2. 3D Globe Animation (Middle Layer, centered) */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <HeroAnimation />
          </div>

          {/* 3. Text Content (Top Layer) */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white pointer-events-none z-20">
            <h1 className="font-['KH Interference'] text-5xl md:text-8xl lg:text-9xl tracking-wider uppercase">
              Abhiyanthriki <span className="text-[#F64040]">2025</span>
            </h1>
          </div>
          
          <div className="absolute bottom-4 md:bottom-8 left-0 right-0 mx-auto w-full max-w-6xl px-4 sm:px-10 pointer-events-none z-20">
            <div className="flex flex-col md:flex-row justify-between items-center text-white font-['KH Interference'] text-xs md:text-base tracking-widest uppercase">
              <p>Oct 10 & 11</p>
              <p className="mt-2 md:mt-0">Rajagiri School of Engineering and Technology</p>
            </div>
          </div>

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

