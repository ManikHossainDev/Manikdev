import { useRef, useState } from "react";

const LinkedInAudioButton: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
  };

  const handleAudioPlaying = () => setIsPlaying(true);
  const handleAudioPause = () => setIsPlaying(false);

  return (
    <div className="flex items-center justify-center">
      {/* Play/Pause Button with SVG Toggle */}
      <button
        onClick={handlePlayAudio}
        className="rounded-full  bg-[#737474] "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="w-6 h-6"
        >
          {isPlaying ? (
            // Pause Icon
            <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm-3 6h2v8h-2zm4 0h2v8h-2z" />
          ) : (
            // Play Icon
            <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm-2.5 13.9V8.1c0-.6.6-1 .9-.6l5.2 4.1c.4.3.4 1 0 1.3l-5.2 4.1c-.4.4-.9 0-.9-.6z" />
          )}
        </svg>
      </button>

      {/* Audio Element with Event Listeners */}
      <audio
        ref={audioRef}
        src="/output.mp3"
        onPlay={handleAudioPlaying}
        onPause={handleAudioPause}
      />
    </div>
  );
};

export default LinkedInAudioButton;
