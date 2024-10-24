'use client'
import { FC } from 'react';
import Image from 'next/image';
import { JackInTheBox } from 'react-awesome-reveal';

interface FullImageRevealProps {
  src: string;
  alt: string;
}

const FullImageReveal: FC<FullImageRevealProps> = ({ src, alt }) => {
  return (
      <JackInTheBox>
    <div className="relative w-full md:h-[250px] h-[105px]">
        <Image
          src={src}
          alt={alt}
          fill
          className="w-full h-auto"
        />
    </div>
      </JackInTheBox>
  );
};

export default FullImageReveal;
