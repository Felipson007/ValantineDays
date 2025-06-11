import { ThemeProvider, createTheme } from '@mui/material';
import styled from '@emotion/styled';
import { useState } from 'react';
import MusicPlayer from './components/MusicPlayer';
import ImageCarousel from './components/ImageCarousel';
import LoveCounter from './components/LoveCounter';
import LoveMessage from './components/LoveMessage';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff4081',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#fff5f8',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
      color: '#ff4081',
    },
    body1: {
      fontSize: '1.1rem',
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
  background: linear-gradient(135deg, #fff5f8 0%, #ffe4e9 100%);
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
  const [startDate] = useState(new Date('2024-01-01')); // Substitua pela data real do início do namoro

  return (
    <ThemeProvider theme={theme}>
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
