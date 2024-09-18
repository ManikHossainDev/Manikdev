import Link from "next/link";
import React from "react";

const FooterPage = () => {
  return (
    <div className="mt-auto flex flex-col items-center w-[75%] mx-auto py-4 px-5 text-sm">

    <h3>
      Designed & developed by{' '}
      <Link
        className="text-primary underline"
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
