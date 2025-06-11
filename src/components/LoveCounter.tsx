import { Paper, Typography, Box, Divider } from '@mui/material';
import styled from '@emotion/styled';
import { differenceInDays } from 'date-fns';
import { motion } from 'framer-motion';
import { useState } from 'react';

const CounterContainer = styled(Paper)`
  padding: 2rem;
  border-radius: 16px;
  background: linear-gradient(145deg, #ffffff, #f5f5f5);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const AnimatedBox = styled(motion(Box))`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const NumberDisplay = styled(Typography)`
  font-size: 3rem;
  font-weight: bold;
  color: #ff4081;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

const LabelText = styled(Typography)`
  color: #666;
  font-size: 1.1rem;
`;

interface LoveCounterProps {
  startDate: Date;
}

const LoveCounter = ({ startDate }: LoveCounterProps) => {
  const days = differenceInDays(new Date(), startDate);
  const [volume, setVolume] = useState(0.01); // volume baixo (3%)

  return (
    <CounterContainer elevation={3}>
      <Divider sx={{ mb: 3 }} />
      
      <AnimatedBox
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <NumberDisplay variant="h2">
          {days}
        </NumberDisplay>
        <LabelText variant="h6">
          dias de amor e felicidade
        </LabelText>
      </AnimatedBox>

      <Typography 
        variant="body2" 
        sx={{ 
          mt: 2, 
          color: '#888',
          fontStyle: 'italic'
        }}
      >
        Desde {startDate.toLocaleDateString('pt-BR')}
      </Typography>
    </CounterContainer>
  );
};

export default LoveCounter; 