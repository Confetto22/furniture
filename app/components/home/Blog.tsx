"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface BlogPost {
  date: string;
  author: string;
  title: string;
  excerpt: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    date: "MAY 27, 2024",
    author: "By Designer",
    title: "The Modest Living Space Furnishings Ideas",
    excerpt:
      "Discover how to create a cozy and inviting living space without breaking the bank. Learn practical tips for selecting furniture that maximizes comfort while maintaining an elegant, minimalist aesthetic that reflects your personal style.",
    image:
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&q=80",
  },
  {
    date: "MAY 27, 2024",
    author: "By Designer",
    title: "Elevate Your Home With Stylish Furniture's And Decors",
    excerpt:
      "Transform your living spaces with our expert guide to selecting the perfect furniture and decor. From color coordination to space planning, we share insider secrets to creating a home that's both beautiful and functional.",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
  },
  {
    date: "MAY 27, 2024",
    author: "By Designer",
    title: "The Ultimate Guide To Buying Luxury Furniture",
    excerpt:
      "Navigate the world of luxury furniture with confidence. Our comprehensive guide covers everything from identifying quality craftsmanship to understanding materials, helping you make informed decisions for your premium furniture investments.",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
  },
];

export default function Blog() {
  return (
    <section className="bg-brand-dark-light py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12 md:mb-16 gap-6">
          <div>
            <div className="text-brand-gold text-sm font-semibold uppercase tracking-wider mb-2">
              GET THE LATEST NEWS
            </div>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-white"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Visit Our Blog
            </h2>
          </div>
          <button className="bg-brand-gold hover:bg-brand-gold/90 text-brand-dark px-6 py-3 rounded-full flex items-center gap-2 transition-colors shadow-lg mx-auto sm:mx-0 font-semibold">
            <span>View All Blogs</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-brand-dark border border-brand-white/10 rounded-lg overflow-hidden group cursor-pointer hover:border-brand-gold/30 transition-colors shadow-sm hover:shadow-md"
            >
              {/* Image Container */}
              <div className="relative h-[250px] md:h-[280px] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Metadata */}
                <p className="text-sm mb-3">
                  <span className="text-brand-gold font-semibold">
                    {post.date}
                  </span>
                  <span className="text-brand-white/60"> - {post.author}</span>
                </p>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-brand-white mb-3 leading-tight">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-brand-white/70 text-sm md:text-base leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                {/* Read More Link */}
                <a
                  href="#"
                  className="text-brand-gold hover:text-brand-gold/80 underline text-sm transition-colors inline-block font-medium"
                >
                  Read More
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
