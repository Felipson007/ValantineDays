import { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';

const PlayerContainer = styled('div')`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  border-radius: 20px;
  background: linear-gradient(135deg, #185C4C 0%, #F6E7C1 100%);
  box-shadow: 0 8px 32px rgba(24, 92, 76, 0.13);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 1rem;
  gap: 1.2rem;
`;

const PlayerContent = styled('div')`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 1.2rem;
`;

const AlbumArt = styled('div')<{ spinning: boolean }>`
  width: 90px;
  height: 90px;
  border-radius: 16px;
  overflow: hidden;
  border: 4px solid #F6E7C1;
  box-shadow: 0 4px 24px rgba(24, 92, 76, 0.10);
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
    animation: ${({ spinning }) =>
      spinning ? 'spin 3s linear infinite' : 'none'};
  }
  @keyframes spin {
    100% { transform: rotate(360deg); }
  }
`;

const SongInfo = styled('div')`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 0;
`;

const SongTitle = styled('div')`
  font-weight: 600;
  font-size: 1.1rem;
  color: #F6E7C1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const SongArtist = styled('div')`
  font-size: 0.95rem;
  color: #F6E7C1;
  opacity: 0.85;
`;

const Controls = styled('div')`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const StyledButton = styled('button')`
  background: #F6E7C1;
  color: #185C4C;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.1s;
  &:hover {
    background: #185C4C;
    color: #F6E7C1;
  }
`;

const VolumeSlider = styled('input')`
  width: 70px;
  accent-color: #F6E7C1;
`;

const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  // Controle o volume inicial aqui (0.03 = 3%)
  const [volume, setVolume] = useState(0.03); // volume inicial 3%
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = volume;
      if (isPlaying) {
        audio.play();
      } else {
        audio.pause();
      }
    }
  }, [isPlaying, volume]);

  useEffect(() => {
    // Autoplay ao carregar
    const audio = audioRef.current;
    if (audio) {
      audio.volume = volume;
      audio.play().catch(() => {});
    }
  }, []);

  return (
    <PlayerContainer>
      <PlayerContent>
        <AlbumArt spinning={isPlaying}>
          <img src="/eu-te-amo-pericles.jpg" alt="Capa Eu Te Amo - Péricles" />
        </AlbumArt>
        <SongInfo>
          <SongTitle>Eu Te Amo</SongTitle>
          <SongArtist>Péricles</SongArtist>
        </SongInfo>
        <Controls>
          <StyledButton onClick={() => setIsPlaying((p) => !p)}>
            {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
          </StyledButton>
          <VolumeDown style={{ color: '#F6E7C1' }} />
          <VolumeSlider
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={e => setVolume(Number(e.target.value))}
          />
          <VolumeUp style={{ color: '#F6E7C1' }} />
        </Controls>
      </PlayerContent>
      <audio
        ref={audioRef}
        src="/eu-te-amo-pericles.mp3"
        autoPlay
        loop
      />
    </PlayerContainer>
  );
};

export default MusicPlayer; 