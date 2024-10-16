import { Metadata } from "next";
import Link from "next/link";
import Account from "./components/account";

export const metadata: Metadata = {
  title: "Manik | Contact",
  description: "contacts information",
};
/* eslint-disable react/no-unescaped-entities */
const ContactPage = () => {
 
  return (
    <div className="px-2">
      <div className="max-w-7xl md:mx-auto pb-24 py-14 mx-2 ">
        <div className="grid grid-cols-1 md:grid-cols-6  lg:grid-cols-12 gap-24 p-5">
          {/* Left Section */}
          <div className="col-span-1 md:col-span-6  lg:col-span-4">
            <h1 className="text-2xl font-bold font-butler">Contact Me</h1>
            <div className="mt-5 space-y-5 md:space-y-10">
              {/* Email Section */}
              <div className="flex items-center space-x-4">
                <div className="p-4 rounded-lg border border-[#00BBA6] cursor-pointer text-xl">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    role="img"
                    viewBox="0 0 24 24"
                    height="24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M15.61 12c0 1.99-1.62 3.61-3.61 3.61-1.99 0-3.61-1.62-3.61-3.61 0-1.99 1.62-3.61 3.61-3.61 1.99 0 3.61 1.62 3.61 3.61M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12c2.424 0 4.761-.722 6.76-2.087l.034-.024-1.617-1.879-.027.017A9.494 9.494 0 0 1 12 21.54c-5.26 0-9.54-4.28-9.54-9.54 0-5.26 4.28-9.54 9.54-9.54 5.26 0 9.54 4.28 9.54 9.54a9.63 9.63 0 0 1-.225 2.05c-.301 1.239-1.169 1.618-1.82 1.568-.654-.053-1.42-.52-1.426-1.661V12A6.076 6.076 0 0 0 12 5.93 6.076 6.076 0 0 0 5.93 12 6.076 6.076 0 0 0 12 18.07a6.02 6.02 0 0 0 4.3-1.792 3.9 3.9 0 0 0 3.32 1.805c.874 0 1.74-.292 2.437-.821.719-.547 1.256-1.336 1.553-2.285.047-.154.135-.504.135-.507l.002-.013c.175-.76.253-1.52.253-2.457 0-6.617-5.383-12-12-12"></path>
                  </svg>
                </div>
                <div>
                  <h1 className="font-bold">Email</h1>
                  <p className="dark:text-[#777676]">se.manik.js@gmail.com</p>
                </div>
              </div>

              {/* Phone Section */}
              <div className="flex items-center space-x-4">
                <div className="p-4 rounded-lg border border-[#00BBA6] cursor-pointer text-xl">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    height="24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path>
                  </svg>
                </div>
                <div>
                  <h1 className="font-bold">Phone</h1>
                  <p className="dark:text-[#777676]">+880 1884743092</p>
                </div>
              </div>

              {/* Location Section */}
              <div className="flex items-center space-x-4">
                <div className="p-4 rounded-lg border border-[#00BBA6] cursor-pointer text-xl">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 384 512"
                    height="24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                  </svg>
                </div>
                <div>
                  <h1 className="font-bold">Location</h1>
                  <p className="dark:text-[#777676]">Thakurgaon, Bangladesh</p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-10">
              <div className="border border-black/25 rounded-3xl py-10 px-3 relative group w-full h-full">
                <div className="p-5">
                  <Account/>
                </div>
                <div className="mt-7">
                  <p className="text-xs uppercase font-medium text-[#8a8a8a] mb-2">
                    Stay with me
                  </p>
                  <p className="text-2xl font-semibold font-butler">Profiles</p>
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
          {/* Right Section - Form */}
          <div className="col-span-1 md:col-span-6 lg:col-span-8">
            <div className="rounded-3xl p-5 md:p-10 bg-gray-100 bg-opacity-55 border border-black/25 relative">
              <div className="text-2xl md:text-4xl font-[700] leading-tight font-butler">
                <p>
                  Let's work{" "}
                  <span className="text-[#00BBA6]">together.</span>
                </p>
              </div>
              <form className="md:mt-8 mt-14">
                <div className="mt-5">
                  <label
                    htmlFor="name"
                    className="text-[16px] font-semibold text-black"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="w-full py-1 border-black bg-transparent outline-none border-b mt-1"
                  />
                </div>
                <div className="mt-5">
                  <label
                    htmlFor="email"
                    className="text-[16px] font-semibold text-black"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full py-1 border-black bg-transparent outline-none border-b mt-1"
                  />
                </div>
                <div className="mt-5">
                  <label
                    htmlFor="subject"
                    className="text-[16px] font-semibold text-black"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    className="w-full py-1 border-black bg-transparent outline-none border-b mt-1"
                  />
                </div>
                <div className="mt-5">
                  <label
                    htmlFor="message"
                    className="text-[16px] font-semibold text-black"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full py-1 border-black bg-transparent outline-none border-b mt-1"
                  ></textarea>
                </div>
                <div className="mt-3">
                  <button
                    type="submit"
                    className="w-full  flex items-center justify-center px-5 py-2.5 md:py-3 bg-[#00BBA6] hover:bg-[#21DC62] text-white font-medium rounded-lg transition ease-linear duration-200"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      className="-rotate-45 group-hover:rotate-0 transition-all ease-linear duration-200"
                      height="18"
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M48 448l416-192L48 64v149.333L346 256 48 298.667z"></path>
                    </svg>
                    <span className=" group-hover:translate-x-1 transform transition-all ease-linear duration-200">
                      Submit
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
