"use client";

import { useState } from "react";
import {
  Wrench,
  Hammer,
  Drill,
  Zap,
  Scissors,
  // Mixer,
  // Tile,
  // Compress,
  Shovel,
  ChevronDown,
  ChevronUp,
  Plus,
} from "lucide-react";

interface EquipmentCategory {
  name: string;
  items: string[];
  icon: React.ReactNode;
}

const equipmentCategories: EquipmentCategory[] = [
  {
    name: "Earthmoving Equipment",
    items: [
      "Mini excavators",
      "Motor graders for lifting and leveling soil and other materials",
    ],
    icon: <Shovel className="w-6 h-6" />,
  },
  {
    name: "Demolition Tools",
    items: [
      "Jackhammers",
      "Hammer drills",
      "Concrete saws for breaking or drilling through concrete and solid surfaces",
    ],
    icon: <Hammer className="w-6 h-6" />,
  },
  {
    name: "Finishing Tools",
    items: [
      "Trowels",
      "Compactors",
      "Blowers used to smooth, polish, or clean surfaces",
    ],
    icon: <Wrench className="w-6 h-6" />,
  },
  {
    name: "Generators and Power Tools",
    items: [
      "Generators for onsite power supply",
      "Drills",
      "Saws",
      "Sanders for various construction tasks",
    ],
    icon: <Zap className="w-6 h-6" />,
  },
  {
    name: "Cutting and Crimping Tools",
    items: ["Wire cutters", "Shears", "Crimping tools for cable and pipe work"],
    icon: <Scissors className="w-6 h-6" />,
  },
  {
    name: "Concrete Mixers",
    items: ["Small portable mixers for preparing concrete on-site"],
    icon: <Plus className="w-6 h-6" />,
  },
  {
    name: "Tile Cutters",
    items: ["For accurately sizing and shaping tiles"],
    icon: <Plus className="w-6 h-6" />,
  },
  {
    name: "Compactors",
    items: ["Used to compress soil or other construction materials"],
    icon: <Plus className="w-6 h-6" />,
  },
  {
    name: "General Tools",
    items: [
      "Shovels",
      "Pick-axes",
      "Wheelbarrows",
      "Water pumps to support day-to-day operations",
    ],
    icon: <Drill className="w-6 h-6" />,
  },
];

export default function EquipmentCapabilities() {
  const [expandedCategory, setExpandedCategory] = useState<number | null>(0);

  const toggleCategory = (index: number) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };

  return (
    <section className="bg-brand-dark-light py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="text-brand-gold text-sm font-semibold uppercase tracking-wider mb-3">
            OUR CAPABILITIES
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Equipment & Capabilities
          </h2>
          <p className="text-brand-white/80 text-base md:text-lg max-w-3xl mx-auto mt-4">
            JCL Services Ltd. is fully equipped to execute a wide range of
            construction and renovation projects with efficiency and precision.
            Our inventory includes both light and compact equipment, enabling us
            to handle tasks of varying scale and complexity.
          </p>
        </div>

        {/* Equipment Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {equipmentCategories.map((category, index) => (
            <div
              key={index}
              className="bg-brand-dark border border-brand-white/10 rounded-lg overflow-hidden hover:border-brand-gold/40 transition-all cursor-pointer"
              onClick={() => toggleCategory(index)}
            >
              <div className="p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-gold/20 rounded-lg flex items-center justify-center">
                    <div className="text-brand-gold">{category.icon}</div>
                  </div>
                  <h3 className="text-lg font-bold text-brand-white">
                    {category.name}
                  </h3>
                </div>
                {expandedCategory === index ? (
                  <ChevronUp className="w-5 h-5 text-brand-gold" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-brand-white/50" />
                )}
              </div>

              {expandedCategory === index && (
                <div className="px-6 pb-6 border-t border-brand-white/10 pt-4">
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="text-brand-white/70 text-sm flex items-start gap-2"
                      >
                        <span className="text-brand-gold mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Partnership Note */}
        <div className="bg-brand-dark border border-brand-gold/20 rounded-lg p-6 text-center">
          <p className="text-brand-white/80 text-base md:text-lg">
            For specialized or heavy-duty machinery not currently within our
            holding, JCL Services Ltd. maintains a strategic partnership with{" "}
            <span className="text-brand-gold font-semibold">
              Peelers Construction Rentals in Tema
            </span>
            , ensuring timely access to all necessary equipment to meet project
            requirements.
          </p>
        </div>
      </div>
    </section>
  );
}
