"use client";

import {
  Briefcase,
  Printer,
  Computer,
  ShoppingCart,
  Wrench,
  Globe,
  Users,
} from "lucide-react";

interface Service {
  name: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    name: "Office Furniture",
    description: "Dealership in Computer, Accessories and Office Furniture",
    icon: <Briefcase className="w-8 h-8" />,
  },
  {
    name: "Stationery & Printing",
    description:
      "Dealership in Stationery and Printing Materials/Printing Press",
    icon: <Printer className="w-8 h-8" />,
  },
  {
    name: "Computer Accessories",
    description: "Complete range of computer accessories and equipment",
    icon: <Computer className="w-8 h-8" />,
  },
  {
    name: "Electronic Appliances",
    description: "Sales & Servicing of Electronic Appliances",
    icon: <ShoppingCart className="w-8 h-8" />,
  },
  {
    name: "Procurement & Supplies",
    description: "Procurement and Supplies of General Goods",
    icon: <Globe className="w-8 h-8" />,
  },
  {
    name: "Civil & Electrical Engineering",
    description: "Civil & Electrical Engineering, including Plumbing services",
    icon: <Wrench className="w-8 h-8" />,
  },
  {
    name: "Import & Export",
    description: "Import & Export of General Goods and Services",
    icon: <Globe className="w-8 h-8" />,
  },
  {
    name: "Manufacturers' Representatives",
    description: "Representing international manufacturers in Ghana",
    icon: <Users className="w-8 h-8" />,
  },
];

export default function Services() {
  return (
    <section className="bg-brand-dark py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="text-brand-gold text-sm font-semibold uppercase tracking-wider mb-3">
            WHAT WE OFFER
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Our Services
          </h2>
          <p className="text-brand-white/80 text-base md:text-lg max-w-2xl mx-auto mt-4">
            Comprehensive business solutions to meet all your office and
            workspace needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-brand-dark-light border border-brand-white/10 rounded-lg p-6 hover:border-brand-gold/40 transition-all shadow-md hover:shadow-lg group"
            >
              <div className="w-14 h-14 bg-brand-gold/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-gold/30 transition-colors">
                <div className="text-brand-gold">{service.icon}</div>
              </div>
              <h3 className="text-xl font-bold text-brand-white mb-2">
                {service.name}
              </h3>
              <p className="text-brand-white/70 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
