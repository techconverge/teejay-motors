import Image, { StaticImageData } from "next/image";
import React from "react";
import { CgArrowTopRight } from "react-icons/cg";

type props = {
  title: string;
  description: string;
  image: string | StaticImageData;
};

function ServiceItem({ title, description, image }: props) {
  return (
    <div className="overflow-hidden font-lexend">
      <div className=" container px-4 lg:px-0">
        <div className="grid grid-cols-1 rounded-2xl gap-x-8   p-5 bg-red-50  lg:items-start">
          <div className="w-full">
            <Image src={image} alt="image" className="w-20 h-20" />
            <p className="mt-2 font-clash text-pretty text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
              {title}
            </p>
            <p className="mt-6 text-sm sm:text-lg/8 text-gray-600">
              {description}
            </p>
          </div>
          <a
            href="/contact"
            className=" flex text-primary mt-6 font-medium  font-clash  underline gap-2 items-center"
          >
            Contact Us{" "}
            <div className="bg-black text-white p-1 flex flex-col justify-center items-center  rounded-full">
              <CgArrowTopRight color="white" size={20} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ServiceItem;
