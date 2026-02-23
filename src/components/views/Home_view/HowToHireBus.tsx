import Button from "@/components/ui/Button";
import { div } from "framer-motion/client";
import Image from "next/image";
import React from "react";
import { TbRoute } from "react-icons/tb";
import buseee from "../../../../public/png/buseee.png";

function HowToHireBus() {
  const steps = [
    {
      title: "Choose Your Bus",
      desc: "Browse our fleet, select the perfect vehicle for your needs, and click Book Now.",
    },
    {
      title: "Fill Out the Booking Form",
      desc: "Complete our quick and easy booking form. One of our agents will reach out to confirm the details",
    },
    {
      title: "Enjoy a Smooth Ride",
      desc: "Sit back and relax as we take you from your pick-up point to your destination with comfort and ease.",
    },
  ];
  return (
    <div className=" lg:px-10  px-4 py-20 max-w-7xl ">
      <div className=" text-center flex-items-col">
        <div className="text-center flex-items-col">
          <div className="w-10 bg-primary h-1 mb-2 rounded-full"></div>
          <h3 className="subheading !font-lexend lg:text-base text-sm !font-semibold">
            {" "}
            How it works
          </h3>
        </div>

        <h2 className=" font-clash capitalize mt-4 font-medium !text-3xl lg:!text-[3rem] lg:!leading-[3.5rem] ">
          How to hire a bus <br />
          in three simple steps
        </h2>

        <p className="subtext mt-5 px-4 lg:max-w-4xl !text-sm lg:!text-base !text-[#404850]">
          Experience the best in travel with Teejay Motors. Our modern fleet is
          paired with professional, courteous drivers to ensure your journey is
          comfortable, reliable, and stress-free. Renting a bus has never been
          easier—let us take care of the details while you enjoy the ride.
        </p>
        <a href="/our-routes">
          <Button
            iconRight={<TbRoute size={14} className="ml-3" />}
            title="Our Routes"
            className=" font-clash mt-8 text-base px-5 p-2.5"
          />
        </a>
      </div>

      <div className=" flex lg:flex-row lg:gap-10  lg:mt-10  lg:items-start flex-col-reverse items-center">
        <div className="w-full  about-container-clippy bg-gradient-to-b from-primary via-black to-black h-[25rem] lg:h-[35rem] flex flex-col justify-center items-center lg:w-[50%] rounded-2xl overflow-hidden mt-10 relative ">
          <Image
            priority
            layout="fill"
            objectFit="cover"
            src={
              "https://ucarecdn.com/0b106139-16ad-4d34-b6e2-6d779dadf1c5/teejaymotors14.JPG"
            }
            alt="bus"
            className="w-full  grayscale  opacity-50 h-full object-cover"
          />

          <div className="absolute z-10  flex flex-col justify-center items-center ">
            <div className=" p-5 w-32 h-32 animate-ping absolute z-[-1] rounded-full border-white border "></div>
            <div className=" p-5 w-32 h-32 animate-ping delay-200 absolute  z-[-1] rounded-full border-white border "></div>
            <div className=" p-5 w-32 h-32 animate-ping absolute  delay-300 z-[-1] rounded-full border-white border "></div>
            <div className=" p-3  rounded-full  bg-white  ">
              <div className=" p-1  rounded-full  bg-gradient-to-t from-primary  to-orange-500  ">
                <a
                  className="w-24 h-24 pt-6  cursor-pointer font-medium hover:bg-gradient-to-t border-2  border-white hover:from-primary hover:inset-10 hover:text-white duration-300 text-black hover:to-orange-500 lg:w-28 lg:h-28 leading-6  z-10 p-5 text-center flex flex-col justify-center items-center   text-base lg:text-2xl font-clash bg-white rounded-full"
                  href="/our-buses"
                >
                  Hire a <br />
                  Bus
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex items-center lg:items-start gap-10 lg:gap-20  mt-20 relative  flex-col ">
          <span className="w-0.5 h-full bg-[#D4D8DB] lg:left-4 absolute"></span>
          {steps.map((step, index) => (
            <div
              key={index}
              className=" flex flex-col lg:flex-row gap-3 z-[10] p-5   lg:p-0 bg-white   items-center  lg:items-start"
            >
              <div className=" text-5xl lg:text-5xl  text-[#D4D8DB] z-10 bg-white  font-black">
                {index + 1}
              </div>
              <div className="z-10 text-center lg:text-start">
                <h2 className="text-xl lg:text-2xl text-[#121213]  font-clash font-semibold">
                  {step.title}
                </h2>
                <p className="subtext  mt-4  !text-sm lg:!text-base lg:max-w-md !text-[#404850]">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HowToHireBus;
