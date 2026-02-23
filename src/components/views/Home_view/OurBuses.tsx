import Button from "@/components/ui/Button";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import logos from "../../../../public/png/logos.png";
import Image from "next/image";
import BusCard from "@/components/shared/BusCard";
import { sanityClient } from "@/services/sanity/sanityClient";
import { unstable_noStore as noStore } from "next/cache";

export const fetchBuses = async () => {
  noStore();
  const query = `*[_type == "bus"]{
    _id,
    title,
    numberOfSeats,
    "imageUrl": image.asset->url
  }`;
  return sanityClient.fetch(query);
};

export type Bus = {
  _id?: string;
  title: string;
  numberOfSeats: number;
  imageUrl: string;
};

export default async function OurBuses() {
  // Fetch data from Sanity
  const buses: Bus[] = await fetchBuses();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Teejay Motors Bus Fleet",
    description: "Explore our awesome bus fleet for your transportation needs",
    url: "https://www.teejaymotors.com/our-buses",
    itemListElement: buses.slice(0, 3).map((bus, index) => ({
      "@type": "Product",
      name: bus.title,
      description: `${bus.title} with ${bus.numberOfSeats} seats`,
      image: bus.imageUrl,
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
      },
      position: index + 1,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container my-20 px-4 lg:px-10 lg:mt-40 flex flex-col justify-center items-center">
        <div className="flex flex-col lg:flex-row lg:w-full justify-center items-center lg:items-end lg:justify-between w-full lg:max-w-7xl">
          <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start">
            <div className="w-10 bg-primary h-1 mb-2 rounded-full"></div>
            <h3 className="subheading">Our Awesome Buses</h3>
            <h2 className="text-4xl font-clash lg:text-4xl lg:leading-tight mt-2 max-w-2xl text-center lg:text-start font-medium">
              Explore Our <br className="lg:hidden" /> Bus Fleets
            </h2>
          </div>
          <div className="mt-4 md:mt-0">
            <a href="/our-buses">
              <Button
                variant="light"
                iconRight={<FaArrowRight className="ml-3 md:ml-5" />}
                title="Our Buses"
              />
            </a>
          </div>
        </div>
        <div className="mt-10 flex items-center gap-5 flex-col lg:flex-row w-full 2xl:max-w-[90rem] lg:max-w-7xl">
          {buses.slice(0, 3).map((bus) => (
            <BusCard
              key={bus._id}
              title={bus.title}
              numberOfSeats={bus.numberOfSeats}
              imageUrl={bus.imageUrl}
            />
          ))}
        </div>

        <Image
          alt="Partner logos"
          src={logos}
          className="w-full mt-5 lg:w-[55rem] lg:mt-10"
        />
      </div>
    </>
  );
}
