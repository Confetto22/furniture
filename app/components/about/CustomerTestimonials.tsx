"use client";

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
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Kwame Asante",
    location: "Accra, Ghana",
    text: "JCL Services has been our trusted partner for office furniture for over 5 years. Their 5-year warranty gives us confidence, and the quality of their office furniture is exceptional. We've furnished our entire office building with their products, and everything has held up perfectly. Their competitive pricing and excellent customer service make them our go-to supplier.",
    rating: 5,
  },
  {
    name: "Ama Mensah",
    location: "Kumasi, Ghana",
    text: "As a business owner, I needed office furniture that would last. JCL Services delivered exactly that. The quality is outstanding, and their prices are very competitive. What impressed me most was their willingness to negotiate and work within our budget. The 5-year warranty is unmatched in Ghana, and their after-sales support has been excellent.",
    rating: 5,
  },
  {
    name: "Kofi Adjei",
    location: "Tema, Ghana",
    text: "We've been working with JCL Services for our office equipment needs for the past 3 years. Their range of office furniture, computers, and accessories is comprehensive. The delivery was always on time, and their team is professional. The durability of their furniture is remarkable - we haven't had any issues. Highly recommend them to any business in Ghana.",
    rating: 5,
  },
  {
    name: "Akosua Boateng",
    location: "Accra, Ghana",
    text: "JCL Services transformed our workspace with their premium office furniture. The quality is evident in every piece, and their custom design service helped us create exactly what we needed. Their 30+ years of experience shows in their professionalism and product knowledge. The 5-year warranty gives us peace of mind, and their prices are very reasonable.",
    rating: 4.5,
  },
  {
    name: "Yaw Owusu",
    location: "Takoradi, Ghana",
    text: "I've purchased office furniture from JCL Services for multiple projects, and I'm always satisfied. Their products are quality incarnate as they claim - durable, well-crafted, and affordably priced. The team is knowledgeable and helps you find the right solutions for your needs. Their payment terms are flexible, which helps with cash flow management.",
    rating: 5,
  },
];

// Helper function to get initials from name
function getInitials(name: string): string {
  const parts = name.trim().split(" ");
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return name.substring(0, 2).toUpperCase();
}

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - Math.ceil(rating);

  return (
    <div className="flex items-center justify-center gap-1">
      {[...Array(fullStars)].map((_, i) => (
        <Star
          key={`full-${i}`}
          className="w-5 h-5 fill-brand-gold text-brand-gold"
        />
      ))}
      {hasHalfStar && (
        <div className="relative w-5 h-5 flex-shrink-0">
          {/* Empty star background */}
          <Star className="w-5 h-5 text-brand-white/30 absolute inset-0" />
          {/* Half-filled star overlay */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: "50%" }}
          >
            <Star className="w-5 h-5 fill-brand-gold text-brand-gold absolute inset-0" />
          </div>
        </div>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} className="w-5 h-5 text-brand-white/30" />
      ))}
    </div>
  );
}

export default function CustomerTestimonials() {
  return (
    <section className="bg-brand-dark py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="text-brand-gold text-sm font-semibold uppercase tracking-wider mb-3">
            CUSTOMER NOTES
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-white mb-8"
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
                  <p className="text-brand-white text-base md:text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
                    {testimonial.text}
                  </p>

                  {/* Customer Info */}
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full bg-brand-gold flex items-center justify-center mb-4 ring-2 ring-brand-gold/30 shadow-lg">
                      <span className="text-brand-dark text-2xl font-bold">
                        {getInitials(testimonial.name)}
                      </span>
                    </div>
                    <h3 className="text-brand-white text-xl md:text-2xl font-semibold mb-1">
                      {testimonial.name}
                    </h3>
                    <p className="text-brand-gold text-sm md:text-base font-medium">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button
            className="customer-testimonials-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center text-brand-white hover:text-brand-gold transition-colors"
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
            className="customer-testimonials-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center text-brand-white hover:text-brand-gold transition-colors"
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
