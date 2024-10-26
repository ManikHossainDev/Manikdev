"use client";
import SectionTitle from "@/app/about/_components/titele";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type UserProps = {
  user?: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  };
};

const Navbar = ({ session }: { session: UserProps | null }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <div className="navbar rounded-sm border-b  bg-white sticky top-0 z-20 transition-all duration-300 container mx-auto pr-5">
      <div className="navbar-start">
        <div className="dropdown">
          <button
            onClick={toggleDropdown}
            className="btn btn-ghost lg:hidden "
            aria-expanded={dropdownOpen ? "true" : "false"}
          >
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
          </button>
          {dropdownOpen && (
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-32">
              <li>
                <Link href="/" onClick={() => setDropdownOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" onClick={() => setDropdownOpen(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/Projects" onClick={() => setDropdownOpen(false)}>
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/Blogs" onClick={() => setDropdownOpen(false)}>
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/Contact" onClick={() => setDropdownOpen(false)}>
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/dashboard" onClick={() => setDropdownOpen(false)}>
                  Career
                </Link>
              </li>
            </ul>
          )}
        </div>

        <Link href="/" className="btn btn-ghost text-xl">
        <SectionTitle
          title={"SeManik"}
          subTitle={"Software Engineer"}
        ></SectionTitle>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
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
            <Link href="/dashboard">Career</Link>
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
              className="mx-auto rounded-full border-[#00BBA6]"
              src={session?.user?.image || "https://ibb.co/dKhNftn"}
            />
            <button
              onClick={() => signOut()}
              className="btn text-xl btn-error btn-outline   border-[#00BBA6] text-white rounded-full px-3"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link
            href="/login"
            className="btn text-xl btn-accent btn-outline text-white rounded-full px-3"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
