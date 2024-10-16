"use client"
import Image from "next/image";
import {  Roll } from "react-awesome-reveal";
const Workimag = () => {
  return (
    <Roll>
    <Image
      alt="work-imag"
      loading="lazy"
      width="224"
      height="126"
      decoding="async"
      src="https://itznur07-personal-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmy-works.3cb6073a.png&w=256&q=75"
      className="p-1"
      style={{ color: "transparent" }}
    />
    </Roll>
  );
};

export default Workimag;