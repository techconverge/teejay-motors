import Image from "next/image";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { GiBusStop } from "react-icons/gi";

function RoutesList() {
  const busStops = [
    "Ikeja Terminal",
    "Ikeja Along",
    "Ajayi Farm",
    "Ile Zik",
    "Mangoro",
    "Cement",
    "Iyana Dopemu",
    "Adealu",
    "Araromi",
    "Iyana Ipaja Bus stop",
    "Iyana Ipaja roundabout",
    "Alaguntan",
    "Alimosho",
    "Moshalasi",
    "Jubbey Water",
    "Pako",
    "Akinogun",
    "Mosan",
    "Federal",
    "Estate Gate",
    "Boys Town",
    "Akinyele",
    "Opeki",
    "Fatolu",
    "Ipaja Church",
    "Oja",
    "Igbogila",
    "Oluwaga",
    "Ona Ara",
    "Amule",
    "Ayobo",
  ];

  const images = [
    "https://ucarecdn.com/526f67ba-c1b5-4452-962f-541c0cefedf8/teejaymotors26.JPG",
    "https://ucarecdn.com/ef343833-6656-49c8-9878-8c079fc732b8/teejaymotors22.JPG",
    "https://ucarecdn.com/2e0ca904-bce5-4c93-b142-b571df316ef1/teejaymotors18.JPG",
    "https://ucarecdn.com/ad417d5a-a4ea-4a10-aa88-f5905c272654/teejaymotors23.JPG",
    "https://ucarecdn.com/e73ac513-a386-4de1-9187-d69c2e2ba7f0/teejaymotors19.JPG",
    "https://ucarecdn.com/ba588c78-a6b2-4ce5-a953-a7ba14acf13c/teejaymotors62.JPG",
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TransitRoute",
        name: "Ikeja to Ayobo",
        provider: {
          "@type": "Organization",
          name: "Teejay Motors",
        },
        itinerary: busStops.map((stop, index) => ({
          "@type": "BusStop",
          name: stop,
          itineraryPosition: index + 1,
        })),
      },
      {
        "@type": "ImageGallery",
        name: "Teejay Motors Route Images",
        description:
          "Images of buses and locations along the Ikeja to Ayobo route",
        image: images.map((url) => ({
          "@type": "ImageObject",
          url: url,
          contentUrl: url,
          caption: "Teejay Motors bus route image",
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex flex-col  lg:flex-row  lg:max-w-7xl lg:gap-20 py-10 !px-5  lg:mb-64 lg:mt-20 container">
        <div className="  h-full ">
          <div className=" flex flex-row justify-between items-center lg:w-[80%]">
            <h2 className="text-2xl lg:text-4xl font-clash font-medium">
              Routes
            </h2>
            <h2 className="text-2xl lg:text-4xl font-clash font-medium">
              Stops
            </h2>
          </div>
          <div className=" lg:flex-row flex flex-col items-start py-5  ">
            <div className=" bg-primary lg:px-10 text-white p-2 px-3 rounded-full">
              <h2 className=" font-clash gap-4 flex items-center text-sm lg:text-xl font-medium">
                <FaLocationDot /> IKEJA TO AYOBO
              </h2>
            </div>
            <div className="   items-start h-full grid  grid-cols-5 lg:flex-1 mt-5">
              <div className="  w-full   h-full  border-r  border-t"></div>
              {/* ;list here */}
              <div className="flex-1 flex-col lg:w-full  col-span-4  flex gap-4 lg:gap-10 h-full">
                {busStops.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 ">
                    <div className=" w-[20px] lg:w-[50px] h-[1px] bg-black"></div>
                    <GiBusStop
                      size={24}
                      className=" text-lg  lg:flex-none text-primary"
                    />
                    <h3 className=" text-base   lg:flex-none lg:text-xl font-clash font-semibold">
                      {item}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col  items-center lg:flex-1 gap-4">
          {images.map((src, index) => (
            <div
              key={index}
              className="w-full relative h-[300px] bg-[#f5f5f5] rounded-2xl"
            >
              <Image
                priority
                layout="fill"
                objectFit="cover"
                src={src}
                alt={`Teejay Motors route image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default RoutesList;
