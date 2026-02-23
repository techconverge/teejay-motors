"use client";

import React, { useState, useEffect } from "react";
import { ColumnsPhotoAlbum, MasonryPhotoAlbum, Photo } from "react-photo-album";
import { BarLoader } from "react-spinners";
import axios, { AxiosResponse } from "axios";

// Types for API responses
interface UploadcareFile {
  original_file_url: string;
  id: string;
  image_info: {
    width?: number;
    height?: number;
  };
}

interface UploadcareResponse {
  results: UploadcareFile[];
  next: string | null;
}

// Define photo type with key for React
interface PhotoWithKey extends Photo {
  key: string;
}

const API_BASE_URL = "https://api.uploadcare.com/files/";
const PUBLIC_KEY = "5ac477f29ac0e037bc05";
const SECRET_KEY = "f4c0a83558bb1fea0ef5";

const PortfolioGallery: React.FC = () => {
  const [photos, setPhotos] = useState<PhotoWithKey[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);
  const [nextPage, setNextPage] = useState<string | null>(null);

  /**
   * Helper function to get an optimized image URL using Uploadcare's transformation syntax.
   * @param url - Original file URL from Uploadcare.
   * @param width - Desired image width.
   * @param height - Desired image height.
   * @returns Optimized image URL.
   */
  const extractFileId = (url: string): string | null => {
    console.log(url);
    const match = url.match(/ucarecdn\.com\/([^/]+)/); // Extract file ID
    return match ? match[1] : null;
  };

  const getOptimizedImageUrl = (
    url: string,
    width: number,
    height: number
  ): string => {
    const fileId = extractFileId(url);
    if (!fileId) {
      console.error("Invalid URL, unable to extract file ID:", url);
      return url; // Return original URL as a fallback
    }
    return `https://ucarecdn.com/${fileId}/-/preview/${width}x${height}/`;
  };

  // Example usage in fetchImages
  const fetchImages = async (url: string = API_BASE_URL): Promise<void> => {
    try {
      if (url === API_BASE_URL) setLoading(true);
      else setLoadingMore(true);

      const response: AxiosResponse<UploadcareResponse> = await axios.get(url, {
        headers: {
          Authorization: `Uploadcare.Simple ${PUBLIC_KEY}:${SECRET_KEY}`,
        },
        params: { limit: 20 },
      });

      const files = response.data.results;

      console.log(files[0]);

      const newPhotos: PhotoWithKey[] = files.map((file) => ({
        src: getOptimizedImageUrl(file.original_file_url, 552, 552), // Optimized URL
        width: file?.image_info.width as number,
        height: file?.image_info.height as number,
        key: file.id,
      }));

      setPhotos((prev) => [...prev, ...newPhotos]);
      setNextPage(response.data.next);
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  // Fetch initial images on component mount
  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="w-full flex py-10 flex-col justify-center items-center">
      {/* Loading Indicator */}
      {loading && <BarLoader />}

      {/* Photo Gallery */}
      {!loading && photos.length > 0 ? (
        <section className="w-full px-3 lg:px-0 max-w-6xl">
          <MasonryPhotoAlbum
            photos={photos}
            breakpoints={[
              480, // Mobile: 2 columns
              768, // Tablet: 3 columns
              1024, // Desktop: 4 columns
            ]}
            spacing={8}
          />
        </section>
      ) : (
        !loading && <p>No images found.</p>
      )}

      {/* Load More Button */}
      {nextPage && !loadingMore && (
        <button
          onClick={() => fetchImages(nextPage)}
          className="mt-5 px-4 py-2 bg-primary rounded-full text-white  hover:bg-blue-600"
        >
          Load More
        </button>
      )}

      {/* Loading Indicator for Pagination */}
      {loadingMore && <BarLoader />}
    </div>
  );
};

export default PortfolioGallery;
