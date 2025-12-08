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

      <section className="bg-gray-900 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-12">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Top Section - Text Content */}
              <div className="space-y-6">
                {/* Orange Label */}
                <div className="text-orange-500 text-sm font-semibold uppercase tracking-wider">
                  WE DESIGN
                </div>

                {/* Main Title */}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  World Class Furniture&apos;s For
                  <br />
                  Ultimate Comfort
                </h2>

                {/* Paragraph */}
                <p className="text-white/80 text-base md:text-lg leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
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
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  Crafting Quality Furniture
                </h3>

                {/* Paragraph */}
                <p className="text-white/80 text-base md:text-lg leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
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
