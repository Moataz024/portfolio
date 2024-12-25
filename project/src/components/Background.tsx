import React, { useEffect, useRef } from 'react';

const PARTICLE_COUNT = 50;

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create floating shapes
    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: 20 + Math.random() * 80,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.01,
      opacity: 0.1 + Math.random() * 0.2,
      shape: Math.random() > 0.5 ? 'circle' : 'rectangle'
    }));

    const drawShape = (particle: typeof particles[0]) => {
      ctx.save();
      ctx.translate(particle.x, particle.y);
      ctx.rotate(particle.rotation);
      
      const gradient = ctx.createLinearGradient(
        -particle.size/2, -particle.size/2,
        particle.size/2, particle.size/2
      );
      gradient.addColorStop(0, `rgba(126, 87, 194, ${particle.opacity})`);
      gradient.addColorStop(1, `rgba(66, 165, 245, ${particle.opacity})`);
      
      ctx.fillStyle = gradient;

      if (particle.shape === 'circle') {
        ctx.beginPath();
        ctx.arc(0, 0, particle.size/2, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.fillRect(-particle.size/2, -particle.size/2, particle.size, particle.size);
      }
      
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.rotation += particle.rotationSpeed;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        drawShape(particle);
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-nebula-bg to-nebula-card opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(126,87,194,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(66,165,245,0.08),transparent_50%)]" />
      <div className="absolute inset-0 backdrop-blur-[1px]" />
    </div>
  );
}