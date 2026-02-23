import CTASection2 from "@/components/shared/CTAsectrion2";
import SweetMarquee from "@/components/shared/SweetMarquee";
import StructuredData from "@/components/structuredData";
import BlogHeader from "@/components/views/Blog_view/BlogHeader";
import BlogList from "@/components/views/Blog_view/BlogList";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Teejay Motors | Blog",
  description:
    "Explore teejay moktors latest blog posts and articles, stay up to date",
};

function Blogpage() {
  return (
    <>
      <StructuredData />
      <BlogHeader />
      <BlogList />
      <CTASection2 />
      <div className="mt-10"></div>
      <SweetMarquee />
    </>
  );
}

export default Blogpage;
