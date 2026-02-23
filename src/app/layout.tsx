import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { DM_Sans, Lexend } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import SmoothScrolling from "@/components/SmoothScrolling";
import Footer from "@/components/shared/Footer";
import "react-photo-album/masonry.css";
import WhatsappFAB from "@/components/shared/WhatsappFAB";

const clashDisplay = localFont({
  src: "./fonts/ClashDisplay.ttf",
  variable: "--font-clash",
  weight: "100 900",
});
const quicksand = DM_Sans({
  variable: "--font-quicksand",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Teejay Motors | City Transports and Charter Services",
  description:
    "TeeJay Motors handle City Transports, charter services. Professional, courteous, and friendly team providing reliable transportation solutions since 2001.",
  keywords: [
    "Teejay Motors",
    "high capacity buses",
    "transportation",
    "mobility",
    "bus booking",
  ],
  authors: [{ name: "Teejay Motors" }],
  creator: "Teejay Motors",
  publisher: "Teejay Motors",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.teejaymotors.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "es-ES": "/es-ES",
    },
  },
  openGraph: {
    title: "Teejay Motors | City Transports and Charter Services",
    description:
      "Effortless mobility reimagined—innovative, reliable, and designed to help you move freely and live fully.",
    url: "https://www.teejaymotors.com",
    siteName: "Teejay Motors",
    images: [
      {
        url: "https://www.teejaymotors.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Teejay Motors - High Capacity Buses",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Teejay Motors | City Transports and Charter Services",
    description:
      "Effortless mobility reimagined—innovative, reliable, and designed to help you move freely and live fully.",
    images: ["https://www.teejaymotors.com/twitter-image.jpg"],
    creator: "@teejaymotors",
    site: "https://www.teejaymotors.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/favicon-16x16.png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: "_3lbcmwHOqJOcrTteMqrbZSfHZxOC7wMHGckjYsD",
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
  },
  category: "transportation",
};

export const viewport: Viewport = {
  themeColor: "#e84342",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`${clashDisplay.variable} ${quicksand.variable} antialiased`}
      >
        {/* Clip paths */}

        {/* wo we  are clip */}

        <svg className="about-clippy">
          <defs>
            <clipPath id="clip-about" clipPathUnits={"objectBoundingBox"}>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.95 0C0.977614 0 1 0.0223858 1 0.05V0.818321C1 0.845935 0.977614 0.868321 0.95 0.868321H0.839063C0.811448 0.868321 0.789062 0.890706 0.789062 0.918321V0.95C0.789062 0.977614 0.766677 1 0.739062 1H0.0501443C0.0225301 1 0.000144303 0.977614 0.000144303 0.95V0.565267C0.000144303 0.537653 0.0225301 0.515267 0.0501443 0.515267V0.515267C0.0732259 0.515267 0.0919372 0.496556 0.0919372 0.473474V0.05C0.0919372 0.0223858 0.114323 0 0.141937 0H0.95Z"
                fill="black"
              />
            </clipPath>
          </defs>
        </svg>

        {/* <InfoBanner /> */}

        <Navbar />
        <SmoothScrolling>
          <div className="w-full flex-col justify-center  flex items-center">
            <main className="w-full max-w-7xl ">{children}</main>
          </div>
          <WhatsappFAB />
        </SmoothScrolling>
        <Footer />
      </body>
    </html>
  );
}
