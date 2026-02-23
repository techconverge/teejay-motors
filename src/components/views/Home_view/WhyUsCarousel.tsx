"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import image1 from "../../../../public/whyus/image1.svg";
import image2 from "../../../../public/whyus/image2.svg";
import image3 from "../../../../public/whyus/image3.svg";
import Image from "next/image";

interface CarouselCardProps {
  title: string;
  description: string;
  image: string;
}

const CarouselCard: React.FC<CarouselCardProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <div className="w-full lg:h-[300px] h-fit flex-col bg-[#ffffff] lg:items-start items-start justify-start gap-2 flex  font-lexend p-6 rounded-xl ">
      <div className="w-16 h-16 lg:mt-0 rounded-full flex-none">
        <Image src={image} alt="image" className="w-full h-full" />
      </div>
      <h3 className=" text-lg lg:text-xl font-bold text-primary  mt-2">
        {title}
      </h3>
      <p className="lg:text-sm text-sm text-[#667481] lg:font-medium ">
        {description}
      </p>
    </div>
  );
};

const WhyUsCarousel: React.FC = () => {
  const swiperRef = useRef<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselData: CarouselCardProps[] = [
    {
      image: image1,
      title: "Modern Fleets",
      description:
        "Ride in comfort with our premium fleet. It has a variety of well-maintained vehicles, each with the latest tech, to suit any need.. It ensures a safe, comfortable ride. You'll enjoy the journey as much as the destination.",
    },
    {
      image: image2,
      title: "Innovative",
      description:
        "Our team has chosen, trained drivers, proactive managers, and round-the-clock support. This setup allows us to swiftly meet your travel needs with personalized solutions, enhancing your experience…",
    },
    {
      image: image3,
      title: "Top Standards",
      description:
        "Leading organizations and travel managers trust us. We have a top safety record and great performance.. We are dedicated to providing exceptional service, making your journey efficient and worry-free.",
    },
  ];

  return (
    <div className="w-full h-full  mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 3000 }}
        loop
        spaceBetween={20}
        breakpoints={{
          1024: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        }}
        slidesPerView={1}
        pagination={false} // Hide Swiper's built-in pagination
        onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)} // Correctly update the currentIndex
        className="w-full"
        onSwiper={(swiper) => {
          swiperRef.current = swiper; // Save the Swiper instance
        }}
      >
        {/* <div className="absolute w-[30%] right-0 top-0 h-full z-10 bg-gradient-to-r from-transparent via-transparent  hidden lg:block to-[#f5f5f5] "></div> */}
        {carouselData.map((item, index) => (
          <SwiperSlide key={index} className="py-5 relative">
            <CarouselCard
              image={item.image}
              title={item.title}
              description={item.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigator and Indicator */}
      <div className="flex lg:py-0 w-full  relative   items-center justify-between">
        <button
          onClick={() => swiperRef.current?.slidePrev()} // Trigger Swiper's slidePrev method
          className="text-xl p-2 bg-gray-200 text-primary rounded-full hover:bg-gray-300"
          aria-label="Previous"
        >
          <BsArrowLeft size={30} />
        </button>
        <div className="flex space-x-2 mx-4">
          {carouselData.map((_, index) => (
            <motion.span
              initial={{ width: 40 }}
              animate={{ width: index === currentIndex ? 80 : 40 }}
              key={index}
              className={`block  h-1 rounded-full   ${
                index === currentIndex ? "bg-primary " : "bg-[#e0e0e0] "
              }`}
            ></motion.span>
          ))}
        </div>
        <button
          onClick={() => swiperRef.current?.slideNext()} // Trigger Swiper's slideNext method
          className="text-xl p-2 text-primary bg-gray-200 rounded-full hover:bg-gray-300"
          aria-label="Next"
        >
          <BsArrowRight size={30} />
        </button>
      </div>
    </div>
  );
};

export default WhyUsCarousel;
