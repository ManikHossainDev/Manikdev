"use client";
/* eslint-disable react/no-unescaped-entities */
import CredentialsPhoto from "@/components/CredentialsPhoto/CredentialsPhoto";
import Modal from "@/components/shared/myModal";
import Pcimage from "@/components/shared/pcimage";
import Skills from "@/components/shared/skills";
import Work_imag from "@/components/shared/work-imag";
import Workimag from "@/components/shared/workimag";
import { Typewriter } from "@/components/Typewriter";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Socialmedia from "./components/socialmedia";
import { HeroSection } from "@/components/HeroSectionContact";
import { AboutSection } from "./components/mytools";
import LinkedInAudio from "@/components/LinkedInAudio";


const HomePage: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="px-2">
      <div className="lg:grid md:grid-cols-12 grid-cols-1 gap-5 pt-5  py-4 my-5">
        <div className="md:col-span-6 pb-2 col-span-1 ">
          <div className="w-full h-full bg-white rounded-[16px] relative pb-20 md:pb-2">
            <div className="flex md:flex-col flex-col ml-5  space-y-3">
              <div className="flex flex-col items-start space-y-2 ">
                <Image
                  alt="person"
                  src="https://pbs.twimg.com/profile_images/1834214792417923072/3fxHzXGX_400x400.jpg"
                  width="206"
                  height="206"
                  className="mt-7 ms-1 rounded-3xl  transition hero-img"
                  priority
                />
                <span className="md:text-3xl text-2xl font-[700] mt-10 md:mt-32 flex items-center gap-3 text-[#00BBA6]">
                  <div className="flex items-center  h-1 w-10 bg-[#00BBA6] font-[400]" />
                  I'm Manik <LinkedInAudio/>
                </span>
                <p className="text-3xl md:text-4xl font-semibold  pt-1">
                  <Typewriter />
                </p>
                <p className="text-md md:text-xl text-balance py-2 font-[400] text-[#8a8a8a]">
                  A MERN & PERN Stack Developer with a passion for creating
                  dynamic and user-friendly applications. Let’s grow together!!
                </p>
                <div className="md:flex items-center gap-5">
                  {/* Resume Button */}
                  <button className="flex items-center gap-2  mb-3 md:mb-0 lg:mb-0 bg-slate-300 hover:bg-slate-100 hover:text-[#00BBA6] transition-all ease-linear duration-150 rounded-md px-3 py-2 text-lg group">
                    <span className=" group-hover:rotate-45  transform transition-all ease-linear duration-200">
                      <svg
                        fill="#00BBA6"
                        height="25px"
                        width="25px"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        enableBackground="new 0 0 512 512"
                        stroke="#00BBA6"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <g>
                            <g>
                              <path d="m251.6,185.7c-36.9,0-67,31.5-67,70.3 0,38.7 30,70.3 67,70.3 36.9,0 67-31.5 67-70.3 0-38.7-30.1-70.3-67-70.3z"></path>
                              <path d="m251.6,367.1c-59.4,0-107.8-49.8-107.8-111.1 0-61.3 48.4-111.1 107.8-111.1s107.8,49.8 107.8,111.1c0,61.3-48.4,111.1-107.8,111.1zm246.3-121.9c-63.8-102.4-149.8-158.8-241.9-158.8-92.1,0-178.1,56.4-241.9,158.8-4.1,6.6-4.1,15 0,21.6 63.8,102.4 149.8,158.8 241.9,158.8 92.1,0 178-56.4 241.9-158.8 4.1-6.6 4.1-15 0-21.6z"></path>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </span>
                    <Link
                      href="https://drive.google.com/file/d/1ptgLkOGJmNmpHRqKDO9wNxaSTakwh1BE/view?usp=drive_link"
                      passHref
                    >
                      Resume
                    </Link>
                  </button>

                  {/* Let's Meet Button */}
                  <button className="flex items-center gap-2  transform transition-all ease-linear duration-200 hover:bg-[#7de4b9] hover:text-black bg-[#00BBA6] rounded-md px-3 py-2 text-white text-lg group">
                    <Link href="https://calendly.com/manikdev/30min" passHref>
                      <span className="flex items-center gap-3 ">
                        <span className="text-white   group-hover:text-black transform transition-all ease-linear duration-200">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            role="img"
                            viewBox="0 0 24 24"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M5.53 2.13 0 7.75h5.53zm.398 0v5.62h7.608v3.65l5.47-4.45c-.014-1.22.031-2.25-.025-3.46-.148-1.09-1.287-1.47-2.236-1.36zM23.1 4.32c-.802.295-1.358.995-2.047 1.49-2.506 2.05-4.982 4.12-7.468 6.19 3.025 2.59 6.04 5.18 9.065 7.76 1.218.671 1.428-.814 1.328-1.64v-13a.828.828 0 0 0-.877-.825zM.038 8.15v7.7h5.53v-7.7zm13.577 8.1H6.008v5.62c3.864-.006 7.737.011 11.58-.009 1.02-.07 1.618-1.12 1.468-2.07v-2.51l-5.47-4.68v3.65zm-13.577 0c.02 1.44-.041 2.88.033 4.31.162.948 1.158 1.43 2.047 1.31h3.464v-5.62z"></path>
                          </svg>
                        </span>
                        Let’s Meet
                      </span>
                    </Link>
                  </button>
                </div>
              </div>
              <div className="group md:pb-10 md:pt-10 md:py-5">
                <div className="absolute bottom-3 md:bottom-5 right-5 cursor-pointer opacity-55 group-hover:opacity-100 transition-all ease-linear duration-200 delay-100">
                  <Link href="/about">
                    <div className="relative">
                      <div className="flex items-center justify-center w-16 h-8 rounded-[16px] border border-black transition-all ease-linear duration-200">
                        <span className="flex items-center justify-center text-black group-hover:rotate-45 transition-all ease-linear duration-200">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 24 24"
                            height="16"
                            width="16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M18.25 15.5a.75.75 0 0 1-.75-.75V7.56L7.28 17.78a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L16.44 6.5H9.25a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-.75.75Z"></path>
                          </svg>
                        </span>
                        <span className="text-black font-[400] text-sm">
                          View
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-6  col-span-1">
          <div className="md:grid grid-cols-1 md:grid-cols-6  md:mt-0 mt-5 gap-5">
            <div className="col-span-1 md:col-span-6 ">
              <div className="grid grid-cols-1 md:grid-cols-8   gap-5">
                <div className="col-span-1  md:col-span-4 lg:col-span-4">
                  <div>
                    <div className="h-full w-full rounded-[16px] py-10 px-6 bg-white relative group">
                      <div className="flex items-center justify-center">
                        <Workimag />
                      </div>
                      <div>
                        <p className="text-xs uppercase font-medium text-[#8a8a8a] mb-2">
                          Showcase
                        </p>
                        <p className="text-2xl font-semibold">Projects</p>
                      </div>
                      <div className="absolute bottom-3 md:bottom-5 right-5 cursor-pointer opacity-55 group-hover:opacity-100 transition-all ease-linear duration-200 delay-100 group">
                        <Link href="/Projects">
                          <div className="flex items-center justify-center w-16 h-8 rounded-[16px] border border-black transition-all ease-linear duration-200">
                            <span className="flex items-center justify-center text-black group-hover:rotate-45 transition-all ease-linear duration-200">
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 24 24"
                                height="16"
                                width="16"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M18.25 15.5a.75.75 0 0 1-.75-.75V7.56L7.28 17.78a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L16.44 6.5H9.25a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-.75.75Z"></path>
                              </svg>
                            </span>
                            <span className="text-black font-[400] text-sm">
                              View
                            </span>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-1 md:col-span-4  lg:col-span-4">
                  <div>
                    <div className="h-full w-full rounded-[16px] py-11 px-6 bg-white relative group">
                      <div className="flex items-center justify-center">
                        <Work_imag />
                      </div>
                      <div>
                        <p className="text-xs uppercase font-medium text-[#8a8a8a] mb-2">
                          Read my blogs
                        </p>
                        <p className="text-2xl font-semibold">Blogs </p>
                      </div>
                      <div className="absolute bottom-3 md:bottom-5 right-5 cursor-pointer opacity-55 group-hover:opacity-100 transition-all ease-linear duration-200 delay-100 group">
                        <Link href="/FrontBlog">
                          <div className="flex items-center justify-center w-16 h-8 rounded-[16px] border border-black transition-all ease-linear duration-200">
                            <span className="flex items-center justify-center text-black group-hover:rotate-45 transition-all ease-linear duration-200">
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 24 24"
                                height="16"
                                width="16"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M18.25 15.5a.75.75 0 0 1-.75-.75V7.56L7.28 17.78a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L16.44 6.5H9.25a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-.75.75Z"></path>
                              </svg>
                            </span>
                            <span className="text-black font-[400] text-sm">
                              View
                            </span>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-8   mt-3  gap-5">
                <div className="col-span-1  md:col-span-4  lg:col-span-4">
                  <div className="py-10 group bg-white rounded-[16px]  px-6 relative group w-full h-full">
                    <div className="flex justify-center  rounded-3xl  md:p-5 p-1 items-center space-x-2 ">
                      <Link
                        href="https://www.linkedin.com/in/devmanik/"
                        passHref
                      >
                        <div className="p-3 rounded-[12px] hover:border-primary-color cursor-pointer transition ease-linear duration-200 delay-100 font-medium text-white bg-[#2563EB]">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 448 512"
                            height="20"
                            width="20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 1 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                          </svg>
                        </div>
                      </Link>

                      <Link href="https://github.com/Programmer-Manik" passHref>
                        <div className="p-3 rounded-[12px] hover:border-primary-color cursor-pointer transition ease-linear duration-200 delay-100 font-medium text-white bg-black">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 496 512"
                            height="20"
                            width="20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                          </svg>
                        </div>
                      </Link>

                      <Link href="https://leetcode.com/u/SeManik/" passHref>
                        <div className="p-3 rounded-[12px] hover:border-primary-color cursor-pointer transition ease-linear duration-200 delay-100 font-medium bg-[#2d97ee]">
                          <svg
                            width="25"
                            height="25"
                            viewBox="0 0 95 111"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-full w-auto max-w-none"
                          >
                            <path
                              d="M68.0063 83.0664C70.5 80.5764 74.5366 80.5829 77.0223 83.0809C79.508 85.579 79.5015 89.6226 77.0078 92.1127L65.9346 103.17C55.7187 113.371 39.06 113.519 28.6718 103.513C28.6117 103.456 23.9861 98.9201 8.72653 83.957C-1.42528 74.0029 -2.43665 58.0749 7.11648 47.8464L24.9282 28.7745C34.4095 18.6219 51.887 17.5122 62.7275 26.2789L78.9048 39.362C81.6444 41.5776 82.0723 45.5985 79.8606 48.3429C77.6488 51.0873 73.635 51.5159 70.8954 49.3003L54.7182 36.2173C49.0488 31.6325 39.1314 32.2622 34.2394 37.5006L16.4274 56.5727C11.7767 61.5522 12.2861 69.574 17.6456 74.8292C28.851 85.8169 37.4869 94.2846 37.4969 94.2942C42.8977 99.496 51.6304 99.4184 56.9331 94.1234L68.0063 83.0664Z"
                              fill="#FFA116"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M41.1067 72.0014C37.5858 72.0014 34.7314 69.1421 34.7314 65.615C34.7314 62.0879 37.5858 59.2286 41.1067 59.2286H88.1245C91.6454 59.2286 94.4997 62.0879 94.4997 65.615C94.4997 69.1421 91.6454 72.0014 88.1245 72.0014H41.1067Z"
                              fill="#B3B3B3"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M49.9118 2.02335C52.3173 -0.55232 56.3517 -0.686894 58.9228 1.72277C61.494 4.13244 61.6284 8.17385 59.2229 10.7495L16.4276 56.5729C11.7768 61.552 12.2861 69.5738 17.6453 74.8292L37.4088 94.2091C39.9249 96.6764 39.968 100.72 37.505 103.24C35.042 105.761 31.0056 105.804 28.4895 103.337L8.72593 83.9567C-1.42529 74.0021 -2.43665 58.0741 7.1169 47.8463L49.9118 2.02335Z"
                              fill="black"
                            ></path>
                          </svg>
                        </div>
                      </Link>
                      <Link href="https://x.com/ManikHossainDev" passHref>
                        <div className="p-3 rounded-[12px] hover:border-primary-color cursor-pointer transition ease-linear duration-200 delay-100 font-medium text-white bg-[#EE4A51]">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
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
                    <Socialmedia />
                  </div>
                </div>
                <div className="col-span-1 md:col-span-4  lg:col-span-4">
                  <div className="h-full w-full rounded-[16px] py-7  px-6 bg-white relative group">
                    <div className="flex items-center justify-center">
                      <CredentialsPhoto />
                    </div>
                    <div>
                      <p className="text-xs uppercase font-medium text-[#8a8a8a] sm:mb-1">
                        More about me
                      </p>
                      <p className="text-base md:text-lg lg:text-xl font-semibold text-clip">
                        Credentials
                      </p>
                    </div>
                    <button
                      onClick={openModal}
                      className="absolute bottom-3 md:bottom-5 right-5 cursor-pointer opacity-55 group-hover:opacity-100 transition-all ease-linear duration-200 delay-100 group"
                    >
                      <div className="flex items-center justify-center w-16 h-8 rounded-[16px] border border-black transition-all ease-linear duration-200">
                        <span className="flex items-center justify-center text-black group-hover:rotate-45 transition-all ease-linear duration-200">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 24 24"
                            height="16"
                            width="16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M18.25 15.5a.75.75 0 0 1-.75-.75V7.56L7.28 17.78a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L16.44 6.5H9.25a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-.75.75Z"></path>
                          </svg>
                        </span>
                        <span className="text-black font-[400] text-sm">
                          View
                        </span>
                      </div>
                    </button>
                    <Modal isOpen={isModalOpen} onClose={closeModal} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 grid-cols-1 gap-5 pb-5 my-5">
        <div className="lg:col-span-4 col-span-1 rounded-3xl py-16 md:py-[70px] px-6  bg-white   relative group">
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
          <div className="mt-16 text-3xl md:text-4xl py-3  font-semibold leading-tight">
            <p>Let's</p>
            <p>
              work <span className="text-[#00BBA6]">together.</span>
            </p>
            <Pcimage />
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
        <div className="lg:col-span-8 col-span-1 rounded-3xl py-5 overflow-hidden md:px-3 px-2  bg-white  relative group">
          <div className="rounded-[16px] py-10  relative group">
            <Skills />
          </div>

          <div className="mt-2">
            <p className="text-xs uppercase font-medium text-[#8a8a8a] mb-2">
              Specialization
            </p>
            <p className="text-2xl font-semibold font-butler">Skills</p>
          </div>

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
                  <Link href="/about">
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
      <div className="bg-white  w-full rounded-3xl my-5">
        <HeroSection />
      </div>
      <div className="my-3"><AboutSection/></div>

    </div>
  );
};

export default HomePage;
