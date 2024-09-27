import { TBlogS } from "@/app/(Blogs)/BackBlog/page";
import Image from "next/image";

const BackendBlogs = (blog: TBlogS) => {
  const { title, description, image } = blog;
  return (
    <div className="card glass w-full rounded-lg">
      <Image
        className="rounded-lg"
        src={image}
        alt="mani"
        width={200} // or your preferred width
        height={40} // or your preferred height
        layout="responsive"
      />
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description.substring(0, 230)}..</p>
        <div className="rating">
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            defaultChecked
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
        </div>
      </div>
    </div>
  );
};

export default BackendBlogs;
