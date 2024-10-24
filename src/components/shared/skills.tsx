"use client";
import { Fade } from "react-awesome-reveal";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaSass,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJsonwebtokens,
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiFirebase,
  SiRedux,
  SiAstro,
  SiFramer,
  SiExpress,
} from "react-icons/si";

const Skills = () => {
  return (
    <div className="container mx-auto">
      <Fade direction="right">
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  px-2 md:px-0 gap-8">
          <Fade direction="left">
            <div className="flex items-center justify-start h-20 rounded-xl text-gray-800  bg-gradient-to-l  to-zinc-50 dark:bg-gradient-to-l   ring-1 ring-stone-200 dark:ring-stone-400 select-none group">
              <span className="-mt-20 ml-6 bg-zinc-50  ring-1 ring-stone-200 dark:ring-stone-400 rounded-xl rotate-45 duration-200">
                <FaJs
                  className="w-10 h-10 p-2 -rotate-45 group-hover:p-1.5 rounded-xl duration-200"
                  aria-hidden="true"
                />
              </span>
              <div className="p-3 rounded-2xl w-full">
                
                <div className="grid grid-cols-5 gap-2 items-center">
                  <div className="col-span-3">
                    <h5
                      className="text-zinc-400 dark:text-zinc-400 truncate"
                      title="JavaScript"
                    >
                      JavaScript
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
          <Fade direction="left">
            <div className="flex items-center justify-start h-20 rounded-xl text-gray-800  bg-gradient-to-l  to-zinc-50 dark:bg-gradient-to-l   ring-1 ring-stone-200 dark:ring-stone-400 select-none group">
              <span className="-mt-20 ml-6 bg-zinc-50  ring-1 ring-stone-200 dark:ring-stone-400 rounded-xl rotate-45 duration-200">
                <SiTypescript
                  className="w-10 h-10 p-2 -rotate-45 group-hover:p-1.5 rounded-xl duration-200"
                  aria-hidden="true"
                />
              </span>
              <div className="p-3 rounded-2xl w-full">
                <div className="grid grid-cols-5 gap-2 items-center">
                  <div className="col-span-3">
                    <h5
                      className="text-zinc-400 dark:text-zinc-400 truncate"
                      title="TypeScript"
                    >
                      TypeScript
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
          <Fade direction="left">
            <div className="flex items-center justify-start h-20 rounded-xl text-gray-800  bg-gradient-to-l  to-zinc-50 dark:bg-gradient-to-l   ring-1 ring-stone-200 dark:ring-stone-400 select-none group">
              <span className="-mt-20 ml-6 bg-zinc-50  ring-1 ring-stone-200 dark:ring-stone-400 rounded-xl rotate-45 duration-200">
                <FaReact
                  className="w-10 h-10 p-2  group-hover:p-1.5 rounded-xl duration-200 animate-spin"
                  aria-hidden="true"
                />
              </span>
              <div className="p-3 rounded-2xl w-full">
                <div className="grid grid-cols-5 gap-2 items-center">
                  <div className="col-span-3">
                    <h5
                      className="text-zinc-400 dark:text-zinc-400 truncate"
                      title="React JS"
                    >
                      React JS
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
          <Fade direction="left">
            <div className="flex items-center justify-start h-20 rounded-xl text-gray-800  bg-gradient-to-l  to-zinc-50 dark:bg-gradient-to-l   ring-1 ring-stone-200 dark:ring-stone-400 select-none group">
              <span className="-mt-20 ml-6 bg-zinc-50  ring-1 ring-stone-200 dark:ring-stone-400 rounded-xl rotate-45 duration-200">
                <SiNextdotjs
                  className="w-10 h-10 p-2 -rotate-45 group-hover:p-1.5 rounded-xl duration-200"
                  aria-hidden="true"
                />
              </span>
              <div className="p-3 rounded-2xl w-full">
                <div className="grid grid-cols-5 gap-2 items-center">
                  <div className="col-span-3">
                    <h5
                      className="text-zinc-400 dark:text-zinc-400 truncate"
                      title="Next.js"
                    >
                      Next.js
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
          {/* <Fade direction="left">
              <div className="flex items-center justify-start h-20 rounded-xl text-gray-800  bg-gradient-to-l  to-zinc-50 dark:bg-gradient-to-l   ring-1 ring-stone-200 dark:ring-stone-400 select-none group">
                <span className="-mt-20 ml-6 bg-zinc-50  ring-1 ring-stone-200 dark:ring-stone-400 rounded-xl rotate-45 duration-200">
                  <SiTailwindcss
                    className="w-10 h-10 p-2 -rotate-45 group-hover:p-1.5 rounded-xl duration-200"
                    aria-hidden="true"
                  />
                </span>
                <div className="p-4 rounded-2xl w-full">
                  <h6 className="text-md font-semibold text-zinc-800 ">
                    Tailwind CSS
                  </h6>
                  <div className="grid grid-cols-5 gap-2 items-center">
                    <div className="col-span-3">
                      <h5
                        className="text-zinc-400 dark:text-zinc-400 truncate"
                        title="Tailwind CSS"
                      >
                        Tailwind CSS
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </Fade> */}
          <Fade direction="left">
            <div className="flex items-center justify-start h-20 rounded-xl text-gray-800  bg-gradient-to-l  to-zinc-50 dark:bg-gradient-to-l   ring-1 ring-stone-200 dark:ring-stone-400 select-none group">
              <span className="-mt-20 ml-6 bg-zinc-50  ring-1 ring-stone-200 dark:ring-stone-400 rounded-xl rotate-45 duration-200">
                <SiMongodb
                  className="w-10 h-10 p-2 -rotate-45 group-hover:p-1.5 rounded-xl duration-200"
                  aria-hidden="true"
                />
              </span>
              <div className="p-3 rounded-2xl w-full">
                <div className="grid grid-cols-5 gap-2 items-center">
                  <div className="col-span-3">
                    <h5
                      className="text-zinc-400 dark:text-zinc-400 truncate"
                      title="MongoDB"
                    >
                      MongoDB
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
          <Fade direction="left">
            <div className="flex items-center justify-start h-20 rounded-xl text-gray-800  bg-gradient-to-l  to-zinc-50 dark:bg-gradient-to-l   ring-1 ring-stone-200 dark:ring-stone-400 select-none group">
              <span className="-mt-20 ml-6 bg-zinc-50  ring-1 ring-stone-200 dark:ring-stone-400 rounded-xl rotate-45 duration-200">
                <FaNodeJs
                  className="w-10 h-10 p-2 -rotate-45 group-hover:p-1.5 rounded-xl duration-200"
                  aria-hidden="true"
                />
              </span>
              <div className="p-3 rounded-2xl w-full">
                <div className="grid grid-cols-5 gap-2 items-center">
                  <div className="col-span-3">
                    <h5
                      className="text-zinc-400 dark:text-zinc-400 truncate"
                      title="Node.js"
                    >
                      Node.js
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
          {/* <Fade direction="left">
              <div className="flex items-center justify-start h-20 rounded-xl text-gray-800  bg-gradient-to-l  to-zinc-50 dark:bg-gradient-to-l   ring-1 ring-stone-200 dark:ring-stone-400 select-none group">
                <span className="-mt-20 ml-6 bg-zinc-50  ring-1 ring-stone-200 dark:ring-stone-400 rounded-xl rotate-45 duration-200">
                  <SiFirebase
                    className="w-10 h-10 p-2 -rotate-45 group-hover:p-1.5 rounded-xl duration-200"
                    aria-hidden="true"
                  />
                </span>
                <div className="p-4 rounded-2xl w-full">
                  <h6 className="text-md font-semibold text-zinc-800 ">
                    Firebase Auth
                  </h6>
                  <div className="grid grid-cols-5 gap-2 items-center">
                    <div className="col-span-3">
                      <h5
                        className="text-zinc-400 dark:text-zinc-400 truncate"
                        title="Firebase Authentication"
                      >
                        Firebase Authentication
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </Fade> */}
          <Fade direction="left">
            <div className="flex items-center justify-start h-20 rounded-xl text-gray-800  bg-gradient-to-l  to-zinc-50 dark:bg-gradient-to-l   ring-1 ring-stone-200 dark:ring-stone-400 select-none group">
              <span className="-mt-20 ml-6 bg-zinc-50  ring-1 ring-stone-200 dark:ring-stone-400 rounded-xl rotate-45 duration-200">
                <SiRedux
                  className="w-10 h-10 p-2  animate-spin group-hover:p-1.5 rounded-xl duration-200"
                  aria-hidden="true"
                />
              </span>
              <div className="p-3 rounded-2xl w-full">
                <div className="grid grid-cols-5 gap-2 items-center">
                  <div className="col-span-3">
                    <h5
                      className="text-zinc-400 dark:text-zinc-400 truncate"
                      title="Redux Toolkit"
                    >
                      Redux Toolkit
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </Fade>

          {/* <Fade direction="left">
              <div className="flex items-center justify-start h-20 rounded-xl text-gray-800  bg-gradient-to-l  to-zinc-50 dark:bg-gradient-to-l   ring-1 ring-stone-200 dark:ring-stone-400 select-none group">
                <span className="-mt-20 ml-6 bg-zinc-50  ring-1 ring-stone-200 dark:ring-stone-400 rounded-xl rotate-45 duration-200">
                  <SiFramer
                    className="w-10 h-10 p-2 -rotate-45 group-hover:p-1.5 rounded-xl duration-200"
                    aria-hidden="true"
                  />
                </span>
                <div className="p-4 rounded-2xl w-full">
                  <h6 className="text-md font-semibold text-zinc-800 ">
                    Framer Motion
                  </h6>
                  <div className="grid grid-cols-5 gap-2 items-center">
                    <div className="col-span-3">
                      <h5
                        className="text-zinc-400 dark:text-zinc-400 truncate"
                        title="Framer Motion"
                      >
                        Framer Motion
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </Fade> */}
          <Fade direction="left">
            <div className="flex items-center justify-start h-20 rounded-xl text-gray-800  bg-gradient-to-l  to-zinc-50 dark:bg-gradient-to-l   ring-1 ring-stone-200 dark:ring-stone-400 select-none group">
              <span className="-mt-20 ml-6 bg-zinc-50  ring-1 ring-stone-200 dark:ring-stone-400 rounded-xl rotate-45 duration-200">
                <SiExpress
                  className="w-10 h-10 p-2 -rotate-45 group-hover:p-1.5 rounded-xl duration-200"
                  aria-hidden="true"
                />
              </span>
              <div className="p-3 rounded-2xl w-full">
                
                <div className="grid grid-cols-5 gap-2 items-center">
                  <div className="col-span-3">
                    <h5
                      className="text-zinc-400 dark:text-zinc-400 truncate"
                      title="Express.js"
                    >
                      Express.js
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </Fade>

          <Fade direction="left">
            <div className="flex items-center justify-start h-20 rounded-xl text-gray-800  bg-gradient-to-l  to-zinc-50 dark:bg-gradient-to-l   ring-1 ring-stone-200 dark:ring-stone-400 select-none group">
              <span className="-mt-20 ml-6 bg-zinc-50  ring-1 ring-stone-200 dark:ring-stone-400 rounded-xl rotate-45 duration-200">
                <SiJsonwebtokens
                  className="w-10 h-10 p-2  group-hover:p-1.5 rounded-xl duration-200 animate-spin"
                  aria-hidden="true"
                />
              </span>
              <div className="p-3 rounded-2xl w-full">
                <div className="grid grid-cols-5 gap-2 items-center">
                  <div className="col-span-3">
                    <h5
                      className="text-zinc-400 dark:text-zinc-400 truncate"
                      title="Express.js"
                    >
                      JWT
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </Fade>
    </div>
  );
};

export default Skills;
