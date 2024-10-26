"use client";
import React, { useState } from "react";
import { blogsData } from "@/app/_data"; // Import Blogs data
import Image from "next/image";
import BackendBlogs from "@/components/shared/BackBlogs/backendBlogs";

// Define the Blog interface for TypeScript
 interface Blog {
  id: number;
  group: "frontend" | "backend";
  category: string;
  title: string;
  image: string;
  description: string;
}

// Ensure blogsData is properly typed
interface BlogsData {
  Blogs: Blog[];
}

function BlogPage() {
  // State for managing filtered data and display controls
  const [selectedGroup, setSelectedGroup] = useState<"frontend" | "backend" | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showMore, setShowMore] = useState<boolean>(false);

  // Filter blogs based on search query
  const filteredBlogs = (blogsData as BlogsData).Blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase()) // Match only titles
  );

  // Apply group filtering only if a group is selected
  const displayedBlogs = filteredBlogs.filter((blog) =>
    selectedGroup ? blog.group === selectedGroup : true // If selectedGroup is null, show all
  );

  // Function to handle "Show More" toggle
  const handleShowMore = () => setShowMore(!showMore);

  // Limit displayed blogs based on "Show More" state
  const blogsToDisplay = showMore ? displayedBlogs : displayedBlogs.slice(0, 3);

  return (
    <div className="p-4 my-5">
      <div className="md:flex justify-between py-3 items-center ">
        {/* Group Selection Buttons */}
      <div className="mb-2 md:mb-0">
      <button 
          onClick={() => setSelectedGroup(null)} 
          className={`ml-2 py-2 px-4 rounded transition ${selectedGroup === null ? "bg-gray-600 text-white" : "bg-gray-500 text-white hover:bg-gray-600"}`}
        >
          All
        </button>
        <button 
          onClick={() => setSelectedGroup("frontend")} 
          className={` ml-2 py-2 px-4 rounded transition ${selectedGroup === "frontend" ? "bg-[#00BBA6] text-white" : "bg-[#00BBA6] text-white hover:bg-blue-500"}`}
        >
          Frontend
        </button>
        <button 
          onClick={() => setSelectedGroup("backend")} 
          className={`ml-2 py-2 px-4 rounded transition ${selectedGroup === "backend" ? "bg-[#00BBA6] text-white" : "bg-[#00BBA6] text-white hover:bg-green-500"}`}
        >
          Backend
        </button>
        
      </div>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search blogs..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="border border-gray-500 rounded p-2  w-12/12"
      />
      </div>

      {/* Display Blogs in Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:my-14">
        {blogsToDisplay.length > 0 ? (
          blogsToDisplay.map((blog) => (
            <BackendBlogs key={blog.id} {...blog} />
          ))
        ) : (
          <div className="text-gray-500 text-center py-4">
            <p>No blogs found.</p>
          </div>
        )}
      </div>

      {/* Show More Button */}
      {displayedBlogs.length > 3 && (
        <div className="flex justify-center items-center mt-16 group">
        <div className="w-[200px] h-[0.8px] bg-black"></div>
        
        <button onClick={handleShowMore}   className="flex items-center gap-1 text-xl font-medium font-lato px-5 py-1 text-black border border-black rounded-md transition-all ease-linear duration-100">
          <span className="-rotate-90 group-hover:rotate-0 transition-all ease-linear duration-150">
            <svg 
              stroke="currentColor" 
              fill="currentColor" 
              stroke-width="0" 
              viewBox="0 0 24 24" 
              height="28" 
              width="28" 
              xmlns="http://www.w3.org/2000/svg">
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
            </svg>
          </span>
          
          <p className="group-hover:translate-x-1 transition-all ease-linear duration-150">{showMore ? "Show Less" : "Show More"}</p>
        </button>
        
        <div className="w-[200px] h-[0.8px] bg-black group-hover:bg-primary-color"></div>
      </div>
      
        
      )}
    </div>
  );
}

export default BlogPage;
