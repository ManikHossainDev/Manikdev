import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Manik | Blogs",
  description: "this is blogs to be published to the public domain",
};
const BlogsPage = () => {
  return (
    <div>
      <div className=" mx-auto md:flex items-center justify-around mt-10">
        <Link href="/Blogs/BackBlog">BackEnd_Blogs</Link>
        <Link href="/Blogs/FrontBlog">FrontEnd_Blogs</Link>
      </div>
    </div>
  );
};

export default BlogsPage;
