"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ChevronDown,
  ChevronUp,
  Sofa,
  Bed,
  Briefcase,
  ChefHat,
  Wine,
  Armchair,
  Stethoscope,
} from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "For furniture purchases, do you have financing options?",
    answer:
      "Yes, we offer flexible financing options to make your dream furniture purchases more accessible. We partner with trusted financial institutions to provide competitive rates and convenient payment plans. You can apply for financing during checkout, and our team will guide you through the process. Terms and eligibility vary based on purchase amount and credit history.",
  },
  {
    question: "Do you have eco-friendly furniture?",
    answer:
      "Absolutely! We are committed to sustainability and offer an extensive collection of eco-friendly furniture. Our green collection features pieces made from sustainably sourced wood, recycled materials, and low-VOC finishes. All our eco-friendly products are clearly labeled, and we provide detailed information about their environmental impact and certifications.",
  },
  {
    question: "Is it possible to follow the delivery of my furniture?",
    answer:
      "Yes, you can track your furniture delivery in real-time. Once your order is confirmed, you'll receive a tracking number via email and SMS. You can monitor your shipment's progress through our online tracking system or mobile app. We'll also send you notifications at key stages: when your order ships, when it's out for delivery, and when it arrives.",
  },
  {
    question: "Do you offer design consultations?",
    answer:
      "We offer complimentary design consultations with our experienced interior design specialists. Whether you're furnishing a single room or an entire home, our designers can help you create cohesive, beautiful spaces. Consultations are available in-store, via video call, or through our online design tool. Book your consultation through our website or by contacting our customer service team.",
  },
  {
    question: "Are custom orders accepted for furniture that isn't in stock?",
    answer:
      "Yes, we accept custom orders for furniture that isn't currently in stock or for pieces with specific modifications. Our custom furniture service allows you to choose materials, finishes, dimensions, and design details to match your exact requirements. Custom orders typically take 6-12 weeks for completion. Contact our sales team to discuss your custom furniture needs and receive a detailed quote.",
  },
];

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
}

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState<string>("kitchen");

  return (
    <section className="bg-brand-dark-light py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Panel - FAQ Section */}
          <div className="space-y-6">
            {/* Header */}
            <div className="mb-8">
              <div className="text-brand-gold text-sm font-semibold uppercase tracking-wider mb-3">
                PRODUCT RELATED QUERIES
              </div>
              <h2
                className="text-4xl md:text-5xl font-bold text-brand-white"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Products & Service
              </h2>
            </div>

            {/* FAQ Accordion */}
            <Accordion
              type="single"
              collapsible
              defaultValue="item-0"
              className="w-full"
            >
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-brand-white/10"
                >
                  <AccordionTrigger className="text-left py-4 hover:no-underline group [&[data-state=open]>span]:text-brand-gold [&[data-state=open]>svg]:text-brand-gold [&[data-state=open]>svg]:rotate-180">
                    <span className="flex-1 text-brand-white transition-colors font-semibold text-base md:text-lg">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-brand-white/70 leading-relaxed pt-2 pb-4 text-sm md:text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Right Panel - Visual Section */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1200&q=80"
                alt="Modern bedroom"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
