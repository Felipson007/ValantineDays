import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const HeartContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
`;

const Heart = styled(motion.div)`
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: #1DB954;
  transform: rotate(45deg);
  opacity: 0.6;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #1DB954;
  }
  
  &::before {
    top: -10px;
    left: 0;
  }
  
  &::after {
    top: 0;
    left: -10px;
  }
`;

const HeartRain = () => {
  const [hearts, setHearts] = useState<Array<{ id: number; x: number }>>([]);

  useEffect(() => {
    const createHeart = () => {
      const x = Math.random() * window.innerWidth;
      const newHeart = {
        id: Date.now(),
        x,
      };
      setHearts((prev) => [...prev, newHeart]);

      // Remove heart after animation
      setTimeout(() => {
        setHearts((prev) => prev.filter((heart) => heart.id !== newHeart.id));
      }, 5000);
    };

    // Create a new heart every 300ms
    const interval = setInterval(createHeart, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <HeartContainer>
      {hearts.map((heart) => (
        <Heart
          key={heart.id}
          initial={{ 
            y: -20,
            x: heart.x,
            scale: 0.5,
            opacity: 0 
          }}
          animate={{ 
            y: window.innerHeight + 20,
            x: heart.x + (Math.random() * 100 - 50),
            scale: [0.5, 1, 0.8],
            opacity: [0, 0.6, 0] 
          }}
          transition={{
            duration: 5,
            ease: "linear"
          }}
        />
      ))}
    </HeartContainer>
  );
};

export default HeartRain; 