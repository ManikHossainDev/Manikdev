"use client";
import Link from "next/link";
import { useRef } from "react";
const Sidebar = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlayAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div className="sticky top-24   grid grid-cols-3 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-1  md:gap-1">
      <ul className="menu md:-mb-4 rounded-box flex ">
        <li className="md:mb-7">
          <Link href="/dashboard" onClick={handlePlayAudio}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Studio
          </Link>
        </li>
        <li className="md:mb-7">
          <Link href="/dashboard/userinfo" onClick={handlePlayAudio}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Profile
          </Link>
        </li>
        <li className="md:pb-9">
          <Link href="/dashboard/Course" onClick={handlePlayAudio}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 3v18m0-18c-4 1-8 1-10 4v11c2-3 6-3 10-4m0 18c4-1 8-1 10-4V7c-2 3-6 3-10 4"
              />
            </svg>
            Course
          </Link>
        </li>
      </ul>
      <ul className="menu md:-mt-4 md:-mb-4 rounded-box">
        <li className="md:mb-7">
          <Link
            href="/dashboard/myblogs
          "
            onClick={handlePlayAudio}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 20H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v8" />
              <path d="M18 20v-5h-2a1 1 0 00-1 1v5a1 1 0 001 1h4a1 1 0 001-1v-5a1 1 0 00-1-1h-2v5z" />
              <path d="M8 10h4M8 14h4" />
            </svg>
            My_Blogs
          </Link>
        </li>
        <li className="md:mb-7">
          <Link
            href="/dashboard/team
          "
            onClick={handlePlayAudio}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              className="h-5 w-5"
              fill="currentColor"
            >
              <g id="team-icon">
                <circle cx="32" cy="20" r="8" />
                <path d="M24 40c0-4.42 3.58-8 8-8s8 3.58 8 8v8H24v-8z" />

                <circle cx="16" cy="24" r="6" />
                <path d="M10 42c0-3.31 2.69-6 6-6s6 2.69 6 6v6H10v-6z" />

                <circle cx="48" cy="24" r="6" />
                <path d="M42 42c0-3.31 2.69-6 6-6s6 2.69 6 6v6H42v-6z" />
              </g>
            </svg>
            Our_Team
          </Link>
        </li>
        <li className="md:pb-9">
          <Link href="/dashboard/Certificate" onClick={handlePlayAudio}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <rect
                x="3"
                y="4"
                width="18"
                height="14"
                rx="2"
                ry="2"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 8h6M9 12h6"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
              <circle cx="12" cy="17" r="1.5" fill="currentColor" />
              <path
                d="M10 19.5l2-2 2 2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
            Certified
          </Link>
        </li>
      </ul>
      <ul className="menu md:-mt-4 rounded-box">
        <li className="md:mb-7">
          <Link href="/dashboard/bangladesh" onClick={handlePlayAudio}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 12.5 7 12.5S19 14.25 19 9c0-3.86-3.14-7-7-7zm0 10.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 7.5 12 7.5s2.5 1.12 2.5 2.5S13.38 12.5 12 12.5z"
                clipRule="evenodd"
              />
            </svg>
            Country
          </Link>
        </li>
        <li className="md:mb-7">
          <Link href="/dashboard/settings" onClick={handlePlayAudio}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
            Success
          </Link>
        </li>
        <li className="md:mb-9">
          <Link href="/dashboard/gallery" onClick={handlePlayAudio}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="gallery-icon h-5 w-5"
              width="50"
              height="50"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
            Gallery
          </Link>
        </li>
      </ul>
      <audio ref={audioRef} src="/src_assets_clicksound.mp3" />
    </div>
  );
};

export default Sidebar;
