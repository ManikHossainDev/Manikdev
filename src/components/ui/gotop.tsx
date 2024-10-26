"use client";
import React from 'react';

const GoTop: React.FC = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth'});
    };

    return (
        <div className="bottom-4 z-50">
            <button 
                onClick={scrollToTop} 
                className="animate-bounce  bg-[#00BBA6] rounded-full  text-[#FFFF] "
                title="Back to Top"
            >
                {/* Upward Arrow */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="md:h-6 w-4 md:w-6 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    
                >
                    <path d="M12 4l-8 8h6v8h4v-8h6l-8-8z" />
                </svg>
            </button>
        </div>
    );
};

export default GoTop;
