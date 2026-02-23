"use client";
import Button from "@/components/ui/Button";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import lamata from "../../../../public/png/lamata.webp";
import lagoslogo from "../../../../public/png/lagoslogo.png";
import lagos from "../../../../public/lagos.svg";
import buses from "../../../../public/buses.svg";
import buses2 from "../../../../public/buses2.svg";
import Image from "next/image";
import SweetMarquee from "@/components/shared/SweetMarquee";

function HeroSectionV2() {
  return (
    <div>
      <div className="  relative overflow-hidden  pt-28  pb-24 lg:pt-32 lg:pb-40   mx-auto flex flex-col justify-center w-full items-center">
        {/* Redefining Text Animation */}
        <motion.h1
          className=" uppercase font-clash flex flex-col items-center justify-center text-center font-bold text-4xl"
          initial={{ y: "50%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.3,
            duration: 0.4,
            ease: "easeOut",
          }}
        >
          <div className="flex flex-row gap-1.5 items-center">
            <motion.span
              className="  flex items-center  justify-center gap-1  text-3xl  lg:text-[2.5rem]"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2, // Delay for cascading effect
                duration: 0.4,
                ease: "easeOut",
              }}
            >
              M
              <svg
                className="w-[3.5rem] inline-block  lg:h-8 lg:w-[4rem] "
                width="127"
                height="58"
                viewBox="0 0 127 58"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.rect
                  initial={{ strokeDasharray: 500, strokeDashoffset: 500 }} // center with stroke hidden
                  animate={{
                    strokeDashoffset: 0, // Animate the stroke to be fully visible
                  }}
                  transition={{
                    duration: 3, // Adjust duration for desired speed
                    ease: "easeInOut", // Smooth ease in-out
                  }}
                  x="9"
                  y="9"
                  width="109"
                  height="40"
                  rx="20"
                  stroke="url(#paint0_linear_491_916)" // Gradient stroke
                  strokeWidth="18"
                  fill="none" // Ensure no fill, just stroke
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_491_916"
                    x1="0"
                    y1="29"
                    x2="127"
                    y2="29"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.13" stopColor="#E84342" />
                    <stop offset="1" stopColor="#FF9500" />
                  </linearGradient>
                </defs>
              </svg>
              ving
            </motion.span>
            <motion.span
              className=" text-3xl  lg:text-[2.5rem]"
              initial={{ y: "50%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.8, // Slight delay to make it cascade
                duration: 0.4,
                ease: "easeOut",
              }}
            >
              Better
            </motion.span>
          </div>

          <motion.span
            className=" text-3xl -mt-2 lg:mt-2 lg:text-4xl "
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 1.5, // Delay for cascading effect
              duration: 0.4,
              ease: "easeOut",
            }}
          >
            Living <span className="text-gradient">Easier</span>
          </motion.span>
        </motion.h1>

        {/* Subtext Animation */}
        <motion.p
          className="subtext max-w-xl w-full   lg:px-20  px-10  !text-[#53585c]  !text-sm    mt-3 lg:mt-3  text-center xl:text-center "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.8,
            duration: 0.4,
            ease: "easeOut",
          }}
        >
          Effortless mobility reimagined—innovative, reliable, and designed to
          help you move freely and live fully.
        </motion.p>

        {/* Button Animation */}
        <div className=" flex items-center xl:mt-12 mt-10 justify-center  xl:justify-center  w-full gap-5">
          <motion.a
            href="/our-buses"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 2, // Slight delay to match the flow
              duration: 0.4,
              ease: "easeOut",
            }}
          >
            <Button
              iconRight={
                <FaArrowRight
                  size={12}
                  className="ml-3 duration-500  group-hover:translate-x-1"
                />
              }
              title="Hire a bus"
              className=" !p-2.5 !px-4 lg:!py-2"
            />
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 2.5,
            duration: 0.4,
          }}
          className="  flex w-full justify-center   flex-col   items-center text-center  gap-10  mt-10  lg:mt-10 max-w-5xl"
        >
          <div>
            <div className=" subtext  !text-sm !text-[#727272] ">
              <p>In Partnership with</p>
            </div>
            <p className="font-lexend  text-sm lg:text-sm font-semibold">
              The Lagos State Government
            </p>
          </div>
          <div className="    px-10 flex items-center  xl:gap-8 gap-5 mt-2">
            <Image className="w-10" alt="lamata logo" src={lagoslogo} />
            <Image className="w-10" alt="lagos state logo" src={lamata} />
          </div>
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.8,
            duration: 0.4,
            ease: "easeOut",
          }}
          className=" flex flex-col mt-10     rounded-full justify-center items-center relative bottom-24 lg:bottom-0 "
        >
          <BiChevronDown className=" text-[#ff8282] " size={32} />
          <div className="w-full h-full absolute text-[#ff8282] rounded-full border animate-ping"></div>
          <div className="w-full h-full absolute text-[#ff8282] rounded-full border animate-ping"></div>
        </motion.div> */}
        <Image
          src={lagos}
          alt="lagos"
          className="absolute px-20 z-[-1] opacity-60 bottom-0"
        />
        <motion.div
          initial={{ x: "-300%" }} // Start completely off-screen on the left
          animate={{ x: "350%" }} // Move completely off-screen to the right
          transition={{
            duration: 6, // Slightly slower speed for the first bus
            ease: "linear", // Smooth, constant speed
            repeat: Infinity, // Loop animation infinitely
            repeatType: "loop", // Seamless looping
            delay: 0, // No delay for the first bus
          }}
          className="absolute lg:-bottom-2 -bottom-5"
        >
          <Image src={buses} alt="lagos" className=" scale-50 lg:scale-75 " />
        </motion.div>

        <motion.div
          initial={{ x: "-300%" }} // Start completely off-screen on the left
          animate={{ x: "300%" }} // Move completely off-screen to the right
          transition={{
            duration: 5, // Slightly faster speed for the second bus
            ease: "linear", // Smooth, constant speed
            repeat: Infinity, // Loop animation infinitely
            repeatType: "loop", // Seamless looping
            delay: 1, // Delay for the second bus to create staggered movement
          }}
          className="absolute lg:-bottom-2 -bottom-5"
        >
          <Image
            src={buses2}
            alt="lagos"
            className=" scale-50 lg:scale-75 bottom-0"
          />
        </motion.div>
      </div>
      <SweetMarquee />
    </div>
  );
}

export default HeroSectionV2;
