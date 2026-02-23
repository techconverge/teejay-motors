export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TransportationService",
    name: "Teejay Motors",
    description:
      "TeeJay Motors handle City Transports, all your group charter services.",
    foundingDate: "2001-07",
    areaServed: "Nigeria",
    url: "https://www.teejaymotors.com",
    sameAs: [
      "https://www.facebook.com/teejaymotors",
      "https://www.twitter.com/teejaymotors",
      "https://www.instagram.com/teejaymotors",
      "https://www.linkedin.com/company/teejaymotors",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "Nigeria",
    },
    offers: {
      "@type": "Offer",
      description: "City Transports and group charter services",
    },
    // Internal pages should be structured as subpages
    mainEntityOfPage: [
      {
        "@type": "WebPage",
        "@id": "https://www.teejaymotors.com/about",
        name: "About Us",
        description: "Learn about our history, mission, and values",
      },
      {
        "@type": "WebPage",
        "@id": "https://www.teejaymotors.com/services",
        name: "Our Services",
        description: "Explore our transportation services",
      },
      {
        "@type": "WebPage",
        "@id": "https://www.teejaymotors.com/contact",
        name: "Contact Us",
        description: "Get in touch with TeeJay Motors",
      },
      {
        "@type": "WebPage",
        "@id": "https://www.teejaymotors.com/our-buses",
        name: "Our Buses",
        description: "Book medium and high quality buses",
      },
      {
        "@type": "WebPage",
        "@id": "https://www.teejaymotors.com/our-routes",
        name: "Our Routes",
        description: "Find TeeJay Motors service locations",
      },
      {
        "@type": "WebPage",
        "@id": "https://www.teejaymotors.com/gallery",
        name: "Gallery",
        description: "Discover Teejay Motors awesome gallery",
      },
      {
        "@type": "WebPage",
        "@id": "https://www.teejaymotors.com/blog",
        name: "Blog",
        description: "Explore our latest articles",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
