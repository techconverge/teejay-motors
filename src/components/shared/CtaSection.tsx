import React from "react";
import { TbArrowUpRight } from "react-icons/tb";

function CtaSection() {
  return (
    <div className="container mb-20 lg:mt-20 lg:max-w-[90rem] lg:mb-40">
      <div className="   flex flex-col justify-center items-center  bg-black rounded-[1rem]  w-full h-[350px] lg:h-[30rem] relative lg:rounded-[2rem] overflow-hidden">
        <div className=" p-2 rounded-full group duration-300 absolute  lg:right-10 lg:bottom-10  bottom-5 right-5 z-50 ml-60  border-white border ">
          <div className=" bg-white p-2 rounded-full">
            <a
              className=" lg:w-40 lg:h-40 w-24 h-24 pt-6 border border-primary leading-6 font-medium z-10 p-5 text-center flex flex-col justify-center items-center  text-lg lg:text-3xl font-clash bg-white text-primary shadow-md rounded-full"
              href="/our-buses"
            >
              <TbArrowUpRight className=" lg:w-[30px] w-[40px] flex-none group-hover:translate-x-1.5 duration-300 group-hover:-translate-y-1.5" />
              Hire A Bus
            </a>
          </div>
        </div>

        <img
          className=" w-full h-full object-cover rounded-2xl opacity-40  "
          src="https://img.freepik.com/free-photo/group-buses-driving-along-road-sunset_157027-4307.jpg?t=st=1731519491~exp=1731523091~hmac=6ed9db54ec08875615a5cffdcf6fc0898e553471d7e531b2749000e3da027528&w=1380"
          alt="buses image"
        />
        <div className=" absolute  uppercase left-0 top-0">
          <h1 className="  font-bold font-clash  w-fit  bg-white pr-3 lg:text-[4rem] lg:py-3 lg:px-10 ">
            Are You
          </h1>
          <h1 className="  font-bold font-clash  w-fit rounded-r-lg bg-white pr-3 lg:text-[5rem] lg:py-3 lg:px-10 lg:rounded-r-3xl">
            Ready to <span className=" text-gradient"> Ride</span>
          </h1>
          <h1 className="  bg-white w-fit pr-3  font-bold rounded-br-lg font-clash lg:text-[5rem] lg:py-3 lg:px-10 lg:rounded-br-3xl">
            <span className=" text-gradient"> in Comfort? </span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default CtaSection;
