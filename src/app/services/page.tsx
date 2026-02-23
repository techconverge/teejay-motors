import CTASection2 from "@/components/shared/CTAsectrion2";
import SweetMarquee from "@/components/shared/SweetMarquee";
import StructuredData from "@/components/structuredData";
import ServiceList from "@/components/views/Services_view/ServiceList";
import ServicesHeader from "@/components/views/Services_view/ServicesHeader";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Teejay Motors | Services",
  description:
    "Teejay Motors introduces a seamless, reliable, and high-quality bus service that redefines commuting across Lagos State.",
};
function Services() {
  return (
    <>
      <StructuredData />
      <ServicesHeader />
      <ServiceList />
      <CTASection2 />
      <div className="mt-10"></div>
      <SweetMarquee />
    </>
  );
}

export default Services;
