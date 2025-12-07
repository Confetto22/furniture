"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Testimonial {
  name: string;
  location: string;
  text: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Andria Gora",
    location: "America",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident irure dolor in reprehende.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
  {
    name: "Simon Segar",
    location: "Germany",
    text: "Mauris pharetra et ultrices neque ornare aenean euismod elementum nisi. Malesuada fames ac turpis egestas sed tempus urna et.Nunc consequat interdum varius sit amet consectetur. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    name: "Sara Helmand",
    location: "France",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat eiusmod tempor incididunt ut.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Testimonial Time
          </h2>
          <h3 className="text-3xl md:text-4xl font-semibold mb-6 text-foreground/90">
            Our Customers Speak
          </h3>
        </div>

        <div className="max-w-6xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-secondary p-8 rounded-lg h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <div className="relative z-10">
                    <div className="mb-4 flex items-center gap-4">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-primary/20">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-foreground">
                          {testimonial.name}
                        </h4>
                        <p className="text-muted-foreground">{testimonial.location}</p>
                      </div>
                    </div>
                    <p className="text-foreground/80 leading-relaxed">
                      {testimonial.text}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

