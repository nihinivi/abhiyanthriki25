import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import ringStar from "../assets/ring.svg";

function Globe() {
  const globeRef = useRef();

    useEffect(() => {
    if (globeRef.current) {
      globeRef.current.rotation.z = (30 * Math.PI) / 180; // tilt
    }
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

export default function HeroSection() {
  return (
<div className="relative w-screen h-screen  bg-repeat bg-[length:100px_100px] flex items-center justify-center">
  <div className="relative w-[90vw] max-w-[900px] aspect-square">
    <Canvas className="absolute inset-0" camera={{ position: [0, 0, 10], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <Globe />
    </Canvas>

    <img
      src={ringStar}
      alt="ring with star"
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ transform: "translateY(-5%) translateX(5%) scale(1.05)" }}
    />
  </div>
</div>

  );
}
