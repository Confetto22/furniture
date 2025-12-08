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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    image:
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&q=80",
  },
  {
    date: "MAY 27, 2024",
    author: "By Designer",
    title: "Elevate Your Home With Stylish Furniture's And Decors",
    excerpt:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
  },
  {
    date: "MAY 27, 2024",
    author: "By Designer",
    title: "The Ultimate Guide To Buying Luxury Furniture",
    excerpt:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
  },
];

export default function Blog() {
  return (
    <section className="bg-gray-900 py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12 md:mb-16 gap-6">
          <div>
            <div className="text-orange-500 text-sm font-semibold uppercase tracking-wider mb-2">
              GET THE LATEST NEWS
            </div>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Visit Our Blog
            </h2>
          </div>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-colors shadow-lg mx-auto sm:mx-0">
            <span className="font-semibold">View All Blogs</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden group cursor-pointer"
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
                  <span className="text-orange-500">{post.date}</span>
                  <span className="text-white/60"> - {post.author}</span>
                </p>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-white/60 text-sm md:text-base leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                {/* Read More Link */}
                <a
                  href="#"
                  className="text-white/60 hover:text-white underline text-sm transition-colors inline-block"
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
