import React, { useEffect, useRef, useState } from 'react';

const AnimatedBackground = () => {
    const canvasRef = useRef(null);
    const [isMounted, setIsMounted] = useState(false);

    // Delay the component's mounting to prevent race conditions with other components
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsMounted(true);
        }, 100); // A small delay gives other components time to initialize first
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        // Guard clause: Do not run the animation effect until the component is mounted
        if (!isMounted || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let particles = [];
        let mouse = { x: null, y: null };
        let animationFrameId;

        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        setCanvasSize();

        // --- Event Listeners ---
        const handleMouseMove = (event) => {
            mouse.x = event.x;
            mouse.y = event.y;
        };

        const handleResize = () => {
            setCanvasSize();
            createParticles();
        };
        
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', handleResize);

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
                ctx.filter = 'blur(5px)';
                ctx.fill();
            }

            update() {
                if (mouse.x !== null && mouse.y !== null) {
                    let dx = mouse.x - this.x;
                    let dy = mouse.y - this.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance > 0) {
                        const pushRadius = 80;
                        const pullRadius = 250;

                        if (distance < pushRadius) {
                            let force = (pushRadius - distance) / pushRadius;
                            this.x -= (dx / distance) * force * 5;
                            this.y -= (dy / distance) * force * 5;
                        } 
                        else if (distance < pullRadius && distance >= pushRadius) {
                            let force = (pullRadius - distance) / pullRadius;
                            this.x += (dx / distance) * force * this.weight;
                            this.y += (dy / distance) * force * this.weight;
                        }
                    }
                }
                
                let returnForceX = (this.baseX - this.x) * 0.01;
                let returnForceY = (this.baseY - this.y) * 0.01;
                this.x += returnForceX;
                this.y += returnForceY;

                this.x += (Math.random() - 0.5) * 0.5;
                this.y += (Math.random() - 0.5) * 0.5;

                if (this.x > canvas.width + this.size) this.x = -this.size;
                if (this.x < -this.size) this.x = canvas.width + this.size;
                if (this.y > canvas.height + this.size) this.y = -this.size;
                if (this.y < -this.size) this.y = canvas.height + this.size;
            }
        }

        // --- Initialization and Animation Loop ---
        const createParticles = () => {
            particles = [];
            const particleCount = 250;
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

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        createParticles();
        animate();

        // --- Cleanup ---
        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
        };
    }, [isMounted]); // This effect now runs only when isMounted is true

    // Conditionally render the canvas
    return isMounted ? <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" /> : null;
};

export default AnimatedBackground;

