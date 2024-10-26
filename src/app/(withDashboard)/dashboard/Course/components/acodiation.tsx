"use client";
import { useState } from "react";

const accordionData = [
    {
        title: "Cutting-Edge Curriculum",
        subtitle: "Learn the latest industry skills with HTML, CSS, and Tailwind CSS.",
        colorBg: "bg-amber-500",
        colorBorder: "border-amber-500",
      },
      {
        title: "Hands-On Learning",
        subtitle: "Build real-world projects for practical web development experience.",
        colorBg: "bg-orange-500",
        colorBorder: "border-orange-500",
      },
      {
        title: "Job-Ready Focus",
        subtitle: "Master the skills employers demand and enter the job market with confidence.",
        colorBg: "bg-red-500",
        colorBorder: "border-red-500",
      },
      {
        title: "Collaborative Community",
        subtitle: "Join a supportive, interactive network that enhances your learning journey.",
        colorBg: "bg-sky-500",
        colorBorder: "border-sky-500",
      },
      {
        title: "Future-Proof Skills",
        subtitle: "Stay ahead with AI-powered tools and real-time collaboration for modern web design.",
        colorBg: "bg-purple-500",
        colorBorder: "border-purple-500",
      },
];

const VerticalAccordion = () => {
  // Toggle State and Function
  const [isActive, setIsActive] = useState(0);
  const handleToggle = (idx: any) => {
    setIsActive((prevIdx) => (prevIdx === idx ? null : idx));
  };

  return (
    <div className="mx-auto my-24 md:my-10 flex w-fit rotate-90 shadow-md min-h-[220px] md:min-h-[300px] md:rotate-0 ">
      {accordionData?.map((data, idx) => (
        <div key={idx} className="flex">
          {/* toggle item */}
          <button
            onClick={() => handleToggle(idx)}
            className={` flex h-full w-fit items-end border-b-8 bg-[#00BBA6] pb-10 dark:bg-[##00BBA6] ${data?.colorBorder} shadow-[2px_2px_5px_#00000083]`}
          >
            <div
              className={`size-10 text-white md:size-16 ${data?.colorBg} relative flex items-center justify-center `}
            >
              <span
                className={`h-0 w-0 ${data?.colorBorder} dark:${data?.colorBorder} absolute left-8 -z-10 hidden  rotate-[225deg] rounded-lg border-b-[60px] border-r-[60px] border-r-transparent md:block`}
              ></span>
              <span className="-rotate-90 md:rotate-0">0{idx + 1}</span>
            </div>
          </button>
          {/* container */}
          <div
            className={`grid place-content-center ${
              isActive === idx
                ? "opacity-1 scale-1  w-[220px] md:w-[380px]   px-5"
                : "w-0 scale-0 opacity-0"
            } -z-20  -rotate-90 bg-white  text-black duration-300 ease-in-out dark:bg-[#ffff] md:rotate-0`}
          >
            <h2 className="font-black dark:text-black lg:text-2xl ">
              {data?.title}
            </h2>
            <p className="dark:text-gray-500 ">{data?.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VerticalAccordion;
