import Header from "./components/Header";
import Hero from "./components/home/Hero";
import Services from "./components/home/Services";
import Features from "./components/home/Features";
import HomeDecorHub from "./components/home/HomeDecorHub";
import ProductGrid from "./components/home/ProductGrid";
import ShopByCategory from "./components/home/ShopByCategory";
import UltraModernFurniture from "./components/home/UltraModernFurniture";
import FAQ from "./components/home/FAQ";
import WhyChooseUs from "./components/home/WhyChooseUs";
import InnovativeFurniture from "./components/home/InnovativeFurniture";
import Testimonials from "./components/home/Testimonials";
import Blog from "./components/home/Blog";
import Footer from "./components/Footer";
import CustomizedFurniture from "./components/about/CustomizedFurniture";
import CustomerTestimonials from "./components/about/CustomerTestimonials";
import { Check } from "lucide-react";
import Image from "next/image";
import ArtOfCoziness from "./components/home/ArtOfCoziness";
import { motion } from "framer-motion";
import Alternate from "./components/common/alternate";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* <Header /> */}
      <Hero />

      <Alternate />
      <Services />
      {/* <Features /> */}
      <WhyChooseUs />
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
