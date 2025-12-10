"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// const heroSlides = [
//   {
//     title: "Timeless Elegance",
//     subtitle: "Discover Furniture's For Living",
//     description:
//       "Consectetur a erat nam at. Facilisis magna etiam tempor orci. Sem et tortor consequat id. Fermentum egestas tellus. Nunc eu hendrerit turpis. Fusce non lectus sem. In pellentesque nunc non Donec pretium gravida neque et placerat.",
//     image:
//       "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&q=80",
//   },
//   {
//     title: "Smart Solution",
//     subtitle: "Enjoy With Style & Comfort",
//     description:
//       "Feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam. Aliquam ut porttitor leo a diam sollicitudin. Nam at lectus urna duis convallis. At urna condimentum pretium lectus pretium lectus quam mattis pellentesque id nibh tortor id.",
//     image:
//       "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1920&q=80",
//   },
//   {
//     title: "Create Memories",
//     subtitle: "Embrace The Beauty Of Furniture's",
//     description:
//       "Ut placerat orci nulla pellentesque posuere lorem ipsum dolor. A condimentum vitae sapien pellentesque habitant morbi tristique senectus. Faucibus turpis in eu mi pellentesque posuere bibendum neque egestas. Maecenas accumsan lacus vel facilisis volutpat.",
//     image:
//       "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=1920&q=80",
//   },
// ];

export default function Hero() {
  return (
    <section className="w-full md:bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1765208580/jcl-furniture/Home-2-banner-img-02_qklaad.webp')] bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1765208098/jcl-furniture/Home-2-banner-img-03_hqjhu4.webp')] bg-cover bg-center overflow-hidden">
      <div className="content bg-brand-dark/70 min-h-screen flex items-center">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl text-white">
            <motion.h3
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              exit={{ opacity: 0, y: -30, filter: "blur(5px)" }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: "easeOut",
              }}
              className="text-brand-gold text-sm font-semibold uppercase tracking-wider mb-4"
            >
              30+ YEARS OF EXCELLENCE
            </motion.h3>
            <motion.h1
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              exit={{ opacity: 0, y: -30, filter: "blur(5px)" }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: "easeOut",
              }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Professional Office
              <br />
              Furniture Solutions
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, x: 30, filter: "blur(8px)" }}
              whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              exit={{ opacity: 0, x: -30, filter: "blur(5px)" }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: "easeOut",
              }}
              className="md:text-lg text-white/90 max-w-2xl mb-8 drop-shadow leading-relaxed"
            >
              Transform your workspace with our premium office furniture
              collection. Quality office furniture at affordable prices, backed
              by a 5-year warranty - the longest in Ghana. Experience
              exceptional service and craftsmanship that has served businesses
              for over three decades.
            </motion.h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/about"
                className="bg-brand-gold text-brand-dark px-8 py-4 rounded-lg hover:bg-brand-gold/90 transition-colors font-semibold shadow-lg text-center"
                aria-label="Learn more about JCL Services 30+ years of experience in office furniture"
              >
                Learn More About Our 30+ Years Experience
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-brand-gold text-brand-gold px-8 py-4 rounded-lg hover:bg-brand-gold/10 transition-colors font-semibold text-center"
                aria-label="Contact JCL Services for office furniture solutions"
              >
                Contact JCL Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
