"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./CustomerTestimonials.css";
import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  location: string;
  text: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Rossana Isabella",
    location: "China",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    rating: 4.5,
  },
  {
    name: "Sarah Johnson",
    location: "United States",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    rating: 5,
  },
  {
    name: "Michael Chen",
    location: "Singapore",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    rating: 4.5,
  },
];

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - Math.ceil(rating);

  return (
    <div className="flex items-center justify-center gap-1">
      {[...Array(fullStars)].map((_, i) => (
        <Star
          key={`full-${i}`}
          className="w-5 h-5 fill-orange-500 text-orange-500"
        />
      ))}
      {hasHalfStar && (
        <div className="relative w-5 h-5 flex-shrink-0">
          {/* Empty star background */}
          <Star className="w-5 h-5 text-gray-400 absolute inset-0" />
          {/* Half-filled star overlay */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: "50%" }}
          >
            <Star className="w-5 h-5 fill-orange-500 text-orange-500 absolute inset-0" />
          </div>
        </div>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} className="w-5 h-5 text-gray-400" />
      ))}
    </div>
  );
}

export default function CustomerTestimonials() {
  return (
    <section className="bg-gray-900 py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="text-orange-500 text-sm font-semibold uppercase tracking-wider mb-3">
            CUSTOMER NOTES
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Words From Our Customers
          </h2>
        </div>

        {/* Swiper Container */}
        <div className="max-w-6xl mx-auto relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={0}
            slidesPerView={1}
            navigation={{
              nextEl: ".customer-testimonials-next",
              prevEl: ".customer-testimonials-prev",
            }}
            loop={true}
            className="customer-testimonials-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="text-center px-4 md:px-8">
                  {/* Star Rating */}
                  <div className="mb-6">
                    <StarRating rating={testimonial.rating} />
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-white text-base md:text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
                    {testimonial.text}
                  </p>

                  {/* Customer Info */}
                  <div className="flex flex-col items-center">
                    <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4 ring-2 ring-white/20">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-white text-xl md:text-2xl font-semibold mb-1">
                      {testimonial.name}
                    </h3>
                    <p className="text-white/70 text-sm md:text-base">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button
            className="customer-testimonials-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center text-white hover:text-orange-500 transition-colors"
            aria-label="Previous testimonial"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            className="customer-testimonials-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center text-white hover:text-orange-500 transition-colors"
            aria-label="Next testimonial"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
