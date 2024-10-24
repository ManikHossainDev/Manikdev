/* eslint-disable react/no-unescaped-entities */
"use client";

import { FC } from "react";
import { FaLaptop, FaCode, FaLaptopCode, FaMobileAlt } from "react-icons/fa";

const Service: FC = () => {
  return (
    <div id="service" className="  text-[#00BBA6]">
      <h2 className=" text-center py-5 mt-12 leading-tight text-[#00BBA6] sm:text-2xl lg:text-3xl">
        এই কোর্স থেকে তুমি যা যা শিখতে পারবে🔥
      </h2>
      <div className="container mx-auto px-4">
        <div className="relative border-l-2 md:w-8/12 mx-auto border-[#00BBA6]">
          {/* First Timeline Element */}
          <div className="mb-10  ml-6">
            <div className="absolute w-8 h-8  bg-[#c9cccc] rounded-full mt-1.5 -left-4 flex items-center justify-center">
              <FaLaptopCode className="text-[#00BBA6]" />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-3xl font-semibold">HTML & CSS</h3>
              <p className="mt-2 text-gray-400">
                In this module, you'll learn the basics of HTML and CSS,
                including:
                <ul className="list-disc pl-5 mt-2">
                  <li>HTML Elements, Tags, and Structure</li>
                  <li>CSS Syntax, Selectors, and Box Model</li>
                  <li>Styling with Flexbox and Grid</li>
                  <li>Responsive Web Design Fundamentals</li>
                </ul>
              </p>
            </div>
          </div>

          {/* Second Timeline Element */}
          <div className="mb-10 ml-6  ">
            <div className="absolute w-8 h-8 bg-[#c9cccc]  rounded-full mt-1.5 -left-4 flex items-center justify-center">
              <FaCode className="text-[#00BBA6]" />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-3xl font-semibold">
                Tailwind CSS & Responsive Design
              </h3>
              <p className="mt-2 text-gray-400">
                Learn to create responsive websites with Tailwind CSS:
                <ul className="list-disc pl-5 mt-2">
                  <li>Utility-First CSS Framework</li>
                  <li>Building Layouts with Flexbox and Grid</li>
                  <li>Responsive Breakpoints</li>
                  <li>Customizing Tailwind with Config Files</li>
                </ul>
              </p>
            </div>
          </div>

          {/* Third Timeline Element */}
          <div className="mb-10 ml-6 ">
            <div className="absolute w-8 h-8 bg-[#c9cccc]  rounded-full mt-1.5 -left-4 flex items-center justify-center">
              <FaLaptop className="text-[#00BBA6]" />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-3xl font-semibold">JavaScript & React</h3>
              <p className="mt-2 text-gray-400">
                Master JavaScript and React in this module:
                <ul className="list-disc pl-5 mt-2">
                  <li>JavaScript Basics, ES6 Features</li>
                  <li>DOM Manipulation and Events</li>
                  <li>React Components, Hooks, and State Management</li>
                  <li>Creating Reusable Components</li>
                </ul>
              </p>
            </div>
          </div>

          {/* Fourth Timeline Element */}
          <div className="mb-10 ml-6 ">
            <div className="absolute w-8 h-8 bg-[#c9cccc] rounded-full mt-1.5 -left-4 flex items-center justify-center">
              <FaMobileAlt className="text-[#00BBA6]" />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-3xl font-semibold">
                E-Commerce Website Development
              </h3>
              <p className="mt-2 text-gray-400">
                This module focuses on building a full E-Commerce website:
                <ul className="list-disc pl-5 mt-2">
                  <li>Product Listing, Shopping Cart, and Checkout</li>
                  <li>Payment Gateway Integration</li>
                  <li>User Authentication with Firebase</li>
                  <li>Responsive UI/UX Design</li>
                </ul>
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Service;
