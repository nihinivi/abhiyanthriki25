import React from "react";

// 1. IMPORT YOUR 8 LOCAL IMAGES
import image1 from "../assets/figma/1.png";
import image2 from "../assets/figma/2.png";
import image3 from "../assets/figma/3.png";
import image4 from "../assets/figma/4.png"; // Replace with your actual image paths
import image5 from "../assets/figma/5.png";
import image6 from "../assets/figma/6.png";
import image7 from "../assets/figma/7.png";
import image8 from "../assets/figma/8.png";

// --- DATA SETUP ---
const allImages = [
  { src: image1, alt: "Tech Fest Image 1" },
  { src: image2, alt: "Tech Fest Image 2" },
  { src: image3, alt: "Tech Fest Image 3" },
  { src: image4, alt: "Tech Fest Image 4" },
  { src: image5, alt: "Tech Fest Image 5" },
  { src: image6, alt: "Tech Fest Image 6" },
  { src: image7, alt: "Tech Fest Image 7" },
  { src: image8, alt: "Tech Fest Image 8" },
];

const row1Images = allImages.slice(0, 4);
const row2Images = allImages.slice(4, 8);


// --- Reusable Row Component ---
const MarqueeRow = ({ images, direction = 'normal' }) => (
  <div className="flex w-full overflow-hidden group">
    <div
      className={`flex shrink-0 items-center justify-around min-w-full ${
        direction === 'normal' ? 'animate-marquee-normal' : 'animate-marquee-reverse'
      } group-hover:[animation-play-state:paused]`}
    >
      {/* Render images twice for a seamless loop */}
      {[...images, ...images].map((image, index) => (
        <div key={index} className="px-4 w-[28rem] shrink-0">
          <div className="relative rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:scale-110 hover:z-20 -ml-16 hover:ml-0 hover:mr-0 shadow-lg hover:shadow-red-900/50">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-56 object-cover transform rotate-3 scale-110"
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);

// --- MAIN GALLERY COMPONENT ---
const GallerySection = () => {
  return (
    <section id="gallery" className="w-full min-h-screen py-24 overflow-x-hidden">
      {/* Title Container */}
      <div className="mb-16">
        <h2 className="text-center font-['KH Interference'] text-6xl md:text-8xl text-[#F64040]">
          Gallery
        </h2>
      </div>

      {/* Main slanted container for the scrolling rows */}
      <div className="relative flex flex-col justify-center gap-8 transform -rotate-3 scale-110">
        <MarqueeRow images={row1Images} direction="normal" />
        <MarqueeRow images={row2Images} direction="reverse" />
      </div>
    </section>
  );
};

export default GallerySection;