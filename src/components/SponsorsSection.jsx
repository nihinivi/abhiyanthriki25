import React from 'react';
import { motion } from 'framer-motion';

// --- SPONSOR LOGO PLACEHOLDERS ---
// Using high-quality, tech-themed images from Unsplash for a professional look.
const sponsors = [
    { name: "QuantumLeap", logo: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=500&h=300&fit=crop" },
    { name: "CyberGuard", logo: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=500&h=300&fit=crop" },
    { name: "InnovateIO", logo: "https://images.unsplash.com/photo-1593349480502-77c8e2d7e4f9?w=500&h=300&fit=crop" },
    { name: "CodeGenius", logo: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=500&h=300&fit=crop" },
    { name: "DataSphere", logo: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&h=300&fit=crop" },
    { name: "NexTech", logo: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&h=300&fit=crop" },
    { name: "CloudWorks", logo: "https://images.unsplash.com/photo-1581090122119-03706b63c35b?w=500&h=300&fit=crop" },
    { name: "FutureForge", logo: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=300&fit=crop" },
];

// Reusable component for a scrolling marquee row
const MarqueeRow = ({ sponsors, direction = 'normal' }) => (
    <div className="flex w-full overflow-hidden group">
        <div
            className={`flex shrink-0 items-center justify-around min-w-full ${
                direction === 'normal' ? 'animate-marquee-normal' : 'animate-marquee-reverse'
            } group-hover:[animation-play-state:paused]`}
        >
            {/* Render images twice for a seamless loop */}
            {[...sponsors, ...sponsors].map((sponsor, index) => (
                <div key={index} className="px-4 w-48 md:w-64 shrink-0">
                    <div className="relative p-6 border border-[#F64040]/30 bg-black/20 backdrop-blur-sm transition-all duration-300 hover:border-[#F64040]/80 hover:bg-black/50 hover:scale-105">
                        <div className="flex items-center justify-center h-24">
                            <img 
                                src={sponsor.logo} 
                                alt={sponsor.name} 
                                className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300" 
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const SponsorsSection = () => {
    // Animation variants for the title
    const titleVariants = {
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

    // Split sponsors into two rows for the marquee effect
    const firstRowSponsors = sponsors.slice(0, sponsors.length / 2);
    const secondRowSponsors = sponsors.slice(sponsors.length / 2);

    return (
        <>
            {/* Add the marquee animation keyframes to the global scope */}
            <style>{`
                @keyframes marquee-normal {
                    from { transform: translateX(0%); }
                    to { transform: translateX(-100%); }
                }
                @keyframes marquee-reverse {
                    from { transform: translateX(-100%); }
                    to { transform: translateX(0%); }
                }
                .animate-marquee-normal {
                    animation: marquee-normal 40s linear infinite;
                }
                .animate-marquee-reverse {
                    animation: marquee-reverse 40s linear infinite;
                }
            `}</style>
            <section id="sponsors" className="relative w-full text-white py-20 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={titleVariants}
                        className="text-center mb-16"
                    >
                        <h2 className="text-2xl text-[#F64040] font-['KH Interference'] tracking-widest">OUR SPONSORS</h2>
                        <h1 className="text-5xl md:text-6xl font-['KH Interference'] mt-1">Partners in Innovation</h1>
                    </motion.div>
                </div>
                
                {/* Marquee Container */}
                <div className="relative flex flex-col justify-center gap-8">
                    <MarqueeRow sponsors={firstRowSponsors} direction="normal" />
                    <MarqueeRow sponsors={secondRowSponsors} direction="reverse" />
                </div>
            </section>
        </>
    );
};

export default SponsorsSection;

