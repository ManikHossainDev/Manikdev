import Image from "next/image";
import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaTelegramPlane,
} from "react-icons/fa";
import {
  SiLeetcode,
  SiCodeforces,
  SiHackerrank,
  SiCodechef,
} from "react-icons/si";
import Link from "next/link"; // Import Link from next/link
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AllModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/3 p-6 relative overflow-y-auto overflow-x-hidden max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 absolute top-3 right-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Modal Title */}
        <h2 className="text-3xl font-bold mb-4 text-s text-[#00BBA6]">
          Social Media
        </h2>

        {/* Modal Content */}
        <div className="overflow-y-auto max-h-72 space-y-4 ">
          {/* Social Media Buttons */}
          <div className="grid grid-cols-2 gap-4 ml-5">
            <Link
              href="https://github.com/ManikHossainDev"
              target="_blank"
              className="flex items-center text-gray-700 hover:text-gray-900"
            >
              <FaGithub className="mr-2" /> GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/manikdev/"
              target="_blank"
              className="flex items-center text-blue-700 hover:text-blue-900"
            >
              <FaLinkedin className="mr-2" /> LinkedIn
            </Link>
            <Link
              href="https://x.com/ManikHossainDev"
              target="_blank"
              className="flex items-center text-blue-500 hover:text-blue-700"
            >
              <FaTwitter className="mr-2" /> Twitter
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=100082862521278"
              target="_blank"
              className="flex items-center text-blue-600 hover:text-blue-800"
            >
              <FaFacebook className="mr-2" /> Facebook
            </Link>
            <Link
              href="https://www.instagram.com/manik500282/"
              target="_blank"
              className="flex items-center text-pink-600 hover:text-pink-800"
            >
              <FaInstagram className="mr-2" /> Instagram
            </Link>
            <Link
              href="https://telegram.me/your-profile"
              target="_blank"
              className="flex items-center text-blue-400 hover:text-blue-600"
            >
              <FaTelegramPlane className="mr-2" /> Telegram
            </Link>
            <Link
              href="https://leetcode.com/u/SeManik/"
              target="_blank"
              className="flex items-center text-yellow-600 hover:text-yellow-800"
            >
              <SiLeetcode className="mr-2" /> LeetCode
            </Link>
            <Link
              href="https://codeforces.com/profile/ManikHossain22"
              target="_blank"
              className="flex items-center text-red-500 hover:text-red-700"
            >
              <SiCodeforces className="mr-2" /> Codeforces
            </Link>
            <Link
              href="https://www.hackerrank.com/profile/fiverrmanik15021"
              target="_blank"
              className="flex items-center text-green-600 hover:text-green-800"
            >
              <SiHackerrank className="mr-2" /> HackerRank
            </Link>
            <Link
              href="https://www.codechef.com/users/manik_5002828"
              target="_blank"
              className="flex items-center text-orange-600 hover:text-orange-800"
            >
              <SiCodechef className="mr-2" /> CodeChef
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllModal;
