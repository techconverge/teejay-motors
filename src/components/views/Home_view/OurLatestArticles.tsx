"use client";
import React, { useEffect, useState } from "react";
import BlogPostCard from "@/components/shared/BlogPostCard";
import Button from "@/components/ui/Button";
import { FaArrowRight } from "react-icons/fa";
import { sanityClient } from "@/services/sanity/sanityClient";

type blogType = {
  _id: string;
  title: string;
  mainImage: {
    asset: {
      url: string;
    };
  };
  slug: {
    current: string;
  };
  publishedAt: string;
};

const fetchLatestArticles = async () => {
  const query = `*[_type == "post"] | order(publishedAt desc)[0...3] {
    _id,
    title,
    slug,
    mainImage {
      asset -> {
        _id,
        url
      },
      alt
    },
    publishedAt
  }`;

  try {
    const data = await sanityClient.fetch(query);
    return data;
  } catch (error) {
    console.error("Error fetching latest articles:", error);
    return [];
  }
};

function OurLatestArticles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const data = await fetchLatestArticles();
      setArticles(data);
    };

    getArticles();
  }, []);

  return (
    <div className="lg:px-10 px-4 my-20 lg:mb-10 lg:mt-20 flex flex-col justify-center items-center">
      <div className="flex flex-col w-full lg:justify-between lg:flex-row lg:items-end justify-center lg:max-w-7xl 2xl:max-w-[90rem] items-center">
        <div>
          <h3 className="subheading lg:text-start">Our Blog</h3>
          <h2 className="text-3xl mt-2 font-clash lg:text-4xl text-center lg:text-start font-medium">
            Explore Our <br className="lg:hidden" /> Latest Articles
          </h2>
        </div>
        <div className="mt-8 md:mt-0">
          <a href="/blog">
            <Button
              variant="light"
              iconRight={<FaArrowRight className="ml-3 md:ml-5" />}
              title="View All"
            />
          </a>
        </div>
      </div>

      <div className="mt-10  bg-white rounded-[20px]  lg:grid-cols-3 grid-cols-1 grid w-full  lg:max-w-7xl gap-2 lg:!gap-5">
        {articles.map((article: blogType) => (
          <BlogPostCard
            key={article._id}
            title={article.title}
            imageUrl={article.mainImage?.asset?.url}
            slug={article.slug.current}
            publishedAt={article.publishedAt}
          />
        ))}
      </div>
    </div>
  );
}

export default OurLatestArticles;
