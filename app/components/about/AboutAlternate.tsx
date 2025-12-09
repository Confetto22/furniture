"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";

const AboutAlternate = () => {
  const bullets = [
    "Dealership in Office Furniture & Computer Accessories",

    "Stationery, Printing Materials & Printing Press Services",

    "Civil & Electrical Engineering including Plumbing",
  ];
  return (
    <section className="bg-brand-dark py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Top Section - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 30, filter: "blur(8px)" }}
              whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              exit={{ opacity: 0, x: -30, filter: "blur(5px)" }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: "easeOut",
              }}
              className="space-y-6"
            >
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
            </motion.div>

            {/* Bottom Section - Image */}
            <motion.div
              initial={{ opacity: 0, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              exit={{ opacity: 0, filter: "blur(5px)" }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: "easeOut",
              }}
              className="relative w-full h-[500px] md:h-[600px] rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src="https://res.cloudinary.com/dxsom7jmx/image/upload/v1765283344/jcl/5b3fb63473475eac9e31f71c093ca224-1_gred6j.jpg"
                alt="modern office"
                fill
                className="object-contain"
              />
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-8 grid">
            {/* Top Section - Image */}
            <motion.div
              initial={{ opacity: 0, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              exit={{ opacity: 0, filter: "blur(5px)" }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: "easeOut",
              }}
              className="relative w-full h-[500px] md:h-[600px] rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src="https://res.cloudinary.com/dxsom7jmx/image/upload/v1765282941/jcl/product-jpeg_ehzhia.jpg"
                alt="modern office"
                fill
                className="object-contain"
              />
            </motion.div>

            {/* Bottom Section - Text Content */}
            <div className="space-y-6 order-first md:order-last">
              {/* Subtitle */}
              <h3 className="text-3xl md:text-4xl font-bold text-brand-white">
                Our Evolution & Services
              </h3>

              {/* Paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true }}
                exit={{ opacity: 0, y: -30, filter: "blur(5px)" }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: "easeOut",
                }}
                className="text-brand-white/80 text-base md:text-lg leading-relaxed"
              >
                In its evolution, JCL Services Limited has expanded to offer a
                comprehensive range of services including office furniture
                dealership, stationery and printing materials, computer
                accessories, electronic appliances, civil and electrical
                engineering services, and import/export operations.
              </motion.p>

              {/* Bullet Points */}
              <ul className="space-y-4">
                {bullets.map((bullet) => (
                  <motion.li
                    initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                    whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    exit={{ opacity: 0, y: -30, filter: "blur(5px)" }}
                    transition={{
                      duration: 0.8,
                      delay: 0.2,
                      ease: "easeOut",
                    }}
                    className="flex items-start gap-3"
                  >
                    <Check className="text-brand-gold w-5 h-5 mt-1 shrink-0" />
                    <span className="text-brand-white/80 text-base">
                      {bullet}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAlternate;
