"use client";
import Image from "next/image";
import { JackInTheBox } from "react-awesome-reveal";
const Work_imag = () => {
  return (
    <JackInTheBox>
      <Image
        alt="work-imag"
        loading="lazy"
        width="150"
        height="75"
        decoding="async"
        src="https://itznur07-personal-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fservice-cover-1.27f5431c.webp&w=256&q=75"
        className="p-2 animate-custom-bounce"
        style={{ color: "transparent" }}
      />
    </JackInTheBox>
  );
};

export default Work_imag;
