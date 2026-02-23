import Button from "@/components/ui/Button";
import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

function CareerVacncyList() {
  const vacancyData = [
    {
      jobTitle: "Bus Drivers",
      desc: "A career at TeeJay Motors offers you a chance to make a difference in your life and the lives of the people in your community. Throughout our history, we have continued to help our employees realize their dreams, whilst creating opportunities for them to fulfill their personal and professional potential.",
      qualififications:
        "25 years of age or older ,Minimum 2 years total experience with CDL (Class A or B) ,Minimum 1-year experience operating vehicle “in-type” (similar to     prospective position),  Class A or B Lagos driver’s license with a passenger endorsement and air brakes certification ,Minimum 5 years Lagos driving experience ,Pass a drug test and background check",
    },
    {
      jobTitle: "Bus Drivers",
      desc: "A career at TeeJay Motors offers you a chance to make a difference in your life and the lives of the people in your community. Throughout our history, we have continued to help our employees realize their dreams, whilst creating opportunities for them to fulfill their personal and professional potential.",
      qualififications:
        "25 years of age or older ,Minimum 2 years total experience with CDL (Class A or B) ,Minimum 1-year experience operating vehicle “in-type” (similar to     prospective position),  Class A or B Lagos driver’s license with a passenger endorsement and air brakes certification ,Minimum 5 years Lagos driving experience ,Pass a drug test and background check",
    },
    {
      jobTitle: "Bus Drivers",
      desc: "A career at TeeJay Motors offers you a chance to make a difference in your life and the lives of the people in your community. Throughout our history, we have continued to help our employees realize their dreams, whilst creating opportunities for them to fulfill their personal and professional potential.",
      qualififications:
        "25 years of age or older ,Minimum 2 years total experience with CDL (Class A or B) ,Minimum 1-year experience operating vehicle “in-type” (similar to     prospective position),  Class A or B Lagos driver’s license with a passenger endorsement and air brakes certification ,Minimum 5 years Lagos driving experience ,Pass a drug test and background check",
    },
  ];

  return (
    <div className=" flex flex-col gap-5 px-4 lg:px-10  lg:max-w-7xl mt-14 lg:mb-20">
      {vacancyData.map((item, index) => (
        <div
          key={index}
          className=" grid grid-cols-1 items-center  lg:grid-cols-2"
        >
          <div className="  p-4 py-6 lg:px-8  lg:py-10 w-full  relative    lg:h-full bg-black flex flex-col items-start  text-white">
            <Image
              priority
              layout="fill"
              objectFit="cover"
              className="w-full h-full opacity-40 left-0 top-0 absolute object-cover"
              src="https://ucarecdn.com/736c3b7c-16c8-4540-8823-e30b7b0322d4/teejaymotors27.JPG"
              alt="image"
            />
            <h3 className=" text-xl  lg:text-4xl relative z-[1] font-clash  font-medium">
              {item.jobTitle}
            </h3>
            <p className="subtext mt-3 relative z-[1]  flex-1  !text-white !text-sm">
              {item.desc}
            </p>
            <Button
              iconRight={<BsArrowRight className="ml-2" />}
              title="Apply Now"
              className="mt-5 relative z-[1] bg-white!text-primary hover:bg-primary hover:!text-white border-none"
            />
          </div>
          {/* qualfication list */}
          <div className=" bg-primary  font-medium  font-lexend w-full text-white p-4 pt-6">
            <h3 className=" font-clash text-xl lg:text-2xl mb-8">
              Qualification
            </h3>
            {item.qualififications.split(",").map((item, index) => (
              <li
                className=" subtext !text-white  !text-sm list-decimal mb-5"
                key={index}
              >
                {item}
              </li>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CareerVacncyList;
