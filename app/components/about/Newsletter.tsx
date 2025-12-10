"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Email submitted:", email);
  };

  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden">
      {/* Background Image with Warm Lighting Effect */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1920&q=80"
          alt="JCL Services office furniture newsletter background - subscribe for updates on workspace solutions in Ghana"
          fill
          className="object-cover"
          loading="lazy"
        />
        {/* Warm lighting gradient from top-center */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-gold/20 via-transparent to-brand-dark/90"></div>
        {/* Additional dark overlay for better contrast */}
        <div className="absolute inset-0 bg-brand-dark/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Subheading */}
          <div className="text-brand-gold text-sm font-semibold uppercase tracking-wider mb-4">
            ART OF COMFORT
          </div>

          {/* Main Title */}
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-white mb-12 leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Transforming Spaces,
            <br />
            Transforming Style
          </h2>

          {/* Email Subscription Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Input and Submit Button Container */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              {/* Email Input */}
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 max-w-md w-full px-6 py-4 bg-brand-dark/90 border-2 border-brand-gold rounded-lg text-brand-white placeholder-brand-white/50 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all"
                required
                aria-label="Email address for newsletter subscription"
                aria-required="true"
              />

              {/* Submit Button */}
              <button
                type="submit"
                className="w-14 h-14 bg-brand-gold rounded-full flex items-center justify-center hover:bg-brand-gold/90 transition-colors shadow-lg shrink-0"
                aria-label="Submit email"
              >
                <ArrowRight className="w-6 h-6 text-brand-dark" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
