import SweetMarquee from "@/components/shared/SweetMarquee";
import StructuredData from "@/components/structuredData";
import OurBusesHeader from "@/components/views/OurBusese/OurBusesHeader";
import OurBusesList from "@/components/views/OurBusese/OurBusesList";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Teejay Motors | Our Buses",
  description: "Book medium and high quality buses with teejay motors",
};

function OurBuses() {
  return (
    <>
      <StructuredData />
      <OurBusesHeader />
      <OurBusesList />
      <div className="mt-10"></div>
      <SweetMarquee />
    </>
  );
}

export default OurBuses;
