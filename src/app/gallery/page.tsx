import SweetMarquee from "@/components/shared/SweetMarquee";
import StructuredData from "@/components/structuredData";
import GalleryHeader from "@/components/views/GalleryHeader_View/GalleryHeader";
import GalleryList from "@/components/views/GalleryHeader_View/GalleryList";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Teejay Motors | Gallery",
  description: "Discover Teejay Motors awesome gallery",
};

function page() {
  return (
    <>
      <StructuredData />
      <GalleryHeader />
      <GalleryList />
      <div className="mt-10"></div>
      <SweetMarquee />
    </>
  );
}

export default page;
