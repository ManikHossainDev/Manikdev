import { TBlogS } from "@/app/Blogs/BackBlog/page";
import Image from "next/image";

const FrontendBlogs = (blog: TBlogS) => {
  const { title, description, image } = blog;

  return (
    <div className="card glass w-full">
      <Image
        src={image}
        alt="mani"
        width={300} // or your preferred width
        height={50} // or your preferred height
        layout="responsive"
      />
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description.substring(0, 230)}..</p>
        <div>
          like love or count 
        </div>
      </div>
    </div>
  );
};

export default FrontendBlogs;