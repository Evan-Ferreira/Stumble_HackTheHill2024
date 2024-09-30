import React, { useState, useRef } from "react";

interface AudioPlayerProps {
  audioPath: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioPath }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlayPause = () => {
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
    <div className="flex items-center justify-center">
      <audio ref={audioRef} src={audioPath}></audio>
      <button
        onClick={togglePlayPause}
        className={`flex h-16 w-16 items-center justify-center rounded-full transition duration-300 ${
          isPlaying
            ? "bg-red-500 hover:bg-red-600"
            : "bg-green-500 hover:bg-green-600"
        }`}
      >
        {isPlaying ? (
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer transition-colors duration-300 hover:fill-blue-600"
          >
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" fill="currentColor" />
          </svg>
        ) : (
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer transition-colors duration-300 hover:fill-blue-600"
          >
            <path d="M8 5v14l11-7L8 5z" fill="currentColor" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default AudioPlayer;
