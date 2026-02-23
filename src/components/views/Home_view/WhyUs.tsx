import Button from "@/components/ui/Button";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import WhyUsCarousel from "./WhyUsCarousel";

function WhyUs() {
  return (
    <section className=" container py-20 px-4 lg:px-10 text-start">
      <div className=" bg-[#f5f5f5]  rounded-[25px]  lg:py-10 lg:gap-20  p-4 lg:p-5 lg:pl-10 lg:flex-row lg:flex">
        <div className=" lg:w-[30%]  mt-4 flex flex-col">
          <h3 className=" text-base lg:text-lg  font-lexend  text-primary flex flex-ccol justify-start items-start relative font-semibold   bg-transparent pt-2  ">
            <span className=" absolute w-8 bg-primary h-1 mb-1 rounded-full top-0 self-center"></span>
            Features
          </h3>
          <h2 className=" text-2xl uppercase lg:text-3xl font-semibold lg:leading-tight  mt-4  w-full text-start font-clash">
            Why choose Us?
          </h2>
          <p className="mt-5 subtext font-medium lg:!text-base  !text-sm ">
            Our journey to revolutionize mobility has been one of challenges and
            triumphs, but you remain at the center of it all. Your satisfaction,
            safety, and progress drive everything we do. With a steadfast
            commitment to excellence and the power of modern technology, we make
            it our mission to deliver solutions that move you forward—seamlessly
            and confidently.
          </p>
          <div className=" lg:w-fit flex-1 w-full flex justify-start items-start ">
            <a href="/contact">
              <Button
                iconRight={<FaArrowRight size={12} className="ml-3" />}
                title="Get in Touch"
                className=" font-clash mt-8 text-base px-5 p-2.5 "
              />
            </a>
          </div>
        </div>

        <div className=" h-full w-full lg:w-[60%]  mt-5 lg:mt-0 flex-1">
          <WhyUsCarousel />
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
