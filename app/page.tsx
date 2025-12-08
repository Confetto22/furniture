import Header from "./components/Header";
import Hero from "./components/home/Hero";
import Features from "./components/home/Features";
import HomeDecorHub from "./components/home/HomeDecorHub";
import ProductGrid from "./components/home/ProductGrid";
import ShopByCategory from "./components/home/ShopByCategory";
import ArtOfCoziness from "./components/home/ArtOfCoziness";
import UltraModernFurniture from "./components/home/UltraModernFurniture";
import FAQ from "./components/home/FAQ";
import InnovativeFurniture from "./components/home/InnovativeFurniture";
import Testimonials from "./components/home/Testimonials";
import Blog from "./components/home/Blog";
import Footer from "./components/Footer";
import CustomizedFurniture from "./components/about/CustomizedFurniture";
import CustomerTestimonials from "./components/about/CustomerTestimonials";
import { Check } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <section className="bg-brand-dark py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Top Section - Text Content */}
              <div className="space-y-6">
                {/* Label */}
                <h3 className="text-brand-gold text-sm font-semibold uppercase tracking-wider">
                  HOME DECOR HUB
                </h3>

                {/* Main Title */}
                <h2
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-white leading-tight"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Exceptional Furniture For Indoor &amp; Outdoor
                </h2>

                {/* Paragraph */}
                <p className="text-brand-white/80 text-base md:text-lg leading-relaxed">
                  Discover our extensive collection of premium furniture
                  designed for both indoor and outdoor spaces. From elegant
                  living room sets to durable patio furniture, we offer pieces
                  that combine style, comfort, and functionality to enhance
                  every corner of your home.
                </p>
              </div>

              {/* Bottom Section - Image */}
              <div className="relative w-full h-[500px] md:h-[600px] rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80"
                  alt="Modern living and dining area"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Top Section - Image */}
              <div className="relative w-full h-[500px] md:h-[600px] rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80"
                  alt="Cozy modern living room"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Bottom Section - Text Content */}
              <div className="space-y-6">
                {/* Subtitle */}
                <h3 className="text-3xl md:text-4xl font-bold text-brand-white">
                  Discover Endless Designs
                </h3>

                {/* Paragraph */}
                <p className="text-brand-white/80 text-base md:text-lg leading-relaxed">
                  Our curated selection features furniture from renowned
                  designers and craftsmen worldwide. Whether you prefer modern
                  minimalism or classic elegance, we have the perfect pieces to
                  bring your vision to life.
                </p>

                {/* Bullet Points */}
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="text-brand-gold w-5 h-5 mt-1 shrink-0" />
                    <span className="text-brand-white/80 text-base">
                      Premium quality materials ensuring durability and
                      longevity
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-brand-gold w-5 h-5 mt-1 shrink-0" />
                    <span className="text-brand-white/80 text-base">
                      Expert craftsmanship with attention to every detail
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-brand-gold w-5 h-5 mt-1 shrink-0" />
                    <span className="text-brand-white/80 text-base">
                      Sustainable and eco-friendly manufacturing practices
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Features /> */}
      <ArtOfCoziness />
      {/* <HomeDecorHub /> */}
      {/* <ProductGrid /> */}
      <UltraModernFurniture />
      <CustomizedFurniture />
      <ShopByCategory />
      <FAQ />
      {/* <InnovativeFurniture /> */}
      {/* <Testimonials /> */}
      <CustomerTestimonials />
      <Blog />
      <Footer />
    </div>
  );
}
