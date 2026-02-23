"use client";
import React from "react";
import StatsSection from "./StatsSection";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { FaArrowRight } from "react-icons/fa";

function OurServicesV2() {
  return (
    <div className="w-full flex flex-col overflow-hidden rounded-b-[25px] lg:rounded-b-[50px]  relative justify-start lg:pt-0  bg-[#101010] text-white  items-center   ">
      <div className="absolute inset-0">
        <div className="relative h-full  lg:rounded-b-[50px] w-full bg-black [&>div]:absolute [&>div]:inset-0 [&>div]:bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] [&>div]:bg-[size:14px_24px]">
          <div></div>
        </div>
      </div>
      <main className="isolate w-full">
        <div className="relative  isolate -z-10">
          <div
            className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
            aria-hidden="true"
          >
            <div className="aspect-[801/1036] clippyo w-[50.0625rem] bg-gradient-to-tr from-[#8a8a8a] to-[#252525] opacity-30" />
          </div>
          <div className="overflow-hidden ">
            <div className="mx-auto    pb-32 pt-12 sm:pt-60 lg:px-8 lg:pt-20">
              <div className="mx-auto  w-screen lg:w-full  text-center  gap-x-20 lg:mx-0 lg:flex lg:max-w-none lg:items-center justify-evenly ">
                <div className="relative w-full lg:max-w-xl   lg:shrink-0 xl:max-w-2xl">
                  <h2 className="text-pretty text-white font-semibold bg-gradient-to-r from-white to- bg-clip-text px-4 text-2xl lg:text-4xl uppercase font-clash  tracking-tight text-gray-900 ">
                    Driven by progress
                  </h2>
                  <p className=" mt-4 lg:mt-8  text-pretty  font-lexend lg:pr-10 px-4 text-[#dbdbdb] text-sm lg:text-base  font-medium text-gray-500  lg:max-w-none">
                    We create solutions that simplify commuting, unlock earning
                    potential, and bring convenience to your journey. Powered by
                    innovation and designed with you in mind, our mission is to
                    empower your life and drive sustainable
                    progress for everyone
                  </p>
                  <StatsSection />
                  <div className=" justify-center items-center w-full flex">
                    <a href="/our-buses">
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
                    </a>
                  </div>
                </div>
                <div className="mt-14 flex justify-center   gap-4 lg:gap-8  sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-36  lg:w-40 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative bg-[#131313] aspect-[2/3]">
                      <Image
                        layout="fill"
                        objectFit="cover"
                        src="https://res.cloudinary.com/dlmjx1uwj/image/upload/v1735130928/teejaymotors-37_gi83bp.jpg"
                        alt="image1"
                        className=" h-full w-full    duration-300 cursor-pointer rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                    </div>
                  </div>
                  <div className="mr-auto w-36 lg:w-40 flex-none space-y-4 lg:space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative aspect-[2/3] bg-[#101010]">
                      <Image
                        layout="fill"
                        objectFit="cover"
                        src="https://res.cloudinary.com/dlmjx1uwj/image/upload/v1735130932/teejaymotors-39_eamv4r.jpg"
                        alt=""
                        className=" h-full w-full    duration-300 cursor-pointer rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                    </div>
                    <div className="relative aspect-[2/3] bg-[#101010]">
                      <Image
                        layout="fill"
                        objectFit="cover"
                        src="https://res.cloudinary.com/dlmjx1uwj/image/upload/v1735130932/teejaymotors-40_oonvoi.jpg"
                        alt=""
                        className=" h-full w-full    duration-300 cursor-pointer rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                    </div>
                  </div>
                  <div className="w-36 lg:w-40 flex-none space-y-4 lg:space-y-8 pt-32 sm:pt-0">
                    <div className="relative bg-[#101010] aspect-[2/3]">
                      <Image
                        layout="fill"
                        objectFit="cover"
                        src="https://res.cloudinary.com/dlmjx1uwj/image/upload/v1735130925/teejaymotors-35_pbdrmr.jpg"
                        alt=""
                        className=" h-full w-full      duration-300 cursor-pointer rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                    </div>
                    <div className="relative bg-[#101010] aspect-[2/3]">
                      <Image
                        layout="fill"
                        objectFit="cover"
                        src="https://res.cloudinary.com/dlmjx1uwj/image/upload/v1735130926/teejaymotors-36_ok6f5m.jpg"
                        alt=""
                        className="h-full w-full    duration-300 cursor-pointer rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* <Features /> */}
    </div>
  );
}

export default OurServicesV2;
