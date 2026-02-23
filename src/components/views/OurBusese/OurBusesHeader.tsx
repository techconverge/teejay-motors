import Button from "@/components/ui/Button";
import clsx from "clsx";
import React from "react";
import { TbRoute } from "react-icons/tb";

function OurBusesHeader() {
  return (
    <div className=" pt-28 lg:pt-32 w-full flex flex-col justify-center items-center relative">
      <div className=" container  pb-10 flex-col flex justify-center items-center">
        <div className={clsx(` text-center flex-items-col `)}>
          <div className={clsx("text-center flex-items-col")}>
            <div className="w-10 bg-primary h-1 mb-2 rounded-full"></div>
            <h3 className={"subheading"}> Our Buses</h3>
          </div>
          <h1 className=" font-clash my-2 text-4xl lg:!text-5xl lg:max-w-6xl lg:!leading-tight font-medium">
            Explore <br className="lg:hidden" />
            Our Bus Feets
          </h1>
        </div>
        <p className=" subtext max-w-4xl text-center mt-2 px-5 lg:px-0">
          Teejay Motors introduces a seamless, reliable, and high-quality bus
          service that redefines commuting across Lagos State. Designed with
          your comfort and convenience in mind, our services ensure every
          journey is smooth and stress-free
        </p>
        <a href="/our-routes">
          <Button
            iconRight={<TbRoute size={14} className="ml-3" />}
            title="Our Routes"
            className=" font-clash text-base px-5 mt-5 p-2.5"
          />
        </a>
      </div>
    </div>
  );
}

export default OurBusesHeader;
