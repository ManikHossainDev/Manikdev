import { blogsData } from "@/app/_data";
import BackendBlogs from "@/components/shared/BackBlogs/backendBlogs";
export interface TBlogS {
  id: number;
  title: string;
  image: string;
  description: string;
}
const Page = () => {
  const blogs = blogsData.BlogFrontEnd;
  return (
    <div className=" mx-auto  p-5">
      {/* Responsive grid with 3 columns for larger screens and 1 column for smaller screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog:TBlogS) => (
          <BackendBlogs key={blog.id} {...blog} />
        ))}
      </div>
    </div>
  );
};

export default Page;
