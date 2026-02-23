import clsx from "clsx";
import React, { ReactNode } from "react";
import { InputType } from "zlib";

type props = {
  title: string;
  variant?: "light" | "solid";
  iconRight?: ReactNode;
  className?: string;
  type?: "submit" | "reset" | "button" | undefined;
};

function Button({
  title,
  variant = "solid",
  iconRight,
  className,
  type,
}: props) {
  return (
    <button
      type={type}
      className={clsx(
        " hover:bg-black border group border-primary hover:border-black flex font-lexend text-sm  lg:text-base items-center duration-300 font-medium   p-2 px-4 lg:px-4 lg:p-2   rounded-full ",
        variant === "light" &&
          " border border-[#ff3535] hover:border-primary  text-primary hover:text-white hover:bg-primary  p-2 px-4 hover:text-primary",
        variant === "solid" &&
          "bg-primary text-white hover:text-white hover:bg-black",
        className
      )}
    >
      {title}
      {iconRight}
    </button>
  );
}

export default Button;
