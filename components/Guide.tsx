"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/boat.png",  // Add more image paths here
  "/camp1.webp",
  "/camp5n.jpg",
];

const Guide = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to change the image every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // 2000ms = 2 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <section className="flex flex-col items-center" id="Guide">
      <div className="px-4 md:px-8 lg:px-12 max-w-5xl w-full pb-16 md:pb-24 text-center md:text-left">
        <Image 
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="mx-auto md:mx-0 mb-4"
        />
        <p className="uppercase text-xs md:text-sm lg:text-base -mt-1 mb-3 text-green-500 tracking-wide">
          We are here for you
        </p>
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-5 lg:gap-10">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center md:text-left text-gray-800 leading-snug lg:leading-tight xl:max-w-[390px]">
            Guide You to Easy Path
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed xl:max-w-[520px]">
            Only with the Hilink application you will no longer get lost again, because we already support offline maps when there is no internet connection in the field. Invite your friends, relatives, and friends to have fun in the wilderness, travel through valleys, and reach the top of the mountain.
          </p>
        </div>
      </div>
      
      {/* Auto-Sliding Images */}
      <div className="relative w-full max-w-6xl mx-auto">
        <Image
          src={images[currentImageIndex]} // Use the current image from the array
          alt="guide image"
          width={1440}
          height={580}
          className="w-full object-cover object-center rounded-lg lg:rounded-3xl"
        />
        
        
      </div>
    </section>
  );
};

export default Guide;
