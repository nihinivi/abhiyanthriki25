import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

// Import the shared layout and the new animated background
import Layout from './components/Layout';
import AnimatedBackground from './components/AnimatedBackground'; // ✅ NEW

// Lazily load page components
const HomePage = lazy(() => import('./components/HomePage'));
const EventDetails = lazy(() => import('./components/EventDetails'));

function App() {
  return (
    // The main container no longer needs background styles as they are in index.css
    <div className="relative min-h-screen w-full">
      {/* ✅ NEW: The animated background is rendered here, behind all other content */}
      <AnimatedBackground />
      
      {/* The rest of your app content will be layered on top */}
      <div className="relative z-10">
        <Suspense fallback={<div className="fixed inset-0 flex items-center justify-center text-white">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="eventdetails" element={<EventDetails />} />
            </Route>
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
