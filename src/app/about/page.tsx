/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Skills } from "./_components/skills";
import { Education } from "./_components/education";
import { ArrowBigDownDashIcon } from 'lucide-react';
import { cn } from "@/utils/utils";
export const metadata: Metadata = {
  title: "Manik | About",
  description: "this is about to be published to the public domain",
};
const AboutPage = () => {
  return (
    <div>
      <div className="grid md:grid-cols-12 gap-10 px-5 py-5">
        <div className="md:col-span-4 space-y-4">
          <div className="w-full h-auto bg-gray-100 bg-opacity-55 border border-black/25 rounded-3xl py-10 md:p-10 relative group">
            <div>
              {/* Use Next.js Image Component for Optimized Image Loading */}
              <Image
                alt="personimage"
                width={500}
                height={500}
                className="rounded-3xl hero-img  transition"
                src="https://pbs.twimg.com/profile_images/1834214792417923072/3fxHzXGX_400x400.jpg"
              />
            </div>
            <div className="text-3xl text-center font-semibold mt-4">
              <p className="font-medium">Manik Hossain</p>
              <p className="capitalize text-sm font-medium text-gray-500 mt-1">
                @manik08
              </p>
            </div>

            <div className="flex justify-center border border-black border-opacity-3 rounded-3xl p-2 items-center space-x-4 mt-3">
              <Link
                href="https://www.linkedin.com/in/devmanik/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="p-3 rounded-full border border-black hover:border-[#00BBA6] hover:text-[#00BBA6] cursor-pointer transition ease-linear duration-200 delay-100 font-medium hover:text-[#0A66C2]">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    height="20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                  </svg>
                </div>
              </Link>

              {/* GitHub */}
              <Link
                href="https://github.com/Programmer-Manik"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="p-3 rounded-full border border-black hover:border-[#00BBA6] hover:text-[#00BBA6] cursor-pointer transition ease-linear duration-200 delay-100 font-medium hover:text-black">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 496 512"
                    height="20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z"></path>
                  </svg>
                </div>
              </Link>

              {/* Threads */}
              <Link
                href="https://www.threads.net/@manik500282"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="p-3 rounded-full border border-black hover:border-[#00BBA6] hover:text-[#00BBA6] cursor-pointer transition ease-linear duration-200 delay-100 font-medium hover:text-[#E70E1A]">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    height="20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M331.5 235.7c2.2 .9 4.2 1.9 6.3 2.8c29.2 14.1 50.6 35.2 61.8 61.4c15.7 36.5 17.2 95.8-30.3 143.2c-36.2 36.2-80.3 52.5-142.6 53h-.3c-70.2-.5-124.1-24.1-160.4-70.2c-32.3-41-48.9-98.1-49.5-169.6V256v-.2C17 184.3 33.6 127.2 65.9 86.2C102.2 40.1 156.2 16.5 226.4 16h.3c70.3 .5 124.9 24 162.3 69.9c18.4 22.7 32 50 40.6 81.7l-40.4 10.8c-7.1-25.8-17.8-47.8-32.2-65.4c-29.2-35.8-73-54.2-130.5-54.6c-57 .5-100.1 18.8-128.2 54.4C72.1 146.1 58.5 194.3 58 256c.5 61.7 14.1 109.9 40.3 143.3c28 35.6 71.2 53.9 128.2 54.4c51.4-.4 85.4-12.6 113.7-40.9c32.3-32.2 31.7-71.8 21.4-95.9c-6.1-14.2-17.1-26-31.9-34.9c-3.7 26.9-11.8 48.3-24.7 64.8c-17.1 21.8-41.4 33.6-72.7 35.3c-23.6 1.3-46.3-4.4-63.9-16c-20.8-13.8-33-34.8-34.3-59.3c-2.5-48.3 35.7-83 95.2-86.4c21.1-1.2 40.9-.3 59.2 2.8c-2.4-14.8-7.3-26.6-14.6-35.2c-10-11.7-25.6-17.7-46.2-17.8H227c-16.6 0-39 4.6-53.3 26.3l-34.4-23.6c19.2-29.1 50.3-45.1 87.8-45.1h.8c62.6 .4 99.9 39.5 103.7 107.7l-.2 .2zm-156 68.8c1.3 25.1 28.4 36.8 54.6 35.3c25.6-1.4 54.6-11.4 59.5-73.2c-13.2-2.9-27.8-4.4-43.4-4.4c-4.8 0-9.6 .1-14.4 .4c-42.9 2.4-57.2 23.2-56.2 41.8l-.1 .1z"></path>
                  </svg>
                </div>
              </Link>

              {/* Twitter */}
              <Link
                href="https://x.com/ManikHossainDev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="p-3 rounded-full border border-black hover:border-[#00BBA6] hover:text-[#00BBA6] cursor-pointer transition ease-linear duration-200 delay-100 font-medium hover:text-[#1A8CD8]">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    height="20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                  </svg>
                </div>
              </Link>
            </div>

            <div className="mt-5 w-full">
              <Link href="/Contact">
                <span className="w-full flex items-center justify-center gap-3 transform transition-all ease-linear duration-200 hover:bg-[#52d4c5] hover:border-[#00BBA6] bg-[#00BBA6] border border-black-color rounded-md px-5 py-2 text-white font-semibold">
                  Hire Me
                </span>
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-[16px]  p-5">
            <Education />
          </div>
          <div className=" rounded-[16px]  bg-white py-16 md:py-[70px] px-6 relative group">
            <div className="absolute top-1.5 left-0">
              <Image
                alt="icon"
                loading="lazy"
                width="46"
                height="42"
                decoding="async"
                data-nimg="1"
                className="color:transparent w-[170px] rotate-90"
                src="https://itznur07-personal-web.vercel.app/_next/static/media/icon.5fe9906c.svg"
              />
            </div>
            <div className="mt-16 text-3xl md:text-4xl   font-semibold leading-tight">
              <p>Let's</p>
              <p>
                work <span className="text-[#00BBA6]">together.</span>
              </p>
              <button
                type="button"
                aria-haspopup="dialog"
                aria-expanded="false"
                aria-controls="radix-:r14:"
                data-state="closed"
              >
                <div className="absolute bottom-3 md:bottom-5 right-5 cursor-pointer opacity-65 group-hover:opacity-100 transition-all ease-linear duration-200 delay-100 group">
                  <div className="relative">
                    <div className="absolute w-10 h-10 rounded-full border border-[#00BBA6] hidden group-hover:block animate-ping"></div>
                    <div className="w-10 h-10 rounded-full border border-black group-hover:border-[#00BBA6] transition-all ease-linear duration-200">
                      <span className="flex items-center justify-center mt-2 text-black group-hover:text-[#00BBA6] group-hover:-rotate-45 transition-all ease-linear duration-200">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 512 512"
                          height="20"
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M85 277.375h259.704L225.002 397.077 256 427l171-171L256 85l-29.922 29.924 118.626 119.701H85v42.75z"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className=" md:col-span-8">
          <div className="rounded-[16px] py-8 px-6 bg-white">
            <h1 className="text-3xl font-[700] font-butler">About me</h1>
            <div className="mt-5">
              <p className="md:text-lg font-lato">
                Hi, I’m Manik Hossain, a MERN stack developer with a passion for
                creating dynamic and user-friendly web applications, always
                learning .
              </p>
              <p className="mt-2 md:text-lg font-lato">
                Currently, I'm studying in Bachelor of Science, 1st Year
                Computer Science and Engineering Department. I enjoy learning
                new skills and exploring new challenges in the field of web
                development. I'm always open to new opportunities and
                collaborations, driven by innovation and continuous improvement
                in tech.
              </p>
            </div>
          </div>
          <div className="py-2">
            <Skills />
          </div>
        </div>
      </div>
      <div className="px-5 w-full h-96 md:flex lg:flex justify-between">
        <div className="py-3 px-2 bg-white rounded-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28681.590138584394!2d88.44536994972988!3d26.027051703667983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e4c00fae515037%3A0xc354ad492e9e6874!2sThakurgaon!5e0!3m2!1sen!2sbd!4v1724669238364!5m2!1sen!2sbd"
            className="w-[335px] md:w-[710px] h-full  border"
            loading="lazy"
          />
        </div>
        <div className="overflow-y-auto overflow-x-hidden rounded-md relative w-[335px] md:w-[640px] border  group">
          <a className={cn('absolute bg-[#00BBA6] flex px-3 py-1 rounded-md top-2 right-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100')}
          href=""
          download={true}
          >
          Download CV <ArrowBigDownDashIcon />
          </a>
          <iframe
            src="https://i.ibb.co.com/vmmY87j/Screenshot-2024-09-21-112547.png"
            className="w-[335px] md:w-[660px] h-full"
            allow="autoplay"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
