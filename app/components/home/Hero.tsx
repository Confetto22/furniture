"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
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
    <section className=" w-full md:bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1765208580/jcl-furniture/Home-2-banner-img-02_qklaad.webp')] bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1765208098/jcl-furniture/Home-2-banner-img-03_hqjhu4.webp')] bg-cover bg-center overflow-hidden">
      <div className="content bg-black/30 min-h-screen  flex items-center">
        <div className="max-w-4xl px-8  text-center text-white  w-full flex flex-col items-start justify-start text-left">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Timeless Elegance
          </h2>
          <h3 className="text-3xl md:text-4xl font-semibold mb-6 drop-shadow-md">
            Discover Furniture's For Living
          </h3>
          <p className="text-lg text-white/90 max-w-2xl mb-8 drop-shadow">
            Consectetur a erat nam at. Facilisis magna etiam tempor orci. Sem et
            tortor consequat id. Fermentum egestas tellus. Nunc eu hendrerit
            turpis. Fusce non lectus sem. In pellentesque nunc non Donec pretium
            gravida neque et placerat.
          </p>
          <button className="bg-white text-primary px-8 py-3 rounded hover:bg-white/90 transition-colors font-semibold shadow-lg">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}
