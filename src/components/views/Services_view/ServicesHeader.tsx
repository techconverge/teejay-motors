import Button from "@/components/ui/Button";
import clsx from "clsx";
import Image from "next/image";

import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { TbRoute } from "react-icons/tb";
function ServicesHeader() {
  return (
    <>
      <div className=" container pt-28 px-4 lg:px-10  lg:pt-32 w-full">
        <div className={clsx(` text-center flex-items-col `)}>
          <div className={clsx("text-center flex-items-col")}>
            <div className="w-10 bg-primary h-1 mb-2 rounded-full"></div>
            <h3 className={"subheading"}> Services</h3>
          </div>
          <h1 className=" font-clash my-2 text-3xl lg:!text-5xl lg:max-w-6xl lg:!leading-tight font-medium">
            Experience <br className="lg:hidden" /> The Best Services
          </h1>
        </div>
        <div className=" flex flex-col justify-center items-center">
          <p className=" subtext text-center mt-2 lg:max-w-4xl">
            Teejay Motors introduces a seamless, reliable, and high-quality bus
            service that redefines commuting across Lagos State. Designed with
            your comfort and convenience in mind, our services ensure every
            journey is smooth and stress-free
          </p>
          <div className="flex-items-row  lg:items-start lg:justify-start mt-6 lg:mt-8">
            <a href="/our-buses">
              <Button
                iconRight={<FaArrowRight size={12} className="ml-3" />}
                title="Hire a Bus"
                className=" font-clash text-base px-5 p-2.5"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full relative  h-[300px] container !px-0   lg:h-[500px]  overflow-hidden bg-black  mt-10 ">
        <Image
          priority
          layout="fill"
          objectFit="cover"
          className="w-full h-full object-cover  opacity-50 items-center"
          src="https://ucarecdn.com/2e0ca904-bce5-4c93-b142-b571df316ef1/teejaymotors18.JPG"
          alt="buses"
        />
      </div>
    </>
  );
}

export default ServicesHeader;
