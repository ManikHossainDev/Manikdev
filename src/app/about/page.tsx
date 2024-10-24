/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Skills } from "./_components/skills";
import { Education } from "./_components/education";
import Download from "./_components/download";
import Account from "../Contact/components/account";
import { motion } from "framer-motion";
import MyComponent from "./_components/abouttext";
import TechOrbit from "@/components/shared/TechOrbit";
import SectionTitle from "./_components/titele";
export const metadata: Metadata = {
  title: "Manik | About",
  description: "this is about to be published to the public domain",
};
const AboutPage = () => {
  return (
    <div className="mb-5 mx-2">
      <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-10 py-5 my-5">
        <div className="col-span-1 md:col-span-5 lg:col-span-4  space-y-4">
          <div className="w-full h-auto bg-white   rounded-3xl py-5 px-4  md:px-10 relative group">
            <div className="">
              {/* Use Next.js Image Component for Optimized Image Loading */}
              <TechOrbit />
              {/* <Image
                alt="personimage"
                width={450}
                height={500}
                className="rounded-3xl hero-img animate-custom-pulse "
                src="https://pbs.twimg.com/profile_images/1834214792417923072/3fxHzXGX_400x400.jpg"
              /> */}
            </div>
            <div className="text-3xl text-center font-semibold mt-4">
              <p className="font-medium">Manik Hossain</p>
              <p className="text-sm font-medium text-gray-500 mt-1">
                se.manik.js@gmail.com
              </p>
            </div>

            <div className="flex justify-center border  border-black border-opacity-3 rounded-3xl p-2 px-3 items-center space-x-4 mt-3">
              <Account />
            </div>

            <div className="mt-5 w-full">
              <Link href="/Contact">
                <span className="w-full flex items-center justify-center gap-3 transform transition-all ease-linear duration-200 hover:bg-[#52d4c5] hover:border-[#00BBA6] bg-[#00BBA6] border border-black-color rounded-md  px-5 py-2 text-white font-semibold">
                  Hire Me
                </span>
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-[16px]  p-5">
            <Education />
          </div>
          <div className=" rounded-[16px] bg-white py-16 md:py-[70px] px-6 relative group">
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
            <div className="mt-16 text-3xl md:text-4xl    font-semibold leading-tight">
              <p className="">Let's</p>
              <p className="">
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
                      <Link href="/Contact">
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
                      </Link>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-1 md:col-span-7 lg:col-span-8">
          <div className="rounded-[16px] py-8 px-6 bg-white">
            <h1 className="text-3xl font-[700] font-butler">
              <SectionTitle title={"About Me"} subTitle={""}></SectionTitle>
            </h1>
            <MyComponent />
          </div>
          <div className="pt-7 mt-7">
            <Skills />
          </div>
        </div>
      </div>
      <div className="md:h-96 grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 md:gap-14 mb-10">
        <div className="h-96 md:h-full  col-span-1 md:col-span-5 lg:col-span-5  space-y-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28681.590138584394!2d88.44536994972988!3d26.027051703667983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e4c00fae515037%3A0xc354ad492e9e6874!2sThakurgaon!5e0!3m2!1sen!2sbd!4v1724669238364!5m2!1sen!2sbd"
            className="w-full rounded-md  h-full  border"
            loading="lazy"
          />
        </div>
        <div className="divider  lg:divider-horizontal col-span-1">OR</div>
        <div className="h-96 md:h-full  overflow-y-auto   bg-white overflow-x-hidden rounded-md relative group col-span-1 md:col-span-6 lg:col-span-6">
          <Download />
          <iframe
            src="https://i.ibb.co.com/9vx6JL9/Screenshot-2024-10-20-194949.png"
            className="w-full h-full pt-5"
            allow="autoplay"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
