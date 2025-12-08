"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);

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
          alt="Interior background"
          fill
          className="object-cover"
          priority
        />
        {/* Warm lighting gradient from top-center */}
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-900/30 via-transparent to-black/80"></div>
        {/* Additional dark overlay for better contrast */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Subheading */}
          <div className="text-orange-500 text-sm font-semibold uppercase tracking-wider mb-4">
            ART OF COMFORT
          </div>

          {/* Main Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-12 leading-tight">
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
                placeholder="Enter your mail id here"
                className="flex-1 max-w-md w-full px-6 py-4 bg-gray-800/90 border-2 border-orange-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                required
              />

              {/* Submit Button */}
              <button
                type="submit"
                className="w-14 h-14 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg shrink-0"
                aria-label="Submit email"
              >
                <ArrowRight className="w-6 h-6 text-black" />
              </button>
            </div>

            {/* Privacy Notice */}
            <div className="flex items-start justify-center gap-3 text-left">
              <input
                type="checkbox"
                id="privacy-agree"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-1 w-4 h-4 border-gray-400 rounded focus:ring-orange-500 text-orange-500"
              />
              <label
                htmlFor="privacy-agree"
                className="text-gray-300 text-sm md:text-base cursor-pointer"
              >
                Your email is safe with us, we dont spam.{" "}
                <a
                  href="#"
                  className="text-orange-500 hover:text-orange-400 underline transition-colors"
                >
                  Privacy Policy
                </a>
              </label>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
