import { Box } from '@mui/material';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const BackgroundContainer = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.3); // Overlay escuro para melhor contraste
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/couple-photo.jpg'); // Substitua pela sua foto
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    filter: blur(12px) brightness(0.7);
    transform: scale(1.1); // Evita bordas brancas no blur
  }
`;

const HeartContainer = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const Heart = styled(motion.div)`
  position: relative;
  width: 120px;
  height: 120px;
  transform: rotate(45deg);
  background-color: rgba(255, 64, 129, 0.9);
  box-shadow: 0 0 60px rgba(255, 64, 129, 0.6);
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background-color: rgba(255, 64, 129, 0.9);
  }
  
  &::before {
    top: -60px;
    left: 0;
  }
  
  &::after {
    top: 0;
    left: -60px;
  }
`;

const HeartAnimation = () => {
  return (
    <>
      <BackgroundContainer />
      <HeartContainer
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Heart
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.4, 0.9, 0.4],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </HeartContainer>
    </>
  );
};

export default HeartAnimation; 