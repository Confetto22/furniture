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

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* <Header /> */}
      <Hero />
      <Services />
      <section className="bg-brand-dark py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Top Section - Text Content */}
              <div className="space-y-6">
                {/* Label */}
                <h3 className="text-brand-gold text-sm font-semibold uppercase tracking-wider">
                  OFFICE SOLUTIONS
                </h3>

                {/* Main Title */}
                <h2
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-white leading-tight"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Premium Office Furniture
                  <br />& Workspace Solutions
                </h2>

                {/* Paragraph */}
                <p className="text-brand-white/80 text-base md:text-lg leading-relaxed">
                  Established in 1993 and incorporated as JCL Services Limited
                  in 2010, we have been providing quality office furniture and
                  workspace solutions to businesses across Ghana. Our
                  comprehensive range includes office furniture, computer
                  accessories, stationery, and printing materials - all at
                  competitive and negotiable prices.
                </p>
              </div>

              {/* Bottom Section - Image */}
              <div className="relative w-full h-[500px] md:h-[600px] rounded-lg overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1765230725/jcl-furniture/still-life-office-chair-indoors_ydr8gm.jpg"
                  alt="Modern living and dining area"
                  fill
                  priority
                  loading="eager"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Top Section - Image */}
              <div className="relative w-full h-[500px] md:h-[600px] rounded-lg overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1765230717/jcl-furniture/3d-rendering-business-meeting-working-room-office-building_qyd4z2.jpg"
                  priority
                  loading="eager"
                  alt="Cozy modern living room"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Bottom Section - Text Content */}
              <div className="space-y-6">
                {/* Subtitle */}
                <h3 className="text-3xl md:text-4xl font-bold text-brand-white">
                  Quality & Affordability Combined
                </h3>

                {/* Paragraph */}
                <p className="text-brand-white/80 text-base md:text-lg leading-relaxed">
                  Our office equipment and supplies are all high specs models,
                  and our furniture are quality incarnate but are affordably
                  priced for every pocket in Ghana. With over 30 years of
                  experience, we understand what businesses need.
                </p>

                {/* Bullet Points */}
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="text-brand-gold w-5 h-5 mt-1 shrink-0" />
                    <span className="text-brand-white/80 text-base">
                      5-year warranty - the longest available in Ghana
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-brand-gold w-5 h-5 mt-1 shrink-0" />
                    <span className="text-brand-white/80 text-base">
                      Competitive and negotiable pricing terms
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-brand-gold w-5 h-5 mt-1 shrink-0" />
                    <span className="text-brand-white/80 text-base">
                      Custom designs to customer specifications
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
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
