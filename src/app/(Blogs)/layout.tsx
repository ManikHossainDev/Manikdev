import Link from "next/link";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Manik | Blogs",
  description: "this is blogs to be published to the public domain",
};

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-col">
      <div className=" mx-auto md:flex items-center justify-evenly space-x-5 mt-5">
        <Link href="/FrontBlog">FrontEnd_Blogs</Link>
        <Link href="/BackBlog">BackEnd_Blogs</Link>
      </div>
      <main>{children}</main>
    </div>
  );
}
