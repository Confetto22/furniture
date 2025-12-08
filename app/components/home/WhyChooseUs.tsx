"use client";

import {
  Shield,
  DollarSign,
  Clock,
  Award,
  Users,
  CheckCircle,
} from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    title: "5-Year Warranty",
    description:
      "The longest warranty period available on the Ghanaian market, demonstrating our confidence in product quality and durability.",
    icon: <Shield className="w-8 h-8" />,
  },
  {
    title: "Competitive Pricing",
    description:
      "Our prices are most competitive and almost always negotiable. We see from the viewpoint of our customers and deal fairly.",
    icon: <DollarSign className="w-8 h-8" />,
  },
  {
    title: "30+ Years Experience",
    description:
      "Three decades of expertise in providing quality office furniture and business services across Ghana.",
    icon: <Award className="w-8 h-8" />,
  },
  {
    title: "Customer-First Approach",
    description:
      "We put customers' desire and satisfaction first, meeting specifications at affordable prices with timely delivery.",
    icon: <Users className="w-8 h-8" />,
  },
  {
    title: "Timely Delivery",
    description:
      "We understand the importance of meeting deadlines and deliver within the customer's time frame.",
    icon: <Clock className="w-8 h-8" />,
  },
  {
    title: "After-Sales Support",
    description:
      "Comprehensive after-sales follow-ups to ensure your complete satisfaction with our products and services.",
    icon: <CheckCircle className="w-8 h-8" />,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-brand-dark-light py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="text-brand-gold text-sm font-semibold uppercase tracking-wider mb-3">
            WHY CHOOSE US
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            What Sets Us Apart
          </h2>
          <p className="text-brand-white/80 text-base md:text-lg max-w-2xl mx-auto mt-4">
            Our commitment to quality, affordability, and customer satisfaction
            makes us the preferred choice for office furniture and business
            solutions
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-brand-dark border border-brand-white/10 rounded-lg p-6 lg:p-8 hover:border-brand-gold/40 transition-all shadow-md hover:shadow-lg"
            >
              <div className="w-14 h-14 bg-brand-gold/20 rounded-lg flex items-center justify-center mb-4">
                <div className="text-brand-gold">{feature.icon}</div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-brand-white mb-3">
                {feature.title}
              </h3>
              <p className="text-brand-white/70 text-sm md:text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
