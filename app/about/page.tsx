import type { Metadata } from "next";
import AboutHero from "../components/about/AboutHero";
import AboutStats from "../components/about/AboutStats";
import CustomizedFurniture from "../components/about/CustomizedFurniture";
import SpecialTeam from "../components/about/SpecialTeam";
import CustomerTestimonials from "../components/about/CustomerTestimonials";
import Partners from "../components/about/Partners";
import Newsletter from "../components/about/Newsletter";
import VisionMission from "../components/about/VisionMission";
import Representation from "../components/about/Representation";
import EquipmentCapabilities from "../components/about/EquipmentCapabilities";
import OfficeLocations from "../components/about/OfficeLocations";
import Image from "next/image";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import AboutAlternate from "../components/about/AboutAlternate";
import StructuredData from "../components/seo/StructuredData";

export const metadata: Metadata = {
  title:
    "About JCL Services - 30+ Years of Excellence in Office Furniture & Business Solutions",
  description:
    "Learn about JCL Services Limited - established 1993, incorporated 2010. Leading provider of office furniture, stationery, computer accessories, and business services in Ghana. Meet our team and discover our story.",
  openGraph: {
    title: "About JCL Services - 30+ Years of Excellence",
    description:
      "Established 1993, incorporated 2010. Leading provider of office furniture and business services in Ghana.",
    url: "https://jclservicesltd.org/about",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "About JCL Services - 30+ Years of Excellence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About JCL Services - 30+ Years of Excellence",
    description:
      "Established 1993, incorporated 2010. Leading provider of office furniture and business services in Ghana.",
    images: ["/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://jclservicesltd.org/about",
  },
};

const About = () => {
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
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: "https://jclservicesltd.org/about",
      },
    ],
  };

  return (
    <section className="overflow-x-hidden">
      <StructuredData data={breadcrumbSchema} />
      <AboutHero />

      {/* <AboutContent /> */}
      <AboutAlternate />
      <VisionMission />
      {/* <CustomizedFurniture /> */}
      <AboutStats />
      {/* <CustomizedFurniture /> */}
      <SpecialTeam />
      {/* <CustomerTestimonials /> */}
      <Partners />
      <Representation />
      {/* <EquipmentCapabilities /> */}
      <OfficeLocations />
      <Newsletter />
    </section>
  );
};

export default About;
