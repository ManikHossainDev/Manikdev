'use client';
import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";
import TypewriterComponent from 'typewriter-effect';

export function Typewriter() {
  const [index, setIndex] = useState(0);
  const TEXTS = [ 'Front End', 'Back End', 'MERN Satck', 'PERN Satck', 'Full Satck','Software'];
  useEffect(() => {
    const intervalId = setInterval(
        () => setIndex((index) => index + 1),
        3000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
}, []);
  return (
    <h3 className="text-2xl font-bold font-play"><TextTransition springConfig={presets.gentle} style={{ margin: "0 4px" }} className="text-hello-10" inline>{TEXTS[index % TEXTS.length]}</TextTransition> Developer.</h3>
    // <TypewriterComponent
    //   options={{
    //     strings: ['Full Stack Developer.'],
    //     autoStart: true,
    //     loop: true,
    //     deleteSpeed: 50,
    //   }}
    // />
  );
}

