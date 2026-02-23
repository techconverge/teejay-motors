import Button from "@/components/ui/Button";
import clsx from "clsx";
import React from "react";

function ContactHeader() {
  return (
    <div className="container py-20 lg:pt-36 flex flex-col justify-center items-center">
      <div className={clsx(` text-center flex-items-col !items-center `)}>
        <div className={clsx("text-center flex-items-col !items-center")}>
          <div className="w-10 bg-primary h-1 mb-2 rounded-full"></div>
          <h3 className={"subheading"}> Contact Us</h3>
        </div>
        <h1 className=" font-clash my-2 text-3xl lg:!text-5xl lg:max-w-6xl lg:!leading-tight font-medium">
          Customer Support
        </h1>
      </div>
      <div>
        <p className=" subtext text-center max-w-4xl  mt-2">
          You can reach us via any of the contact below
        </p>
      </div>
    </div>
  );
}

export default ContactHeader;
