import SweetMarquee from "@/components/shared/SweetMarquee";
import StructuredData from "@/components/structuredData";
import ContactHeader from "@/components/views/Contact_View/ContactHeader";
import ContactUsForm from "@/components/views/Contact_View/ContactUsForm";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Teejay Motors | Career",
  description:
    "Customer Support -  You can reach us via any of the contact below",
};

function Contact() {
  return (
    <>
      <StructuredData />
      <ContactHeader />
      <ContactUsForm />
      <SweetMarquee />
    </>
  );
}

export default Contact;
