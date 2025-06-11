import { Paper, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const MessageContainer = styled(Paper)`
  padding: 2rem;
  border-radius: 16px;
  background: rgba(26, 42, 36, 0.85);
  box-shadow: 0 8px 32px rgba(24, 92, 76, 0.13);
  text-align: center;
  color: #fff;
`;

const AnimatedTypography = styled(motion(Typography))`
  margin-bottom: 1rem;
  color: #fff;
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
  background-color: #1DB954;
  box-shadow: 0 0 12px rgba(29, 185, 84, 0.3);
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #1DB954;
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
        sx={{ color: '#fff' }}
      >
        Para o amor da minha vida
      </AnimatedTypography>
      
      <AnimatedTypography
        variant="body1"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        sx={{ color: '#e0e0e0', lineHeight: 1.8 }}
      >
        Feliz Dia dos Namorados, minha princesa.
        Você me fez entender o quanto o amor pode ser leve, gostoso e verdadeiro. Mesmo com algumas desavenças, a gente sempre se fortalece e melhora juntos. Sou grato por tudo que você fez por mim quando eu estava no fundo do poço — e por tudo que ainda faz todos os dias.
        Amo sua companhia, mesmo quando eu sou chato e insuportável. Amo sair com você, com sua família, e principalmente, amo ter você ao meu lado em todos os momentos.
        Você é a minha princesa emburrada, dramática e cabeçuda — e é também a luz da minha vida. Que esse seja nosso primeiro dia dos namorados juntos de muitos outros.
        Te amo demais minha princesa maravilhosa. ❤️
      </AnimatedTypography>
      
      <AnimatedTypography
        variant="h6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        sx={{ 
          color: '#b3b3b3',
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