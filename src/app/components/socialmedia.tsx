"use client";
import AllModal from "@/components/shared/allAcount";
import { useState } from "react";

const Socialmedia: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <div className="py-10">
        <p className="text-xs uppercase font-medium text-[#8a8a8a] mb-2">
          Stay with me
        </p>
        <p className="text-2xl font-semibold">Profiles</p>
      </div>

      {/* Button to Open Modal */}
      <button
        onClick={openModal}
        className="absolute bottom-3 md:bottom-5 right-5 cursor-pointer opacity-55 group-hover:opacity-100 transition-all ease-linear duration-200 delay-100 group"
      >
        <div className="flex items-center justify-center w-16 h-8 rounded-[16px] border border-black transition-all ease-linear duration-200">
          <span className="flex items-center justify-center text-black group-hover:rotate-45 transition-all ease-linear duration-200">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18.25 15.5a.75.75 0 0 1-.75-.75V7.56L7.28 17.78a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L16.44 6.5H9.25a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-.75.75Z"></path>
            </svg>
          </span>
          <span className="text-black font-[400] text-sm">View</span>
        </div>
      </button>

      {/* Modal Component */}
      <AllModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Socialmedia;
