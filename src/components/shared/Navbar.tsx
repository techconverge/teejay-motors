"use client";
import React, { useEffect, useRef, useState } from "react";
import Button from "../ui/Button";
import logo from "../../../public/logo.svg";
import Image from "next/image";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { motion } from "framer-motion";
import { CgClose } from "react-icons/cg";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import clsx from "clsx";

function Navbar() {
  const [opened, setOpened] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  const pathname = usePathname();

  const navlist = [
    { title: "Home", link: "/" },
    { title: "About Us", link: "/about" },
    { title: "Services", link: "/services" },
    { title: "Our Buses", link: "/our-buses" },
    { title: "Our Routes", link: "/our-routes" },
    { title: "Career", link: "/career" },
    { title: "Gallery", link: "/gallery" },
    { title: "Blog", link: "/blog" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      className={clsx(
        "flex fixed w-screen bg-white shadow   flex-col z-[1000]  items-center duration-300 delay-0 lg:px-5  xl:px-10 2xl:px-36  justify-start  font-medium font-clash"
      )}
    >
      <div className="  w-full max-w-7xl lg:!px-10   lg:rounded-full  pt-3 duration-300    !px-5 py-2   flex flex-row justify-between lg:grid lg:grid-cols-12 ">
        <div className=" flex items-center justify-between col-span-3 lg:col-span-2 gap-20">
          <div>
            <Link href="/" className="mt-3">
              <Image
                src={logo}
                className="w-[4.5rem] lg:w-[4rem]  "
                alt="teejay motors logo"
              />
            </Link>
          </div>

          {/* For Desktop Navigation */}
        </div>

        {/* Mobile nav */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: opened ? "100vh" : 0 }}
          className="fixed z-20 top-0  left-0  lg:left-[60%] w-screen lg:w-[40vw] overflow-hidden h-screen"
        >
          <motion.div
            initial={{ height: 0 }}
            animate={{
              height: opened ? "100%" : 0,
              transition: { delay: 0.2, duration: 0.5 },
            }}
            className="bg-primary overflow-hidden flex flex-col justify-start p-5 items-start w-full h-full lg:p-10"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: opened ? 1 : 0, transition: { delay: 0.3 } }}
              onClick={() => setOpened(!opened)}
              className="bg-[#f5f5f541]  text-white self-end  cursor-pointer  p-2.5 mb-5 rounded-full"
            >
              <CgClose />
            </motion.div>

            {/* Render the navlist items with a cascading effect */}

            {navlist.map((nav_item, index) => (
              <div
                key={index}
                className=" text-white w-full text-start mt-8 lg:py-3  lg:h-16 lg:mt-2  text-3xl  lg:hover:text-5xl  lg:w-fit  duration-300 overflow-hidden"
              >
                <motion.div
                  key={index}
                  initial={{ y: 50 }}
                  animate={{
                    y: opened ? 0 : 50,
                    transition: { delay: !opened ? 0 : index * 0.2 },
                  }}
                  className="cursor-pointer flex justify-between w-full items-center gap-4"
                  onClick={() => setOpened(false)} // Close menu on click
                >
                  <a
                    href={nav_item.link}
                    className={clsx(pathname === nav_item?.link && "underline")}
                  >
                    {nav_item.title}
                  </a>
                </motion.div>
              </div>
            ))}
          </motion.div>
          <motion.div
            initial={{ height: 0 }}
            animate={{
              height: opened ? "100%" : 0,
              transition: { delay: 0.1, duration: 0.8 },
            }}
            className="bg-[#DA1B1B] overflow-hidden w-full h-full"
          ></motion.div>
          <motion.div
            initial={{ height: 0 }}
            animate={{
              height: opened ? "100%" : 0,
              transition: { delay: 0.1, duration: 1 },
            }}
            className="bg-[#A31414] overflow-hidden w-full h-full"
          ></motion.div>
        </motion.div>

        <div className="flex col-span-9 lg:col-span-10  justify-end items-center gap-4 lg:gap-0">
          <div className=" flex items-center px-10  text-black flex-none  justify-center rounded-full  lg:hidden xl:flex  ">
            <nav className="gap-2 text-sm  h-full lg:flex hidden w-full items-center">
              {navlist.map((nav_item, index) => (
                <a
                  key={index}
                  className={`relative p-1 px-3 rounded-full cursor-pointer hover:text-primary ${
                    pathname === nav_item.link && "text-primary bg-red-50"
                  }`}
                  href={nav_item.link}
                >
                  {nav_item.title}
                </a>
              ))}
            </nav>
          </div>
          <a href="/contact" className="flex-none">
            <Button
              iconRight={<FaArrowRight size={12} className="ml-3" />}
              title="Contact Us"
              className=" !text-sm "
            />
          </a>
          <div
            onClick={() => setOpened(!opened)}
            className="text-16 xl:hidden lg:mr-5 rounded-full"
          >
            <HiOutlineMenuAlt4 size={20} />
          </div>
        </div>
      </div>
    </motion.header>
  );
}

export default Navbar;
