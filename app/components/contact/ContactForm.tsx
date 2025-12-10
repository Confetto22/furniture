"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
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
            aria-required="true"
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
            placeholder="+233 (0) 302 244 515"
            className="w-full px-4 py-3 bg-brand-dark border border-brand-white/20 rounded-lg text-brand-white placeholder-brand-white/40 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all"
            aria-required="true"
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
            aria-required="true"
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
            aria-required="true"
          />
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 flex justify-center">
          <button
            type="submit"
            className="bg-brand-gold hover:bg-brand-gold/90 text-brand-dark px-8 py-4 rounded-lg font-semibold transition-colors shadow-lg flex items-center gap-2"
            aria-label="Submit contact form to JCL Services"
          >
            <span>Send Message</span>
            <Send className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
      </form>
    </div>
  );
}
