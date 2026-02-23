import { Metadata } from "next";
import { sanityClient, urlFor } from "@/services/sanity/sanityClient";
import moment from "moment";
import Image from "next/image";
import { toHTML } from "@portabletext/to-html";
import { unstable_noStore as noStore } from "next/cache";

const portableTextHTML = (body: any) =>
  toHTML(body, {
    components: {
      types: {
        image: ({ value }: { value: any }) => {
          const imageUrl = value?.asset
            ? urlFor(value.asset).width(500).url()
            : null;
          return imageUrl
            ? `<figure class="my-6">
                 <img src="${imageUrl}" alt="${
                value.alt || ""
              }" class="w-full rounded-lg" />
                 <figcaption class="text-sm text-gray-500 mt-2">${
                   value.caption || ""
                 }</figcaption>
               </figure>`
            : "";
        },
      },
    },
  });

// GROQ query to fetch the blog post by slug
async function fetchPost(slug: string) {
  noStore();
  const query = `
    *[_type == "post" && slug.current == $slug][0] {
      title,
      body,
      mainImage {
        asset -> {
          url
        }
      },
      publishedAt,
      excerpt,
      author-> {
        name
      }
    }
  `;
  return sanityClient.fetch(query, { slug });
}

type Props = {
  params: tParams;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await fetchPost(slug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  const ogImageUrl = post.mainImage?.asset?.url
    ? urlFor(post.mainImage.asset.url).width(1200).height(630).url()
    : "http://teejaymotors.com/opengraph-image.png?opengraph-image.ddb7db8d.png"; // Replace with your default OG image

  return {
    title: `${post.title} | Teejay Motors`,
    description: post.excerpt || `Read ${post.title} on Teejay Motors`,
    openGraph: {
      title: post.title,
      description: post.excerpt || `Read ${post.title} on Teejay Motors`,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author?.name],
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt || `Read ${post.title} on Teejay Motors`,
      images: [ogImageUrl],
    },
  };
}

type tParams = Promise<{ slug: string }>;

export default async function BlogPostPage({ params }: { params: tParams }) {
  const { slug } = await params;

  const post = await fetchPost(slug as string);

  if (!post) {
    return (
      <div className="flex h-screen items-center justify-center text-center">
        <h1 className="text-2xl font-bold">Post not found</h1>
      </div>
    );
  }

  return (
    <div className="bg-white w-full max-w-[90rem] font-lexend py-28 lg:py-32 lg:px-8">
      <div className="px-4">
        <h1 className="font-clash font-semibold text-2xl lg:text-5xl">
          {post.title}
        </h1>
        <div className="mt-3 flex items-center text-gray gap-x-2 text-xs lg:text-base text-gray-500">
          Published:
          <span>{moment(post.publishedAt).format("ll")}</span>
        </div>
      </div>

      {/* Post Image */}
      {post.mainImage && (
        <figure className="mt-5  aspect-video max-h-[700px] relative">
          <Image
            layout="fill"
            objectFit="cover"
            alt={post.title}
            src={urlFor(post.mainImage.asset.url).width(700).url()}
            className=" w-full lg:rounded-xl bg-gray-50 object-cover"
          />
        </figure>
      )}

      <main className="pb-16 px-4 w-full max-w-[100rem] text-sm lg:text-lg flex-1 lg:pb-24 prose antialiased">
        {/* Render Portable Text with embedded images */}
        <div
          dangerouslySetInnerHTML={{ __html: portableTextHTML(post.body) }}
        />
      </main>
    </div>
  );
}
