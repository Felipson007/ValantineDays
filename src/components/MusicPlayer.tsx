import { useState, useRef } from 'react';
import { Paper, IconButton, Typography, Box } from '@mui/material';
import styled from '@emotion/styled';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import FavoriteIcon from '@mui/icons-material/Favorite';

const PlayerContainer = styled(Paper)`
  padding: 1.5rem;
  border-radius: 16px;
  background: linear-gradient(145deg, #ffffff, #f5f5f5);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const PlayerContent = styled(Box)`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const AlbumArt = styled(Box)`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  background: #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const SongInfo = styled(Box)`
  flex: 1;
`;

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <PlayerContainer elevation={3}>
      <PlayerContent>
        <AlbumArt>
          {/* Substitua o src pela imagem do álbum da sua música */}
          <img src="/album-cover.jpg" alt="Album Cover" />
        </AlbumArt>
        <SongInfo>
          <Typography variant="h6" component="div">
            Nome da Música
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Nome do Artista
          </Typography>
        </SongInfo>
        <IconButton 
          onClick={togglePlay}
          sx={{ 
            color: 'primary.main',
            '&:hover': { transform: 'scale(1.1)' },
            transition: 'transform 0.2s'
          }}
        >
          {isPlaying ? <PauseIcon fontSize="large" /> : <PlayArrowIcon fontSize="large" />}
        </IconButton>
        <IconButton sx={{ color: 'secondary.main' }}>
          <FavoriteIcon />
        </IconButton>
      </PlayerContent>
      <audio
        ref={audioRef}
        src="/sua-musica.mp3" // Substitua pelo caminho da sua música
        onEnded={() => setIsPlaying(false)}
      />
    </PlayerContainer>
  );
};

export default MusicPlayer; 