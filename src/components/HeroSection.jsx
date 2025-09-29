
import HeroAnimation from './HeroAnimation'; // Adjust the import path as needed

export default function HeroSection() {
  return (
    <section className="w-screen min-h-screen flex items-center justify-center bg-black p-4">
      {/* This container controls the size of the SVG.
        - w-full: Takes up full width of its parent.
        - max-w-6xl: Prevents the SVG from becoming too large on desktop screens.
        - px-4 sm:px-6: Adds padding on the sides, which is more noticeable on mobile.
        - mx-auto: Centers the container.
      */}
      <div className="w-full h-full flex items-center justify-center">
        <HeroAnimation/>
      </div>
    </section>
  )
}