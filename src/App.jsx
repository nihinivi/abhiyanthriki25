import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// Import the shared layout
import Layout from './components/Layout';

// Lazily load page components
const HomePage = lazy(() => import('./components/HomePage'));
const EventDetails = lazy(() => import('./components/EventDetails'));

function App() {
  return (
    // Use the class from App.css for the background
    <div className="app-container">
      {/* Suspense shows a fallback while lazy components are loading */}
      <Suspense fallback={<div className="loading-fallback">Loading...</div>}>
        <Routes>
          {/* All routes are now nested inside the Layout component */}
          <Route path="/" element={<Layout />}>
            {/* The 'index' route is the default page for the parent path '/' */}
            <Route index element={<HomePage />} />
            <Route path="eventdetails" element={<EventDetails />} />
            {/* You can add more pages here and they will all have the Navbar and Footer */}
            {/* <Route path="contact" element={<ContactPage />} /> */}
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;