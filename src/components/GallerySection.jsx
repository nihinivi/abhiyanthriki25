import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useScroll, Image as DreiImage, ScrollControls } from '@react-three/drei';
import { EffectComposer, DepthOfField } from '@react-three/postprocessing';
import * as THREE from 'three';
import { useInView } from 'framer-motion';

// --- IMAGE DATA ---
import image1 from "../assets/figma/1.png";
import image2 from "../assets/figma/2.png";
import image3 from "../assets/figma/3.png";
import image4 from "../assets/figma/4.png";
import image5 from "../assets/figma/5.png";
import image6 from "../assets/figma/6.png";
import image7 from "../assets/figma/7.png";
import image8 from "../assets/figma/8.png";

const allImages = [image1, image2, image3, image4, image5, image6, image7, image8];

// ✅ Single Image Plane (safe version)
function ImagePlane({ url, ...props }) {
  const ref = useRef();

  // Safely animate each image itself
  useFrame(() => {
    if (!ref.current) return;
    // We'll let the parent group control opacity & scale
  });

  return (
    <DreiImage
      ref={ref}
      url={url}
      transparent
      {...props}
    />
  );
}

// ✅ Group of all images with safe animation logic
function Images() {
  const groupRef = useRef();
  const scroll = useScroll();
  const { width: w, height: h } = useThree((state) => state.viewport);
  const gap = 12;

  useFrame(() => {
    if (!groupRef.current) return;
    const scrolledDistance = scroll.offset * (allImages.length * gap);

    groupRef.current.children.forEach((child) => {
      if (!child) return;

      // The <Image> component is a Group -> its actual mesh is child.children[0]
      const mesh = child.children?.[0];
      if (!mesh) return;

      const imageZPosition = child.position.z;
      const distanceFromCamera = imageZPosition + scrolledDistance;

      // ✅ Smooth "bomb" scale
      const scale = THREE.MathUtils.mapLinear(Math.abs(distanceFromCamera), 0, 15, 1, 0.2);
      child.scale.set(scale, scale, 1);

      // ✅ Safe opacity update (if material exists)
      if (mesh.material) {
        mesh.material.opacity = THREE.MathUtils.clamp(
          THREE.MathUtils.mapLinear(distanceFromCamera, -5, 0, 0, 1),
          0,
          1
        );
      }
    });
  });

  return (
    <group ref={groupRef}>
      {allImages.map((url, i) => (
        <ImagePlane
          key={i}
          position={[
            (i % 2 === 0 ? -1 : 1) * (w / 5 + Math.random() * 0.5),
            THREE.MathUtils.randFloat(-h, h) * 0.3,
            -i * gap,
          ]}
          scale={[w / 4, h / 2.5, 1]}
          rotation-z={THREE.MathUtils.randFloat(-0.1, 0.1)}
          url={url}
        />
      ))}
    </group>
  );
}

// ✅ Main Gallery Section
const GallerySection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="relative w-full h-screen bg-transparent overflow-hidden"
      style={{ position: 'relative' }} // ensures framer-motion & Canvas work correctly
    >
      {/* Title */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
        <h2 className="text-center font-['KH Interference'] text-5xl md:text-7xl text-[#F64040]">
          Gallery
        </h2>
      </div>

      {isInView && (
        <Suspense fallback={null}>
          <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
            <ambientLight intensity={1.5} />

            <ScrollControls pages={allImages.length} damping={0.2}>
              <Images />
            </ScrollControls>

            <EffectComposer>
              <DepthOfField
                focusDistance={0}
                focalLength={0.02}
                bokehScale={4}
                height={480}
              />
            </EffectComposer>
          </Canvas>
        </Suspense>
      )}
    </section>
  );
};

export default GallerySection;
