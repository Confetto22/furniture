"use client";

import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "For furniture purchases, do you have financing options?",
    answer:
      "Dolor sit amet consectetur adipiscing. Elit duis tristique sollicitudin nibh sit amet. Ultrices eros in cursus turpis. Ultricies tristique nulla aliquet enim tortor at auctor urna nunc.Volutpat diam ut venenatis tellus. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet.",
  },
  {
    question: "Do you have eco-friendly furniture?",
    answer:
      "Ultrices dui sapien eget mi. Quam viverra orci sagittis eu volutpat odio. Bibendum neque egestas congue quisque egestas diam in arcu cursus. A pellentesque sit amet porttitor. Aliquet lectus proin nibh nisl condimentum id.Ridiculus mus mauris vitae ultricies leo integer.",
  },
  {
    question: "Is it possible to follow the delivery of my furniture?",
    answer:
      "Fermentum dui faucibus in ornare quam viverra orci sagittis eu. Dui ut ornare lectus sit amet. Morbi leo urna molestie at elementum eu facilisis sed. Eu mi bibendum neque egestas congue quisque. Non odio euismod lacinia at quis risus sed vulputate odio.",
  },
  {
    question: "Do you offer design consultations?",
    answer:
      "Purus non enim praesent elementum facilisis leo vel fringilla. Pharetra diam sit amet nisl suscipit. Gravida cum sociis natoque penatibus et magnis dis parturient montes. Feugiat pretium nibh ipsum consequat nisl vel pretium lectus quamPurus faucibus ornare suspendisse.",
  },
  {
    question: "Are custom orders accepted for furniture that isn't in stock?",
    answer:
      "Hac habitasse platea dictumst quisque sagittis purus sit. Ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in.",
  },
];

export default function FAQ() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1920&q=80"
          alt="Background pattern"
          fill
          className="object-cover"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Products & Service
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            Product related queries
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-border"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            "Kitchen",
            "Living room",
            "Bed room",
            "Office room",
            "Bars",
            "Lounges",
            "Hospitals",
          ].map((room, index) => (
            <div
              key={index}
              className="bg-secondary p-4 rounded text-center hover:bg-accent transition-colors cursor-pointer"
            >
              <span className="text-foreground font-medium">{room}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

