import { ThemeProvider, createTheme } from '@mui/material';
import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import MusicPlayer from './components/MusicPlayer';
import ImageCarousel from './components/ImageCarousel';
import LoveCounter from './components/LoveCounter';
import LoveMessage from './components/LoveMessage';

const BackgroundPhoto = styled('div')`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -2;
  background: url('/couple-photo.jpg') center center/cover no-repeat;
`;

const Overlay = styled('div')`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  background: rgba(0,0,0,0.45);
`;

const theme = createTheme({
  palette: {
    primary: {
      main: '#4B6B4B', // verde folha
    },
    secondary: {
      main: '#A67C52', // marrom claro
    },
    background: {
      default: '#B6D6E2', // azul claro
      paper: '#E9D8C3', // bege/terra
    },
    text: {
      primary: '#222',
      secondary: '#4B6B4B',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.2rem',
      fontWeight: 600,
      color: '#4B6B4B',
    },
    body1: {
      fontSize: '1.08rem',
      lineHeight: 1.6,
    },
  },
});

const AppContainer = styled('div')`
  min-height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  position: relative;
`;

const ContentContainer = styled('div')`
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
`;

function App() {
  const [startDate] = useState(new Date('2024-01-01'));

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }, 1200);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <BackgroundPhoto />
      <Overlay />
      <AppContainer>
        <ContentContainer>
          <MusicPlayer />
          <ImageCarousel />
          <LoveMessage />
          <LoveCounter startDate={startDate} />
        </ContentContainer>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
