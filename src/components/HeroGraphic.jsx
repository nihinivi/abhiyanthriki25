import React from 'react';

// 1. Import your Hero.jpeg image from the assets folder
import heroImageUrl from '../assets/figma/Hero.jpg';

// 2. The component now returns a simple, styled image element
export default function HeroGraphic() {
  return (
    <img
      src={heroImageUrl}
      alt="Abhiyanthriki event background"
      // 3. Styling classes to make the image a responsive, full-screen background
      className="w-full h-full object-cover"
    />
  );
}