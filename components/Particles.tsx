"use client";

import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  left: number;
  size: number;
  animationDelay: number;
  animationDuration: number;
}

function Particles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          left: Math.random() * 100,
          size: Math.random() * 4 + 1,
          animationDelay: Math.random() * 20,
          animationDuration: Math.random() * 20 + 10,
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  return (
    <div className="particles">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.left}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `${particle.animationDelay}s`,
            animationDuration: `${particle.animationDuration}s`,
          }}
        />
      ))}
    </div>
  );
}

export default Particles;
