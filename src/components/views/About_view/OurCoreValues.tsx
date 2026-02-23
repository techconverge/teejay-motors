import React from "react";
import image1 from "../../../../public/core/image1.svg";
import image2 from "../../../../public/core/image2.svg";
import image3 from "../../../../public/core/image3.svg";
import image4 from "../../../../public/core/image4.svg";
import Image from "next/image";

function OurCoreValues() {
  const values = [
    {
      image: image1,
      title: "Safety First",
      description: `We prioritise the safety and well-being of our passengers, drivers, and communities. Every decision we make and every service we provide is designed with safety at its core, ensuring peace of mind for all.`,
    },
    {
      image: image2,
      title: " Innovation and Excellence",
      description: `Driven by technology and inspired by progress, we continuously innovate to deliver exceptional transportation solutions. We aim for excellence in everything we do, setting new benchmarks in mobility.`,
    },
    {
      image: image3,
      title: "Sustainability",
      description: `We are committed to eco-friendly practices and solutions that reduce our environmental footprint. By promoting clean energy and efficient transportation, we drive towards a greener future.`,
    },
    {
      image: image4,
      title: " Customer-Centric Servic",
      description: `Our customers are at the heart of our operations. We are dedicated to providing reliable, comfortable, and convenient services that exceed expectations and enhance the travel experience.
`,
    },
    {
      image: image1,
      title: "Integrity and Accountability",
      description: `We operate with transparency, honesty, and a strong sense of responsibility. From how we serve our customers to how`,
    },
  ];

  return (
    <section className=" w-full flex flex-col justify-center p-4 lg:px-10 items-center ">
      <div className="container">
        <h2 className=" text-2xl lg:text-4xl font-clash text-center  font-medium">
          Our Core Values
        </h2>
      </div>
      <div className=" grid-cols-1 mt-4 gap-5 rounded-2xl grid py-5 lg:gap-10 lg:px-10  lg:py-20 px-5 text-white bg-black w-full max-w-[100rem] lg:grid-cols-3">
        {values.map((item, index) => (
          <div
            key={index}
            className="w-full flex flex-col justify-center items-center text-center py-5 "
          >
            <div className="w-20 h-20   p-2 flex flex-col justify-center items-center rounded-full">
              <Image src={item.image} alt="image" />
            </div>
            <h3 className=" font-clash text-xl mt-2 font-medium">
              {item.title}
            </h3>
            <p className=" text-sm lg:text-base font-lexend font-medium mt-3  text-white/80 ">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurCoreValues;
