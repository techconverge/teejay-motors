import SweetMarquee from "@/components/shared/SweetMarquee";
import StructuredData from "@/components/structuredData";
import CareerHeader from "@/components/views/Career_View/CareerHeader";
import CareerVacancy from "@/components/views/Career_View/CareerVacancy";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Teejay Motors | Career",
  description: " Drive your career forward with Teejay Motors.",
};

function Career() {
  return (
    <>
      <StructuredData />
      <CareerHeader />
      <CareerVacancy />
      <div className="mt-10"></div>
      <SweetMarquee />
    </>
  );
}

export default Career;
