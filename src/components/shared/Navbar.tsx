"use client";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

type UserProps = {
  user?: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  };
};

const Navbar = ({ session }: { session: UserProps | null }) => {
  return (
    <div className="">
      <div className="navbar rounded-sm border-b sticky top-0 z-20 transition-all duration-300 w-[75%] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
            >
              <li>
                <Link href="/">Home</Link>
              </li>

              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/Projects">Projects</Link>
              </li>
              <li>
                <Link href="/Blogs">Blogs</Link>
              </li>
              <li>
                <Link href="/Contact">Contact</Link>
              </li>
              <li>
                <Link href="/dashboard">Dashboard</Link>
              </li>
            </ul>
          </div>

          <Link href="/" className="btn btn-ghost text-xl text-[#00BBA6]">
            Manik.
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl">
            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/about">AboutUs</Link>
            </li>
            <li>
              <Link href="/Projects">Projects</Link>
            </li>
            <li>
              <Link href="/Blogs">Blogs</Link>
            </li>
            <li>
              <Link href="/Contact">Contact</Link>
            </li>
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {session?.user ? (
            <div className="inline-flex space-x-2">
              <Image
                alt="icon"
                width="50"
                height="50"
                className="mx-auto rounded-full border-[#00BBA6] text-white"
                src={session?.user?.image || "https://ibb.co/dKhNftn"}
              />
              <button
                onClick={() => signOut()}
                className="btn btn-error btn-outline  md:text-xl border-[#00BBA6] text-white rounded-full px-2 md:px-5"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              className="btn text-xl btn-accent btn-outline text-white rounded-full px-5"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
