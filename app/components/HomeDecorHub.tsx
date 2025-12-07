"use client";

import Image from "next/image";

export default function HomeDecorHub() {
  const categories = [
    "Sofa",
    "Cabinet",
    "Shelving Units",
    "Tea Table",
    "Decors",
    "Office Table",
    "Storage Furniture",
    "Kitchen Furniture",
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <Image
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&q=80"
          alt="Background pattern"
          fill
          className="object-cover"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Home Decor Hub
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground/90">
            Exceptional Furniture&apos;s For Indoor & Outdoor
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Ut eleifend mattis ligula, porta finibus urna gravida at. Aenean
            vehicula sodales arcu non mattis. Integer dapibus ac dui pretium
            blandit. Class aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80"
              alt="Furniture showcase"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="text-2xl font-semibold mb-4 text-foreground">
              Discover Endless Designs
            </h4>
            <p className="text-muted-foreground mb-6">
              Integer dapibus ac dui pretium blandit. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Ut eleifend mattis ligula, porta finibus urna gravida
              at. Aenean vehicula sodales arcu non mattis.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• At eleifend mattis ligula, porta finibus urna gvida at.</li>
              <li>• Kenean vehicula sodales arcu non mattis.</li>
              <li>• Ginteger dapibus ac dui pretium blanss aptent.</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-secondary p-6 rounded text-center hover:bg-accent transition-colors cursor-pointer relative overflow-hidden group"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity">
                <Image
                  src={`https://images.unsplash.com/photo-${1586023492125 + index}?w=400&q=80`}
                  alt={category}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-foreground font-medium relative z-10">{category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
