import AboutHero from "../components/about/AboutHero";
import AboutStats from "../components/about/AboutStats";
import CustomizedFurniture from "../components/about/CustomizedFurniture";
import SpecialTeam from "../components/about/SpecialTeam";
import CustomerTestimonials from "../components/about/CustomerTestimonials";
import Partners from "../components/about/Partners";
import Newsletter from "../components/about/Newsletter";
import VisionMission from "../components/about/VisionMission";
import Representation from "../components/about/Representation";
import EquipmentCapabilities from "../components/about/EquipmentCapabilities";
import OfficeLocations from "../components/about/OfficeLocations";
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
                  OUR STORY
                </div>

                {/* Main Title */}
                <h2
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-white leading-tight"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Three Decades of
                  <br />
                  Excellence & Growth
                </h2>

                {/* Paragraph */}
                <p className="text-brand-white/80 text-base md:text-lg leading-relaxed">
                  JCL Services Limited, incorporated in 2010, evolved from JCL
                  Services which was established in 1993 as general merchants to
                  provide supply services of general office and household
                  equipment and their various accessories to the general public.
                  Over the years, we have expanded our services to become a
                  trusted provider of office furniture, workspace solutions, and
                  comprehensive business services across Ghana.
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
                  Our Evolution & Services
                </h3>

                {/* Paragraph */}
                <p className="text-brand-white/80 text-base md:text-lg leading-relaxed">
                  In its evolution, JCL Services Limited has expanded to offer a
                  comprehensive range of services including office furniture
                  dealership, stationery and printing materials, computer
                  accessories, electronic appliances, civil and electrical
                  engineering services, and import/export operations.
                </p>

                {/* Bullet Points */}
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="text-brand-gold w-5 h-5 mt-1 shrink-0" />
                    <span className="text-brand-white/80 text-base">
                      Dealership in Office Furniture & Computer Accessories
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-brand-gold w-5 h-5 mt-1 shrink-0" />
                    <span className="text-brand-white/80 text-base">
                      Stationery, Printing Materials & Printing Press Services
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-brand-gold w-5 h-5 mt-1 shrink-0" />
                    <span className="text-brand-white/80 text-base">
                      Civil & Electrical Engineering including Plumbing
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <VisionMission />
      <CustomizedFurniture />
      <AboutStats />
      {/* <CustomizedFurniture /> */}
      <SpecialTeam />
      {/* <CustomerTestimonials /> */}
      <Partners />
      <Representation />
      {/* <EquipmentCapabilities /> */}
      <OfficeLocations />
      <Newsletter />
    </section>
  );
};

export default About;
