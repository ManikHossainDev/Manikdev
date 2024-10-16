import Link from "next/link";
import React from "react";

const FooterPage = () => {
  return (
    <div className="bg-white p-5  mt-auto flex flex-col items-center container mx-auto py-4  text-sm">

    <h3>
      Designed & developed by{' '}
      <Link
        className="text-[#00BBA6] underline"
        href={'https://www.linkedin.com/in/devmanik'}
        target="_blank"
      >
         Manik Hossain
      </Link>{' '}
    </h3>
  </div>

  );
};

export default FooterPage;
