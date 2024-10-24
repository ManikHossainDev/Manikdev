import Image from "next/image";
import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/3 p-6 relative overflow-y-auto overflow-x-hidden max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 absolute top-3 right-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Modal Title */}
        <h2 className="text-3xl font-bold mb-4 text-s text-[#00BBA6]">
          Cover Letter
        </h2>

        {/* Modal Content */}
        <div className="overflow-y-auto max-h-72 space-y-4">
          <Image
            width={450}
            height={200}
            src="https://i.ibb.co/YDrHZSw/Screenshot-2024-10-18-191031.png"
            alt="manik"
            className="object-contain w-full h-auto"
            quality={100}
          />
          <Image
            width={450}
            height={200}
            src="https://i.ibb.co/QMxgqD7/Screenshot-2024-10-18-191111.png"
            alt="manik"
            className="object-contain w-full h-auto"
            quality={100}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
