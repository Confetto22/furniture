"use client";

import Image from "next/image";
import { Instagram, Facebook, Youtube, Twitter, ArrowUp } from "lucide-react";

const instagramImages = [
  "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200&q=80",
  "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=200&q=80",
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&q=80",
  "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=200&q=80",
  "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=200&q=80",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=200&q=80",
];

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
                <span className="text-white text-xl">☕</span>
              </div>
              <span className="text-2xl font-bold">Teapoy</span>
            </div>

            {/* Description */}
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Proin a interdum elit. Etiam eu sapien sem. Suspendisse a massa
              justo. Cras eget lorem nunc. Fusce nec urna tempus tempus
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <div className="w-5 h-5 rounded-full border border-white/70 flex items-center justify-center text-xs">
                  O
                </div>
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Useful Links Column */}
          <div>
            <h4 className="text-white font-bold mb-4">Useful Links</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  History
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Services Offered
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Product Catalog
                </a>
              </li>
            </ul>
          </div>

          {/* Information Column */}
          <div>
            <h4 className="text-white font-bold mb-4">Information</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  FAQ/Return
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy/Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Affiliate
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Sizing Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Accessibility
                </a>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h4 className="text-white font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Your Account
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Press Release
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Return Centre
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  App Download
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Advertisements
                </a>
              </li>
            </ul>
          </div>

          {/* Instagram Feed Column */}
          <div>
            <h4 className="text-white font-bold mb-4">Follow @Instagram</h4>
            <div className="grid grid-cols-3 gap-2">
              {instagramImages.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group"
                >
                  <Image
                    src={image}
                    alt={`Instagram post ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-white/70 text-sm">
              ©TeaPoy site all rights Reserved
            </p>

            {/* Payment Methods */}
            <div className="flex items-center gap-3 flex-wrap justify-center">
              {/* Mastercard */}
              <div className="w-10 h-6 bg-white rounded flex items-center justify-center text-xs font-bold text-gray-800">
                MC
              </div>
              {/* Visa */}
              <div className="w-10 h-6 bg-blue-600 rounded flex items-center justify-center text-xs font-bold text-white">
                VISA
              </div>
              {/* AMEX */}
              <div className="w-10 h-6 bg-blue-500 rounded flex items-center justify-center text-xs font-bold text-white">
                AMEX
              </div>
              {/* Apple Pay */}
              <div className="w-10 h-6 bg-black rounded flex items-center justify-center">
                <span className="text-white text-xs">🍎</span>
              </div>
              {/* Skrill */}
              <div className="w-10 h-6 bg-orange-500 rounded flex items-center justify-center text-xs font-bold text-white">
                S
              </div>
              {/* PayPal */}
              <div className="w-10 h-6 bg-blue-400 rounded flex items-center justify-center text-xs font-bold text-white">
                PP
              </div>
            </div>

            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors relative group"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5 text-white z-10" />
              <span className="text-white text-[9px] font-semibold absolute left-1 top-1/2 -translate-y-1/2 rotate-[-90deg] origin-center">
                TOP
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
