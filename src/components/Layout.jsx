import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import FooterSection from './FooterSection';

const Layout = () => {
  const location = useLocation();

  // ✅ CORRECTED LOGIC:
  // We check for the exact path '/eventdetails' as defined in your App.jsx routes.
  const isEventDetailPage = location.pathname === '/eventdetails';

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      
      {/* This will now correctly hide the footer ONLY on the /eventdetails page */}
      {!isEventDetailPage && <FooterSection />}
    </>
  );
};

export default Layout;