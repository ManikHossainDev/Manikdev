"use client";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";

const Timeamount = () => {
  return (
    <div id="timeamount" className="p-5 py-7  border shadow-md rounded-lg bg-white">
      <div className="mb-4">
        <h3 className="text-2xl bg-[#F6F5FE] text-[#00BBA6] p-3 rounded-md text-center font-sans">
          পরবর্তী ব্যাচের সময় সূচি
        </h3>
      </div>
      <div className="flex flex-wrap mx-auto">
        <div className="w-full md:w-1/2 flex justify-center  mb-4">
          <div className="mr-0 md:mr-5">
            <div className="flex items-center">
              <div className="icon py-1 px-3">
                <Image
                  src="https://i.ibb.co/HXbhBgk/download.png" // Corrected path
                  alt="Enrollment Start Icon"
                  width={50} // Specify width
                  height={50} // Specify height
                />
              </div>
              <Fade direction="left">
                <div>
                  <h3 className="text-lg font-semibold">এনরোলমেন্ট শুরু</h3>
                  <p className="text-gray-600">September 10, 2025</p>
                </div>
              </Fade>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center  mb-4">
          <div className="mr-0 md:mr-5">
            <div className="flex items-center ">
              <div className="icon py-1 px-3">
                <Image
                  src="https://i.ibb.co/PGSfBFw/download-1.png" // Corrected path
                  alt="Enrollment End Icon"
                  width={50} // Specify width
                  height={50} // Specify height
                />
              </div>
              <Fade direction="right">
                <div>
                  <h3 className="text-lg font-semibold">এনরোলমেন্ট শেষ</h3>
                  <p className="text-gray-600">September 24, 2025</p>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <h3 className="my-4 text-center text-2xl text-[#00BBA6]">
        কোর্স ফি 6500 টাকা
      </h3>
      <div className="text-center">
        <button
          className="bg-[#00BBA6] text-white font-sans py-2 px-4 text-lg rounded-lg hover:bg-indigo-700"
          role="button"
          aria-label="Enroll Now"
        >
          <span className="MuiButton-label">Enroll Now</span>
          <span className="MuiTouchRipple-root"></span>
        </button>
      </div>
    </div>
  );
};

export default Timeamount;
