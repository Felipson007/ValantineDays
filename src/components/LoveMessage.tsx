import { Paper, Typography } from '@mui/material';
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
          marginTop: '1rem'
        }}
      >
        Com todo meu amor e carinho ❤️
      </AnimatedTypography>
    </MessageContainer>
  );
};

export default LoveMessage; 