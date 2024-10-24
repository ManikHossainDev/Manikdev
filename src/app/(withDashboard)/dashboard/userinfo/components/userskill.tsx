"use client";
import {
  SiBootstrap,
  SiCss3,
  SiExpress,
  SiFacebook,
  SiFirebase,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLinkedin,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTwilio,
  SiTypescript,
} from "react-icons/si";
import { FaLanguage } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";
import Image from "next/image";
import Link from "next/link";

const Profile = () => {
  return (
    <div
      id="profile"
      className=" relative text-md px-3 sm:mb-2  text-center w-full md:sticky md:top-32"
    >
      <Image
        className="w-20 h-20 rounded-full mx-auto ring-1 ring-[#00ADB5] brightness-125"
        src="https://i.ibb.co.com/JkhYcqX/icon-5359553-1280.webp"
        alt="me"
      />

      <h2 className="font-semibold my-2">SeManik</h2>
      <p className="text-slate-400 text-sm">Full Stack Developer</p>
      <div className="flex flex-wrap gap-2 my-2  justify-center text-[#00ADB5]">
        <p>JavaScript</p>
        <div className="border-r-2 "></div>
        <p>React</p>
        <div className="border-r-2 "></div>
        <p>Redux</p>
        <div className="border-r-2 "></div>
        <p>NextJs</p>
        <div className="border-r-2 "></div>
        <p>Node</p>
        <div className="border-r-2 "></div>
        <p>Express</p>
        <div className="border-r-2 "></div>
        <p>MongoDB</p>
      </div>
      <div className=" text-start mt-auto my-1">
        <ul className="py-3 px-4 mt-3 overflow-y-auto overflow-hidden h-[42vh] duration-300 ease-in-out">
          <li className="text-start md:text-lg text-xl font-semibold my-2 uppercase">
            <Slide>Skills</Slide>
          </li>
          <li>
            <Slide>
              <p className="flex justify-between border-b border-[#00BBA6] py-3">
                HTML5
                <SiHtml5 className="text-xl text-orange-500"></SiHtml5>
              </p>
            </Slide>
          </li>
          <li>
            <Slide>
              <p className="flex justify-between border-b border-[#00BBA6] py-3">
                CSS
                <SiCss3 className="text-xl text-blue-500"></SiCss3>
              </p>
            </Slide>
          </li>
          <li>
            <Slide>
              <p className="flex justify-between border-b border-[#00BBA6] py-3">
                JavaScript
                <SiJavascript className="text-xl text-yellow-500"></SiJavascript>
              </p>
            </Slide>
          </li>
          <li>
            <Slide>
              <p className="flex justify-between border-b border-[#00BBA6] py-3">
                TypeScript
                <SiTypescript className="text-xl text-blue-500"></SiTypescript>
              </p>
            </Slide>
          </li>
          <li>
            <Slide>
              <p className="flex justify-between border-b border-[#00BBA6] py-3">
                TailwindCSS
                <SiTailwindcss className="text-xl text-blue-500"></SiTailwindcss>
              </p>
            </Slide>
          </li>
          <li>
            <Slide>
              <p className="flex justify-between border-b border-[#00BBA6] py-3">
                Bootstrap
                <SiBootstrap className="text-xl text-pink-500"></SiBootstrap>
              </p>
            </Slide>
          </li>
          <li>
            <Slide>
              <p className="flex justify-between border-b border-[#00BBA6] py-3">
                React Js
                <SiReact className="text-xl text-blue-500"></SiReact>
              </p>
            </Slide>
          </li>
          <li>
            <Slide>
              <p className="flex justify-between border-b border-[#00BBA6] py-3">
                Next Js
                <SiNextdotjs className="text-xl text-gray-500"></SiNextdotjs>
              </p>
            </Slide>
          </li>
          <li>
            <Slide>
              <p className="flex justify-between border-b border-[#00BBA6] py-3">
                Redux
                <SiRedux className="text-xl text-fuchsia-400"></SiRedux>
              </p>
            </Slide>
          </li>
          <li>
            <Slide>
              <p className="flex justify-between border-b border-[#00BBA6] py-3">
                Firebase
                <SiFirebase className="text-xl text-yellow-500"></SiFirebase>
              </p>
            </Slide>
          </li>
          <li>
            <Slide>
              <p className="flex justify-between border-b border-[#00BBA6] py-3">
                Node Js
                <SiNodedotjs className="text-xl text-green-500"></SiNodedotjs>
              </p>
            </Slide>
          </li>
          <li>
            <Slide>
              <p className="flex justify-between border-b border-[#00BBA6] py-3">
                Express Js
                <SiExpress className="text-xl text-gray-500"></SiExpress>
              </p>
            </Slide>
          </li>
          <li>
            <Slide>
              <p className="flex justify-between border-b border-[#00BBA6] py-3">
                MongoDB
                <SiMongodb className="text-xl text-green-500"></SiMongodb>
              </p>
            </Slide>
          </li>

          {/* next line */}
          <li className="text-start text-lg font-semibold my-3 uppercase">
            <Slide>Language</Slide>
          </li>
          <li>
            <Slide>
              <p className="flex justify-between border-b border-[#00BBA6] py-3">
                Bengali
                <FaLanguage className="text-xl text-orange-500"></FaLanguage>
              </p>
            </Slide>
          </li>
          <li>
            <Slide>
              <p className="flex justify-between border-b border-[#00BBA6] py-3">
                English
                <FaLanguage className="text-xl text-orange-500"></FaLanguage>
              </p>
            </Slide>
          </li>
        </ul>
      </div>

      <div className="relative space-y-4">
        <h2 className="font-semibold md:mt-4 mt-8">Get In Touch</h2>
        <div className="flex flex-wrap justify-center gap-3 ">
          <Link href="https://github.com/Programmer-Manik">
            <SiGithub className="text-lg"></SiGithub>
          </Link>
          <Link href="https://www.linkedin.com/in/devmanik/">
            <SiLinkedin className="text-lg"></SiLinkedin>
          </Link>
          <Link href="https://www.facebook.com/profile.php?id=100082862521278">
            <SiFacebook className="text-lg"></SiFacebook>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
