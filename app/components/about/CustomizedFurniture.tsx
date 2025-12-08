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
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80",
  },
  {
    id: "living",
    name: "Living Room",
    icon: <Sofa className="w-8 h-8" />,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80",
  },
  {
    id: "kitchen",
    name: "Kitchen",
    icon: <ChefHat className="w-8 h-8" />,
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1200&q=80",
  },
  {
    id: "office",
    name: "Office",
    icon: <Briefcase className="w-8 h-8" />,
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
  },
  {
    id: "bedroom",
    name: "Bed Room",
    icon: <Bed className="w-8 h-8" />,
    image:
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1200&q=80",
  },
  {
    id: "waiting",
    name: "Waiting Hall",
    icon: <Users className="w-8 h-8" />,
    image:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=1200&q=80",
  },
];

export default function CustomizedFurniture() {
  const [activeRoom, setActiveRoom] = useState<string>("dining");
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

            {/* Overlay Controls */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Fullscreen Button - Top Right */}
              <button
                className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded backdrop-blur-sm transition-colors z-10"
                aria-label="Fullscreen"
              >
                <Maximize2 className="w-5 h-5 text-white" />
              </button>

              {/* Screenshot Button - Bottom Left */}
              <button
                className="absolute bottom-4 left-4 px-4 py-2 bg-black/60 hover:bg-black/80 rounded backdrop-blur-sm text-white text-sm transition-colors z-10"
                aria-label="Screenshot"
              >
                <Camera className="w-4 h-4 inline-block mr-2" />
                Screenshot
              </button>
            </div>
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
