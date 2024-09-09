/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="px-5">
      <div className="grid md:grid-cols-12 grid-cols-1 gap-5 ">
        <div className="md:col-span-6 col-span-1 py-4 pt-5">
          <div className="w-full h-full  bg-white rounded-[16px] relative pb-20 md:pb-0">
            <div className="flex md:flex-col flex-col ml-5  space-y-3">
              <div className="flex flex-col items-start space-y-2">
                <Image
                  alt="person"
                  src="https://itznur07-personal-web.vercel.app/_next/static/media/undraw_coding.6ff70534.svg"
                  width={350}
                  height={350}
                  className="mt-10"
                  priority
                />
                <span className="md:text-3xl text-2xl font-[700] mt-10 md:mt-32 flex items-center gap-3 text-[#00BBA6]">
                  <div className="h-1 w-10 bg-[#00BBA6] font-[400]" />
                  I'm Manik
                </span>
                <p className="text-3xl md:text-4xl font-semibold pt-1">
                  Full-Stack Developer.
                </p>
                <p className="text-md md:text-xl w-[250px] md:w-[520px] font-[400] text-[#8a8a8a]">
                  A MERN Stack & BackEnd developer with a passion for creating
                  dynamic and user-friendly applications. Let’s grow together!!
                </p>
                <div className="flex items-center gap-5 pt-5">
                  {/* Resume Button */}
                  <button className="flex items-center gap-1 bg-gray-100 transition-all ease-linear duration-150 rounded-full px-5 py-2 text-lg group">
                    <span className="group-hover:rotate-45 transform transition-all ease-linear duration-200">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        height="20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M18.25 15.5a.75.75 0 0 1-.75-.75V7.56L7.28 17.78a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L16.44 6.5H9.25a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-.75.75Z"></path>
                      </svg>
                    </span>
                    <Link
                      href="https://drive.google.com/file/d/1fWbeatT5weiC63VvqMKnnHbij33yZ2qa/view?usp=sharing"
                      passHref
                    >
                      Resume
                    </Link>
                  </button>

                  {/* Let's Meet Button */}
                  <button className="flex items-center gap-3 transform transition-all ease-linear duration-200 hover:bg-[#7de4b9] hover:text-black bg-[#00BBA6] rounded-full px-5 py-2 text-white text-lg group">
                    <Link href="https://calendly.com/itznur07/30min" passHref>
                      <span className="flex items-center gap-3">
                        <span className="text-white group-hover:text-black transform transition-all ease-linear duration-200">
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

              <div className="group md:pb-10 md:pt-14 py-5">
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
        <div className="md:col-span-6 col-span-1"></div>
      </div>
      <div className="grid md:grid-cols-12 grid-cols-1 gap-5 pb-5">
        <div className="md:col-span-6 col-span-1 rounded-3xl py-16 md:py-[70px] px-6  bg-white  border border-black/25  relative group">
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
          <div className="mt-16 text-4xl md:text-5xl   font-semibold leading-tight">
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
        <div className="md:col-span-6 col-span-1 rounded-3xl py-10 px-6  bg-white  border border-black/25 relative group">
          <div className="rounded-[16px] py-10 px-6   relative group">
            <div className="grid md:grid-cols-12 grid-cols-9 gap-5">
              {/* <!-- Javascript --> */}
              <div className="md:col-span-3 col-span-6 flex items-center space-x-1   cursor-pointer transition ease-linear duration-200 delay-100 font-medium  p-2 rounded-3xl border border-black  border-opacity-35 hover:border-opacity-100 ">
                <span className="text-md">
                  {/* <!-- Javascript Icon --> */}
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    role="img"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"></path>
                  </svg>
                </span>
                <span>Javascript</span>
              </div>

              {/* <!-- React.js --> */}
              <div className="md:col-span-3 col-span-6 flex items-center space-x-1 cursor-pointer transition ease-linear duration-200 delay-100 font-medium p-2 rounded-3xl border border-black border-opacity-35 hover:border-opacity-100">
                <span className="text-md">
                  {/* <!-- React Icon --> */}
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    className="animate-spin"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4z"></path>
                  </svg>
                </span>
                <span>React.js</span>
              </div>

              {/* <!-- Next.js --> */}
              <div className="md:col-span-3 col-span-4 flex items-center space-x-1 cursor-pointer transition ease-linear duration-200 delay-100 font-medium p-2 rounded-3xl border border-black border-opacity-35 hover:border-opacity-100">
                <span className="text-md">
                  {/* <!-- Next.js Icon --> */}
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    role="img"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z"></path>
                  </svg>
                </span>
                <span>Next.js</span>
              </div>

              {/* <!-- TypeScript --> */}
              <div className="md:col-span-3 col-span-6 flex items-center space-x-1 cursor-pointer transition ease-linear duration-200 delay-100 font-medium p-2 rounded-3xl border border-black border-opacity-35 hover:border-opacity-100">
                <span className="text-md">
                  {/* <!-- TypeScript Icon --> */}
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    role="img"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.263 5.404 5.404 0 0 0-1.336-.165c-.307 0-.6.03-.876.091a2.243 2.243 0 0 0-.723.285c-.203.123-.365.287-.485.49a1.26 1.26 0 0 0-.165.642c0 .254.062.472.184.653.123.181.282.335.48.46.198.123.425.238.678.343.254.105.527.21.82.315.392.136.754.284 1.085.444.33.16.623.35.876.571.253.221.457.487.612.796.155.308.233.676.233 1.103 0 .524-.096.986-.288 1.384-.192.399-.466.736-.82 1.013a3.43 3.43 0 0 1-1.29.62c-.51.121-1.052.182-1.625.182-.647 0-1.224-.064-1.73-.193a4.903 4.903 0 0 1-1.36-.543v-2.522c.217.15.467.292.747.425.28.133.572.244.876.333.304.09.612.135.924.135.392 0 .712-.053.96-.157.247-.105.442-.247.586-.426.144-.18.216-.402.216-.665a.891.891 0 0 0-.17-.537 1.4 1.4 0 0 0-.454-.384 5.86 5.86 0 0 0-.82-.315 12.497 12.497 0 0 1-1.043-.351 3.557 3.557 0 0 1-.851-.492 2.407 2.407 0 0 1-.657-.822c-.155-.32-.233-.737-.233-1.25 0-.49.088-.924.263-1.3.175-.378.425-.7.75-.968.325-.268.727-.474 1.206-.618a5.293 5.293 0 0 1 1.608-.236zm-9.018.01h4.788v1.863H9.449v9.365H6.661v-9.365H3.375V9.76z"></path>
                  </svg>
                </span>
                <span>TypeScript</span>
              </div>
              {/* <!-- Tailwind CSS --> */}
              <div className="md:col-span-3 col-span-6 flex items-center space-x-1 cursor-pointer transition ease-linear duration-200 delay-100 font-medium p-2 rounded-3xl border border-primary border-opacity-35 hover:border-opacity-100">
                <span className="text-md">
                  {/* <!-- Tailwind Icon --> */}
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    role="img"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"></path>
                  </svg>
                </span>
                <span>Tailwind CSS</span>
              </div>

              {/* <!-- MUI --> */}
              <div className="md:col-span-3 col-span-6 flex items-center space-x-1 cursor-pointer transition ease-linear duration-200 delay-100 font-medium p-2 rounded-3xl border border-primary border-opacity-35 hover:border-opacity-100">
                <span className="text-md">
                  {/* <!-- MUI Icon --> */}
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20.229 15.793a.666.666 0 0 0 .244-.243.666.666 0 0 0 .09-.333l.012-3.858a.666.666 0 0 1 .09-.333.666.666 0 0 1 .245-.243L23 9.58a.667.667 0 0 1 .333-.088.667.667 0 0 1 .333.09.667.667 0 0 1 .244.243.666.666 0 0 1 .089.333v7.014a.667.667 0 0 1-.335.578l-7.893 4.534a.666.666 0 0 1-.662 0l-6.194-3.542a.667.667 0 0 1-.246-.244.667.667 0 0 1-.09-.335v-3.537c0-.004.004-.006.008-.004s.008 0 .008-.005v-.004c0-.003.002-.005.004-.007l5.102-2.93c.004-.003.002-.01-.003-.01a.005.005 0 0 1-.004-.002.005.005 0 0 1-.001-.004l.01-3.467a.667.667 0 0 0-.333-.58.667.667 0 0 0-.667 0L8.912 9.799a.667.667 0 0 1-.665 0l-3.804-2.19a.667.667 0 0 0-.999.577v6.267a.667.667 0 0 1-.332.577.666.666 0 0 1-.332.09.667.667 0 0 1-.333-.088L.336 13.825a.667.667 0 0 1-.246-.244.667.667 0 0 1-.09-.336L.019 2.292a.667.667 0 0 1 .998-.577l7.23 4.153a.667.667 0 0 0 .665 0l7.228-4.153a.666.666 0 0 1 .333-.088.666.666 0 0 1 .333.09.667.667 0 0 1 .244.244.667.667 0 0 1 .088.333V13.25c0 .117-.03.232-.089.334a.667.667 0 0 1-.245.244l-3.785 2.18a.667.667 0 0 0-.245.245.666.666 0 0 0-.089.334.667.667 0 0 0 .09.334.666.666 0 0 0 .247.244l2.088 1.189a.67.67 0 0 0 .33.087.667.667 0 0 0 .332-.089l4.457-2.56Zm.438-9.828a.666.666 0 0 0 .09.335.666.666 0 0 0 .248.244.667.667 0 0 0 .67-.008l2.001-1.2a.666.666 0 0 0 .237-.243.667.667 0 0 0 .087-.329V2.32a.667.667 0 0 0-.091-.335.667.667 0 0 0-.584-.33.667.667 0 0 0-.334.094l-2 1.2a.666.666 0 0 0-.238.243.668.668 0 0 0-.086.329v2.445Z"></path></svg>
                </span>
                <span>MUI</span>
              </div>

              {/* <!-- Redux --> */}
              <div className="md:col-span-3 col-span-6 flex items-center space-x-1 cursor-pointer transition ease-linear duration-200 delay-100 font-medium p-2 rounded-3xl border border-primary border-opacity-35 hover:border-opacity-100">
                <span className="text-md">
                  {/* <!-- Redux Icon --> */}
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16.634 16.504c.87-.075 1.543-.84 1.5-1.754-.047-.914-.796-1.648-1.709-1.648h-.061a1.71 1.71 0 00-1.648 1.769c.03.479.226.869.494 1.153-1.048 2.038-2.621 3.536-5.005 4.795-1.603.838-3.296 1.154-4.944.93-1.378-.195-2.456-.81-3.116-1.799-.988-1.499-1.078-3.116-.255-4.734.6-1.17 1.499-2.023 2.099-2.443a9.96 9.96 0 01-.42-1.543C-.868 14.408-.416 18.752.932 20.805c1.004 1.498 3.057 2.456 5.304 2.456.6 0 1.23-.044 1.843-.194 3.897-.749 6.848-3.086 8.541-6.532zm5.348-3.746c-2.32-2.728-5.738-4.226-9.634-4.226h-.51c-.253-.554-.837-.899-1.498-.899h-.045c-.943 0-1.678.81-1.647 1.753.03.898.794 1.648 1.708 1.648h.074a1.69 1.69 0 001.499-1.049h.555c2.309 0 4.495.674 6.488 1.992 1.527 1.005 2.622 2.323 3.237 3.897.538 1.288.509 2.547-.045 3.597-.855 1.647-2.294 2.517-4.196 2.517-1.199 0-2.367-.375-2.967-.644-.36.298-.96.793-1.394 1.093 1.318.598 2.652.943 3.94.943 2.922 0 5.094-1.647 5.919-3.236.898-1.798.824-4.824-1.47-7.416zM6.49 17.042c.03.899.793 1.648 1.708 1.648h.06a1.688 1.688 0 001.648-1.768c0-.9-.779-1.647-1.693-1.647h-.06c-.06 0-.15 0-.226.029-1.243-2.098-1.768-4.347-1.572-6.772.12-1.828.72-3.417 1.797-4.735.9-1.124 2.593-1.68 3.747-1.708 3.236-.061 4.585 3.971 4.689 5.574l1.498.45C17.741 3.197 14.686.62 11.764.62 9.02.62 6.49 2.613 5.47 5.535 4.077 9.43 4.991 13.177 6.7 16.174c-.15.195-.24.539-.21.868z"></path></svg>
                </span>
                <span>Redux</span>
              </div>

              {/* <!-- RTK Query --> */}
              <div className="md:col-span-3 col-span-6 flex items-center space-x-1 cursor-pointer transition ease-linear duration-200 delay-100 font-medium p-2 rounded-3xl border border-primary border-opacity-35 hover:border-opacity-100">
                <span className="text-md">
                  {/* <!-- RTK Query Icon --> */}
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16.634 16.504c.87-.075 1.543-.84 1.5-1.754-.047-.914-.796-1.648-1.709-1.648h-.061a1.71 1.71 0 00-1.648 1.769c.03.479.226.869.494 1.153-1.048 2.038-2.621 3.536-5.005 4.795-1.603.838-3.296 1.154-4.944.93-1.378-.195-2.456-.81-3.116-1.799-.988-1.499-1.078-3.116-.255-4.734.6-1.17 1.499-2.023 2.099-2.443a9.96 9.96 0 01-.42-1.543C-.868 14.408-.416 18.752.932 20.805c1.004 1.498 3.057 2.456 5.304 2.456.6 0 1.23-.044 1.843-.194 3.897-.749 6.848-3.086 8.541-6.532zm5.348-3.746c-2.32-2.728-5.738-4.226-9.634-4.226h-.51c-.253-.554-.837-.899-1.498-.899h-.045c-.943 0-1.678.81-1.647 1.753.03.898.794 1.648 1.708 1.648h.074a1.69 1.69 0 001.499-1.049h.555c2.309 0 4.495.674 6.488 1.992 1.527 1.005 2.622 2.323 3.237 3.897.538 1.288.509 2.547-.045 3.597-.855 1.647-2.294 2.517-4.196 2.517-1.199 0-2.367-.375-2.967-.644-.36.298-.96.793-1.394 1.093 1.318.598 2.652.943 3.94.943 2.922 0 5.094-1.647 5.919-3.236.898-1.798.824-4.824-1.47-7.416zM6.49 17.042c.03.899.793 1.648 1.708 1.648h.06a1.688 1.688 0 001.648-1.768c0-.9-.779-1.647-1.693-1.647h-.06c-.06 0-.15 0-.226.029-1.243-2.098-1.768-4.347-1.572-6.772.12-1.828.72-3.417 1.797-4.735.9-1.124 2.593-1.68 3.747-1.708 3.236-.061 4.585 3.971 4.689 5.574l1.498.45C17.741 3.197 14.686.62 11.764.62 9.02.62 6.49 2.613 5.47 5.535 4.077 9.43 4.991 13.177 6.7 16.174c-.15.195-.24.539-.21.868z"></path></svg>
                </span>
                <span>RTK Query</span>
              </div>

              {/* <!-- Express.js --> */}
              <div className="md:col-span-3 col-span-6 flex items-center space-x-1 cursor-pointer transition ease-linear duration-200 delay-100 font-medium p-2 rounded-3xl border border-primary border-opacity-35 hover:border-opacity-100">
                <span className="text-md">
                  {/* <!-- Express.js Icon --> */}
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z"></path></svg>
                </span>
                <span>Express.js</span>
              </div>

              {/* <!-- MongoDB --> */}
              <div className="md:col-span-3 col-span-6 flex items-center space-x-1 cursor-pointer transition ease-linear duration-200 delay-100 font-medium p-2 rounded-3xl border border-primary border-opacity-35 hover:border-opacity-100">
                <span className="text-md">
                  {/* <!-- MongoDB Icon --> */}
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"></path></svg>
                </span>
                <span>MongoDB</span>
              </div>

              {/* <!-- PostgreSQL --> */}
              <div className="md:col-span-3 col-span-6 flex items-center space-x-1 cursor-pointer transition ease-linear duration-200 delay-100 font-medium p-2 rounded-3xl border border-primary border-opacity-35 hover:border-opacity-100">
                <span className="text-md">
                  {/* <!-- PostgreSQL Icon --> */}
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M21.9 10.268c0-.225 0-1.707-.53-3.19C20.61 5.04 18.355 3.66 17.3 3.37c-.526-.136-1.388-.208-2.35-.073C13.514 1.74 9.733 1.097 8.225 2.04 6.896 2.887 6.67 5.11 7.088 6.277c.037.104-1.54-.344-2.592.918-1.342 1.708-1.168 6.655 2.227 9.282-1.037 2.336 0 4.57 2.086 5.327 2.975 1.018 6.7.367 8.63-.84 1.92-1.21 3.126-2.81 3.35-3.19.225-.38.717-1.567.637-2.673.04-.207 1.098-1.398 1.13-4.833z" />
                  </svg>
                </span>
                <span>PostgreSQL</span>
              </div>

              {/* <!-- Firebase --> */}
              <div className="md:col-span-3 col-span-6 flex items-center space-x-1 cursor-pointer transition ease-linear duration-200 delay-100 font-medium p-2 rounded-3xl border border-primary border-opacity-35 hover:border-opacity-100">
                <span className="text-md">
                  {/* <!-- Firebase Icon --> */}
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3.89 15.673l2.421-13.243c.142-.768.985-.975 1.419-.34l2.451 3.618-6.29 9.965zM12.623 6.368l-7.018 11.095 10.855-7.49-3.12-4.78a1.061 1.061 0 0 0-1.717.175zm8.416 5.13l-2.898-4.449a1.065 1.065 0 0 0-1.505-.283L4.501 19.666a.904.904 0 0 0 .11 1.48l5.876 2.94c.42.21.921.21 1.342 0l8.05-4.032a.902.902 0 0 0 .476-.793v-6.764a1.06 1.06 0 0 0-.315-.749z" />
                  </svg>
                </span>
                <span>Firebase</span>
              </div>
            </div>
          </div>

          <div className="mt-7">
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
  );
};

export default HomePage;
