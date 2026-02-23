import { div } from "framer-motion/client";
import React from "react";
import Marquee from "react-fast-marquee";
import { BiHealth } from "react-icons/bi";

function SweetMarquee() {
  const services = [
    "Ikeja",
    "Oshodi",
    "Oyingbo",
    "Egbeda",
    "Iyana Ipaja",
    "Igando",
    "Abuleegba",
    "Ikorodu",
  ];
  return (
    <div className="w-full  z-[5]  overflow-hidden   ">
      <div className="  bg-white origin-center w-[110%]  -ml-5     ">
        <Marquee
          pauseOnHover
          autoFill
          className=" h-full py-3 lg:py-4"
          gradient={false}
          speed={40}
        >
          {services.map((place, index) => (
            <div
              key={index}
              className=" ml-5 font-clash h-full  font-semibold text-xl  lg:text-2xl flex items-center gap-5"
            >
              <BiHealth className=" text-primary" />
              <h2 className="text-black">{place}</h2>
            </div>
          ))}
        </Marquee>
      </div>
      <div className=" bg-[#2b84c6] w-[110%]  origin-center     -ml-5     ">
        <Marquee
          pauseOnHover
          direction="right"
          autoFill
          className=" h-full py-3 lg:py-4"
          gradient={false}
          speed={50}
        >
          {services.reverse().map((place, index) => (
            <div
              key={index}
              className=" ml-5 font-clash h-full  font-semibold text-xl lg:text-2xl flex items-center gap-5"
            >
              <BiHealth className=" text-white" />
              <h2 className="text-white">{place}</h2>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default SweetMarquee;
