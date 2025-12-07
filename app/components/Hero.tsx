"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const heroSlides = [
  {
    title: "Timeless Elegance",
    subtitle: "Discover Furniture's For Living",
    description:
      "Consectetur a erat nam at. Facilisis magna etiam tempor orci. Sem et tortor consequat id. Fermentum egestas tellus. Nunc eu hendrerit turpis. Fusce non lectus sem. In pellentesque nunc non Donec pretium gravida neque et placerat.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&q=80",
  },
  {
    title: "Smart Solution",
    subtitle: "Enjoy With Style & Comfort",
    description:
      "Feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam. Aliquam ut porttitor leo a diam sollicitudin. Nam at lectus urna duis convallis. At urna condimentum pretium lectus pretium lectus quam mattis pellentesque id nibh tortor id.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1920&q=80",
  },
  {
    title: "Create Memories",
    subtitle: "Embrace The Beauty Of Furniture's",
    description:
      "Ut placerat orci nulla pellentesque posuere lorem ipsum dolor. A condimentum vitae sapien pellentesque habitant morbi tristique senectus. Faucibus turpis in eu mi pellentesque posuere bibendum neque egestas. Maecenas accumsan lacus vel facilisis volutpat.",
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=1920&q=80",
  },
];

export default function Hero() {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="hero-swiper h-full"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index} className="relative h-full">
            <div className="absolute inset-0 z-0">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/60"></div>
            </div>
            <div className="relative z-10 h-full flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center text-white">
                  <h2 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                    {slide.title}
                  </h2>
                  <h3 className="text-3xl md:text-4xl font-semibold mb-6 drop-shadow-md">
                    {slide.subtitle}
                  </h3>
                  <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto drop-shadow">
                    {slide.description}
                  </p>
                  <button className="bg-white text-primary px-8 py-3 rounded hover:bg-white/90 transition-colors font-semibold shadow-lg">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

