import { blogsData } from "@/app/_data";
import BackendBlogs from "@/components/shared/BackBlogs/backendBlogs";

export interface TBlogS {
  id: number;
  title: string;
  image: string;
  description: string;
}
const Page = () => {
  const blogs = blogsData.BlogBackEnd;
  return (
    <div className=" mx-auto  px-2 py-5">
      {/* Responsive grid with 3 columns for larger screens and 1 column for smaller screens */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 pt-10">
        {blogs.map((blog: TBlogS) => (
          <BackendBlogs key={blog.id} {...blog} />
        ))}
      </div>
    </div>
  );
};

export default Page;
