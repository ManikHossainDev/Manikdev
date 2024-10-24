"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Define a type for image data
type ImageData = {
  id: number;
  url: string;
};

// Array of images with corresponding URLs
const images: ImageData[] = [
 
  {
    id: 6,
    url: "https://i.ibb.co/nfkDgsy/53452797-379166549584840-636141019393425408-n.jpg",
  },
  {
    id: 13,
    url: "https://i.ibb.co/Zz8yJTX/335391102-695254302380657-2674482019581223647-n.jpg",
  },
  {
    id: 14,
    url: "https://i.ibb.co/Yy359MF/450809857-476696315102449-5346625748201069613-n.jpg",
  },
  {
    id: 15,
    url: "https://i.ibb.co/jwjxpPr/103103426-689110395257119-7415763304778506441-n.jpg",
  },
  
  {
    id: 20,
    url: "https://i.ibb.co/tb2cjM1/67973697-469667310534763-4089572579696705536-n.jpg",
  },
  {
    id: 21,
    url: "https://i.ibb.co/nzntbS0/70579969-487241372110690-8086814215911768064-n.jpg",
  },
  {
    id: 22,
    url: "https://i.ibb.co/8447QWp/94786268-663057834529042-5420313156356407296-n.jpg",
  },
  {
    id: 23,
    url: "https://i.ibb.co/XZH6v3f/97524368-671681467000012-5527514393308299264-n.jpg",
  },
  {
    id: 24,
    url: "https://i.ibb.co/HqM8Kzt/117438143-740138296820995-3511505373027791147-n.jpg",
  },
  {
    id: 25,
    url: "https://i.ibb.co/GpRht1v/119018957-755410731960418-4897837499716382779-n.jpg",
  },
  {
    id: 26,
    url: "https://i.ibb.co/WfrgKTC/123018152-790619421772882-6427841519809122166-n.jpg",
  },
  {
    id: 27,
    url: "https://i.ibb.co/XV6Sx9Q/122692154-790619481772876-8806783300245496068-n.jpg",
  },
  {
    id: 16,
    url: "https://i.ibb.co/xHhB8Kq/62592932-453600935474734-2576311165860708352-n.jpg",
  },
  {
    id: 17,
    url: "https://i.ibb.co/hfD22b9/67391396-455384091963085-1522447219305742336-n.jpg",
  },
  {
    id: 18,
    url: "https://i.ibb.co/BtBVJkk/67314959-457178348450326-4000052576346177536-n.jpg",
  },
  {
    id: 19,
    url: "https://i.ibb.co/n7Dqr5j/67394242-461356618032499-8492536802584821760-n.jpg",
  },
  {
    id: 9,
    url: "https://i.ibb.co/JpfDDJF/271748390-1074974280004060-193060556539608316-n.jpg",
  },
  {
    id: 10,
    url: "https://i.ibb.co/z4skssQ/271773366-1074974190004069-1165638923419172147-n.jpg",
  },
  {
    id: 11,
    url: "https://i.ibb.co/n0KZFWQ/271851949-1074978783336943-5202635490533000900-n.jpg",
  },
  { id: 12, url: "https://i.ibb.co/bNpSWX1/my-photo.jpg" },
  {
    id: 1,
    url: "https://i.ibb.co/4NZZM0L/147448105-860715458096611-8256473654835434950-n.jpg",
  },
  {
    id: 2,
    url: "https://i.ibb.co/ggJsPTS/236903747-980710002763822-7331311592716485959-n.jpg",
  },
  {
    id: 3,
    url: "https://i.ibb.co/282Nk2G/260966096-1044228936411928-7292421970975638558-n.jpg",
  },
  {
    id: 4,
    url: "https://i.ibb.co/7gM8rYC/271006420-1068026130698875-9156176081722344545-n.jpg",
  },
];

const RandomImageGallery: React.FC = () => {
  const [currentImage, setCurrentImage] = useState<ImageData>(images[0]);

  // Function to get a random image from the list
  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };

  useEffect(() => {
    // Set a random image at a random interval (between 3 and 8 seconds)
    const randomInterval = () =>
      Math.floor(Math.random() * (8000 - 3000) + 3000);

    const intervalId = setInterval(() => {
      setCurrentImage(getRandomImage());
    }, randomInterval());

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {/* Map through images for displaying in a grid */}
      {images.map((image) => (
        <div
          key={image.id}
          className="relative overflow-hidden rounded-md shadow-md"
        >
          <Link href={image.url} target="_blank" rel="noopener noreferrer">
            <Image
              width={300} // Set a specific width
              height={300} // Set a specific height
              src={image.url}
              alt={`Random Image ${image.id}`}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-125"
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RandomImageGallery;
