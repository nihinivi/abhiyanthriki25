import './App.css'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import EventSection from './components/EventSection'
import GallerySection from './components/GallerySection'
import FooterSection from './components/FooterSection'

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
      <HeroSection />
      <AboutSection />
      <EventSection />
      <GallerySection />
      <FooterSection />
    </div>
  )
}

export default App
