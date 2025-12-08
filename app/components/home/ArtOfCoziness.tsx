"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface CategoryCard {
  name: string;
  priceRange: string;
  image: string;
  isLarge?: boolean;
}

const categories: CategoryCard[] = [
  {
    name: "Office",
    priceRange: "$22.99",
    image:
      "https://res.cloudinary.com/dv9aqxptd/image/upload/v1765230718/jcl-furniture/mid-century-interior-design_oyoqwn.jpg",
    isLarge: true,
  },
  {
    name: "Kitchen",
    priceRange: "$28.99",
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1200&q=80",
  },
  {
    name: "Living Room",
    priceRange: "$22.99",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80",
  },
  {
    name: "Study Room",
    priceRange: "$35.99",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
  },
];

export default function ArtOfCoziness() {
  return (
    <section className="bg-brand-dark-light py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12 md:mb-16 gap-6">
          <div className="text-center sm:text-left">
            <div className="text-brand-gold text-sm font-semibold uppercase tracking-wider mb-2">
              UNLOCKING THE SECRET
            </div>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-white"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Art Of Coziness
            </h2>
          </div>
          <button className="bg-brand-gold hover:bg-brand-gold/90 text-brand-dark px-6 py-3 rounded-full flex items-center gap-2 transition-colors shadow-lg mx-auto sm:mx-0 font-semibold">
            <span>Discover More</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-6">
          {/* Large Card - Living Room (Left Column) */}
          <div className="">
            <CategoryCard
              name={categories[0].name}
              priceRange={categories[0].priceRange}
              image={categories[0].image}
              isLarge={true}
            />
          </div>

          {/* Smaller Cards - Right Column */}
          <div className="flex flex-col gap-6">
            {categories.slice(1, 2).map((category, index) => (
              <div key={index} className="h-[200px] md:h-[240px] lg:h-[250px]">
                <CategoryCard
                  name={category.name}
                  priceRange={category.priceRange}
                  image={category.image}
                  isLarge={false}
                />
              </div>
            ))}
            {/* 2 cards */}
            <div className="grid grid-cols-2 gap-6">
              {categories.slice(2).map((category, index) => (
                <div
                  key={index}
                  className="h-[200px] md:h-[240px] lg:h-[250px]"
                >
                  <CategoryCard
                    name={category.name}
                    priceRange={category.priceRange}
                    image={category.image}
                    isLarge={false}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* 2 cards */}
          {/* <div className="flex flex-col gap-6">
            {categories.slice(2).map((category, index) => (
              <div key={index} className="h-[200px] md:h-[240px] lg:h-[250px]">
                <CategoryCard
                  name={category.name}
                  priceRange={category.priceRange}
                  image={category.image}
                  isLarge={false}
                />
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}

function CategoryCard({
  name,
  priceRange,
  image,
  isLarge = false,
}: CategoryCard) {
  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden cursor-pointer group">
      {/* Image Container with Overflow Hidden */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
      </div>

      {/* Text Overlay - Bottom Left Corner */}
      <div className="absolute cover bottom-0 left-0 p-6 md:p-8 z-10">
        <h3
          className={`font-bold text-brand-white mb-1 ${
            isLarge
              ? "text-3xl md:text-4xl lg:text-5xl"
              : "text-2xl md:text-3xl"
          }`}
        >
          {name}
        </h3>
        <p className="text-brand-white/80 text-sm md:text-base">
          Starting from {priceRange}
        </p>
      </div>
    </div>
  );
}
