"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";

const Alternate = ({}) => {
  const bullets = [
    "5-year warranty - the longest available in Ghana",

    "Competitive and negotiable pricing terms",

    "Custom designs to customer specifications",
  ];
  return (
    <section className="bg-brand-dark py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
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
              <h3 className="text-brand-gold text-sm font-semibold uppercase tracking-wider">
                OFFICE SOLUTIONS
              </h3>

              {/* Main Title */}
              <h2
                className="text-2xl md:text-3xl lg:text-5xl font-bold text-brand-white leading-tight"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Premium Office Furniture
                <br />& Workspace Solutions
              </h2>

              {/* Paragraph */}
              <p className="text-brand-white/80 text-base md:text-lg leading-relaxed">
                Established in 1993 and incorporated as JCL Services Limited in
                2010, we have been providing quality office furniture and
                workspace solutions to businesses across Ghana. Our
                comprehensive range includes office furniture, computer
                accessories, stationery, and printing materials - all at
                competitive and negotiable prices.
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
              className="relative w-full h-[500px] md:h-[600px] rounded-lg overflow-hidden"
            >
              <Image
                src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1765230717/jcl-furniture/3d-rendering-business-meeting-working-room-office-building_qyd4z2.jpg"
                alt="Modern living and dining area"
                fill
                priority
                loading="eager"
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-8 gap-7 grid">
            {/* Top Section - Image */}
            <motion.div
              initial={{ filter: "blur(8px)" }}
              whileInView={{ filter: "blur(0px)" }}
              viewport={{ once: true }}
              exit={{ opacity: 0, filter: "blur(5px)" }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: "easeOut",
              }}
              className="relative w-full h-[500px] md:h-[600px] rounded-lg overflow-hidden"
            >
              <Image
                src="https://res.cloudinary.com/dxsom7jmx/image/upload/v1765282941/jcl/product-jpeg_ehzhia.jpg"
                priority
                loading="eager"
                alt="Cozy modern living room"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Bottom Section - Text Content */}
            <div className="space-y-6 order-first md:order-last">
              {/* Subtitle */}
              <h3 className="text-3xl md:text-4xl font-bold text-brand-white">
                Quality & Affordability Combined
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
                Our office equipment and supplies are all high specs models, and
                our furniture are quality incarnate but are affordably priced
                for every pocket in Ghana. With over 30 years of experience, we
                understand what businesses need.
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

export default Alternate;
