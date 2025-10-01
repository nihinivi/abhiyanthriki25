import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";

import HeroGraphicMobile from "./HeroGraphic2";
import HeroGraphicWeb from "./HeroGraphic";
import HeroAnimation from "./HeroAnimation"; // Make sure path is correct

const HeroSection = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.85]);

    return (
        <section
            ref={targetRef}
            className="relative w-screen h-[175vh] overflow-hidden"
        >
            <div className="sticky top-0 h-screen w-full flex items-center justify-center">
                <motion.div
                    style={{ opacity, scale }}
                    className="relative w-full h-full flex items-center justify-center"
                >
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
                            - The scale is now larger on mobile (`scale-90`) and adjusts for larger screens.
                        */}
                        <div className="scale-90 sm:scale-100 md:scale-90 lg:scale-100 col-start-1 row-start-1">
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
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;