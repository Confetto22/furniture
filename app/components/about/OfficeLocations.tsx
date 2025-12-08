"use client";

import { MapPin, Phone, Mail } from "lucide-react";

export default function OfficeLocations() {
  return (
    <section className="bg-brand-dark py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="text-brand-gold text-sm font-semibold uppercase tracking-wider mb-3">
            VISIT US
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Our Office Locations
          </h2>
          <p className="text-brand-white/80 text-base md:text-lg max-w-2xl mx-auto mt-4">
            We operate from two convenient locations in Accra to serve you
            better
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Main Office */}
          <div className="bg-brand-dark-light border border-brand-white/10 rounded-lg p-8 hover:border-brand-gold/40 transition-all shadow-md hover:shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-brand-gold/20 rounded-lg flex items-center justify-center">
                <MapPin className="w-7 h-7 text-brand-gold" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-brand-white">
                  Main Office
                </h3>
                <p className="text-brand-gold text-sm font-medium">
                  Head Office & Showroom
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-brand-white/80 text-base leading-relaxed">
                Kokomlemle, just before the Circle overpass connecting
                Kokomlemle to Adabraka
              </p>

              <div className="flex items-center gap-3 text-brand-white/70">
                <Phone className="w-5 h-5 text-brand-gold" />
                <span className="text-sm">Contact us for phone number</span>
              </div>

              <div className="flex items-center gap-3 text-brand-white/70">
                <Mail className="w-5 h-5 text-brand-gold" />
                <span className="text-sm">Contact us for email</span>
              </div>
            </div>
          </div>

          {/* Branch Office */}
          <div className="bg-brand-dark-light border border-brand-white/10 rounded-lg p-8 hover:border-brand-gold/40 transition-all shadow-md hover:shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-brand-gold/20 rounded-lg flex items-center justify-center">
                <MapPin className="w-7 h-7 text-brand-gold" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-brand-white">
                  Branch Office
                </h3>
                <p className="text-brand-gold text-sm font-medium">
                  Accra Central Location
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-brand-white/80 text-base leading-relaxed">
                Swanzy Shopping Arcade near Cocoa House, Accra Central
              </p>

              <div className="flex items-center gap-3 text-brand-white/70">
                <Phone className="w-5 h-5 text-brand-gold" />
                <span className="text-sm">Contact us for phone number</span>
              </div>

              <div className="flex items-center gap-3 text-brand-white/70">
                <Mail className="w-5 h-5 text-brand-gold" />
                <span className="text-sm">Contact us for email</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
