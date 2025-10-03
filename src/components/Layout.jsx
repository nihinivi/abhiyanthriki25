import React from 'react';
import { Outlet, useLocation } from 'react-router-dom'; 
import Navbar from './Navbar';
import FooterSection from './FooterSection';
import Waves from './Waves';
const Layout = () => {
  const location = useLocation();
  const blacklist = ['/eventdetails'];
  const hideFooter = blacklist.includes(location.pathname); 
  return (
    <> 

     {hideFooter &&  
<Waves
 className="h-screen w-screen"
  lineColor="#121212"
  backgroundColor="rgba(255, 255, 255, 0.2)"
  waveSpeedX={0.02}
  waveSpeedY={0.01}
  waveAmpX={40}
  waveAmpY={20}
  friction={0.9}
  tension={0.01}
  maxCursorMove={120}
  xGap={12}
  yGap={36} 
/>  }
     {!hideFooter && <Navbar />}
      <main>
        <Outlet />
      </main>
      {!hideFooter && <FooterSection />}
    </>
  );
};

export default Layout;
