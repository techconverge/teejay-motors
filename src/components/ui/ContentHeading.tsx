import clsx from "clsx";
import React from "react";

function ContentHeading({
  subheading,
  heading,
  classname,
}: {
  subheading: string;
  heading: string;
  classname?: string;
}) {
  return (
    <div className={clsx(` text-center flex-items-col `, classname)}>
      <div className={clsx("text-center flex-items-col", classname)}>
        <div className="w-10 bg-primary h-1 mb-2 rounded-full"></div>
        <h3 className={"subheading"}> {subheading}</h3>
      </div>
      <h1 className=" font-clash mt-4 !text-2xl lg:!text-4xl lg:max-w-6xl lg:!leading-tight font-medium">
        {heading}
      </h1>
    </div>
  );
}

export default ContentHeading;
