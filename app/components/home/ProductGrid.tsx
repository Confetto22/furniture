"use client";

import Image from "next/image";

interface Product {
  name: string;
  price: string;
  priceRange?: string;
  category: string;
  onSale?: boolean;
  image: string;
}

const products: Product[] = [
  {
    name: "Modern Ceramic Lamp",
    price: "$ 51.70",
    priceRange: "$ 58.50",
    category: "Home Decoration",
    onSale: true,
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80",
  },
  {
    name: "Soft Seater Chair",
    price: "$ 108.95",
    priceRange: "$ 123.50",
    category: "Home Decoration",
    onSale: true,
    image:
      "https://images.unsplash.com/photo-1549497538-303791108f95?w=800&q=80",
  },
  {
    name: "Elegant Wooden Table",
    price: "$ 88.20",
    priceRange: "$ 146.40",
    category: "Home Decoration, Outdoor Decoration",
    onSale: true,
    image:
      "https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=800&q=80",
  },
  {
    name: "Round Wood Table",
    price: "$ 119.10",
    priceRange: "$ 123.75",
    category: "Home Decoration",
    onSale: true,
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
  },
  {
    name: "Ceramic Art Set",
    price: "$ 25.40",
    priceRange: "$ 26.15",
    category: "Home Decoration",
    onSale: true,
    image:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&q=80",
  },
  {
    name: "Copper Tea Jug Set",
    price: "$ 32.20",
    priceRange: "$ 56.15",
    category: "Home Decoration, Outdoor Decoration",
    onSale: true,
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&q=80",
  },
  {
    name: "Steel Pot Jug",
    price: "$ 33.15",
    priceRange: "$ 52.20",
    category: "Home Decoration",
    onSale: true,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  },
  {
    name: "Adjustable Leather Sofa",
    price: "$ 172.30",
    priceRange: "$ 173.75",
    category: "Indoor Decoration",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
  },
];

export default function ProductGrid() {
  return (
    <section className="py-20 bg-secondary/30 relative overflow-hidden">
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
            Explore Our
          </h2>
          <h3 className="text-3xl md:text-4xl font-semibold mb-6 text-foreground/90">
            Luxurious Haven Collection
          </h3>
          <div className="flex justify-center gap-4 flex-wrap mb-8">
            <span className="px-4 py-2 bg-secondary rounded text-foreground">
              Home Decoration 12
            </span>
            <span className="px-4 py-2 bg-secondary rounded text-foreground">
              Office Decoration 40
            </span>
            <span className="px-4 py-2 bg-secondary rounded text-foreground">
              Indoor Decoration 60
            </span>
            <span className="px-4 py-2 bg-secondary rounded text-foreground">
              Outdoor Decoration 10
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-border"
            >
              <div className="aspect-square bg-secondary relative overflow-hidden group">
                {product.onSale && (
                  <span className="absolute top-2 left-2 z-10 bg-destructive text-destructive-foreground px-2 py-1 text-xs rounded font-semibold">
                    On Sale
                  </span>
                )}
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                <div className="absolute bottom-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="bg-card p-2 rounded-full shadow-lg hover:bg-accent transition-colors">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-muted-foreground mb-2">
                  {product.category}
                </p>
                <h4 className="font-semibold text-foreground mb-2">
                  {product.name}
                </h4>
                <p className="text-foreground/80 font-medium">
                  {product.priceRange
                    ? `${product.price} – ${product.priceRange}`
                    : product.price}
                </p>
                <button className="mt-4 w-full bg-primary text-primary-foreground py-2 rounded hover:bg-primary/90 transition-colors font-semibold">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
