import AboutHero from "../components/about/AboutHero";
import AboutStats from "../components/about/AboutStats";
import CustomizedFurniture from "../components/about/CustomizedFurniture";
import SpecialTeam from "../components/about/SpecialTeam";
import CustomerTestimonials from "../components/about/CustomerTestimonials";
import Partners from "../components/about/Partners";
import Newsletter from "../components/about/Newsletter";
import Image from "next/image";
import { Check } from "lucide-react";

const About = () => {
  return (
    <section>
      <AboutHero />

      {/* <AboutContent /> */}

      <section className="bg-brand-dark py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-12">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Top Section - Text Content */}
              <div className="space-y-6">
                {/* Label */}
                <div className="text-brand-gold text-sm font-semibold uppercase tracking-wider">
                  WE DESIGN
                </div>

                {/* Main Title */}
                <h2
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-white leading-tight"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  World Class Furniture&apos;s For
                  <br />
                  Ultimate Comfort
                </h2>

                {/* Paragraph */}
                <p className="text-brand-white/80 text-base md:text-lg leading-relaxed">
                  At JCL Services, we believe that exceptional furniture is the
                  foundation of a beautiful home. Our team of skilled designers
                  and craftsmen work tirelessly to create pieces that combine
                  timeless elegance with modern functionality, ensuring every
                  item in our collection meets the highest standards of quality
                  and comfort.
                </p>
              </div>

              {/* Bottom Section - Image */}
              <div className="relative w-full h-[500px] md:h-[600px] rounded-lg overflow-hidden shadow-lg">
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
              <div className="relative w-full h-[500px] md:h-[600px] rounded-lg overflow-hidden shadow-lg">
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
                  Crafting Quality Furniture
                </h3>

                {/* Paragraph */}
                <p className="text-brand-white/80 text-base md:text-lg leading-relaxed">
                  With decades of experience in the furniture industry, we
                  understand that true luxury lies in the details. Each piece is
                  carefully selected and crafted to bring beauty, comfort, and
                  functionality to your living spaces.
                </p>

                {/* Bullet Points */}
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="text-brand-gold w-5 h-5 mt-1 shrink-0" />
                    <span className="text-brand-white/80 text-base">
                      Premium materials sourced from trusted suppliers worldwide
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-brand-gold w-5 h-5 mt-1 shrink-0" />
                    <span className="text-brand-white/80 text-base">
                      Expert craftsmanship ensuring durability and longevity
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-brand-gold w-5 h-5 mt-1 shrink-0" />
                    <span className="text-brand-white/80 text-base">
                      Sustainable practices that respect our environment
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CustomizedFurniture />
      <AboutStats />
      {/* <CustomizedFurniture /> */}
      <SpecialTeam />
      <CustomerTestimonials />
      <Partners />
      <Newsletter />
    </section>
  );
};

export default About;
