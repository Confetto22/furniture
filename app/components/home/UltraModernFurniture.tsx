"use client";

import { useState } from "react";
import Image from "next/image";
import { Sofa, Briefcase, Sprout } from "lucide-react";
import { products, type Product } from "../common/products";

// interface Category {
//   id: string;
//   name: string;
//   icon: React.ReactNode;
// }

// const categories: Category[] = [
//   {
//     id: "home",
//     name: "Home Decoration",
//     icon: <Sofa className="w-5 h-5" />,
//   },
//   {
//     id: "office",
//     name: "Office Decoration",
//     icon: <Briefcase className="w-5 h-5" />,
//   },
//   {
//     id: "indoor",
//     name: "Indoor Decoration",
//     icon: <Sprout className="w-5 h-5" />,
//   },
// ];

export default function UltraModernFurniture() {
  // const [activeCategory, setActiveCategory] = useState<string>("office");
  // const displayProducts = products.filter(
  //   (product) => product.filter === activeCategory
  // );

  return (
    <section className="bg-brand-dark py-16 md:py-24">
      <div className=" mx-auto px-4 lg:px-10 xl:px-16">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="text-brand-gold text-sm font-semibold uppercase tracking-wider mb-3">
            FASHION-FORWARD
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Ultra-Modern Furniture
          </h2>
        </div>

        {/* Category Navigation */}
        {/* <div className="flex flex-wrap justify-center gap-4 mb-12 md:mb-16">
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
        </div> */}

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center xl:grid-cols-4 gap-3 ">
          {/* {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))} */}
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: Product }) {
  // const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-full h-full max-w-[450px] max-h-[550px] rounded-lg overflow-hidden bg-brand-white border border-brand-dark-light group cursor-pointer transition-shadow flex flex-col"
      // onMouseEnter={() => setIsHovered(true)}
      // onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative w-full h-full max-w-[450px] overflow-hidden flex-1">
        {/* Default Image */}
        <div className={` inset-0 transition-opacity duration-500 `}>
          <Image
            src={product.image}
            alt={`${product.name}  office furniture from JCL Services Ghana, priced from ${product.price}`}
            priority
            loading="eager"
            width={500}
            height={500}
            className="object-cover object-top md:object-cover md:object-center h-full w-full group-hover:scale-105 transition-all duration-300 ease-in"
          />
        </div>

        {/* ON SALE Badge */}
        <div className="absolute top-4 right-4 bg-brand-gold text-brand-dark px-3 py-1 text-xs font-semibold rounded">
          ON SALE
        </div>
      </div>

      {/* Product Info */}
      <div className="px-3 py-6 flex flex-col items-center justify-center text-center mt-auto">
        <h3 className="text-[1.1rem] capitalize font-bold text-brand-dark mb-3">
          {product.name}
        </h3>
        <p className="text-brand-dark/70 text-base">
          {product.price} - {product.priceRange}
        </p>
      </div>
    </div>
  );
}
