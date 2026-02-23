import Button from "@/components/ui/Button";
import React from "react";
import { TbRoute } from "react-icons/tb";
import lagos from "../../../../public/png/lagos.png";
import Image from "next/image";
import { FaLocationDot, FaLocationPin } from "react-icons/fa6";

function ServiceAreas() {
  const serviceAreas = [
    "Oshodi",
    "Oyingbo",
    "Ikeja",
    "Ayobo",
    "Egbeda",
    "Iyana Ipaja",
    "Igando",
    "Abuleegba",
    "Ikorodu",
  ];
  return (
    <section className=" py-20 px-4 lg:p-10 lg:max-w-7xl lg:pt-40 text-center container">
      <div className="px-5">
        <h2 className=" text-3xl font-clash  font-medium lg:text-5xl">
          Service areas
        </h2>
        <p className="subtext mt-2">
          Our operations run from {" "}
          <span className=" text-primary">5 AM to 10 PM,</span> covering key
          locations across Lagos:
        </p>
      </div>
      <div className="  grid-cols-1 mt-10 lg:mt-20 grid lg:flex lg:flex-row  lg:gap-16">
        <div className=" w-full lg:flex-1 flex flex-col justify-center items-center  rounded-lg bg-[#f0f0f0] ">
          <div className="absolute z-10  flex flex-col justify-center items-center ">
            <div className=" p-5  w-56  h-56  absolute z-[-1] rounded-full border-white border "></div>
            <div className=" p-2  rounded-full  bg-white  ">
              <div className=" p-2   rounded-full  bg-gradient-to-t from-primary  to-orange-500  ">
                <div className="w-24 h-24 pt-6  cursor-pointer   hover:from-primary hover:inset-10  duration-300 text-black hover:to-orange-500 lg:w-32 lg:h-32 leading-6 font-medium z-10 p-5 text-center flex flex-col justify-center items-center  text-lg lg:text-2xl font-clash bg-white rounded-full">
                  <FaLocationDot className="text-primary text-4xl pb-1" />
                  Lagos
                </div>
              </div>
            </div>
          </div>
          <Image src={lagos} alt="lagos state" />
        </div>
        <div className=" py-5 lg:w-[40%]  flex-col items-center justify-center flex gap-5 lg:gap-5 lg:items-start  lg:justify-start lg:py-0 ">
          {serviceAreas.map((item, index) => (
            <div
              key={index}
              className=" flex w-full lg:flex-row flex-col items-center lg:justify-start py-3 border-b gap-1 lg:gap-5 border-b-[#777777] justify-center"
            >
              <div className=" lg:w-5 lg:h-5 w-3 h-3 bg-primary  " />
              <h3 className=" font-clash text-lg lg:text-2xl  font-medium">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </div>
      <div className=" flex mt-10 lg:mt-60 items-center justify-center flex-col">
        <h1 className=" max-w-7xl  font-clash  flex-col items-center gap-1 justify-center  w-full text-center  text-pretty text-4xl lg:text-8xl uppercase   font-semibold tracking-tight text-gray-950 ">
          Redefining bus
          <br />
          <span className=" text-gradient">travel in Lagos.</span>
        </h1>
        <h2 className=" text-base font-lexend text-[#4E4E4E]  font-medium lg:text-[24px]  lg:px-20 lg:leading-[40px] mt-5">
          Teejay Motors brings a fresh, seamless way to reserve high-quality,
          reliable bus services across Lagos State. Designed for convenience and
          built on trust, our services make commuting effortless and
          stress-free. As we continue to grow, we’re expanding into new cities,
          ensuring more communities experience the comfort, safety, and
          reliability that define Teejay Motors. Wherever you’re headed, we’re
          here to get you there
        </h2>
        <a href="/our-routes" className="mt-10">
          <Button
            iconRight={<TbRoute size={14} className="ml-3" />}
            title="Our Routes"
            className=" font-clash text-base px-5 p-2.5"
          />
        </a>
      </div>
    </section>
  );
}

export default ServiceAreas;
