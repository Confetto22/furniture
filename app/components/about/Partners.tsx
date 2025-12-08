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
    name: "Brown Donkey",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
  },
  {
    name: "Balerie",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
  },
  {
    name: "Maskan",
    image:
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80",
  },
  {
    name: "Saltwater",
    image:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80",
  },
  {
    name: "Amishar",
    subtitle: "ALPHABET",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
];

export default function Partners() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-gray-900 py-16 w-full md:py-24">
      <div className=" w-full ">
        <div className="grid grid-cols-1 w-full sm:grid-cols-2 lg:grid-cols-5 gap-0">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="relative py-12 overflow-hidden border-r border-white/10 last:border-r-0 group cursor-pointer"
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
                  alt={partner.name}
                  fill
                  className="object-cover transition-transform duration-500"
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/70"></div>
              </div>

              {/* Default Dark Grey Background */}
              <div
                className={`absolute inset-0 bg-gray-800 transition-opacity duration-500 ease-in-out ${
                  hoveredIndex === index ? "opacity-0" : "opacity-100"
                }`}
              ></div>

              {/* Brand Name Content */}
              <div className="relative z-20 h-full flex flex-col items-center justify-center px-4 text-center transition-transform duration-300 group-hover:scale-105">
                {partner.name === "Brown Donkey" ? (
                  <div className="text-white">
                    <div
                      className="text-2xl md:text-3xl font-bold mb-1"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      Brown
                    </div>
                    <div
                      className="text-2xl md:text-3xl font-bold"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      Donkey
                    </div>
                  </div>
                ) : partner.name === "Maskan" ? (
                  <div className="text-white">
                    <div
                      className="text-3xl md:text-4xl font-bold relative inline-block"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {partner.name}
                      <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-white transform -skew-x-12"></span>
                    </div>
                  </div>
                ) : partner.name === "Amishar" ? (
                  <div className="text-white">
                    <div
                      className="text-3xl md:text-4xl font-bold mb-1"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {partner.name}
                    </div>
                    <div className="text-xs md:text-sm uppercase tracking-widest text-white/80">
                      {partner.subtitle}
                    </div>
                  </div>
                ) : (
                  <div
                    className="text-white text-3xl md:text-4xl font-bold"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {partner.name}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
