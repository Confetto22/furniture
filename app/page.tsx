import type { Metadata } from "next";
import Header from "./components/Header";
import Hero from "./components/home/Hero";
import Services from "./components/home/Services";
import Features from "./components/home/Features";
import HomeDecorHub from "./components/home/HomeDecorHub";
import ProductGrid from "./components/home/ProductGrid";
import ShopByCategory from "./components/home/ShopByCategory";
import UltraModernFurniture from "./components/home/UltraModernFurniture";
import FAQ from "./components/home/FAQ";
import WhyChooseUs from "./components/home/WhyChooseUs";
import InnovativeFurniture from "./components/home/InnovativeFurniture";
import Testimonials from "./components/home/Testimonials";
import Blog from "./components/home/Blog";
import Footer from "./components/Footer";
import CustomizedFurniture from "./components/about/CustomizedFurniture";
import CustomerTestimonials from "./components/about/CustomerTestimonials";
import { Check } from "lucide-react";
import Image from "next/image";
import ArtOfCoziness from "./components/home/ArtOfCoziness";
import { motion } from "framer-motion";
import Alternate from "./components/common/alternate";
import StructuredData from "./components/seo/StructuredData";

export const metadata: Metadata = {
  title:
    "Premium Office Furniture & Workspace Solutions in Ghana | JCL Services",
  description:
    "JCL Services offers quality office furniture, computer accessories, and workspace solutions in Ghana. 5-year warranty, competitive prices. Established 1993. Visit our showrooms in Kokomlemle & Accra Central.",
  openGraph: {
    title: "Premium Office Furniture & Workspace Solutions in Ghana",
    description:
      "Transform your workspace with our premium office furniture collection. Quality office furniture at affordable prices, backed by a 5-year warranty.",
    url: "https://jclservicesltd.org",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "JCL Services - Premium Office Furniture Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Office Furniture & Workspace Solutions in Ghana",
    description:
      "Transform your workspace with our premium office furniture collection. Quality office furniture at affordable prices, backed by a 5-year warranty.",
    images: ["/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://jclservicesltd.org",
  },
};

export default function Home() {
  // BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://jclservicesltd.org",
      },
    ],
  };

  return (
    <div className="overflow-x-hidden">
      <StructuredData data={breadcrumbSchema} />
      {/* <Header /> */}
      <Hero />

      <Alternate />
      <Services />
      {/* <Features /> */}
      <WhyChooseUs />
      <ArtOfCoziness />
      {/* <HomeDecorHub /> */}
      {/* <ProductGrid /> */}
      <UltraModernFurniture />
      <CustomizedFurniture />
      <ShopByCategory />
      <FAQ />
      {/* <InnovativeFurniture /> */}
      {/* <Testimonials /> */}
      <CustomerTestimonials />
      <Blog />
      {/* <Footer /> */}
    </div>
  );
}
