"use client"
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
const Pcimage = () => {
  return (
    <div>
          <Fade direction="up">
            <Image
                  alt="person"
                  src="https://i.ibb.co.com/993xzsR/448809228-1669069983905295-1394394334308464780-n.jpg"
                  width="500"
                  height="400"
                  className="mx-auto mt-7 rounded animate-custom-bounce"
                />
            </Fade>
    </div>
  );
};

export default Pcimage;