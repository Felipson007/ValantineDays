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
  border-radius: 18px;
  background: #1A2A24;
  box-shadow: 0 8px 32px rgba(24, 92, 76, 0.13);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.5rem 1.2rem 1.2rem 1.2rem;
  position: relative;
  @media (max-width: 600px) {
    padding: 1rem 0.5rem;
  }
`;

const PlayerContent = styled('div')`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 1.2rem;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.7rem;
    align-items: center;
  }
`;

const AlbumArt = styled('div')<{ spinning: boolean }>`
  width: 96px;
  height: 96px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(24, 92, 76, 0.10);
  display: flex;
  align-items: center;
  justify-content: center;
  background: #222;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    animation: ${({ spinning }) =>
      spinning ? 'spin 7s linear infinite' : 'none'};
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
  @media (max-width: 600px) {
    width: 100%;
    align-items: center;
    margin-top: 0.5rem;
  }
`;

const SongTitle = styled('div')`
  font-weight: 700;
  font-size: 1.18rem;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (max-width: 600px) {
    white-space: normal;
    font-size: 1.05rem;
    margin-bottom: 0.1rem;
    text-align: center;
  }
`;

const SongArtist = styled('div')`
  font-size: 0.98rem;
  color: #b3b3b3;
  opacity: 0.95;
  @media (max-width: 600px) {
    font-size: 0.95rem;
    text-align: center;
  }
`;

const Controls = styled('div')`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  @media (max-width: 600px) {
    width: 100%;
    justify-content: center;
    margin-top: 0.5rem;
  }
`;

const StyledButton = styled('button')`
  background: #fff;
  color: #222;
  border: none;
  border-radius: 100%;
  width: 54px;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 2.1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: background 0.2s, color 0.2s;
  &:hover {
    background: #1DB954;
    color: #fff;
  }
`;

const VolumeSlider = styled('input')`
  width: 70px;
  accent-color: #b3b3b3;
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
          <SongTitle>Eu Te Amo - Ao Vivo</SongTitle>
          <SongArtist>Péricles</SongArtist>
        </SongInfo>
        <Controls>
          <StyledButton onClick={() => setIsPlaying((p) => !p)}>
            {isPlaying ? <PauseIcon fontSize="large" /> : <PlayArrowIcon fontSize="large" />}
          </StyledButton>
          <VolumeDown style={{ color: '#b3b3b3' }} />
          <VolumeSlider
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={e => setVolume(Number(e.target.value))}
          />
          <VolumeUp style={{ color: '#b3b3b3' }} />
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