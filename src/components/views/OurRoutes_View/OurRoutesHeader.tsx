import clsx from "clsx";
import Image from "next/image";
import React from "react";

function OurRoutesHeader() {
  return (
    <>
      <div className=" lg:pt-32 pt-28 w-full">
        <div className={clsx(` text-center flex-items-col lg:px-10 px-4 `)}>
          <div className={clsx("text-center flex-items-col")}>
            <div className="w-10 bg-primary h-1 mb-2 rounded-full"></div>
            <h3 className={"subheading"}> Our Routes</h3>
          </div>
          <h1 className=" font-clash my-2 text-3xl lg:!text-5xl lg:max-w-6xl lg:!leading-tight font-medium">
            Discover areas <br className=" lg:hidden" /> to find our Buses
          </h1>
          <div>
            <p className=" subtext text-center mt-2">
              At Teejay Motors Nigeria Limited, we offer a comprehensive range
              of services designed Our key services include.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full relative lg:h-[600px]  h-[300px] bg-black container !px-0 overflow-hidden  mt-10 ">
        <Image
          priority
          layout="fill"
          objectFit="cover"
          className="w-full h-full object-cover   items-center"
          src="https://ucarecdn.com/ba588c78-a6b2-4ce5-a953-a7ba14acf13c/teejaymotors62.JPG"
          alt="buses"
        />
      </div>
    </>
  );
}

export default OurRoutesHeader;
