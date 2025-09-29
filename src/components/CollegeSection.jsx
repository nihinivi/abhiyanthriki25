import React, { useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";
import { FiUsers, FiBookOpen, FiBriefcase, FiGlobe } from 'react-icons/fi';

// 1. IMPORT YOUR COLLEGE CAMPUS IMAGE
import collegeCampusUrl from "../assets/figma/College.png";

// Data for the college stats
const collegeStatData = [
  { icon: <FiUsers />, value: "3000+", label: "Students" },
  { icon: <FiBookOpen />, value: "15+", label: "Programs" },
  { icon: <FiBriefcase />, value: "200+", label: "Faculty" },
  { icon: <FiGlobe />, value: "10K+", label: "Alumni Network" },
];

// Re-usable component for animating numbers (no changes needed)
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

// Re-usable StatCard component (no changes needed)
const StatCard = ({ icon, value, label }) => (
  <div className="relative p-4 border border-[#F64040]/50">
    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#F64040]"></div>
    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#F64040]"></div>
    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#F64040]"></div>
    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#F64040]"></div>
    
    <div className="flex items-center space-x-4">
      <div className="text-3xl text-[#F64040]">{icon}</div>
      <div>
        <AnimatedCounter value={value} />
        <p className="text-sm text-gray-400">{label}</p>
      </div>
    </div>
  </div>
);


const CollegeSection = () => {
  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, x: -50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
    },
  };

  return (
    <section id="college" className="relative w-full text-white py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
      <svg className="absolute w-0 h-0">
        <defs>
          <clipPath id="college-shape-clip" clipPathUnits="objectBoundingBox">
            <path d="M0.031,0.105 C0.014,0.105,0,0.13,0,0.16 V0.789 C0,0.81,0.01,0.826,0.021,0.826 H0.083 C0.09,0.826,0.096,0.837,0.096,0.85 V0.959 C0.096,0.979,0.105,0.996,0.117,0.996 H0.475 C0.492,0.996,0.506,0.971,0.506,0.941 V0.359 C0.506,0.338,0.497,0.321,0.485,0.321 H0.411 C0.39,0.321,0.373,0.291,0.373,0.253 V0.124 C0.373,0.114,0.369,0.105,0.363,0.105 H0.031 Z" />
          </clipPath>
        </defs>
      </svg>
      
      <motion.div
        // **MODIFIED HERE**: Changed lg:grid-cols-5 to lg:grid-cols-2 for a 50/50 split
        className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Left Column (Image) */}
        <motion.div
          // **MODIFIED HERE**: Changed lg:col-span-2 to lg:col-span-1
          className="lg:col-span-1 w-full h-96 md:h-[600px] order-1 lg:order-1"
          variants={imageVariants}
        >
          <img
            src={collegeCampusUrl}
            alt="RSET Campus"
            className="w-full h-full object-cover"
            style={{ clipPath: 'url(#college-shape-clip)' }}
          />
        </motion.div>

        {/* Right Column (Text) */}
        <div
          // **MODIFIED HERE**: Changed lg:col-span-3 to lg:col-span-1
          className="lg:col-span-1 flex flex-col order-2 lg:order-2"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl text-[#F64040] font-'KH_Interference' tracking-widest">OUR COLLEGE</h2>
            <h1 className="text-5xl md:text-6xl font-'KH_Interference' mt-1 mb-6">Rajagiri School of Engineering & Technology</h1>
          </motion.div>
          <motion.p className="font-'KH_Interference' text-gray-300 mb-8" variants={itemVariants}>
            Rajagiri School of Engineering & Technology (RSET), located in the vibrant city of Kochi, is an institution dedicated to excellence in technical education and research. We are committed to fostering a new generation of engineers and innovators equipped with the skills and ethical values to make a significant impact on the world.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default CollegeSection;