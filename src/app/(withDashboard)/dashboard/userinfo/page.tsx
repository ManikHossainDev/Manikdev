/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import { authOptions } from "@/utils/authOptions";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import Profile from "./components/userskill";

export const metadata: Metadata = {
  title: "Manik | User Info",
  description: "Your personal profile page",
};

const UserInfoPage = async () => {
  const session = await getServerSession(authOptions);

  // Check if session exists
  if (!session) {
    return (
      <div className=" flex items-center justify-center">
        <div className="bg-red-200 text-red-700 p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold">Google or Github!</h1>
          <p className="mt-2">
            You must be logged in to view this Profile page.
          </p>
          <Button className="mt-3">
            <Link href="/register">Login</Link>
          </Button>
        </div>
      </div>
    );
  }

  // If session exists, show the user profile page
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mx-auto">
      <div className="col-span-1 md:col-span-8  lg:col-span-8">
        <div className=" pb-5 shadow-lg bg-gray-100 rounded-lg overflow-hidden w-full max-w-4xl">
          {/* Cover photo */}
          <div
            className="relative h-56 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://i.ibb.co.com/9TfxBsP/download.png')",
            }}
          >
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#90fcef] to-transparent"></div>

            {/* Profile picture */}
            <div className="absolute bottom-0 left-10 transform translate-y-1/2">
              <Image
                src={session?.user?.image || "https://ibb.co/dKhNftn"}
                width={120}
                height={120}
                alt="user profile"
                className="rounded-full border-4 border-white"
              />
            </div>
          </div>

          {/* User Info */}
          <div className="mt-16 p-8 text-center">
            <h1 className="text-3xl font-bold text-gray-800">
              Welcome, {session?.user?.name} 🎉
            </h1>
            <h2 className="text-lg text-gray-600 mt-2">
              Email: <span className="font-medium">{session?.user?.email}</span>
            </h2>

            <div className="mt-6">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-700 transition duration-300">
                Add Friend
              </button>
              <button className="ml-4 bg-gray-300 text-gray-700 px-6 py-2 rounded-full shadow-md hover:bg-gray-400 transition duration-300">
                Message
              </button>
            </div>
          </div>

          {/* Bottom Section with More Info */}
          <div className="border-t mt-6">
            <div className="p-6 text-center">
              <p className="text-gray-700">
                Cooking is an art and you're the artist! - Favorite quote 😉
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-2 col-span-1 md:col-span-4  lg:col-span-4 ">
        <Profile />
      </div>
    </div>
  );
};

export default UserInfoPage;
