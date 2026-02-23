import CTASection2 from "@/components/shared/CTAsectrion2";
import SweetMarquee from "@/components/shared/SweetMarquee";
import StructuredData from "@/components/structuredData";
import OurRoutesHeader from "@/components/views/OurRoutes_View/OurRoutesHeader";
import RoutesList from "@/components/views/OurRoutes_View/RoutesList";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Teejay Motors | Our Routes",
  description: "Discover areas  to find our Buses",
};
function OurRoutes() {
  return (
    <>
      <StructuredData />
      <OurRoutesHeader />
      <RoutesList />
      <CTASection2 />
      <div className="mt-10"></div>
      <SweetMarquee />
    </>
  );
}

export default OurRoutes;
