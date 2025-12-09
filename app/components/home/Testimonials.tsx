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
    name: "Kwame Asante",
    location: "Accra, Ghana",
    text: "JCL Services has been our trusted partner for office furniture for over 5 years. Their 5-year warranty gives us confidence, and the quality of their office furniture is exceptional. We've furnished our entire office building with their products, and everything has held up perfectly. Their competitive pricing and excellent customer service make them our go-to supplier.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    name: "Ama Mensah",
    location: "Kumasi, Ghana",
    text: "As a business owner, I needed office furniture that would last. JCL Services delivered exactly that. The quality is outstanding, and their prices are very competitive. What impressed me most was their willingness to negotiate and work within our budget. The 5-year warranty is unmatched in Ghana, and their after-sales support has been excellent.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
  {
    name: "Kofi Adjei",
    location: "Tema, Ghana",
    text: "We've been working with JCL Services for our office equipment needs for the past 3 years. Their range of office furniture, computers, and accessories is comprehensive. The delivery was always on time, and their team is professional. The durability of their furniture is remarkable - we haven't had any issues. Highly recommend them to any business in Ghana.",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
  },
  {
    name: "Akosua Boateng",
    location: "Accra, Ghana",
    text: "JCL Services transformed our workspace with their premium office furniture. The quality is evident in every piece, and their custom design service helped us create exactly what we needed. Their 30+ years of experience shows in their professionalism and product knowledge. The 5-year warranty gives us peace of mind, and their prices are very reasonable.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
  {
    name: "Yaw Owusu",
    location: "Takoradi, Ghana",
    text: "I've purchased office furniture from JCL Services for multiple projects, and I'm always satisfied. Their products are quality incarnate as they claim - durable, well-crafted, and affordably priced. The team is knowledgeable and helps you find the right solutions for your needs. Their payment terms are flexible, which helps with cash flow management.",
    avatar:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=80",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-brand-dark-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="text-brand-gold text-sm font-semibold uppercase tracking-wider mb-3">
            CUSTOMER STORIES
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-brand-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            What Our Customers Say
          </h2>
          <p className="text-brand-white/80 text-base md:text-lg max-w-2xl mx-auto">
            Trusted by businesses across Ghana for over 30 years
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
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
                <div className="bg-brand-dark border border-brand-white/10 p-8 rounded-lg h-full relative overflow-hidden hover:border-brand-gold/40 transition-all shadow-md">
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
                      <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-brand-gold/30">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-brand-white">
                          {testimonial.name}
                        </h4>
                        <p className="text-brand-gold text-sm font-medium">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                    <p className="text-brand-white/80 leading-relaxed">
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
