import React, { useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";
import { FiUsers, FiTrendingUp, FiAward, FiMessageSquare } from 'react-icons/fi';

// 1. IMPORT YOUR LOGO IMAGE
import collegeImageUrl from "../assets/figma/A3K.png";

const statData = [
  { icon: <FiUsers />, value: "1.2K+", label: "Followers" },
  { icon: <FiTrendingUp />, value: "6000+", label: "Expected" },
  { icon: <FiAward />, value: "15.4K+", label: "Account Reached" },
  { icon: <FiMessageSquare />, value: "28K+", label: "Interactions" },
];

// Reusable component for animating numbers (no changes needed)
const AnimatedCounter = ({ value }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const numericValue = parseFloat(value.replace(/[^\d.]/g, ''));
  const suffix = value.replace(/[\d.]/g, '');

  useEffect(() => {
    if (isInView) {
      animate(0, numericValue, {
        duration: 2,
        onUpdate(latest) {
          if(ref.current) {
            if (value.includes('.')) {
              ref.current.textContent = latest.toFixed(1);
            } else {
              ref.current.textContent = Math.round(latest);
            }
          }
        }
      });
    }
  }, [isInView, value, numericValue]);

  return (
    <p className="text-2xl font-semibold">
      <span ref={ref}>0</span>{suffix}
    </p>
  );
};


// **MODIFIED**: Redesigned StatCard component
const StatCard = ({ icon, value, label }) => (
  // Only a single thin border remains
  <div className="relative p-4 border border-[#F64040]/50">
    {/* The four corner divs have been removed */}
    
    {/* Flex container to hold the icon and text */}
    <div className="flex items-center space-x-4">
      {/* Icon container with a right border acting as a partition */}
      <div className="text-3xl text-[#F64040] pr-4 border-r border-[#F64040]/50">
        {icon}
      </div>
      <div>
        <AnimatedCounter value={value} />
        <p className="text-sm text-gray-400">{label}</p>
      </div>
    </div>
  </div>
);

const AboutSection = () => {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 50 },
    visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } },
  };

  return (
    <section id="about" className="relative w-full text-white py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* **REMOVED**: The SVG clip-path is no longer needed */}
      
      {/* **MODIFIED**: Grid changed to 2 columns for a 50/50 split on large screens */}
      <motion.div
        className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Left Column: Text Content */}
        <div className="lg:col-span-1 flex flex-col order-2 lg:order-1">
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl text-[#F64040] font-'KH_Interference' tracking-widest">ABOUT</h2>
            <h1 className="text-5xl md:text-6xl font-'KH_Interference' mt-1 mb-6">ABHIYANTHRIKI</h1>
          </motion.div>
          <motion.p className="font-'KH_Interference' text-gray-300 mb-6" variants={itemVariants}>
            Abhiyanthriki, the biennial technical festival of Rajagiri School of Engineering and Technology (RSET), is a premier platform celebrating academic brilliance, cutting-edge technology, and creative innovation. Spanning two dynamic days, it showcases a vibrant mix of technical and non-technical contests, engaging workshops, exhibitions, and stalls, drawing participation from across the region.
          </motion.p>
          
          {/* Stats Grid */}
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-6" variants={itemVariants}>
            {statData.map((stat, index) => (
              <StatCard key={index} icon={stat.icon} value={stat.value} label={stat.label} />
            ))}
          </motion.div>
        </div>

        {/* **MODIFIED**: Right Column: Logo Image */}
        <motion.div 
          className="lg:col-span-1 flex justify-center items-center order-1 lg:order-2"
          variants={imageVariants}
        >
          <img
            src={collegeImageUrl}
            alt="Abhiyanthriki Logo"
            // **MODIFIED**: Classes for responsive logo sizing, clip-path removed
            className="w-full max-w-md h-auto"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
