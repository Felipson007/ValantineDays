import { Paper, Typography, Box } from '@mui/material';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const MessageContainer = styled(Paper)`
  padding: 2rem;
  border-radius: 16px;
  background: linear-gradient(145deg, #ffffff, #f5f5f5);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const AnimatedTypography = styled(motion(Typography))`
  margin-bottom: 1rem;
  color: #ff4081;
`;

const SmallHeart = styled(motion.div)`
  display: inline-block;
  width: 32px;
  height: 32px;
  margin-left: 8px;
  vertical-align: middle;
  position: relative;
  top: 6px;
  transform: rotate(45deg);
  background-color: rgba(255, 64, 129, 0.9);
  box-shadow: 0 0 12px rgba(255, 64, 129, 0.3);
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: rgba(255, 64, 129, 0.9);
  }
  &::before {
    top: -16px;
    left: 0;
  }
  &::after {
    top: 0;
    left: -16px;
  }
`;

const LoveMessage = () => {
  return (
    <MessageContainer elevation={3}>
      <AnimatedTypography
        variant="h4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Para o amor da minha vida
      </AnimatedTypography>
      
      <AnimatedTypography
        variant="body1"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        sx={{ color: '#666', lineHeight: 1.8 }}
      >
        Cada momento ao seu lado é uma nova aventura de amor e felicidade.
        Você é minha inspiração, minha melhor amiga e meu maior amor.
        Que possamos continuar construindo memórias incríveis juntos.
      </AnimatedTypography>
      
      <AnimatedTypography
        variant="h6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        sx={{ 
          color: '#f50057',
          fontStyle: 'italic',
          marginTop: '1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
        }}
      >
        Com todo meu amor e carinho
        <SmallHeart
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </AnimatedTypography>
    </MessageContainer>
  );
};

export default LoveMessage; 