import { urlFor } from "@/services/sanity/sanityClient";
import moment from "moment";
import Image from "next/image";
import React from "react";

type props = {
  title: string;
  imageUrl: string;
  slug: string;
  publishedAt: string;
};

function BlogPostCard({ title, slug, imageUrl, publishedAt }: props) {
  return (
    <figure className="w-full group bg-[#f5f5f5]  rounded-2xl   cursor-pointer  ">
      <a href={`/post/${slug}`}>
        <div className="w-full relative bg-[#f5f5f5] overflow-hidden rounded-2xl rounded-b-none h-[300px] lg:h-[350px]">
          <Image
            priority
            layout="fill"
            objectFit="cover"
            className="w-full group-hover:scale-110 duration-500 object-cover h-full "
            src={urlFor(imageUrl).width(800).url()}
            alt="article image"
          />
        </div>
        <div className="p-4 pt-0">
          <h3 className=" truncate  font-lexend  font-bold text-lg mt-2 lg:text-xl  pr-10">
            {title}
          </h3>
          <p></p>
          <p className="text-[#4e5358] mt-2 text-sm">
            {moment(publishedAt).format("ll")} • 7 min read
          </p>
        </div>
      </a>
    </figure>
  );
}

export default BlogPostCard;
