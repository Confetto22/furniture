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
    question: "What warranty do you offer on office furniture?",
    answer:
      "We offer a 5-year warranty on our office furniture - the longest warranty period available on the Ghanaian market. This demonstrates our confidence in the quality and durability of our products. Our numerous customers, both single buyers and companies, attest to the exceptional durability of our furniture.",
  },
  {
    question: "What are your payment terms?",
    answer:
      "Our payment terms have no equal on the local market. We always see from the viewpoint of our customers and deal fairly with them. Our prices are most competitive and almost always negotiable. We work with you to find payment solutions that fit your budget and timeline.",
  },
  {
    question: "Do you offer custom office furniture designs?",
    answer:
      "Yes, we design and manufacture general goods and services to customer specifications. On the local market, we create custom solutions tailored to your exact requirements. A typical example is when JCL Services manufactured Wooden Pallets for COCOBOD when we won the contract to supply.",
  },
  {
    question: "Do you supply office equipment and accessories?",
    answer:
      "Absolutely! We provide dealership in computers, accessories, and office furniture. Our office equipment and supplies are all high specs models, and the furniture are quality incarnate but are affordably priced for every pocket in Ghana. We also offer stationery, printing materials, and electronic appliances.",
  },
  {
    question: "Can you handle large commercial orders?",
    answer:
      "Yes, we handle projects of all sizes. Whether you're furnishing a single office or an entire commercial building, we have the capacity and experience to meet your needs. We've successfully completed projects for various companies and institutions across Ghana, including large-scale contracts like the COCOBOD project.",
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
        <div className="grid grid-cols-1 lg:grid-cols-2 flex-row-reverse gap-8 lg:gap-12">
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
          <div className="relative order-first">
            {/* Main Image */}
            <div className="relative w-full h-full max-h-[600px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://res.cloudinary.com/dxsom7jmx/image/upload/v1765282630/jcl/image_1024_egukhs.jpg"
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
