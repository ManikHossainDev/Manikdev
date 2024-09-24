import { TBlogS } from "@/app/Blogs/BackBlog/page";
import Image from "next/image";

const BackendBlogs = (blog: TBlogS) => {
  const { title, description, image,} = blog;
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300">
    <Image
      src={image}  // Use the image URL
      alt={title}
      width={400}  // Set a fixed width (adjust as needed)
      height={100} // Set a fixed height (adjust as needed)
      className="object-cover rounded-md"
      style={{ width: "100%", height: "auto" }} // Make it responsive
    />
    <h2 className="text-xl font-bold mt-4">{title}</h2>
    <p className="text-gray-600 mt-2">{description.substring(0, 210)}...</p>
    
  </div>
  );
};

export default BackendBlogs;
