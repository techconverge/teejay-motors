import React from "react";
import Marquee from "react-fast-marquee";
import logos from "../../../../public/png/logos.png";
import Image from "next/image";

function PlacesMarquee() {
  const places = [
    "Ikeja",
    "Oshodi",
    "Oyingbo",
    "Egbeda",
    "Iyana Ipaja",
    "Igando",
    "Abuleegba",
    "Ikorodu",
  ];
  return (
    <Marquee
      direction="right"
      autoFill
      className=" h-full gap-10 "
      gradient={false}
      speed={50}
    >
      <Image alt="image" src={logos} className=" w-[30rem]" />
    </Marquee>
  );
}

export default PlacesMarquee;
