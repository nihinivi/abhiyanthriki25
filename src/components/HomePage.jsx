import React from 'react';

import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import CollegeSection from './CollegeSection';
import EventSection from './EventSection';
import GallerySection from './GallerySection';
// ✅ IMPORT: Bring in the new SponsorsSection component
import SponsorsSection from './SponsorsSection';

// This component now holds all the sections for your landing page.
const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <CollegeSection />
      {/* <SponsorsSection /> */}
      <EventSection />
      <GallerySection />
      {/* ✅ ADDED: The new SponsorsSection is now part of your homepage layout */}
    </>
  );
};

export default HomePage;
