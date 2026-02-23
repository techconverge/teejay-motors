import Button from "@/components/ui/Button";
import { FaArrowRight } from "react-icons/fa";
import { TbRoute } from "react-icons/tb";
import oval from "../../../../public/Oval.svg";
import heroBus from "../../../../public/png/hero-vehicles.png";
import landscape from "../../../../public/landscape.svg";
import Image from "next/image";
import { div } from "framer-motion/client";

function HeroSection() {
  return (
    <section className="bg-[#fcf6f5] overflow-hidden relative w-full">
      <div className=" absolute hidden lg:block  w-40 h-40 lg:w-[20rem]  top-20 lg:h-[20rem] bg-primary rounded-full  -right-44 blur-[10rem]   "></div>
      <div className="container overflow-hidden 2xl:h-[80vh] relative flex-col lg:flex-row flex    lg:items-center lg:py-20 pt-12 ">
        <div className="flex-1">
          <p className=" text-center lg:text-start lg:text-[1.1rem] 2xl:text-[1.2rem] font-lexend mb-2 font-medium">
            Tired of
            <span className="relative pl-3">
              <Image
                src={oval}
                alt="ovalshape"
                className=" absolute -right-2 -top-1 lg:scale-125 scale-x-110 lg:-right-4  2xl:-right-5 2xl:-top-1"
              />
              Lagos Traffic?
            </span>
          </p>
          <h1 className=" uppercase font-medium mt-5 text-center lg:text-start font-clash">
            Experience <br /> stress-free{" "}
            <span className=" text-gradient"> bus charter </span>services
          </h1>
          <p className="subtext text-center lg:text-start  !text-gray   mt-2 lg:pr-20 2xl:pr-36">
            Are you searching for a reliable and affordable bus hire and bus
            transport service? We have a fleet of modern, comfy buses.
          </p>
          <div className="flex-items-row lg:gap-5  lg:items-start lg:justify-start mt-6 lg:mt-14">
            <a href="/our-buses">
              <Button
                iconRight={<FaArrowRight size={12} className="ml-3" />}
                title="Hire a Bus"
                className=" font-clash text-base px-5 p-2.5"
              />
            </a>
            <a href="/our-routes">
              <Button
                variant="light"
                iconRight={<TbRoute size={14} className="ml-3" />}
                title="Our Routes"
                className=" font-clash text-base px-5 p-2.5"
              />
            </a>
          </div>
        </div>
        <div className="w-full bg-primary  rounded-full  lg:w-[50%] z-10 lg:h-[30rem] 2xl:h-[32rem]  relative flex flex-col justify-center  items-center h-[250px] mt-10 mb-14 lg:my-5   ">
          <Image
            alt="teejay motors buses"
            className="w-full h-full relative top-5  2xl:top-10   z-[1] object-cover"
            src={heroBus}
          />
          <div className="w-full absolute rounded-full h-full overflow-hidden ">
            <Image
              alt="landscape image"
              src={landscape}
              width={300}
              height={300}
              className="w-full translate-y-2 h-full"
            />
          </div>
        </div>
      </div>
      <div className=" absolute  w-40 h-40 lg:w-[20rem] right-0  -bottom-40 lg:h-[20rem] bg-primary rounded-full -left-[250px]  blur-3xl  "></div>
    </section>
  );
}

export default HeroSection;
