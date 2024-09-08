import Link from "next/link";

/* eslint-disable react/no-unescaped-entities */
const ContactPage = () => {
  return (
    <div>
      <div className="max-w-7xl md:mx-auto mb-12 py-10 mx-2">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-24">
          {/* Left Section */}
          <div className="md:col-span-4">
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
                  <p className="dark:text-[#777676]">manikpdm@gmail.com</p>
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
                <div className="flex justify-center rounded-3xl p-5 items-center space-x-3">
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
          <div className="md:col-span-8">
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
