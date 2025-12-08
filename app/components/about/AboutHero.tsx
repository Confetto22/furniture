"use client";

import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative w-full min-h-[40vh] overflow-hidden">
      <div className="bg-[url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&q=80')] bg-cover bg-center w-full min-h-[60vh] ">
        <div className="content min-h-[60vh] bg-brand-dark/80 flex flex-col items-center justify-center w-full h-full">
          {/* Main Title */}
          <h1
            className="text-5xl md:text-6xl lg:text-7xl text-brand-white mb-6 drop-shadow-lg"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            About Us
          </h1>

          {/* Breadcrumbs */}
          <div className="text-sm font-semibold md:text-base text-brand-white/90 font-light tracking-wide">
            <span className="hover:text-brand-white transition-colors cursor-pointer">
              Home
            </span>
            <span className="mx-2 text-brand-white/60">/</span>
            <span className="text-brand-white/70">About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
}
