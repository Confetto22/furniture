"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Maximize2,
  RotateCw,
  Camera,
  UtensilsCrossed,
  Sofa,
  ChefHat,
  Briefcase,
  Bed,
  Users,
} from "lucide-react";

interface RoomCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  image: string;
}

const roomCategories: RoomCategory[] = [
  {
    id: "dining",
    name: "Dining Room",
    icon: <UtensilsCrossed className="w-8 h-8" />,
    image:
      "https://res.cloudinary.com/dxsom7jmx/image/upload/v1765294875/jcl/costa-live-bkLo8CIIAnM-unsplash_lu4wsi.webp",
  },
  {
    id: "living",
    name: "Living Room",
    icon: <Sofa className="w-8 h-8" />,
    image:
      "https://res.cloudinary.com/dxsom7jmx/image/upload/v1765295113/jcl/albero-furniture-bratislava-sJWyt9BHkB0-unsplash_iucfbl.webp",
  },
  {
    id: "kitchen",
    name: "Kitchen",
    icon: <ChefHat className="w-8 h-8" />,
    image:
      "https://res.cloudinary.com/dxsom7jmx/image/upload/v1765295695/jcl/mid-century-interior-design_eadtac.webp",
  },
  {
    id: "office",
    name: "Office",
    icon: <Briefcase className="w-8 h-8" />,
    image:
      "https://res.cloudinary.com/dxsom7jmx/image/upload/v1765282015/jcl/Screenshot_2025-12-09_at_11_50_54-Picsart-AiImageEnhancer_ttfwud.png",
  },
  {
    id: "bedroom",
    name: "Bed Room",
    icon: <Bed className="w-8 h-8" />,
    image:
      "https://res.cloudinary.com/dxsom7jmx/image/upload/v1765294988/jcl/albero-furniture-bratislava-u88zDvr5V6g-unsplash_hccvtr.webp",
  },
  {
    id: "waiting",
    name: "Waiting Hall",
    icon: <Users className="w-8 h-8" />,
    image:
      "https://res.cloudinary.com/dxsom7jmx/image/upload/v1765295527/jcl/luxury-interior-decor-with-natural-lighting-ambiance-generated-by-ai_qemnxw.webp",
  },
];

export default function CustomizedFurniture() {
  const [activeRoom, setActiveRoom] = useState<string>("office");
  const activeRoomData = roomCategories.find((room) => room.id === activeRoom);

  return (
    <section className="bg-brand-dark-light py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="text-brand-gold text-sm font-semibold uppercase tracking-wider mb-3">
            DIVERSE RANGE
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Customized Furniture&apos;s
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Furniture Viewer */}
          <div className="relative w-full rounded-lg overflow-hidden border border-brand-white/20 shadow-lg">
            {/* Background Image */}
            <Image
              src={activeRoomData?.image || roomCategories[0].image}
              alt={activeRoomData?.name || "Furniture view"}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right Column - Room Categories Grid */}
          <div className="grid grid-cols-2 gap-4 h-fit">
            {roomCategories.map((room) => {
              const isActive = room.id === activeRoom;
              return (
                <button
                  key={room.id}
                  onClick={() => setActiveRoom(room.id)}
                  className={`flex flex-col items-center justify-center p-6 rounded-lg border transition-all ${
                    isActive
                      ? "bg-brand-gold border-brand-gold text-brand-dark shadow-lg"
                      : "bg-brand-dark border-brand-white/20 text-brand-white hover:border-brand-gold/40 hover:bg-brand-dark/80"
                  }`}
                >
                  <div className="mb-3">{room.icon}</div>
                  <span className="text-sm md:text-base font-medium text-center">
                    {room.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
