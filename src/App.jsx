
import './App.css';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import EventSection from './components/EventSection';
import GallerySection from './components/GallerySection';
import FooterSection from './components/FooterSection';
import EventDetails from './components/EventDetails';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div
      className="min-h-screen w-full text-black"
      style={{
        backgroundColor: '#000000',
        backgroundImage: "url('/src/assets/pattern.svg')",
        backgroundSize: '10%',
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center center',
      }}
    >
      <Navbar/>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <AboutSection />
              <EventSection />
              <GallerySection />
              <FooterSection />
            </>
          }
        />
        <Route path="/eventdetails" element={<EventDetails />} />
      </Routes>
    </div>
  );
}

export default App
