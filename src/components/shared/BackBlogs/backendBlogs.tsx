"use client";
import Image from "next/image";
import { JackInTheBox } from "react-awesome-reveal";
// Define the Blog interface for TypeScript
interface Blog {
  id: number;
  group: "frontend" | "backend";
  category: string;
  title: string;
  image: string;
  description: string;
}

const BackendBlogs = (blog: Blog) => {
  const { title, description, image,  category, } = blog;
  return (
    <>
      <div className="box  bg-white shadow rounded-md p-2">
        <JackInTheBox>
          <Image
            className="rounded-t-md w-full h-[200px]"
            height={230}
            width={530}
            src={image}
            alt=""
          />
        </JackInTheBox>
        <div className="px-3 py-2">
          <div className="flex items-center space-x-2 py-2">
          <h1 className="text-2xl pt-1">{title}</h1>
          <h1 className="text-xl pt-1 text-gray-500">{category}</h1>
          </div>
          <p className="text-gray-400">{description.substring(0, 255)}</p>
          <div className="flex justify-between pt-1 ">
            <div className="flex items-center">
              <div className="text-[#00BBA6]">Rating :</div>
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-200"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-200"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-200"
                />
              </div>
            </div>
            <div>
              {" "}
              <span className="text-[#00BBA6]">Review :</span> 533
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BackendBlogs;
