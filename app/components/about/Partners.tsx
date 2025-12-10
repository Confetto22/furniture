"use client";

import { useState } from "react";
import Image from "next/image";

interface Partner {
  name: string;
  subtitle?: string;
  image: string;
}

const partners: Partner[] = [
  {
    name: "Kouching Bvi Co. Ltd.",
    subtitle: "Taipei Hsien, Taiwan",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
  },
  {
    name: "Guangzhou Kuo Ching",
    subtitle: "Office Furniture Co. Ltd. China",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
  },
  {
    name: "Lopo Furniture Co. Ltd.",
    subtitle: "Guangzhou, China",
    image:
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80",
  },
];

export default function Partners() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-brand-dark py-16 w-full md:py-24">
      <div className=" w-full ">
        <div className="grid grid-cols-1 w-full sm:grid-cols-2 lg:grid-cols-3 gap-0">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="relative py-12 overflow-hidden border-r border-brand-white/10 last:border-r-0 group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Background Image - Only visible on hover */}
              <div
                className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                  hoveredIndex === index
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-105"
                }`}
              >
                <Image
                  src={partner.image}
                  alt={`${partner.name} - International partner of JCL Services for office furniture in Ghana`}
                  fill
                  className="object-cover transition-transform duration-500"
                  loading="lazy"
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-brand-dark/80"></div>
              </div>

              {/* Default Dark Background */}
              <div
                className={`absolute inset-0 bg-brand-dark-light transition-opacity duration-500 ease-in-out ${
                  hoveredIndex === index ? "opacity-0" : "opacity-100"
                }`}
              ></div>

              {/* Brand Name Content */}
              <div className="relative z-20 h-full flex flex-col items-center justify-center px-4 text-center transition-transform duration-300 group-hover:scale-105">
                <div className="text-brand-white">
                  <div
                    className="text-2xl md:text-3xl font-bold mb-2"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {partner.name}
                  </div>
                  {partner.subtitle && (
                    <div className="text-xs md:text-sm uppercase tracking-widest text-brand-white/80">
                      {partner.subtitle}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
