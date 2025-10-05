import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import ringStar from "../assets/ring.svg";
// 1. Import your TextImage
import TextImage from "../assets/figma/Text.png"; // Make sure this path is correct

function Globe() {
  const globeRef = useRef();

  useEffect(() => {
    if (globeRef.current) {
      globeRef.current.rotation.z = (30 * Math.PI) / 180; // tilt
    }
  }, []);

  useEffect(() => {
  window.dispatchEvent(new Event("resize"));
}, []);

  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.003;
    }
  });

  return (
    <mesh ref={globeRef}>
      <sphereGeometry args={[3, 32, 32]} />
      <meshBasicMaterial wireframe color="#F64040" />
    </mesh>
  );
}

// Renamed the export to HeroAnimation to match common usage from your previous code
export default function HeroAnimation() { 
  return (
<div className="relative w-screen h-screen bg-repeat bg-[length:100px_100px] flex items-center justify-center">
  <div className="relative w-[90vw] max-w-[900px] aspect-square">
    {/* Bottom Layer: The 3D Globe */}
    <Canvas className="absolute inset-0" camera={{ position: [0, 0, 10], fov: 50 }} frameloop="always"  resize={{ scroll: true, debounce: { scroll: 0, resize: 0 } }}>
      <ambientLight intensity={0.5} />
      <Globe />
    </Canvas>

    {/* Middle Layer: The Ring Image */}
    <img
      src={ringStar}
      alt="ring with star"
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ transform: "translateY(-5%) translateX(5%) scale(1.05)" }}
    />
  </div>

  {/* 🔥 TOP LAYER: Text image spanning screen width, centered */}
  <img
    src={TextImage}
    alt="Text over animation"
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
               w-[120%] sm:w-[150%] md:w-[180%] lg:w-[220%] xl:w-[250%] 
               h-auto object-contain pointer-events-none"
  />
</div>

  );
}