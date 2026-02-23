"use client";
import mass_transit from "../../../../public/png/mass_transit.jpeg";
import charter from "../../../../public/png/charter.jpeg";
import cng from "../../../../public/png/cng.jpeg";
import logistics from "../../../../public/png/logistcs.jpg";
import assembly from "../../../../public/png/assembly.jpeg";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Section2() {
  return (
    <div className=" py-24 w-full flex flex-col justify-center items-center font-lexend font-normal   sm:py-32 bg-[#FEFEFA] ">
      <div className=" px-4 container lg:px-[5%] flex flex-col justify-start items-center   lg:max-w-[110rem]   ">
        <h3 className=" text-base lg:text-lg  font-lexend  text-primary flex flex-ccol justify-center items-center relative font-semibold  mb-3 bg-transparent   p-2 px-2  lg:mb-5">
          <span className=" absolute w-8 bg-primary h-1 mb-1 rounded-full top-0 self-center"></span>
          Our Services
        </h3>
        <p className=" max-w-6xl font-clash flex lg:flex-row flex-col items-center gap-1 justify-center  w-full text-center  text-pretty text-4xl lg:text-4xl uppercase   font-bold tracking-tight text-gray-950 ">
          <span className=" flex items-center  gap-1 justify-center">
            M
            <svg
              className="w-[3.5rem] h-8  lg:w-[4rem]"
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
          </span>
          you forward
        </p>
        <p className=" subtext   max-w-3xl mt-5  !text-sm lg:!text-base  !text-center">
          We simplify your journey with innovative physical and digital
          solutions, ensuring seamless movement from one place to another. From
          efficient rides to smarter transport options, we’re redefining
          mobility with you at the center. Driven by a vision to connect
          communities and empower progress, we’re transforming how Africa
          moves—one country at a time
        </p>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <div className="relative lg:col-span-2 h-[30rem] lg:h-[35rem] ">
            <div className="relative group bg-white border border-[#d6d6d6]  cursor-pointer flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(1rem+1px)] lg:rounded-tl-[calc(2rem+1px)]">
              <div className="h-[40%]  relative lg:h-[50%]">
                <Image
                  priority
                  layout="fill"
                  objectFit="cover"
                  alt="mass transit services"
                  src={mass_transit}
                  className="w-full   duration-500 h-[45%] lg:h-[50%]  hover:grayscale-0 grayscale  object-cover object-left"
                />
              </div>
              <div className=" p-5 pt-4   flex left-0 w-full flex-1 bg-white text-black bottom-0   items-start flex-col duration-500 ">
                <p className="mt-2  text-xl lg:text-lg uppercase  font-clash  text-start   font-semibold  text-gray-950">
                  Mass Transit Operations
                </p>
                <p className="text-sm text-primary  font-medium  text-start">
                  Explore our mass transit services
                </p>
                <p className="lg:mt-5 mt-4  text-sm lg:text-sm   duration-300 font-normal lg:max-w-lg  text-start text-[#4E4E4E]">
                  Discover efficient, reliable, and affordable transportation
                  with our Mass Transit service, proudly delivered in
                  partnership with Lagos State. Focused on safety, comfort, and
                  accessibility, we’re transforming commutes into smoother, more
                  convenient experiences. Join us in creating a connected and
                  sustainable future.
                </p>
              </div>
            </div>
          </div>
          <div className="relative lg:col-span-2 h-[30rem] lg:h-[35rem]">
            <div className="relative group bg-white border  border-[#d6d6d6] cursor-pointer flex h-full flex-col overflow-hidden   rounded-t-lg">
              <div className="h-[40%]  relative lg:h-[50%]">
                <Image
                  priority
                  layout="fill"
                  objectFit="cover"
                  alt="mass transit services"
                  src={charter}
                  className="w-full   duration-500   h-[45%] lg:h-[50%]  hover:grayscale-0 grayscale  object-cover object-left"
                />
              </div>
              <div className=" p-5  pt-4 flex left-0 w-full  bg-white text-black bottom-0   h-fit  items-start flex-col duration-500 ">
                <p className="mt-2  text-xl lg:text-lg uppercase  font-clash  text-start   font-semibold  text-gray-950">
                  Charter Services
                </p>
                <p className="text-sm text-primary  font-medium   text-start">
                  Plan your journey with us today.
                </p>
                <p className="lg:mt-5 mt-4  text-sm lg:text-sm   duration-300 font-normal lg:max-w-lg  text-start text-[#4E4E4E]">
                  Enjoy the freedom of personalised, flexible transportation
                  with our Charter Services. Perfect for corporate events, group
                  tours, private trips, or special occasions, we deliver
                  comfort, convenience, and reliability. From spacious seating
                  to customisable schedules, we make every trip as seamless as
                  it is memorable.
                </p>
              </div>
            </div>
          </div>

          <div className="relative lg:col-span-2 h-[30rem] lg:h-[35rem]">
            <div className="relative group bg-white border border-[#d6d6d6] cursor-pointer flex h-full flex-col overflow-hidden  rounded-lg  lg:rounded-tr-[calc(2rem+1px)]">
              <div className="h-[40%]  relative lg:h-[50%]">
                <Image
                  priority
                  layout="fill"
                  objectFit="cover"
                  alt="mass transit services"
                  src={cng}
                  className="w-full    duration-500  h-[40%] lg:h-[50%]  hover:grayscale-0 grayscale  object-cover object-left"
                />
              </div>
              <div className=" p-5  pt-4 flex left-0 w-full  bg-white bottom-0 h-fit lg:h-fit  items-start flex-col duration-500 text-black ">
                <p className="mt-2  text-xl lg:text-lg uppercase  font-clash  text-start   font-semibold  text-gray-950">
                  Drive greener, drive smarter.
                </p>
                <p className="text-sm text-primary  font-medium   text-start">
                  Start your journey to sustainability today
                </p>
                <p className="lg:mt-5 mt-4  text-sm lg:text-sm   duration-300 font-normal lg:max-w-lg  text-start text-[#4E4E4E]">
                  Transform your vehicle into an eco-friendly, cost-effective
                  solution with our CNG Conversion Centre. Reduce emissions,
                  save on fuel costs, and contribute to a cleaner environment.
                  Backed by advanced technology and expert service, we ensure a
                  seamless and safe transition to cleaner driving.
                </p>
              </div>
            </div>
          </div>

          {/* Unimplemented */}
          <div className="relative lg:col-span-2 h-[30rem] lg:h-[35rem]">
            <div className="relative group bg-white border border-[#d6d6d6] cursor-pointer flex h-full flex-col overflow-hidden rounded-lg  lg:rounded-bl-[calc(2rem+1px)]">
              <div className="h-[40%]  relative lg:h-[50%]">
                <Image
                  priority
                  layout="fill"
                  objectFit="cover"
                  alt="mass transit services"
                  src={assembly}
                  className="w-full   duration-500  h-[38%] lg:h-[50%]  hover:grayscale-0 grayscale  object-cover object-left"
                />
              </div>
              <div className=" p-5  pt-4 flex left-0 w-full  bg-white bottom-0  h-fit   items-start flex-col duration-500 text-black ">
                <p className="mt-2  text-xl lg:text-lg uppercase  font-clash  text-start   font-semibold  text-gray-950">
                  Built for excellence.
                </p>
                <p className="text-sm text-primary  font-medium  text-start">
                  Discover more about our commitment to quality today.
                </p>
                <p className="lg:mt-5 mt-4  text-sm lg:text-sm   duration-300 font-normal lg:max-w-lg  text-start text-[#4E4E4E]">
                  At our state-of-the-art Assembly Plant, we produce
                  high-quality vehicles designed to meet local and global
                  standards. Equipped with advanced technology and driven by
                  innovation, we’re setting new benchmarks for precision and
                  reliability. Supporting local industry while meeting global
                  demands, we’re building the future of mobility.
                </p>
              </div>
            </div>
          </div>
          <div className="relative lg:col-span-2 h-[30rem] lg:h-[35rem]">
            <div className="relative group bg-white border border-[#d6d6d6] cursor-pointer flex h-full flex-col overflow-hidden rounded-lg">
              <div className="h-[40%]  relative lg:h-[50%]">
                <Image
                  priority
                  layout="fill"
                  objectFit="cover"
                  alt="mass transit services"
                  src={logistics}
                  className="w-full  duration-500    hover:grayscale-0 grayscale  object-cover object-left"
                />
              </div>

              <div className=" p-5 pt-4 flex left-0 w-full  bg-white bottom-0    h-fit   items-start flex-col duration-500 text-black ">
                <p className="mt-2  uppercase text-xl lg:text-lg   font-clash  text-start   font-semibold  text-gray-950">
                  Logistics made simple.
                </p>
                <p className="text-sm text-primary  font-medium   text-start  ">
                  Partner with us today.
                </p>
                <p className="lg:mt-5 mt-4  text-sm lg:text-sm   duration-300 font-normal lg:max-w-lg  text-start text-[#4E4E4E]">
                  Effortlessly manage your local and international operations
                  with our reliable, efficient Logistics Services. From
                  warehousing to freight forwarding, we provide tailored
                  solutions to keep your business moving. Focused on precision
                  and timeliness, we’re here to help you optimize your supply
                  chain and deliver success.
                </p>
              </div>
            </div>
          </div>

          <div className="relative lg:col-span-2 h-[30rem] lg:h-[35rem]">
            <div className="relative bg-white border border-[#d6d6d6]  flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]">
              <img
                alt=""
                src="https://tailwindui.com/plus/img/component-images/bento-01-network.png"
                className="w-full h-[40%] lg:h-[50%]  hover:grayscale-0 grayscale duration-500  group-hover:h-[30rem] object-cover object-left"
              />
              <div className="p-5 pt-4 flex-1   flex flex-col justify-end">
                <h3 className=" text-base font-normal text-primary">
                  Our Network
                </h3>
                <p className="mt-2 text-xl lg:text-lg  font-clash font-semibold   tracking-tight text-gray-950">
                  We Operate Internationally
                </p>
                <p className="mt-2 max-w-lg text-sm lg:text-sm  text-[#4E4E4E]">
                  Our services extend beyond borders, offering seamless and
                  reliable solutions on a global scale. we ensure efficient
                  operations, compliance with global standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
