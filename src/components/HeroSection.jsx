import React from "react";
import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";

import HeroGraphicMobile from "./HeroGraphic2";
import HeroGraphicWeb from "./HeroGraphic";
import HeroAnimation from "./HeroAnimation"; // Make sure path is correct

const HeroSection = () => {
    return (
        <section
            className="relative w-screen h-screen overflow-hidden"
        >
            <div className="relative w-full h-full flex items-center justify-center">
                {/* Background graphics */}
                <div className="absolute inset-0 z-0">
                    <div className="block md:hidden w-full h-full">
                        <HeroGraphicMobile />
                    </div>
                    <div className="hidden md:block w-full h-full">
                        <HeroGraphicWeb />
                    </div>
                </div>

                {/* Container for overlapping centered content */}
                <div className="absolute inset-0 grid place-items-center z-10">
                    
                    {/* HERO ANIMATION (BOTTOM LAYER)
                        - The animation is now hidden on mobile (`hidden`) and appears on medium screens and up (`md:block`).
                    */}
                    <div className="hidden md:block scale-90 sm:scale-100 md:scale-90 lg:scale-100 col-start-1 row-start-1">
                        <HeroAnimation />
                    </div>
                </div>
                
                {/* Scroll arrow */}
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
            </div>
        </section>
    );
};

export default HeroSection;

