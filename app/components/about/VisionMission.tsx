"use client";

import { motion } from "framer-motion";
import { desc } from "framer-motion/client";
import { Target, Eye, Heart } from "lucide-react";

export default function VisionMission() {
  const cards = [
    {
      icon: Eye,
      title: "Our Vision",
      desc: "JCL Services Limited envisages becoming one of the biggest trusted service providers in Ghana in particular and Africa and the world in general.",
    },
    {
      icon: Target,
      title: "Our Mission",
      desc: "JCL Services Limited will become one of the most trustworthy business service providers who put the customers' desire and satisfaction first in all her dealings. This includes meeting customer specifications at affordable prices and timely delivery with after-sales follow-ups.",
    },
    {
      icon: Heart,
      title: "Our Core Values",
      desc: "We are guided by the principle that the customer has the biggest stake in every company. We win trust through committed actions and deeds, delivering what customers want, how they want it, at affordable prices, and within their time frame.",
    },
  ];
  return (
    <section className="bg-brand-dark-light py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="text-brand-gold text-sm font-semibold uppercase tracking-wider mb-3">
            OUR FOUNDATION
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Vision, Mission & Values
          </h2>
        </div>

        {/* Three Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-brand-dark border border-brand-white/10 rounded-lg p-8 hover:border-brand-gold/40 transition-all shadow-md hover:shadow-lg"
            >
              <div className="w-16 h-16 bg-brand-gold/20 rounded-full flex items-center justify-center mb-6">
                <card.icon className="w-8 h-8 text-brand-gold" />
              </div>
              <motion.h3
                initial={{ opacity: 0, x: -30, filter: "blur(4px)" }}
                whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true }}
                exit={{ opacity: 0, x: -30, filter: "blur(5px)" }}
                transition={{
                  duration: 0.6,
                  delay: 0.1,
                  ease: "easeOut",
                }}
                className="text-2xl md:text-3xl font-bold text-brand-white mb-4"
              >
                {card.title}
              </motion.h3>
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
                className="text-brand-white/80 text-base leading-relaxed"
              >
                {card.desc}
              </motion.p>
            </div>
          ))}
          {/* <div className="bg-brand-dark border border-brand-white/10 rounded-lg p-8 hover:border-brand-gold/40 transition-all shadow-md hover:shadow-lg">
            <div className="w-16 h-16 bg-brand-gold/20 rounded-full flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-brand-gold" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-brand-white mb-4">
              Our Vision
            </h3>
            <p className="text-brand-white/80 text-base leading-relaxed">
              JCL Services Limited envisages becoming one of the biggest trusted
              service providers in Ghana in particular and Africa and the world
              in general.
            </p>
          </div>

          <div className="bg-brand-dark border border-brand-white/10 rounded-lg p-8 hover:border-brand-gold/40 transition-all shadow-md hover:shadow-lg">
            <div className="w-16 h-16 bg-brand-gold/20 rounded-full flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-brand-gold" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-brand-white mb-4">
              Our Mission
            </h3>
            <p className="text-brand-white/80 text-base leading-relaxed">
              JCL Services Limited will become one of the most trustworthy
              business service providers who put the customers' desire and
              satisfaction first in all her dealings. This includes meeting
              customer specifications at affordable prices and timely delivery
              with after-sales follow-ups.
            </p>
          </div>

          <div className="bg-brand-dark border border-brand-white/10 rounded-lg p-8 hover:border-brand-gold/40 transition-all shadow-md hover:shadow-lg">
            <div className="w-16 h-16 bg-brand-gold/20 rounded-full flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-brand-gold" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-brand-white mb-4">
              Core Values
            </h3>
            <p className="text-brand-white/80 text-base leading-relaxed">
              We are guided by the principle that the customer has the biggest
              stake in every company. We win trust through committed actions and
              deeds, delivering what customers want, how they want it, at
              affordable prices, and within their time frame.
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
}
