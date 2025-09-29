import React from 'react';

import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import EventSection from './EventSection';
import GallerySection from './GallerySection';
import CollegeSection from './CollegeSection';

// This component now holds all the sections for your landing page.
const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <CollegeSection />
      <EventSection />
      <GallerySection />
    </>
  );
};

export default HomePage;