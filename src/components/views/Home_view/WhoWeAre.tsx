import Image from "next/image";
import React from "react";

function WhoWeAre() {
  return (
    <section className=" lg:px-10 px-4  lg:pb-10 flex flex-col  justify-center relative  items-center">
      <div className=" text-center flex-items-col ">
        <h2 className=" font-clash  uppercase font-bold mt-4 px-10 !text-3xl lg:!text-4xl  lg:max-w-4xl lg:!leading-tight ">
          Driven by a shared vision
          <span className=" text-gradient font-bold ">
            {" "}
            to transform the automobile industry
          </span>
          <br />
        </h2>
        <p className="subtext mt-5 px-4 !text-[#474747]  lg:!text-base !text-sm lg:max-w-4xl">
          Since our founding in July 2001, we’ve been committed to delivering
          innovation, reliability, and exceptional results. Our mission is
          simple: to redefine mobility and set new standards for excellence
          in every journey.
        </p>
      </div>
      <div className="w-full flex-col lg:flex-row lg:gap-5 flex 2xl:max-w-[90rem]  justify-center items-center mt-10">
        <div className="relative h-[250px] lg:h-[400px] about-container-clippy  w-full ">
          <Image
            priority
            layout="fill"
            objectFit="cover"
            src="https://res.cloudinary.com/dlmjx1uwj/image/upload/v1735130763/teejaymotors-17_uekczw.jpg"
            alt="office"
            className="w-full h-full opacity-80 object-cover"
          />
        </div>

        <div className="absolute z-10  flex flex-col justify-center items-center ">
          <div className=" p-5 w-32 h-32 animate-ping absolute z-[-1] rounded-full border-white border "></div>
          <div className=" p-5 w-32 h-32 animate-ping absolute  z-[-1] rounded-full border-white border "></div>
          <div className=" p-5 w-32 h-32 animate-ping absolute z-[-1] rounded-full border-white border "></div>
          <div className=" p-3  rounded-full  bg-white  ">
            <div className=" p-1  rounded-full  bg-gradient-to-t from-primary  to-orange-500  ">
              <a
                className="w-22 h-22 px-3 cursor-pointer hover:bg-gradient-to-t border-2  border-white hover:from-primary hover:inset-10 hover:text-white duration-300 text-black hover:to-orange-500 lg:h-fit py-3 leading-6 font-medium z-10   text-center flex flex-col justify-center items-center  text-base lg:text-xl font-clash bg-white rounded-full"
                href="/about"
              >
                About Us
              </a>
            </div>
          </div>
        </div>
        <div className=" mt-2 relative h-[250px] lg:h-[400px] about-container-clippy w-full flip-hor-vert ">
          <Image
            priority
            layout="fill"
            objectFit="cover"
            src="https://res.cloudinary.com/dlmjx1uwj/image/upload/v1735130770/teejaymotors-20_mhrdmr.jpg"
            alt="office"
            className="w-full  opacity-80 h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;
