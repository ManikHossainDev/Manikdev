'use client'
import { FaLinkedin, FaGithub, FaHackerrank, FaTwitter } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link'; // For internal linking in Next.js
import Image from 'next/image';

// Define the type for the data structure
interface IntroDetails {
  name: string;
  img1: string;
}

const getIntroDetails: IntroDetails[] = [
  {
    name: 'Md Manik Hossain',
    img1: 'https://i.ibb.co/GT5w9vL/m1.png', // Example image URL
  },
];

// Card component
const Card: React.FC = () => {
  return (
    <div className="card mastercard bg-bg_primary shadow-lg shadow-gray-800 lg:mt-0 mt-16 rounded-md z-[10] lg:h-[630px] lg:col-span-4 sm:h-auto">
      <div>
        {/* Check if getIntroDetails has data before rendering */}
        {getIntroDetails && getIntroDetails.length > 0 ? (
          <>
            <img  className=" w-80 h-52" src={getIntroDetails[0].img1} alt="img" width={500} height={500} />
            <div className="text-center text-white pb-6">
              <h1 className="text-3xl font-semibold py-4">{getIntroDetails[0].name}</h1>
              <h1 className="text-lg font-semibold pb-4 text-bg_secondary">
                <TypeAnimation
                  sequence={[
                    'MERN Stack Developer 👨‍💼',
                    1000,
                    'Frontend Developer',
                    1000,
                    'Backend Developer',
                    1000,
                    'PERN Stack Developer 👨‍💻',
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ fontSize: '20px', display: 'inline' }}
                  repeat={Infinity}
                />
              </h1>

              <span className="flex gap-3 items-center text-center justify-center">
                <Link href="https://www.linkedin.com/in/devmanik/" passHref>
                  <div rel="noreferrer" className="cursor-pointer">
                    <FaLinkedin className="text-lg text-white hover:text-gray-800" />
                  </div>
                </Link>

                <Link href="https://github.com/Programmer-Manik" passHref>
                  <div rel="noreferrer" className="cursor-pointer">
                    <FaGithub className="text-lg text-white hover:text-gray-800" />
                  </div>
                </Link>

                <Link href="https://www.hackerrank.com/profile/fiverrmanik15021" passHref>
                  <div rel="noreferrer" className="cursor-pointer">
                    <FaHackerrank className="text-lg text-white hover:text-gray-800" />
                  </div>
                </Link>

                <Link href="https://x.com/ManikHossainDev" passHref>
                  <div rel="noreferrer" className="cursor-pointer">
                    <FaTwitter className="text-lg text-white hover:text-gray-800" />
                  </div>
                </Link>
              </span>
            </div>
          </>
        ) : (
          <div>
            <div className="skeleton  h-[350px] w-full bg-text_color_dark"></div>
            <div className="w-[300px] space-y-4 mt-8 mx-auto flex flex-col">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="skeleton bg-gray-700 h-5 w-full"></div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
