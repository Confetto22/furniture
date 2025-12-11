"use client";

import { motion } from "framer-motion";
import { Globe, Shield, Award, CheckCircle } from "lucide-react";

export default function Representation() {
  const featureCards = [
    {
      icon: Shield,
      title: "High Specs Models",
      description:
        "Office equipment and supplies are all high specs models, ensuring superior quality and performance.",
    },
    {
      icon: Award,
      title: "Quality Incarnate",
      description:
        "Our furniture represents quality incarnate, built to last and exceed expectations.",
    },
    {
      icon: CheckCircle,
      title: "Affordably Priced",
      description:
        "Quality furniture at affordable prices, making premium office solutions accessible to all businesses.",
    },
  ];
  return (
    <section className="bg-brand-dark py-16 md:py-24">
      <div className=" mx-auto px-4 lg:px-10 xl:px-16">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="text-brand-gold text-sm font-semibold uppercase tracking-wider mb-3">
            INTERNATIONAL REPRESENTATION
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Quality You Can Trust
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0, x: -30, filter: "blur(4px)" }}
              whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              exit={{ opacity: 0, x: -30, filter: "blur(5px)" }}
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease: "easeOut",
              }}
              className="text-brand-white/80 text-base md:text-lg leading-relaxed"
            >
              JCL Services Limited represents the interests of international
              principals in the Ghanaian market, bringing you high-quality
              office equipment and furniture that are quality incarnate but
              affordably priced for every pocket in Ghana.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 30, filter: "blur(4px)" }}
              whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              exit={{ opacity: 0, x: -30, filter: "blur(5px)" }}
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease: "easeOut",
              }}
              className="text-brand-white/80 text-base md:text-lg leading-relaxed"
            >
              There is no question about their durability because our numerous
              customers - single buyers and companies - who say so cannot be
              wrong. The durability of our furniture makes it so comfortable for
              us to give long-term warranties of{" "}
              <span className="text-brand-gold font-semibold">
                FIVE (5) YEARS
              </span>{" "}
              to our numerous customers, the longest you can get on the Ghanaian
              market.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -30, filter: "blur(4px)" }}
              whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              exit={{ opacity: 0, x: -30, filter: "blur(5px)" }}
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease: "easeOut",
              }}
              className="text-brand-white/80 text-base md:text-lg leading-relaxed"
            >
              On the local market, we design and manufacture general goods and
              services to customer specifications. A typical example is when JCL
              Services manufactured Wooden Pallets for COCOBOD when we won the
              contract to supply a few years back.
            </motion.p>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="space-y-6">
            {featureCards.map((card) => (
              <motion.div
                initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
                whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true }}
                exit={{ opacity: 0, y: -30, filter: "blur(5px)" }}
                transition={{
                  duration: 0.6,
                  delay: 0.1,
                  ease: "easeOut",
                }}
                key={card.title}
                className="bg-brand-dark-light border border-brand-white/10 rounded-lg p-6 hover:border-brand-gold/40 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-gold/20 rounded-lg flex items-center justify-center shrink-0">
                    <card.icon className="w-6 h-6 text-brand-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-white mb-2">
                      {card.title}
                    </h3>
                    <p className="text-brand-white/70 text-sm">
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Brochures Note */}
        <div className="bg-brand-dark-light border border-brand-gold/20 rounded-lg p-6 text-center">
          <p className="text-brand-white/80 text-base md:text-lg">
            Brochures of our proud designs of furniture are always incorporated
            in our profile for customers&apos; own judgment.
          </p>
        </div>
      </div>
    </section>
  );
}
