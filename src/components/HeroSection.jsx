import React from "react";
import { motion } from "framer-motion";

import HeroGraphicMobile from "./HeroGraphic2";
import HeroGraphicWeb from "./HeroGraphic";
import HeroAnimation from "./HeroAnimation";
import Navbar from "./TopNav";

const transition = { duration: 0.3, ease: "easeOut" };
const initial = { scale: 0.9, filter: "blur(10px)", opacity: 0 };
const animate = { scale: 1, filter: "blur(0px)", opacity: 1 };

const HeroSection = () => {
    return (
        <section id="home" className="relative w-screen h-screen overflow-hidden">
             <Navbar />
            <div className="relative w-full h-full flex items-center justify-center">
                {/* Background graphics */}
                <motion.div
                    className="absolute inset-0 z-0"
                    initial={initial}
                    animate={animate}
                    transition={transition}
                >
                    <div className="block md:hidden w-full h-full">
                        <HeroGraphicMobile />
                    </div>
                    <div className="hidden md:block w-full h-full">
                        <HeroGraphicWeb />
                    </div>
                </motion.div>

               

                {/* Centered content */}
                <motion.div
                    className="absolute inset-0 grid place-items-center z-10"
                    initial={initial}
                    animate={animate}
                    transition={transition}
                >
                    <motion.div
                        className="md:block scale-90 sm:scale-100 md:scale-90 lg:scale-100 col-start-1 row-start-1"
                        initial={initial}
                        animate={animate}
                        transition={transition}
                    >
                        <HeroAnimation />
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
};

export default HeroSection;
