import React, { useEffect, useRef, useState, useCallback } from 'react';

const AnimatedBackground = () => {
    const canvasRef = useRef(null);
    const [isMounted, setIsMounted] = useState(false);

    // Delay mount to avoid race conditions
    useEffect(() => {
        const timer = setTimeout(() => setIsMounted(true), 100);
        return () => clearTimeout(timer);
    }, []);

    // MOVED a: Define event handlers outside useEffect using useCallback.
    // This gives them a stable identity and makes them accessible to the effect's dependency array.
    const mouse = useRef({ x: null, y: null });
    const handleMouseMove = useCallback((event) => {
        mouse.current.x = event.x;
        mouse.current.y = event.y;
    }, []);

    const handleResize = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        // Note: Re-creating particles on resize is handled inside the effect.
        // This handler is now just for setting size, but we'll re-trigger the effect
        // to handle the particle creation logic properly.
    }, []);


    useEffect(() => {
        if (!isMounted || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let particles = [];
        let animationFrameId;

        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        // --- Initialization and Animation Loop ---
        const createParticles = () => {
            particles = [];
            const particleCount = Math.floor((canvas.width * canvas.height) / 8000);
            const colors = ['246, 64, 64', '255, 100, 100'];

            for (let i = 0; i < particleCount; i++) {
                const size = Math.random() * 4 + 1;
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                const color = colors[Math.floor(Math.random() * colors.length)];
                const weight = Math.random() * 1.5 + 0.5;
                particles.push(new Particle(x, y, size, color, weight));
            }
        };

        // The resize handler now needs to re-create particles.
        const onResize = () => {
            setCanvasSize();
            createParticles();
        };

        setCanvasSize();
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', onResize); // Use the inner onResize

        // --- Particle Class ---
        class Particle {
            constructor(x, y, size, color, weight) {
                this.x = x;
                this.y = y;
                this.size = size;
                this.color = color;
                this.weight = weight;
                this.baseX = this.x;
                this.baseY = this.y;
                this.opacity = Math.random() * 0.5 + 0.2;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
                ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
                ctx.fill();
            }

            update() {
                if (mouse.current.x !== null && mouse.current.y !== null) {
                    let dx = mouse.current.x - this.x;
                    let dy = mouse.current.y - this.y;
                    
                    let distanceSq = dx * dx + dy * dy;
                    const pushRadiusSq = 80 * 80;
                    const pullRadiusSq = 250 * 250;

                    if (distanceSq < pushRadiusSq) {
                        const distance = Math.sqrt(distanceSq);
                        let force = (80 - distance) / 80;
                        this.x -= (dx / distance) * force * 5;
                        this.y -= (dy / distance) * force * 5;
                    } else if (distanceSq < pullRadiusSq) {
                        const distance = Math.sqrt(distanceSq);
                        let force = (250 - distance) / 250;
                        this.x += (dx / distance) * force * this.weight;
                        this.y += (dy / distance) * force * this.weight;
                    }
                }
                
                this.x += (this.baseX - this.x) * 0.01;
                this.y += (this.baseY - this.y) * 0.01;
                this.x += (Math.random() - 0.5) * 0.5;
                this.y += (Math.random() - 0.5) * 0.5;
            }
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.filter = 'blur(5px)'; 
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();
            }
            ctx.filter = 'none'; 
            animationFrameId = requestAnimationFrame(animate);
        };

        createParticles();
        animate();

        // --- Cleanup ---
        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', onResize);
        };
        // MOVED b: ...so they can be correctly referenced in the dependency array.
    }, [isMounted, handleMouseMove]); // We no longer need handleResize here

    return isMounted ? <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" /> : null;
};

export default AnimatedBackground;