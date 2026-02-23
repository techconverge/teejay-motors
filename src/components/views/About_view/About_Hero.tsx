import Button from "@/components/ui/Button";
import ContentHeading from "@/components/ui/ContentHeading";
import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import award1 from "../../../../public/png/file.png";
import award2 from "../../../../public/png/file2.png";
const OurMission_Vision = () => {
  return (
    <div className=" py-10 flex border-b   lg:max-w-7xl w-full  flex-col lg:flex-row-reverse lg:items-start items-center lg:px-10  lg:gap-20">
      <div className=" px-10 lg:px-0  p-2 lg:pr-10 text-center lg:flex-1 lg:text-start flex justify-start items-center gap-10 flex-col ">
        <div>
          <h2 className=" font-clash  text-2xl  font-medium text-primary ">
            Our Mission
          </h2>
          <p className="subtext !text-black mt-5">
            To redefine transportation with safe, reliable, and exceptional
            solutions. Powered by innovation and driven by technology, we are
            committed to moving you forward with excellence and ingenuity.
          </p>
        </div>
        <div className="">
          <h2 className=" font-clash   text-2xl  font-medium text-primary ">
            Our Vision
          </h2>
          <p className=" subtext !text-black  mt-5">
            To become a world-class mass transit operator and a global benchmark
            for service excellence. Guided by innovation, we aim to inspire
            progress and set new standards in mobility.
          </p>
        </div>
        <div className="hidden lg:block mt-10">
          <p className="relative font-lexend text-[#585b61] lg:text-lg font-medium text-sm lg:pr-10 ">
            At Teejay Motors, our mission is clear: to redefine mobility and
            logistics with innovation, reliability, and a commitment to
            progress. Every solution we create is designed to empower
            individuals and businesses, making movement effortless and
            opportunities accessible. Together, we’re driving towards a future
            where mobility works seamlessly for everyone."
          </p>

          <footer className="mt-4 self-start  font-lexend">
            <p className="text-sm lg:text-base  font-bold text-red-500">
              Mr. Adekunle Tajudeen, <br />
              Managing Director, Teejay Motors
            </p>
          </footer>
          <div>
            <div className="flex items-center justify-start">
              <Image src={award1} alt="award teejay" className="w-20" />
              <Image src={award2} alt="award teejay" className="w-20" />
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 lg:scale-[1.2]  w-full lg:w-[35%] lg:my-0 mt-5 lg:mt-20  flex flex-col justify-center items-center   h-fit lg:h-[600px]">
        <div className=" w-full lg:w-full lg:flex-1   rounded-2xl  relative overflow-hidden  mt-5   h-[500px]    lg:h-fit bg-black  ">
          <Image
            priority
            layout="fill"
            objectFit="cover"
            src={
              "https://ucarecdn.com/7eff9b4a-00db-4c69-ac14-3a03b32af3ea/WhatsAppImage20241209at071822_af66d85b.jpg"
            }
            alt="image"
            className="lg:w-[auto]  lg:h-full h-full object-top w-full lg:max-w-full   "
          />
        </div>
      </div>
      <div className="block lg:hidden mt-5 px-5">
        <p className="relative font-lexend lg:text-lg font-medium  text-sm lg:pr-10 ">
          At Teejay Motors, our mission is clear: to redefine mobility and
          logistics with innovation, reliability, and a commitment to progress.
          Every solution we create is designed to empower individuals and
          businesses, making movement effortless and opportunities accessible.
          Together, we’re driving towards a future where mobility works
          seamlessly for everyone."
        </p>

        <footer className="mt-4 self-start  font-lexend">
          <p className="text-sm lg:text-base  font-medium text-red-600">
            Mr. Adekunle Tajudeen, <br />
            Managing Director, Teejay Motors
          </p>
        </footer>
        <div>
          <div className="flex items-center justify-start">
            <Image src={award1} alt="award teejay" className="w-20" />
            <Image src={award2} alt="award teejay" className="w-20" />
          </div>
        </div>
      </div>
    </div>
  );
};

function About_Hero() {
  return (
    <section className="  py-28 pb-0 lg:px-10  lg:pt-32 lg:pb-20 w-full flex flex-col justify-center items-center overflow-hidden">
      <div className="container  flex flex-col !items-start">
        <div className=" px-4 lg:px-0 relative flex flex-col !items-start bg-white z-[1] rounded-2xl ">
          <ContentHeading
            classname="!text-start  !items-start "
            subheading="At Teejay Motors"
            heading="  We are a passionate team driven by a shared vision to
           transform the automobile industry"
          />
          <p className="subtext !text-sm lg:!text-lg text-start     mt-5  max-w-7xl ">
            Teejay Motors Nigeria Limited was founded in July 2001, under the
            Companies and Allied Matters Act (1990) of the Federal Republic of
            Nigeria. We are dedicated to various business activities in the
            automobile sector, both locally and internationally. Our vision is a
            future of zero crashes, zero emissions, and zero congestion, and we
            are committed to leading the way toward this future.
          </p>
          <a href="/contact">
            <Button
              iconRight={<FaArrowRight size={12} className="ml-3" />}
              title="Get in Touch"
              className=" font-clash text-base px-5 mt-5 p-2.5 lg:mt-10"
            />
          </a>
        </div>
      </div>
      <div className="w-full h-[300px] relative   lg:h-[500px]    container !px-0 lg:rounded-3xl  overflow-hidden bg-black lg:mt-20  mt-10 ">
        <Image
          priority
          layout="fill"
          objectFit="cover"
          className="w-full h-full object-cover  opacity-50  items-center"
          src="https://ucarecdn.com/736c3b7c-16c8-4540-8823-e30b7b0322d4/teejaymotors27.JPG"
          alt="buses"
        />
      </div>
      <div className=" flex flex-col w-full  justify-center items-center">
        <OurMission_Vision />
      </div>
    </section>
  );
}

export default About_Hero;
