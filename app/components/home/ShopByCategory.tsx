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
    title: "Modern Living Spaces",
    itemCount: 125,
    description:
      "Transform your living room into a sanctuary of comfort and style. Our collection features contemporary designs that blend functionality with aesthetic appeal, perfect for creating inviting spaces where memories are made.",
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
      "Create your perfect sanctuary with our curated bedroom collection. From elegant bed frames to cozy accessories, transform your space into a haven of relaxation and style. Each piece is designed to promote restful sleep and peaceful mornings.",
  },
  {
    id: 3,
    number: "03",
    name: "Home Office",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
    title: "Productive Workspaces",
    itemCount: 87,
    description:
      "Design a home office that inspires productivity and creativity. Our ergonomic furniture solutions combine comfort with professional aesthetics, helping you create a workspace that enhances both focus and well-being.",
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
      "Elevate your dining experience with our sophisticated collection. From modern tables to comfortable chairs, create memorable moments around beautifully crafted furniture. Perfect for hosting gatherings and enjoying meals with loved ones.",
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
      "Transform your kitchen into a culinary masterpiece. Our collection combines functionality with style, offering everything you need for a beautiful and efficient cooking space. From storage solutions to dining sets, we have it all.",
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
      "Extend your living space outdoors with our weather-resistant balcony furniture. Perfect for creating cozy outdoor retreats where you can relax and enjoy the fresh air. Built to withstand the elements while maintaining elegance.",
  },
];

export default function ShopByCategory() {
  const [hoveredCategory, setHoveredCategory] = useState<Category | null>(
    categories[2]
  ); // Default to Home Office

  const activeCategory = hoveredCategory || categories[2];

  return (
    <section className="bg-brand-dark py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="text-brand-gold text-sm font-semibold uppercase tracking-wider mb-3">
            ONE-STOP SHOP
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-white"
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
                  className="relative py-6 border-b border-brand-white/10 last:border-b-0 cursor-pointer group"
                  onMouseEnter={() => setHoveredCategory(category)}
                >
                  <div className="flex items-center justify-between">
                    {/* Number and Name */}
                    <div className="flex items-center gap-4">
                      <span
                        className={`text-brand-white/50 transition-all duration-300 ${
                          isHovered
                            ? "text-brand-gold text-2xl font-bold scale-110"
                            : "text-sm"
                        }`}
                      >
                        {category.number}
                      </span>
                      <span
                        className={`text-brand-white text-xl transition-all duration-300 ${
                          isHovered
                            ? "text-xl md:text-2xl font-bold scale-105 text-brand-gold"
                            : "text-base md:text-lg"
                        }`}
                      >
                        {category.name}
                      </span>
                    </div>

                    {/* Arrow Icon */}
                    <ArrowUpRight
                      className={`text-brand-white/50 transition-all duration-300 ${
                        isHovered ? "text-brand-gold scale-110" : ""
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
            <div className="absolute bottom-4 left-4 right-4 py-4 rounded-lg px-3 md:p-8 bg-brand-dark/90 backdrop-blur-sm border border-brand-gold/20">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                <h3 className="text-xl font-bold text-brand-white">
                  {activeCategory.title}
                </h3>
                <div className="bg-brand-gold px-4 py-2 rounded-full inline-block w-fit">
                  <span className="text-brand-dark text-sm font-semibold">
                    {activeCategory.itemCount} Items
                  </span>
                </div>
              </div>
              <p className="text-brand-white/80 text-sm md:text-base leading-relaxed max-w-2xl">
                {activeCategory.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
