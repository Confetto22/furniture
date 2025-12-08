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
      {/* <Header /> */}
      <Hero />
      <section className="bg-gray-900 py-16 md:py-24 min-h-screen">
        <div className="grid grid-cols-1  max-w-7xl mx-auto lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column */}
          <div className=" space-y-8 grid grid-rows-5 ">
            {/* Top Section - Text Content */}
            <div className="space-y-3 py-12 md:row-span-2">
              {/* Orange Label */}
              <h3 className="text-orange-500 text-sm font-semibold uppercase tracking-wider">
                HOME DECOR HUB
              </h3>

              {/* Main Title */}
              <h2 className="text-4xl md:text-5xl  font-bold text-white leading-tight">
                Exceptional Furniture For Indoor &amp; Outdoor
              </h2>

              {/* Paragraph */}
              <p className="text-white/80 text-base md:text-md leading-relaxed font-extralight">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </p>
            </div>

            {/* Bottom Section - Image */}
            <div className="relative w-full h-full md:row-span-3 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80"
                alt="Modern living and dining area"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8 grid grid-rows-5 gap-5">
            {/* Top Section - Image */}
            <div className="relative w-full h-full md:row-span-3 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80"
                alt="Cozy modern living room"
                fill
                className="object-cover"
              />
            </div>

            {/* Bottom Section - Text Content */}
            <div className="space-y-3 md:row-span-3">
              {/* Subtitle */}
              <h3 className="text-3xl md:text-4xl font-bold text-white">
                Discover Endless Designs
              </h3>

              {/* Paragraph */}
              <p className="text-white/80 text-base md:text-md leading-relaxed font-extralight">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </p>

              {/* Bullet Points */}
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="text-orange-500 w-5 h-5 mt-1 flex-shrink-0" />
                  <span className="text-white/80 text-base">
                    Excepteur sint occaecat cupidatat non proident
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-orange-500 w-5 h-5 mt-1 flex-shrink-0" />
                  <span className="text-white/80 text-base">
                    Sunt in culpa qui officia deserunt mollit anim
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-orange-500 w-5 h-5 mt-1 flex-shrink-0" />
                  <span className="text-white/80 text-base">
                    Sed ut perspiciatis unde omnis iste natus error
                  </span>
                </li>
              </ul>
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
      {/* <Footer /> */}
    </div>
  );
}
