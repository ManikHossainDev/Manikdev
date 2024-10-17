"use client";
import { Fade } from "react-awesome-reveal";

const Homestudio = () => {
  return (
    <div className="overflow-hidden">
      {/* First section with fade animation */}
      <Fade direction="down" triggerOnce>
        <div className="bg-[url('https://i.ibb.co/993xzsR/448809228-1669069983905295-1394394334308464780-n.jpg')] bg-cover bg-center h-80 shadow-lg rounded-t"></div>
      </Fade>

      {/* Second and third sections with fade animation */}
      
        <div className="grid grid-cols-1 md:grid-cols-2">
        <Fade direction="left" triggerOnce>
          <div className="bg-[url('https://i.ibb.co/sgD0ZLF/manik1.jpg')] bg-cover bg-center h-64 rounded-bl shadow-lg"></div>
        </Fade>
        <Fade direction="right" triggerOnce>
          <div className="bg-[url('https://i.ibb.co/NNyfgWB/420183121-122135285120084308-5962844184553894140-n.jpg')] bg-cover bg-center h-64 rounded-br shadow-lg"></div>
      </Fade>
        </div>
    </div>
  );
};

export default Homestudio;
