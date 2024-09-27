"use client"
import { TBlogS } from "@/app/(Blogs)/BackBlog/page";
import Image from "next/image";
import { useState } from "react";
const BackendBlogs = (blog: TBlogS) => {
  const [showModal, setShowModal] = useState(false);
  const [blogId, setBlogId] = useState<string | null>(null);
  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const { title, description, image,} = blog;
  return (
    <>
      <div className="box bg-slate-200 rounded-md ">
        <Image
          className="rounded-t-md w-full h-[200px]"
          height={200}
          width={500}
          src={image}
          alt=""
        />
        <div className="px-3 py-2">
          <h1 className="text-2xl pt-1">{title}</h1>
          <p>{description.substring(0, 120)}</p>
          <div className="flex justify-between pt-1 ">
            <p className="text-[#00BBA6]">Rating : {303}</p>
            <p className=" text-[#00BBA6]">Review : {502}</p>
          </div>
        </div>
      </div>
    </>
  );
  
};

export default BackendBlogs;
