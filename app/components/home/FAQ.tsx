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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    question: "Do you have eco-friendly furniture?",
    answer:
      "Ultrices dui sapien eget mi. Quam viverra orci sagittis eu volutpat odio. Bibendum neque egestas congue quisque egestas diam in arcu cursus. A pellentesque sit amet porttitor. Aliquet lectus proin nibh nisl condimentum id.",
  },
  {
    question: "Is it possible to follow the delivery of my furniture?",
    answer:
      "Fermentum dui faucibus in ornare quam viverra orci sagittis eu. Dui ut ornare lectus sit amet. Morbi leo urna molestie at elementum eu facilisis sed. Eu mi bibendum neque egestas congue quisque.",
  },
  {
    question: "Do you offer design consultations?",
    answer:
      "Purus non enim praesent elementum facilisis leo vel fringilla. Pharetra diam sit amet nisl suscipit. Gravida cum sociis natoque penatibus et magnis dis parturient montes.",
  },
  {
    question: "Are custom orders accepted for furniture that isn't in stock?",
    answer:
      "Hac habitasse platea dictumst quisque sagittis purus sit. Ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat.",
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
    <section className="bg-gray-900 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Panel - FAQ Section */}
          <div className="space-y-6">
            {/* Header */}
            <div className="mb-8">
              <div className="text-orange-500 text-sm font-semibold uppercase tracking-wider mb-3">
                PRODUCT RELATED QUERIES
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white">
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
                  className="border-b border-white/10"
                >
                  <AccordionTrigger className="text-left py-4 hover:no-underline group [&[data-state=open]>span]:text-orange-500 [&[data-state=open]>svg]:text-orange-500 [&[data-state=open]>svg]:rotate-180">
                    <span className="flex-1 text-white transition-colors font-semibold text-base md:text-lg">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/60 leading-relaxed pt-2 pb-4 text-sm md:text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Right Panel - Visual Section */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative w-full h-full  rounded-lg overflow-hidden">
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
