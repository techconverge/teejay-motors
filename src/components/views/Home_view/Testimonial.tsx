"use client";
import { sanityClient, urlFor } from "@/services/sanity/sanityClient";
import clsx from "clsx";
import moment from "moment";
import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import { FaStar } from "react-icons/fa";

// Types
interface Testimonial {
  _id: string;
  fullName: string;
  content: string;
  starRating: number;
  image: string;
  date?: string;
}

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="bg-white flex-items-col shadow-xl gap-5 rounded-2xl w-full testimonial p-5 items-start">
      <div className="flex-items-row w-full !justify-start">
        <div className="w-12 h-12 overflow-hidden rounded-full bg-[#f0f0f0]">
          <img
            className="w-full h-full object-cover"
            alt={testimonial.fullName}
            src={urlFor(testimonial?.image).width(300).url()}
          />
        </div>
        <div>
          <h5 className="font-medium font-lexend text-base">
            {testimonial.fullName}
          </h5>
          <p className="text-xs font-lexend text-gray font-medium">
            {moment(testimonial.date).format("ll")}
          </p>
        </div>
      </div>
      <div>
        <p className="subtext !text-sm">{testimonial.content}</p>
        <div className="flex-items-row !justify-start mt-5">
          {[...Array(testimonial.starRating)].map((_, index) => (
            <FaStar key={index} className="text-orange-400" />
          ))}
          {[...Array(5 - testimonial.starRating)].map((_, index) => (
            <FaStar key={index} className={clsx("text-[#d3d3d3]")} />
          ))}
        </div>
      </div>
    </div>
  );
};

function Testimonial() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const data = await sanityClient.fetch(`
          *[_type == "testimonial"]{
            _id,
            fullName,
            content,
            starRating,
            date,
            image{
            asset -> {
            _id,
            url
            },
            alt
            }
          }
        `);

        setTestimonials(data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  if (loading) {
    return null;
  }

  return (
    <>
      <div className=" container py-20 flex-itemx-col">
        <div className="flex-items-col">
          {/* <div className=" absolute z-[-1] w-full h-[50%] hidden lg:block lg:w-[20rem] lg:h-[20rem] bg-primary rounded-full lg:blur-[30rem] blur-[100rem]   "></div> */}
          <div className="text-center flex-items-col">
            <h3 className="subheading "> Testimonials</h3>
          </div>
          <h2 className=" text-5xl font-medium mt-2 text-center lg:text-start lg:text-5xl font-clash">
            Customer <br className="lg:hidden" /> Testimonials
          </h2>
          <p className="mt-5 subtext px-5 text-center ">
            TeeJay Motors offers the best travel experience. Our latest fleets
            have courteous,
          </p>
        </div>
      </div>
      <div className="w-screen flex flex-col gap-3 lg:hidden py-5 overflow-hidden mb-20 marquee px-4 h-[60vh] justify-center items-center relative">
        {testimonials.map((testimonial) => (
          <div key={testimonial._id} className="w-full flex-1">
            <TestimonialCard testimonial={testimonial} />
          </div>
        ))}
        <div className=" w-full absolute   bg-gradient-to-t top-0 from-transparent   to-white h-[50%]" />
        <div className=" w-full absolute  bottom-0 bg-gradient-to-b from-transparent   to-white h-[50%]" />
      </div>
      <div className="w-full flex-col   hidden lg:flex ">
        <Marquee pauseOnHover gradient autoFill>
          {testimonials.map((testimonial) => (
            <div
              key={testimonial._id}
              className="pb-2 pt-2 w-[400px] ml-3 flex-1"
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </Marquee>
        <Marquee gradient pauseOnHover direction="right" autoFill>
          {testimonials.map((testimonial) => (
            <div key={testimonial._id} className="pb-2 w-[400px] ml-3  flex-1 ">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </Marquee>
      </div>
    </>
  );
}

export default Testimonial;
