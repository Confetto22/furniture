"use client";

import { Facebook, Instagram, Menu, X, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const navItems = [
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

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navigationLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "#", label: "Collection" },
    { href: "#", label: "Blog" },
    { href: "/contact", label: "Contact us" },
  ];

  return (
    <header className="w-full sticky top-0 z-50 bg-brand-white shadow-sm">
      {/* Main Navigation */}
      <nav className="border-b border-gray-200">
        <div className=" mx-auto px-4">
          <div className="relative flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              onClick={closeMobileMenu}
            >
              <div className="relative h-13 w-auto">
                <Image
                  src="/logo-dark.png"
                  alt="JCL Services Logo"
                  width={150}
                  height={80}
                  className="h-13 w-auto object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation Links - Centered */}
            <div className="hidden lg:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-brand-dark/80 hover:text-brand-gold transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Social Media Icons */}
            <menu className="hidden md:flex items-center gap-4">
              {socials.map((social) => (
                <Link
                  key={social.name}
                  href={social.refLink}
                  target="_blank"
                  className="text-brand-dark hover:text-brand-gold transition-colors"
                  aria-label="Instagram"
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </menu>

            {/* Mobile Menu Button */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-brand-dark/80 hover:text-brand-gold transition-colors p-2"
                aria-label="Toggle mobile menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 hidden" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 lg:hidden"
            onClick={closeMobileMenu}
          />

          {/* Mobile Menu Panel */}
          <div
            className={`fixed top-16 left-0 right-0 bg-brand-white border-b border-brand-gold/10 shadow-lg z-50 lg:hidden transform transition-transform duration-300 ease-in-out ${
              isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
            }`}
          >
            <div className="container  mx-auto px-4 py-6">
              <nav className="flex flex-col space-y-4">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className="text-brand-dark/80 hover:text-brand-gold transition-colors font-medium py-3 px-4 rounded-lg hover:bg-brand-gold/10 text-lg"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
