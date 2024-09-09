/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="px-5">
      <div className="grid md:grid-cols-12 grid-cols-1 gap-5">
        <div className="md:col-span-6 col-span-1"></div>
        <div className="md:col-span-6 col-span-1"></div>
      </div>

      <h1 className="text-4xl text-center pt-10">Welcome To Home Page</h1>
      <div className="grid md:grid-cols-12 grid-cols-1 gap-5 py-7">
        <div className="md:col-span-6 col-span-1 rounded-3xl py-16 md:py-[70px] px-6   border border-black/25  relative group">
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
        <div className="col-span-6 col-span-1 rounded-3xl py-10 px-6   border border-black/25 relative group">
          <div>
            <div className="grid md:grid-cols-12 grid-cols-9 gap-5">
              {/* <!-- Javascript --> */}
              <div className="md:col-span-3 col-span-4 flex items-center space-x-1 cursor-pointer transition ease-linear duration-200 delay-100 font-medium p-2 rounded-3xl border border-primary border-opacity-35 hover:border-opacity-100">
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
              <div className="md:col-span-3 col-span-4 flex items-center space-x-1 cursor-pointer transition ease-linear duration-200 delay-100 font-medium p-2 rounded-3xl border border-primary border-opacity-35 hover:border-opacity-100">
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
              <div className="md:col-span-3 col-span-4 flex items-center space-x-1 cursor-pointer transition ease-linear duration-200 delay-100 font-medium p-2 rounded-3xl border border-primary border-opacity-35 hover:border-opacity-100">
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
              <div className="md:col-span-3 col-span-4 flex items-center space-x-1 cursor-pointer transition ease-linear duration-200 delay-100 font-medium p-2 rounded-3xl border border-primary border-opacity-35 hover:border-opacity-100">
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
              <div className="md:col-span-3 col-span-4 flex items-center space-x-1 cursor-pointer transition ease-linear duration-200 delay-100 font-medium p-2 rounded-3xl border border-primary border-opacity-35 hover:border-opacity-100">
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
              <div className="md:col-span-3 col-span-4 flex items-center space-x-1 cursor-pointer transition ease-linear duration-200 delay-100 font-medium p-2 rounded-3xl border border-primary border-opacity-35 hover:border-opacity-100">
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
              <div className="md:col-span-3 col-span-4 flex items-center space-x-1 cursor-pointer transition ease-linear duration-200 delay-100 font-medium p-2 rounded-3xl border border-primary border-opacity-35 hover:border-opacity-100">
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
              <div className="md:col-span-3 col-span-4 flex items-center space-x-1 cursor-pointer transition ease-linear duration-200 delay-100 font-medium p-2 rounded-3xl border border-primary border-opacity-35 hover:border-opacity-100">
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
              <div className="md:col-span-3 col-span-4 flex items-center space-x-1 cursor-pointer transition ease-linear duration-200 delay-100 font-medium p-2 rounded-3xl border border-primary border-opacity-35 hover:border-opacity-100">
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
              <div className="md:col-span-3 col-span-4 flex items-center space-x-1 cursor-pointer transition ease-linear duration-200 delay-100 font-medium p-2 rounded-3xl border border-primary border-opacity-35 hover:border-opacity-100">
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
              <div className="md:col-span-3 col-span-4 flex items-center space-x-1 cursor-pointer transition ease-linear duration-200 delay-100 font-medium p-2 rounded-3xl border border-primary border-opacity-35 hover:border-opacity-100">
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
              <div className="md:col-span-3 col-span-4 flex items-center space-x-1 cursor-pointer transition ease-linear duration-200 delay-100 font-medium p-2 rounded-3xl border border-primary border-opacity-35 hover:border-opacity-100">
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
