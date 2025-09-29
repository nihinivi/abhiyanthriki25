import React, { useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";
import { FiUsers, FiTrendingUp, FiAward, FiMessageSquare } from 'react-icons/fi';

// 1. IMPORT YOUR LOCAL COLLEGE IMAGE
import collegeImageUrl from "../assets/figma/A3K.png";

const statData = [
  { icon: <FiUsers />, value: "1.2K+", label: "Followers" },
  { icon: <FiTrendingUp />, value: "6000+", label: "Expected" },
  { icon: <FiAward />, value: "15.4K+", label: "Account Reached" },
  { icon: <FiMessageSquare />, value: "28K+", label: "Interactions" },
];

// 2. ANIMATED COUNTER COMPONENT
// This component animates a number from 0 to its target value when it becomes visible.
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
            // Handle floating point precision
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


const StatCard = ({ icon, value, label }) => (
  <div className="relative p-4 border border-[#F64040]/50">
    {/* Custom corner shapes */}
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

const AboutSection = () => {
  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 1, 0.5, 1] // A smoother ease-out curve
      },
    },
  };

  return (
    <section id="about" className="relative w-full text-white py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* This SVG is used to define the clip-path for the image */}
      <svg className="absolute w-0 h-0">
        <defs>
          <clipPath id="about-shape-clip" clipPathUnits="objectBoundingBox">
            <path d="M0.969,0.105 C0.986,0.105,1,0.13,1,0.16 V0.789 C1,0.81,0.99,0.826,0.979,0.826 H0.917 C0.91,0.826,0.904,0.837,0.904,0.85 V0.959 C0.904,0.979,0.895,0.996,0.883,0.996 H0.525 C0.508,0.996,0.494,0.971,0.494,0.941 V0.359 C0.494,0.338,0.503,0.321,0.515,0.321 H0.589 C0.61,0.321,0.627,0.291,0.627,0.253 V0.124 C0.627,0.114,0.631,0.105,0.637,0.105 H0.969 Z" />
          </clipPath>
        </defs>
      </svg>
      
      {/* Main content grid */}
      <motion.div
        className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-12 items-center max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Left Column: Text Content */}
        <div className="lg:col-span-2 flex flex-col order-2 lg:order-1">
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl text-[#F64040] font-'KH_Interference' tracking-widest">ABOUT</h2>
            <h1 className="text-5xl md:text-6xl font-'KH_Interference' mt-1 mb-6">ABHIYANTHRIKI</h1>
          </motion.div>
          <motion.p className="font-'KH_Interference' text-gray-300 mb-6" variants={itemVariants}>
            Abhiyanthriki, the biennial technical festival of Rajagiri School of Engineering and Technology (RSET), is a premier platform celebrating academic brilliance, cutting-edge technology, and creative innovation. Spanning two dynamic days, it showcases a vibrant mix of technical and non-technical contests, engaging workshops, exhibitions, and stalls, drawing participation from across the region.
          </motion.p>
          {/* <motion.p className="font-'KH_Interference' text-gray-300 mb-8" variants={itemVariants}>
            This year's theme, "Tech Renaissance", marks a digital rebirth - blending engineering, technology, art, and design into a unique convergence of intellect and imagination. More than just a fest, Abhiyanthriki is a distinguished stage where academia meets industry, and future leaders meet opportunity.
          </motion.p> */}
          
          {/* Stats Grid */}
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-6" variants={itemVariants}>
            {statData.map((stat, index) => (
              <StatCard key={index} icon={stat.icon} value={stat.value} label={stat.label} />
            ))}
          </motion.div>
        </div>

        {/* Right Column: College Image */}
        <motion.div 
          className="lg:col-span-2 w-200 h-96 md:h-[600px] order-1 lg:order-2"
          variants={imageVariants}
        >
          
          <img
            src={collegeImageUrl}
            alt="Rajagiri School of Engineering and Technology"
            className="w-full h-full object-cover"
            style={{ clipPath: 'url(#about-shape-clip)' }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
