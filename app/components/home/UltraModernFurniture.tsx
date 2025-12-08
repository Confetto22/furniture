"use client";

import { useState } from "react";
import Image from "next/image";
import { Sofa, Briefcase, Sprout } from "lucide-react";

interface Product {
  name: string;
  category: string;
  price: string;
  priceRange: string;
  image: string;
  hoverImage: string;
  filter: string;
}

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
}

const categories: Category[] = [
  {
    id: "home",
    name: "Home Decoration",
    icon: <Sofa className="w-5 h-5" />,
  },
  {
    id: "office",
    name: "Office Decoration",
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    id: "indoor",
    name: "Indoor Decoration",
    icon: <Sprout className="w-5 h-5" />,
  },
];

const products: Product[] = [
  {
    name: "Modern Ceramic Lamp",
    category: "HOME DECORATION",
    filter: "home",

    price: "$ 51.70",
    priceRange: "$ 58.50",
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&q=80",
  },
  {
    name: "Soft Seater Chair",
    category: "OFFICE DECORATION",
    filter: "office",
    price: "$ 108.95",
    priceRange: "$ 123.50",
    image:
      "https://res.cloudinary.com/dv9aqxptd/image/upload/v1765230728/jcl-furniture/jose-losada-DyFjxmHt3Es-unsplash_im6eue.jpg",
    hoverImage:
      "https://res.cloudinary.com/dv9aqxptd/image/upload/v1765228712/jcl-furniture/Picture35_zjxiu5.jpg",
  },
  {
    name: "Elegant Wooden Table",
    category: "HOME DECORATION, OUTDOOR DECORATION",
    filter: "office",
    price: "$ 88.20",
    priceRange: "$ 146.40",
    image:
    "https://res.cloudinary.com/dv9aqxptd/image/upload/v1765230725/jcl-furniture/still-life-office-chair-indoors_ydr8gm.jpg",
    hoverImage:
    "https://res.cloudinary.com/dv9aqxptd/image/upload/v1765228705/jcl-furniture/Picture3_is0q2u.png",
  },
  {
    name: "Round Wood Table",
    category: "HOME DECORATION",
    filter: "home",
    price: "$ 119.10",
    priceRange: "$ 123.75",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
];

export default function UltraModernFurniture() {
  const [activeCategory, setActiveCategory] = useState<string>("office");
  const displayProducts = products.filter(
    (product) => product.filter === activeCategory
  );

  return (
    <section className="bg-brand-dark py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="text-brand-gold text-sm font-semibold uppercase tracking-wider mb-3">
            FASHION-FORWARD
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Ultra-Modern Furniture&apos;s
          </h2>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 md:mb-16">
          {categories.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full flex items-center gap-3 transition-all ${
                  isActive
                    ? "bg-brand-gold text-brand-dark shadow-lg"
                    : "bg-brand-dark border border-brand-white/20 text-brand-white hover:border-brand-gold/40"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    isActive ? "bg-brand-dark/20" : "bg-brand-white/10"
                  }`}
                >
                  {category.icon}
                </div>
                <span className="font-medium">{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-3 ">
          {/* {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))} */}
          {displayProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: Product }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-full rounded-lg h-full overflow-hidden bg-brand-white border border-brand-dark-light group cursor-pointer transition-shadow"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative h-[300px] md:h-[350px] overflow-hidden">
        {/* Default Image */}
        <div
          className={` inset-0 transition-opacity duration-500 ${
            isHovered ? "opacity-0" : "opacity-100"
          }`}
        >
          <Image
            src={product.image}
            alt={product.name}
            priority
            loading="eager"
            fill
            className="object-cover"
          />
        </div>
        {/* Hover Image */}
        <div
          className={`inset-0 transition-opacity duration-500 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={product.hoverImage}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        {/* ON SALE Badge */}
        <div className="absolute top-4 right-4 bg-brand-gold text-brand-dark px-3 py-1 text-xs font-semibold rounded">
          ON SALE
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6 flex flex-col items-center h-fit overflow-hidden justify-center text-center">
        <p className="text-brand-gold text-[.7rem] uppercase tracking-wider mb-2 font-semibold">
          {product.category}
        </p>
        <h3 className="text-xl font-bold text-brand-dark mb-3">
          {product.name}
        </h3>
        <p className="text-brand-dark/70 text-base">
          {product.price} - {product.priceRange}
        </p>
      </div>
    </div>
  );
}
