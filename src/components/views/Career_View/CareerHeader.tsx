import clsx from "clsx";
import Image from "next/image";
import React from "react";

function CareerHeader() {
  return (
    <>
      <div className=" container pt-28 lg:pt-32 flex flex-col justify-center items-center  w-full">
        <div
          className={clsx(
            ` text-start  lg:max-w-5xl px-4 lg:px-10 lg:text-center flex-items-col !items-start lg:!items-center `
          )}
        >
          <div
            className={clsx(
              "text-start lg:text-center flex-items-col !items-start lg:!items-center"
            )}
          >
            <div className="w-10 bg-primary h-1 mb-2 rounded-full"></div>
            <h3 className={"subheading"}> Careers</h3>
          </div>
          <h1 className=" font-clash my-2 text-2xl lg:!text-5xl lg:max-w-3xl lg:!leading-tight font-medium">
            Drive your career forward with Teejay Motors.
          </h1>
        </div>
        <div className=" w-full  px-4 lg:px-10 lg:max-w-5xl">
          <p className=" subtext text-start lg:text-center mt-2">
            At Teejay Motors, we’re not just building vehicles—we’re building
            futures. A career with us is more than a job; it’s an opportunity to
            make a meaningful impact in your life and your community. We’re
            committed to helping you achieve your career aspirations by
            providing an environment that fosters growth, innovation, and
            personal fulfillment. From day one, we support you in realizing your
            dreams, empowering you to unlock your full potential and contribute
            to something bigger. Join us and be part of a team that’s
            transforming mobility while creating opportunities for progress—one
            career, one community at a time.
          </p>
        </div>
      </div>
      <div className="w-full  px-4 lg:px-10 relative  h-[300px] container grayscale  lg:h-[600px] overflow-hidden  mt-10 ">
        <Image
          layout="fill"
          objectFit="cover"
          className="w-full h-full object-cover  items-center"
          src="https://ucarecdn.com/736c3b7c-16c8-4540-8823-e30b7b0322d4/teejaymotors27.JPG"
          alt="buses"
        />
      </div>
    </>
  );
}

export default CareerHeader;
