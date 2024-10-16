"use client";
import Image from "next/image";
import { Fade, Zoom, JackInTheBox, Bounce,Slide, Roll, Hinge, Flip } from "react-awesome-reveal";

export default function ImageGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-hidden">
      <Zoom>
        <Image
          alt="Mountain"
          src="https://i.ibb.co/dkWh7JZ/javascript-intermediate-certificate-1.jpg"
          width='300'
          height='300'
          className="w-full rounded-md h-40"
          layout="responsive"
        />
      </Zoom>
      <Fade direction="down">
        <Image
          alt="Mountain"
          src="https://i.ibb.co/Lpw9FNq/7168041-1723205110.jpg"
          width='300'
          height='300'
          className="w-full rounded-md h-40"
          layout="responsive"
        />
      </Fade>
      
      <Fade direction="down">
        <Image
          alt="Mountain"
          src="https://i.ibb.co.com/c84FZHy/Md-Manik-Hossain-Postman.jpg"
          width='300'
          height='300'
          className="w-full rounded-md h-40"
          layout="responsive"
        />
      </Fade>
      <Bounce>
        <Image
          alt="Mountain"
          src="https://i.ibb.co.com/Qk84DCV/1719510600606.jpg"
          width='300'
          height='300'
          className="w-full rounded-md h-40"
          layout="responsive"
        />
      </Bounce>
      <JackInTheBox>
        <Image
          alt="Mountain"
          src="https://i.ibb.co.com/mTWc0t9/doc.jpg"
          width='300'
          height='300'
          className="w-full rounded-md h-40"
          layout="responsive"
        />
      </JackInTheBox>
      <Slide direction="right">
        <Image
          alt="Mountain"
          src="https://i.ibb.co.com/XjFvzYT/1719518927833.jpg"
          width='300'
          height='300'
          className="w-full rounded-md h-40"
          layout="responsive"
        />
      </Slide>
      <Roll>
        <Image
          alt="Mountain"
          src="https://i.ibb.co.com/zNHPQh9/UX-Fundamentals.jpg"
          width='300'
          height='300'
          className="w-full rounded-md h-40"
          layout="responsive"
        />
      </Roll>
      <Bounce>
        <Image
          alt="Mountain"
          src="https://i.ibb.co.com/HKhmSGb/1717565708032-1.jpg"
          width='300'
          height='300'
          className="w-full rounded-md h-40"
          layout="responsive"
        />
      </Bounce>
    </div>
  );
}

