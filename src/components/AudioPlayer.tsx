// AudioPlayer.tsx
import React, { useEffect, useRef } from "react";

interface AudioPlayerProps {
  audioSrc: string;
  play: boolean;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioSrc, play }) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (play) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [play]);

  return (
    <audio
      ref={audioRef}
      src={audioSrc}
      loop
      // muted={true} // Uncomment if you want the audio to be muted initially
    >
      Your browser does not support the audio element.
    </audio>
  );
};

export default AudioPlayer;
