import { useRef } from "react";

const LinkedInAudioButton: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlayAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div className="flex items-center justify-center">
      {/* New SVG Audio Button */}
      <button
        onClick={handlePlayAudio}
        className=" rounded-full hover:bg-[#00BBA6] bg-[#737474] hover:animate-ping-large"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="w-6 h-6"
        >
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm-2.5 13.9V8.1c0-.6.6-1 .9-.6l5.2 4.1c.4.3.4 1 0 1.3l-5.2 4.1c-.4.4-.9 0-.9-.6z" />
        </svg>
      </button>

      {/* Audio Element */}
      <audio ref={audioRef} src="/output.mp3" />
    </div>
  );
};

export default LinkedInAudioButton;

