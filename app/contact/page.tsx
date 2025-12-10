import type { Metadata } from "next";
import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import ContactMap from "../components/contact/ContactMap";
import StructuredData from "../components/seo/StructuredData";

export const metadata: Metadata = {
  title:
    "Contact JCL Services - Office Furniture Showrooms in Kokomlemle & Accra Central",
  description:
    "Get in touch with JCL Services. Visit our showrooms in Kokomlemle and Accra Central, or contact us via phone, email. We're here to help with your office furniture needs.",
  openGraph: {
    title: "Contact JCL Services - Office Furniture Showrooms",
    description:
      "Visit our showrooms in Kokomlemle and Accra Central, or contact us via phone, email.",
    url: "https://jclservicesltd.org/contact",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact JCL Services - Office Furniture Showrooms",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact JCL Services - Office Furniture Showrooms",
    description:
      "Visit our showrooms in Kokomlemle and Accra Central, or contact us via phone, email.",
    images: ["/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://jclservicesltd.org/contact",
  },
};

export default function Contact() {
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
        name: "Contact",
        item: "https://jclservicesltd.org/contact",
      },
    ],
  };

  // LocalBusiness Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://jclservicesltd.org/#organization",
    name: "JCL Services Limited",
    image: "https://jclservicesltd.org/logo.png",
    telephone: "+233-302-244-515",
    email: "info@jclservices.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kokomlemle, just before the Circle overpass",
      addressLocality: "Kokomlemle",
      addressRegion: "Greater Accra",
      postalCode: "",
      addressCountry: "GH",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "5.7001375",
      longitude: "-0.2285781",
    },
    url: "https://jclservicesltd.org",
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
    ],
    areaServed: {
      "@type": "Country",
      name: "Ghana",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Office Furniture & Business Solutions",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Office Furniture",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Computer Accessories",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Stationery & Printing Materials",
          },
        },
      ],
    },
  };

  return (
    <section className="bg-brand-dark overflow-x-hidden">
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={localBusinessSchema} />
      <ContactHero />
      <ContactInfo />
      <div className="container mx-auto px-4 pb-16">
        <ContactForm />
      </div>
      <ContactMap />
    </section>
  );
}
