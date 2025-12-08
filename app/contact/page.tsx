"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="bg-brand-dark">
      {/* Hero Section */}
      <section className="relative w-full min-h-[40vh] overflow-hidden">
        <div className="bg-[url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&q=80')] bg-cover bg-center w-full min-h-[60vh] ">
          <div className="content min-h-[60vh] bg-brand-dark/80 flex flex-col items-center justify-center w-full h-full">
            {/* Main Title */}
            <h1
              className="text-5xl md:text-6xl lg:text-7xl text-brand-white mb-6 drop-shadow-lg"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Contact Us
            </h1>

            {/* Breadcrumbs */}
            <div className="text-sm font-semibold md:text-base text-brand-white/90 font-light tracking-wide">
              <span className="hover:text-brand-white transition-colors cursor-pointer">
                Home
              </span>
              <span className="mx-2 text-brand-white/60">/</span>
              <span className="text-brand-white/70">Contact Us</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex flex-col items-center justify-center max-w-3xl text-center gap-4 mx-auto mb-16">
            <div className="text-brand-gold text-sm font-semibold uppercase tracking-wider">
              GET IN TOUCH
            </div>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-white"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              We&apos;re Here to Help
            </h2>
            <p className="text-brand-white/80 text-base md:text-lg leading-relaxed">
              Have a question about our furniture collections or need assistance
              with your order? Our team is ready to assist you. Reach out to us
              through any of the channels below, and we&apos;ll get back to you
              as soon as possible.
            </p>
          </div>

          {/* Contact Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Email */}
            <div className="bg-brand-dark-light border border-brand-white/10 rounded-lg p-6 text-center hover:border-brand-gold/40 transition-colors">
              <div className="w-14 h-14 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-7 h-7 text-brand-gold" />
              </div>
              <h3 className="text-brand-white font-semibold mb-2">Email Us</h3>
              <p className="text-brand-white/70 text-sm">
                Contact us via email
              </p>
            </div>

            {/* Phone */}
            <div className="bg-brand-dark-light border border-brand-white/10 rounded-lg p-6 text-center hover:border-brand-gold/40 transition-colors">
              <div className="w-14 h-14 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-7 h-7 text-brand-gold" />
              </div>
              <h3 className="text-brand-white font-semibold mb-2">Call Us</h3>
              <p className="text-brand-white/70 text-sm">Contact us by phone</p>
            </div>

            {/* Main Office Location */}
            <div className="bg-brand-dark-light border border-brand-white/10 rounded-lg p-6 text-center hover:border-brand-gold/40 transition-colors">
              <div className="w-14 h-14 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-7 h-7 text-brand-gold" />
              </div>
              <h3 className="text-brand-white font-semibold mb-2">
                Main Office
              </h3>
              <p className="text-brand-white/70 text-sm leading-relaxed">
                Kokomlemle, just before the Circle overpass connecting
                Kokomlemle to Adabraka
              </p>
            </div>

            {/* Branch Office Location */}
            <div className="bg-brand-dark-light border border-brand-white/10 rounded-lg p-6 text-center hover:border-brand-gold/40 transition-colors">
              <div className="w-14 h-14 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-7 h-7 text-brand-gold" />
              </div>
              <h3 className="text-brand-white font-semibold mb-2">
                Branch Office
              </h3>
              <p className="text-brand-white/70 text-sm leading-relaxed">
                Swanzy Shopping Arcade near Cocoa House, Accra Central
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-4xl mx-auto">
            <form
              onSubmit={handleSubmit}
              className="bg-brand-dark-light border border-brand-white/10 px-6 md:px-12 py-12 rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* Name */}
              <div className="md:col-span-1">
                <label
                  htmlFor="name"
                  className="block text-brand-white/80 text-sm font-medium mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-brand-dark border border-brand-white/20 rounded-lg text-brand-white placeholder-brand-white/40 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all"
                />
              </div>

              {/* Phone */}
              <div className="md:col-span-1">
                <label
                  htmlFor="phone"
                  className="block text-brand-white/80 text-sm font-medium mb-2"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+1 (555) 123-4567"
                  className="w-full px-4 py-3 bg-brand-dark border border-brand-white/20 rounded-lg text-brand-white placeholder-brand-white/40 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all"
                />
              </div>

              {/* Email */}
              <div className="md:col-span-1">
                <label
                  htmlFor="email"
                  className="block text-brand-white/80 text-sm font-medium mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john.doe@example.com"
                  className="w-full px-4 py-3 bg-brand-dark border border-brand-white/20 rounded-lg text-brand-white placeholder-brand-white/40 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all"
                />
              </div>

              {/* Location */}
              <div className="md:col-span-1">
                <label
                  htmlFor="location"
                  className="block text-brand-white/80 text-sm font-medium mb-2"
                >
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="City, State"
                  className="w-full px-4 py-3 bg-brand-dark border border-brand-white/20 rounded-lg text-brand-white placeholder-brand-white/40 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all"
                />
              </div>

              {/* Message */}
              <div className="md:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-brand-white/80 text-sm font-medium mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell us how we can help you..."
                  className="w-full px-4 py-3 bg-brand-dark border border-brand-white/20 rounded-lg text-brand-white placeholder-brand-white/40 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2 flex justify-center">
                <button
                  type="submit"
                  className="bg-brand-gold hover:bg-brand-gold/90 text-brand-dark px-8 py-4 rounded-lg font-semibold transition-colors shadow-lg flex items-center gap-2"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3970.089954925776!2d-0.23115302566045084!3d5.700142832184745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s6CQXPQ2C%2B3H3!5e0!3m2!1sen!2sgh!4v1765225817376!5m2!1sen!2sgh"
          className="w-full min-h-[70vh] border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </section>
  );
};

export default Contact;
