"use client";

import Image from "next/image";

interface StatItem {
  value: string | number;
  label: string;
}

const stats: StatItem[] = [
  { value: "10K+", label: "Products Sold" },
  { value: 35, label: "Years Service" },
  { value: 450, label: "Outlets Worldwide" },
  { value: "1000+", label: "Satisfied Customers" },
];

export default function AboutStats() {
  return (
    <section className="relative w-full border border-white/10 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&q=80"
          alt="Modern interior background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-brand-dark/80"></div>

      {/* Content */}
      <div className="relative z-20  container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4   gap-0">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex py-12  flex-col items-center justify-center  px-4 border-r border-white/30 last:border-r-0"
            >
              {/* Number Value */}
              <div
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-white mb-3"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {stat.value}
              </div>

              {/* Description */}
              <div className="text-sm md:text-base text-brand-white/90 text-center font-light tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
