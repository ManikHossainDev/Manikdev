"use client";
import { TBlogS } from "@/app/(Blogs)/BackBlog/page";
import Image from "next/image";
import { useState } from "react";
import { JackInTheBox } from "react-awesome-reveal";
const BackendBlogs = (blog: TBlogS) => {
  const [showModal, setShowModal] = useState(false);
  const [blogId, setBlogId] = useState<string | null>(null);
  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const { title, description, image } = blog;
  return (
    <>
      <div className="box  bg-white shadow rounded-md p-2">
        <JackInTheBox>
          <Image
            className="rounded-t-md w-full h-[200px]"
            height={200}
            width={500}
            src={image}
            alt=""
          />
        </JackInTheBox>
        <div className="px-3 py-2">
          <h1 className="text-2xl pt-1">{title}</h1>
          <p className="text-gray-500">{description.substring(0, 120)}</p>
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
