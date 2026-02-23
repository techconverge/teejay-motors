import CTASection2 from "@/components/shared/CTAsectrion2";
import SweetMarquee from "@/components/shared/SweetMarquee";
import About_Hero from "@/components/views/About_view/About_Hero";
import OurCoreValues from "@/components/views/About_view/OurCoreValues";
import ServiceAreas from "@/components/views/About_view/ServiceAreas";
import OurBuses from "@/components/views/Home_view/OurBuses";
import OurLatestArticles from "@/components/views/Home_view/OurLatestArticles";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Teejay Motors | About Us",
  description:
    "Teejay Motors Nigeria Limited was founded in July 2001, under the Companies and Allied Matters Act (1990) of the Federal Republic of Nigeria",
};

function AboutUs() {
  return (
    <>
      <About_Hero />
      <OurCoreValues />
      <ServiceAreas />
      <OurBuses />
      <OurLatestArticles />
      <CTASection2 />
      <div className="mt-10"></div>
      <SweetMarquee />
    </>
  );
}

export default AboutUs;
