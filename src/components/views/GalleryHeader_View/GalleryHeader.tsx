import clsx from "clsx";
import React from "react";

function GalleryHeader() {
  return (
    <div className=" lg:px-60 px-4   lg:pt-32 pt-28">
      <div className={clsx(` text-center flex-items-col !items-center `)}>
        <div className={clsx("text-center flex-items-col !items-center")}>
          <div className="w-10 bg-primary h-1 mb-2 rounded-full"></div>
          <h3 className={"subheading"}> Our Awesome Memories</h3>
        </div>
        <h1 className=" font-clash my-2 text-3xl lg:!text-5xl lg:max-w-6xl lg:!leading-tight font-medium">
          Our Gallery
        </h1>
      </div>
      <div>
        <p className=" subtext text-center  mt-2">
          A career at TeeJay Motors offers you a chance to make a difference in
          your life and the lives of the people in your community. Throughout
          our history.
        </p>
      </div>
    </div>
  );
}

export default GalleryHeader;
