"use client";
import React, { useEffect, useState } from "react";

import clsx from "clsx";
import { motion } from "framer-motion";
import { BiMinus, BiPlus } from "react-icons/bi";
import { sanityClient } from "@/services/sanity/sanityClient";

type FaqItem = {
  question: string;
  answer: string;
};

async function fetchFaq(): Promise<FaqItem[]> {
  const query = `
    *[_type == "faq"] | order(publishedAt desc) {
      question,
      answer
    }
  `;
  return await sanityClient.fetch(query);
}

function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [faq, setFaq] = useState<FaqItem[]>([]);

  const handleFetchFAQ = async () => {
    try {
      const myFaq = await fetchFaq();
      if (myFaq) {
        setFaq(myFaq);
      }
    } catch (err) {
      console.error("Error fetching FAQ:", err);
      setFaq([]);
    }
  };

  useEffect(() => {
    handleFetchFAQ();
  }, []);

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index); // Toggle the FAQ
  };

  return (
    <div className="px-4 py-40">
      <div className="text-center flex flex-col items-center">
        <h3 className="subheading">FAQ</h3>
        <h2 className="font-clash !text-3xl lg:!text-4xl font-medium">
          Frequently <br className="lg:hidden" /> Asked Questions
        </h2>
      </div>
      <div className="h-fit mt-5 relative flex flex-col justify-center items-center w-full">
        <div className="bg-[#f5f5f5] absolute p-2 h-[300px] lg:h-[200px] lg:rounded-2xl w-full max-w-5xl lg:top-0"></div>
        <div className="bg-white px-5 lg:p-10 shadow rounded-2xl mt-[10%] w-full lg:mt-[5%] relative max-w-4xl z-10">
          {faq.map((item, index) => (
            <div key={index} className="mb-5">
              <div
                className="flex items-center border-b border-b-slate-200 py-2 gap-5 cursor-pointer"
                onClick={() => handleToggle(index)}
              >
                <h3 className="font-lexend flex-1 text-md font-medium lg:text-lg">
                  {item.question}
                </h3>
                <button>
                  {expandedIndex === index ? (
                    <BiMinus className="text-xl" />
                  ) : (
                    <BiPlus className="text-xl" />
                  )}
                </button>
              </div>
              <motion.p
                initial={false}
                animate={{
                  height: expandedIndex === index ? "auto" : 0,
                  opacity: expandedIndex === index ? 1 : 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
                className={clsx(
                  "mt-4 text-sm font-lexend lg:text-base text-[#63676b] font-medium overflow-hidden",
                  expandedIndex === index
                    ? "h-auto opacity-100"
                    : "h-0 opacity-0"
                )}
              >
                {item.answer}
              </motion.p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
