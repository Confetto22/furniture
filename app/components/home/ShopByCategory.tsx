"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface Category {
  id: number;
  number: string;
  name: string;
  image: string;
  title: string;
  itemCount: number;
  description: string;
}

const categories: Category[] = [
  {
    id: 1,
    number: "01",
    name: "Living Room",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80",
    title: "Trending Design",
    itemCount: 125,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
  {
    id: 2,
    number: "02",
    name: "Bedroom",
    image:
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1200&q=80",
    title: "Comfort & Style",
    itemCount: 98,
    description:
      "Create your perfect sanctuary with our curated bedroom collection. From elegant bed frames to cozy accessories, transform your space into a haven of relaxation and style.",
  },
  {
    id: 3,
    number: "03",
    name: "Home Office",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
    title: "Trending Design",
    itemCount: 87,
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: 4,
    number: "04",
    name: "Dining Room",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80",
    title: "Elegant Dining",
    itemCount: 112,
    description:
      "Elevate your dining experience with our sophisticated collection. From modern tables to comfortable chairs, create memorable moments around beautifully crafted furniture.",
  },
  {
    id: 5,
    number: "05",
    name: "Kitchen Room",
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1200&q=80",
    title: "Modern Kitchen",
    itemCount: 145,
    description:
      "Transform your kitchen into a culinary masterpiece. Our collection combines functionality with style, offering everything you need for a beautiful and efficient cooking space.",
  },
  {
    id: 6,
    number: "06",
    name: "Balcony Furniture",
    image:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=1200&q=80",
    title: "Outdoor Living",
    itemCount: 76,
    description:
      "Extend your living space outdoors with our weather-resistant balcony furniture. Perfect for creating cozy outdoor retreats where you can relax and enjoy the fresh air.",
  },
];

export default function ShopByCategory() {
  const [hoveredCategory, setHoveredCategory] = useState<Category | null>(
    categories[2]
  ); // Default to Home Office

  const activeCategory = hoveredCategory || categories[2];

  return (
    <section className="bg-gray-900 py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="text-orange-500 text-sm font-semibold uppercase tracking-wider mb-3">
            ONE-STOP SHOP
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Shop By Category
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr]  gap-10 lg:gap-12">
          {/* Left Column - Categories List */}
          <div className="space-y-3 py-6 ">
            {categories.map((category) => {
              const isHovered = hoveredCategory?.id === category.id;
              return (
                <div
                  key={category.id}
                  className="relative py-6 border-b border-white/10 last:border-b-0 cursor-pointer group"
                  onMouseEnter={() => setHoveredCategory(category)}
                >
                  <div className="flex items-center justify-between">
                    {/* Number and Name */}
                    <div className="flex items-center gap-4">
                      <span
                        className={`text-gray-400 transition-all duration-300 ${
                          isHovered
                            ? "text-white text-2xl font-bold scale-110"
                            : "text-sm"
                        }`}
                      >
                        {category.number}
                      </span>
                      <span
                        className={`text-white text-xl transition-all duration-300 ${
                          isHovered
                            ? "text-xl md:text-2xl font-bold scale-105"
                            : "text-base md:text-lg"
                        }`}
                      >
                        {category.name}
                      </span>
                    </div>

                    {/* Arrow Icon */}
                    <ArrowUpRight
                      className={`text-gray-400 transition-all duration-300 ${
                        isHovered ? "text-white scale-110" : ""
                      }`}
                      size={20}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column - Category Preview */}
          <div className="relative w-full aspect-[9/10] rounded-lg overflow-hidden">
            {/* Background Image */}
            <Image
              src={activeCategory.image}
              alt={activeCategory.name}
              fill
              className="object-cover transition-opacity duration-500"
              priority
            />

            {/* Overlay Card */}
            <div className="absolute bottom-4 left-4 right-4 py-4 rounded-lg px-3 md:p-8 bg-black/70 backdrop-blur-sm">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                <h3 className="text-xl font-bold text-white">
                  {activeCategory.title}
                </h3>
                <div className="bg-orange-500 px-4 py-2 rounded-full inline-block w-fit">
                  <span className="text-white text-sm font-semibold">
                    {activeCategory.itemCount} Items
                  </span>
                </div>
              </div>
              <p className="text-white/70 text-sm md:text-sm leading-relaxed max-w-2xl">
                {activeCategory.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
