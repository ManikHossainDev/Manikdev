import Link from "next/link";
import React from "react";

const AnnouncementBanner: React.FC = () => {
  return (
    <div className="container">
      {/* Tailwind classes for the announcement banner */}
      <div
        className="
          announcement-banner 
          md:pt-5
          p-5 
          bg-[url('https://i.ibb.co.com/r6p90GZ/banner-924826ed.png')] 
          bg-contain 
          bg-no-repeat 
          bg-bottom-right 
          bg-[#583cea] 
          rounded-lg 
          md:p-[95px_92px] 
          text-white 
          font-hind-siliguri
        "
      >
        <div className="md:pt-5  md:w-8/12">
          <h1>তুমি রেডি তো...?</h1>
          <p className="text-wrap">
            একজন দক্ষ প্রোগ্রামার হতে চাইলে এই কোর্সে জয়েন করো। শিখতে গেলে যা যা
            লাগবে সেগুলো প্রোভাইড করব আমরা, তোমার শুধু লেগে থাকতে হবে, হার্ড
            ওয়ার্ক করতে হবে।
          </p>
          <Link href='#timeamount'
            className="bg-[#00BBA6] mt-4  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Enroll Now
          </Link>
        </div>
      </div>

      <div className="md:mt-14 mt-5 py-5">
        <h4 className=" text-center text-[#00BBA6]  mb-2 md:text-5xl text-3xl">
          কোর্সে যা কিছু থাকছে
          <span role="img" aria-label="fire">
            🔥
          </span>
        </h4>
        <p className="text-center text-gray-500 md:text-xl">
          আনলিমিটেড হেল্প, গাইডলাইন; এমনকি গুগল মিট এ স্ক্রিনশেয়ার করে সমস্যা
          সমাধান <br /> করতে চাইলে; এই কোর্সে জয়েন করো।
        </p>
      </div>
    </div>
  );
};

export default AnnouncementBanner;
