import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Playfair_Display,
  Marcellus,
} from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StructuredData from "./components/seo/StructuredData";
import { ArrowUp } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});
const marcellus = Marcellus({
  variable: "--font-marcellus",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jclservicesltd.org"),
  title: {
    default:
      "JCL Services - Premium Office Furniture & Workspace Solutions in Ghana",
    template: "%s | JCL Services",
  },
  description:
    "JCL Services offers quality office furniture, computer accessories, and workspace solutions in Ghana. 5-year warranty, competitive prices. Established 1993. Visit our showrooms in Kokomlemle & Accra Central.",
  keywords: [
    "office furniture Ghana",
    "workspace solutions",
    "office equipment Ghana",
    "JCL Services",
    "office furniture Accra",
    "business furniture Ghana",
  ],
  authors: [{ name: "JCL Services Limited" }],
  creator: "JCL Services Limited",
  publisher: "JCL Services Limited",
  openGraph: {
    type: "website",
    locale: "en_GH",
    url: "https://jclservicesltd.org",
    siteName: "JCL Services",
    title:
      "JCL Services - Premium Office Furniture & Workspace Solutions in Ghana",
    description:
      "Quality office furniture, computer accessories, and workspace solutions in Ghana. 5-year warranty, competitive prices. Established 1993.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "JCL Services - Office Furniture Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JCL Services - Premium Office Furniture & Workspace Solutions",
    description:
      "Quality office furniture, computer accessories, and workspace solutions in Ghana.",
    images: ["/twitter-image.jpg"],
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
  alternates: {
    canonical: "https://jclservicesltd.org",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "JCL Services Limited",
    alternateName: "JCL Services",
    url: "https://jclservicesltd.org",
    logo: "https://jclservicesltd.org/logo.png",
    foundingDate: "1993",
    foundingLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Accra",
        addressCountry: "GH",
      },
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+233-302-244-515",
      contactType: "Customer Service",
      email: "info@jclservices.com",
    },
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "Kokomlemle, just before the Circle overpass",
        addressLocality: "Kokomlemle",
        addressRegion: "Greater Accra",
        addressCountry: "GH",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "Swanzy Shopping Arcade",
        addressLocality: "Accra Central",
        addressRegion: "Greater Accra",
        addressCountry: "GH",
      },
    ],
    sameAs: [
      "https://www.instagram.com/jclservices.gh/",
      "https://wa.me/233558598598",
    ],
  };

  // WebSite Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "JCL Services",
    url: "https://jclservicesltd.org",
    publisher: {
      "@type": "Organization",
      name: "JCL Services Limited",
    },
  };

  return (
    <html lang="en-GH">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} ${marcellus.variable} antialiased`}
      >
        <StructuredData data={organizationSchema} />
        <StructuredData data={websiteSchema} />
        <Header />

        {children}
        <Footer />
        {/* Scroll to Top Button */}
        <button
          className="size-16 bg-[#4eca5c] rounded-full flex items-center justify-center hover:bg-[#1b6123] transition-colors group fixed bottom-6 left-3 text-white cursor-pointer"
          aria-label="Scroll to top"
        >
          <FaWhatsapp size={34} />
        </button>
      </body>
    </html>
  );
}
