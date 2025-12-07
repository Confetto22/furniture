"use client";

import Image from "next/image";

const categories = [
  { name: "Garden Decor", icon: "🌿", image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&q=80" },
  { name: "Home Furniture's", icon: "🪑", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80" },
  { name: "Celling Furniture's", icon: "💡", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&q=80" },
  { name: "Tea Table", icon: "☕", image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=400&q=80" },
  { name: "Storage Solutions", icon: "📦", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80" },
  { name: "Decoration Solutions", icon: "✨", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&q=80" },
];

export default function InnovativeFurniture() {
  return (
    <section className="py-20 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <Image
          src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=1920&q=80"
          alt="Background pattern"
          fill
          className="object-cover"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Sleek And Stylish
          </h2>
          <h3 className="text-3xl md:text-4xl font-semibold mb-6 text-foreground/90">
            Innovative Furniture&apos;s
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Class aptent taciti. Ut eleifend mattis ligula, porta finibus urna gravida at. 
            Aenean vehiculles arcu non mattis. Integer dapibus ac dui pretium blandit.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-all text-center border border-border relative overflow-hidden group cursor-pointer"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative z-10">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h4 className="font-semibold text-foreground">{category.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

