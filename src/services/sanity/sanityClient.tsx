import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

// Configure the Sanity client
export const sanityClient = createClient({
  projectId: "j8ob8coe", // Replace with your project ID
  dataset: "production", // Replace with your dataset name (e.g., 'production')
  apiVersion: "2024-12-02", // Use a recent date (YYYY-MM-DD)
  useCdn: true, // `true` if you want to use the edge cache
});

// Set up the image URL builder
const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source: SanityImageSource) => builder.image(source);
