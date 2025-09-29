import React, { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let particles = [];
        let mouse = { x: null, y: null };

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
            createParticles(); // Recreate particles for the new size
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
                this.weight = weight; // How much the mouse affects it
                this.baseX = this.x;
                this.baseY = this.y;
                this.opacity = Math.random() * 0.5 + 0.2; // Add random opacity
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
                ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
                ctx.filter = 'blur(5px)'; // Apply a blur effect
                ctx.fill();
            }

            update() {
                // --- MOUSE INTERACTION (PUSH & PULL) ---
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                
                const pushRadius = 80;
                const pullRadius = 250;

                // Push away if mouse is too close
                if (distance < pushRadius) {
                    let force = (pushRadius - distance) / pushRadius;
                    this.x -= (dx / distance) * force * 5; // Push with more force
                    this.y -= (dy / distance) * force * 5;
                } 
                // Pull towards mouse if it's within range
                else if (distance < pullRadius && distance >= pushRadius) {
                    let force = (pullRadius - distance) / pullRadius;
                    this.x += (dx / distance) * force * this.weight;
                    this.y += (dy / distance) * force * this.weight;
                }
                
                // --- "BREATHING" EFFECT (RETURN TO BASE) ---
                // Gently pull back to original position when mouse is away
                let returnForceX = (this.baseX - this.x) * 0.01;
                let returnForceY = (this.baseY - this.y) * 0.01;
                this.x += returnForceX;
                this.y += returnForceY;

                // --- CONTINUOUS RANDOM MOVEMENT ---
                this.x += (Math.random() - 0.5) * 0.5;
                this.y += (Math.random() - 0.5) * 0.5;

                // Keep particles within the screen bounds
                if (this.x > canvas.width + this.size) this.x = -this.size;
                if (this.x < -this.size) this.x = canvas.width + this.size;
                if (this.y > canvas.height + this.size) this.y = -this.size;
                if (this.y < -this.size) this.y = canvas.height + this.size;
            }
        }

        // --- Initialization and Animation Loop ---
        const createParticles = () => {
            particles = [];
            const particleCount = 250; // Increased particle count
            const colors = ['246, 64, 64', '255, 100, 100']; // Two shades of red

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
            requestAnimationFrame(animate);
        };

        createParticles();
        animate();

        // --- Cleanup ---
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />;
};

export default AnimatedBackground;

