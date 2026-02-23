// app/blog/page.tsx
import React from "react";
import { sanityClient } from "@/services/sanity/sanityClient";
import BlogPostCard from "@/components/shared/BlogPostCard"; // Import BlogPostCard
import Button from "@/components/ui/Button";

// GROQ query to fetch all blog posts
async function fetchPosts() {
  const query = `
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug {
        current
      },
      mainImage {
        asset -> {
          url
        }
      },
      publishedAt
    }
  `;
  return sanityClient.fetch(query);
}

interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage: { asset: { url: string } };
  publishedAt: string;
}

const BlogList = async () => {
  const posts: BlogPost[] = await fetchPosts();

  return (
    <div className="container flex flex-col pt-20 px-4 lg:px-20 pb-60 justify-center items-center">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-5 lg:max-w-7xl">
        {posts.map((post) => (
          <BlogPostCard
            key={post._id}
            title={post.title}
            slug={post.slug.current}
            imageUrl={post.mainImage?.asset?.url}
            publishedAt={post.publishedAt}
          />
        ))}
      </div>
      {/* <Button title="Load more" className="mt-20" /> */}
    </div>
  );
};

export default BlogList;
