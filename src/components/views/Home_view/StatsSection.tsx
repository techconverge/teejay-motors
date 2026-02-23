import React from "react";
import { motion } from "framer-motion";

function StatsSection() {
  return (
    <motion.section
      initial={{ translateY: "50%", opacity: 0 }}
      animate={{ translateY: 0, opacity: 1 }}
      transition={{
        delay: 2,
        duration: 0.4,
      }}
      className="py-10  text-white  px-4   w-full fex flex-col justify-center items-center bottom-0 z-[1]"
    >
      <div className=" w-full max-w-7xl  flex flex-col justify-center items-center">
        <div className="rounded-2xl  py-10   px-10 lg:mx-20 bg-gray-50 w-full flex items-center bg-[rgba(50,50,50,0.3)] border-[0.5px] border-[rgba(80,80,80,0.3)] backdrop-blur-3xl justify-between flex-col">
          <div className="w-full ">
            <div className=" gap-10  grid grid-cols-1  lg:grid-cols-3 ">
              <div className="block">
                <div className="font-clash font-semibold text-white   text-3xl   mb-3 text-center ">
                  100+
                </div>
                <span className="text-gray-900  font-lexend  text-center  block ">
                  Buses
                </span>
              </div>
              <div className="block">
                <div className="font-clash font-semibold text-white  text-3xl   mb-3 text-center ">
                  240+
                </div>
                <span className="text-gray-900  font-lexend  block text-center  ">
                  Drivers
                </span>
              </div>
              <div className="block">
                <div className="font-clash font-semibold text-white  text-3xl   mb-3 text-center ">
                  5M+
                </div>
                <span className="text-gray-900  font-lexend  block text-center  ">
                  Happy Commuters
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default StatsSection;
