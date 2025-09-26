import React from "react";

// 1. IMPORT YOUR LOCAL IMAGES
import image1 from "../assets/figma/1.png";
import image2 from "../assets/figma/2.png";
import image3 from "../assets/figma/3.png";

const images = [
  { src: image1, alt: "Gallery image 1" },
  { src: image2, alt: "Gallery image 2" },
  { src: image3, alt: "Gallery image 3" },
];

const COLORS = {
  redAccent: '#F64040',
};

// --- MAIN GALLERY COMPONENT ---
const GallerySection = () => {
  return (
    <section className="w-screen min-h-screen py-20 md:py-24">
      {/* Title Container */}
      <div className="mb-12 md:mb-16">
        <h2
          className="text-center font-['KH Interference'] text-6xl md:text-8xl"
          style={{ color: COLORS.redAccent }}
        >
          Gallery
        </h2>
      </div>

      {/* Images Container */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-8 lg:gap-12 px-8">
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full max-w-md md:w-1/3 rounded-lg overflow-hidden transition-all duration-300 ease-in-out group hover:shadow-2xl hover:shadow-red-900/40 hover:scale-105"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;