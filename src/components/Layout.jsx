import React from 'react';
import { Outlet } from 'react-router-dom'; // Outlet renders the current route's component
import Navbar from './Navbar';
import FooterSection from './FooterSection';

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* The active page (e.g., HomePage or EventDetails) will be rendered here */}
        <Outlet />
      </main>
      <FooterSection />
    </>
  );
};

export default Layout;