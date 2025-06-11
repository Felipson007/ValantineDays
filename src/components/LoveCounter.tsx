import { Paper, Typography, Box, Divider } from '@mui/material';
import styled from '@emotion/styled';
import { differenceInDays } from 'date-fns';
import { motion } from 'framer-motion';

const CounterContainer = styled(Paper)`
  padding: 2rem;
  border-radius: 16px;
  background: rgba(26, 42, 36, 0.85);
  box-shadow: 0 8px 32px rgba(24, 92, 76, 0.13);
  text-align: center;
  color: #fff;
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
  color: #1DB954;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

const LabelText = styled(Typography)`
  color: #b3b3b3;
  font-size: 1.1rem;
`;

interface LoveCounterProps {
  startDate: Date;
}

const LoveCounter = ({ startDate }: LoveCounterProps) => {
  const days = differenceInDays(new Date(), startDate);

  return (
    <CounterContainer elevation={3}>
      <Divider sx={{ mb: 3, bgcolor: '#1DB954', opacity: 0.4 }} />
      
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
          color: '#b3b3b3',
          fontStyle: 'italic'
        }}
      >
        Desde {startDate.toLocaleDateString('pt-BR')}
      </Typography>
    </CounterContainer>
  );
};

export default LoveCounter; 