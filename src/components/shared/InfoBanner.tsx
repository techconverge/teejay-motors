import React from "react";
import Marquee from "react-fast-marquee";
import { BiSolidLocationPlus } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";

function InfoBanner() {
  return (
    <div className="py-3 p-2 text-center flex items-center text-sm font-lexend font-medium w-screen h-12 bg-black text-white">
      <Marquee autoFill className="w-full">
        <BiSolidLocationPlus className="text-primary  ml-4 mr-1" />
        453 Apapa-Oshodi Express Way, Apapa, Lagos 102102, Lagos ,{" "}
        <FaPhoneAlt className="text-white ml-4 mr-1" /> 0904 167 8095
      </Marquee>
    </div>
  );
}

export default InfoBanner;
