import React, { useEffect, useRef, useState } from 'react';

const AnimatedBackground = () => {
    const canvasRef = useRef(null);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsMounted(true), 100);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!isMounted || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d', { alpha: false });
        let animationFrameId;
        let time = 0;

        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        setCanvasSize();
        window.addEventListener('resize', setCanvasSize);

        const drawGrid = () => {
            const gridSize = 50;
            const depth = 20;
            
            ctx.fillStyle = '#0a0a0a';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            // Perspective grid lines
            ctx.strokeStyle = 'rgba(246, 64, 64, 0.15)';
            ctx.lineWidth = 1;
            
            // Horizontal lines
            for (let i = 0; i < depth; i++) {
                const progress = i / depth;
                const y = canvas.height * 0.5 + (canvas.height * 0.5 * progress);
                const width = canvas.width * (1 - progress * 0.5);
                const x = (canvas.width - width) / 2;
                
                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.lineTo(x + width, y);
                ctx.globalAlpha = 1 - progress * 0.5;
                ctx.stroke();
            }
            
            // Vertical lines
            const verticalLines = 20;
            for (let i = 0; i <= verticalLines; i++) {
                const x = (canvas.width / verticalLines) * i;
                
                ctx.beginPath();
                ctx.moveTo(x, canvas.height * 0.5);
                ctx.lineTo(canvas.width * 0.5 + (x - canvas.width * 0.5) * 0.5, canvas.height);
                ctx.globalAlpha = 0.3;
                ctx.stroke();
            }
            
            ctx.globalAlpha = 1;
        };

        const drawHexagons = () => {
            const hexSize = 80;
            const rows = Math.ceil(canvas.height / (hexSize * 1.5)) + 2;
            const cols = Math.ceil(canvas.width / (hexSize * 1.732)) + 2;
            
            ctx.lineWidth = 1;
            
            for (let row = -1; row < rows; row++) {
                for (let col = -1; col < cols; col++) {
                    const x = col * hexSize * 1.732 + (row % 2) * hexSize * 0.866;
                    const y = row * hexSize * 1.5;
                    
                    // Very subtle pulse effect
                    const pulseValue = Math.sin(time * 0.015 + col * 0.3 + row * 0.2);
                    if (pulseValue > 0.85) {
                        ctx.strokeStyle = `rgba(246, 64, 64, ${0.12 + pulseValue * 0.08})`;
                    } else {
                        ctx.strokeStyle = 'rgba(246, 64, 64, 0.05)';
                    }
                    
                    ctx.beginPath();
                    for (let i = 0; i < 6; i++) {
                        const angle = (Math.PI / 3) * i;
                        const hx = x + hexSize * Math.cos(angle);
                        const hy = y + hexSize * Math.sin(angle);
                        
                        if (i === 0) {
                            ctx.moveTo(hx, hy);
                        } else {
                            ctx.lineTo(hx, hy);
                        }
                    }
                    ctx.closePath();
                    ctx.stroke();
                }
            }
        };

        const drawParticles = () => {
            const particleCount = 60;
            
            for (let i = 0; i < particleCount; i++) {
                // Create flowing particle field
                const baseX = (i % 10) * (canvas.width / 10);
                const baseY = Math.floor(i / 10) * (canvas.height / 6);
                
                const offsetX = Math.sin(time * 0.008 + i * 0.5) * 40;
                const offsetY = Math.cos(time * 0.01 + i * 0.3) * 25;
                
                const x = baseX + offsetX + (canvas.width * 0.05);
                const y = baseY + offsetY + (canvas.height * 0.1);
                
                const size = 1.5 + Math.sin(time * 0.015 + i) * 0.5;
                const opacity = 0.2 + Math.sin(time * 0.02 + i * 0.7) * 0.15;
                
                // Subtle outer glow
                const gradient = ctx.createRadialGradient(x, y, 0, x, y, size * 2.5);
                gradient.addColorStop(0, `rgba(246, 64, 64, ${opacity * 0.8})`);
                gradient.addColorStop(0.5, `rgba(246, 64, 64, ${opacity * 0.4})`);
                gradient.addColorStop(1, 'rgba(246, 64, 64, 0)');
                
                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(x, y, size * 2.5, 0, Math.PI * 2);
                ctx.fill();
                
                // Softer core
                ctx.fillStyle = `rgba(255, 120, 120, ${opacity * 0.6})`;
                ctx.beginPath();
                ctx.arc(x, y, size, 0, Math.PI * 2);
                ctx.fill();
            }
        };

        const drawScanlines = () => {
            ctx.strokeStyle = 'rgba(246, 64, 64, 0.03)';
            ctx.lineWidth = 1;
            
            for (let y = 0; y < canvas.height; y += 4) {
                ctx.beginPath();
                ctx.moveTo(0, y + (time * 0.5) % 4);
                ctx.lineTo(canvas.width, y + (time * 0.5) % 4);
                ctx.stroke();
            }
        };

        const animate = () => {
            time += 1;
            
            drawGrid();
            drawHexagons();
            drawParticles();
            drawScanlines();
            
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', setCanvasSize);
        };
    }, [isMounted]);

    return isMounted ? (
        <canvas 
            ref={canvasRef} 
            className="fixed top-0 left-0 w-full h-full -z-10"
            style={{ pointerEvents: 'none' }}
        />
    ) : null;
};

export default AnimatedBackground;