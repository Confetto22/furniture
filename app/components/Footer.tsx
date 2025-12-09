"use client";

import Image from "next/image";
import { Instagram, Facebook, Youtube, Twitter, ArrowUp } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import Link from "next/link";

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
const quickLinks = [
  {
    ref: "Home",
    refLink: "/",
  },
  {
    ref: "About",
    refLink: "/about",
  },
  {
    ref: "Collection",
    refLink: "#",
  },
  {
    ref: "Blog",
    refLink: "#",
  },
  {
    ref: "Contact us",
    refLink: "/contact",
  },
];
const socials = [
  {
    refLink: "https://wa.me/233558598598",
    icon: FaWhatsapp,
    name: "whatsapp",
  },
  {
    refLink: "https://www.instagram.com/jclservices.gh/?igsh=MWpmZjE4ZTVnYjFr",
    icon: Instagram,
    name: "instagram",
  },
  {
    refLink: "#",
    icon: Facebook,
    name: "facebook",
  },
  {
    refLink: "#",
    icon: Youtube,
    name: "youtube",
  },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {/* Brand Column */}
          <div>
            {/* Logo */}
            <div className="mb-4">
              <div className="relative h-12 w-auto">
                <Image
                  src="/logo.png"
                  alt="JCL Services Logo"
                  width={550}
                  height={80}
                  className="h-full w-auto object-contain"
                  priority
                />
              </div>
            </div>

            {/* Description */}
            <p className="text-brand-white/70 text-sm leading-relaxed mb-6">
              We are dedicated to providing exceptional furniture solutions that
              combine timeless elegance with modern functionality. Our carefully
              curated collections transform spaces into beautiful, comfortable
              environments that reflect your unique style and personality.
            </p>

            {/* Social Media Icons */}
            <menu className="flex items-center gap-4">
              {socials.map((social) => (
                <Link
                  key={social.name}
                  href={social.refLink}
                  target="_blank"
                  className="text-brand-white/70 hover:text-brand-gold transition-colors"
                  aria-label="Instagram"
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </menu>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-brand-white font-bold mb-4">Quick Links</h4>
            <menu className="space-y-2 text-sm text-brand-white/70 flex flex-col items-start">
              {quickLinks.map((item) => (
                <Link
                  href={item.refLink}
                  key={item.ref}
                  className="hover:text-brand-gold transition-colors"
                >
                  {item.ref}
                </Link>
              ))}
              {/* <li>
                <Link href="/" className="hover:text-brand-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-brand-gold transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-gold transition-colors">
                  Collection
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-gold transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-gold transition-colors">
                  Contact Us
                </a>
              </li> */}
            </menu>
          </div>

          {/* Instagram Feed Column */}
          <div>
            <h4 className="text-brand-white font-bold mb-4">
              Follow @Instagram
            </h4>
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
        <div className="border-t border-brand-white/10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-brand-white/70 text-sm">
              ©JCL Services all rights Reserved
            </p>

            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="w-14 h-14 bg-brand-gold rounded-full flex items-center justify-center hover:bg-brand-gold/90 transition-colors relative group"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5 text-brand-dark z-10" />
              <span className="text-brand-dark text-[9px] font-semibold absolute left-1 top-1/2 -translate-y-1/2 -rotate-90 origin-center">
                TOP
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
