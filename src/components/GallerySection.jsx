import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useScroll, Image as DreiImage } from '@react-three/drei';
import { EffectComposer, DepthOfField } from '@react-three/postprocessing';
import * as THREE from 'three';

// --- IMAGE DATA SETUP ---
// Using higher resolution images for a better 3D experience
const allImageUrls = [
    "https://images.unsplash.com/photo-1677442135755-334341419a4e?q=80&w=1600",
    "https://images.unsplash.com/photo-1532187643623-dbf2670316b8?q=80&w=1600",
    "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1600",
    "https://images.unsplash.com/photo-1580894908361-967195033215?q=80&w=1600",
    "https://images.unsplash.com/photo-1609804231297-89024f3645b7?q=80&w=1600",
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1600",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600",
    "https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=1600",
];

// --- 3D COMPONENTS ---

function ImagePlane({ url, ...props }) {
    const ref = useRef();
    const materialRef = useRef();

    // Fade in effect when the image loads
    const [isLoaded, setLoaded] = React.useState(false);
    React.useEffect(() => {
        if (materialRef.current) {
            materialRef.current.opacity = 0;
        }
    }, []);

    useFrame((_, delta) => {
        if (isLoaded && materialRef.current.opacity < 1) {
            materialRef.current.opacity += delta * 1.5;
        }
    });

    return (
        <group {...props}>
            <DreiImage
                ref={ref}
                url={url}
                transparent
                onLoad={() => setLoaded(true)}
            >
                <meshBasicMaterial ref={materialRef} toneMapped={false} />
            </DreiImage>
        </group>
    );
}

function Images() {
    const groupRef = useRef();
    const scroll = useScroll(); // This hook tracks the scroll position of the parent
    const margin = 0.5;
    const gap = 3;
    const totalWidth = (allImageUrls.length * (4 + gap)) - gap;

    useFrame((state, delta) => {
        // Animate the group of images based on scroll
        groupRef.current.position.x = THREE.MathUtils.damp(
            groupRef.current.position.x,
            -totalWidth * scroll.offset,
            4,
            delta
        );

        // Make the camera look at the center of the scrolling group
        state.camera.lookAt(groupRef.current.position.x, 0, 0);
    });

    return (
        <group ref={groupRef}>
            {allImageUrls.map((url, i) => (
                <ImagePlane
                    key={i}
                    position={[i * (4 + gap), (i % 2) * -1, 0]}
                    scale={[4, 5, 1]}
                    url={url}
                />
            ))}
        </group>
    );
}


// --- MAIN GALLERY COMPONENT ---
const GallerySection = () => {
    return (
        <section id="gallery" className="relative w-full h-screen bg-black">
            {/* Title Container */}
            <div className="absolute top-16 left-1/2 -translate-x-1/2 z-20">
                <h2 className="text-center font-['KH Interference'] text-5xl md:text-7xl text-[#F64040]">
                    Gallery
                </h2>
            </div>
            
            {/* 3D Canvas */}
            <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
                <ambientLight intensity={1} />
                
                {/* Scroll container is essential for the scroll animations */}
                <scrollControls pages={(allImageUrls.length * (4 + 3)) / 15} damping={0.1}>
                    <Images />
                </scrollControls>

                {/* Post-processing for depth-of-field effect */}
                <EffectComposer>
                    <DepthOfField 
                        focusDistance={0} 
                        focalLength={0.1} 
                        bokehScale={5} 
                        height={480} 
                    />
                </EffectComposer>
            </Canvas>
        </section>
    );
};

export default GallerySection;

