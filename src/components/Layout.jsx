import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import FooterSection from './FooterSection';

const Layout = () => {
  const location = useLocation();
  const isEventDetailPage = location.pathname === '/eventdetails';

  return (
    <>
      {/* ✅ Main content container with bottom padding to prevent overlap */}
      <main className="min-h-screen pb-24 md:pb-0 overflow-x-hidden">
        <Outlet />
      </main>

      {/* ✅ Navbar is always visible */}
      <Navbar />

      {/* ✅ Footer is hidden only on event details page */}
      {!isEventDetailPage && <FooterSection />}
    </>
  );
};

export default Layout;
