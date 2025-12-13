import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactInfo() {
  return (
    <section className="py-16 md:py-24">
      <div className=" mx-auto px-4 lg:px-10 xl:px-16">
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
            through any of the channels below, and we&apos;ll get back to you as
            soon as possible.
          </p>
        </div>

        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Email */}
          <Link
            href="mailto:info@jclservices.com"
            target="_blank"
            className="bg-brand-dark-light border cursor-pointer border-brand-white/10 rounded-lg p-6 text-center hover:border-brand-gold/40 transition-colors"
          >
            <div className="w-14 h-14 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-7 h-7 text-brand-gold" />
            </div>
            <h3 className="text-brand-white font-semibold mb-2">Email Us</h3>
            <p className="text-brand-white/70 text-sm">info@jclservices.com</p>
          </Link>

          {/* Phone */}
          <Link
            href="tel:+233302244515"
            className="bg-brand-dark-light cursor-pointer border border-brand-white/10 rounded-lg p-6 text-center hover:border-brand-gold/40 transition-colors"
          >
            <div className="w-14 h-14 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-7 h-7 text-brand-gold" />
            </div>
            <h3 className="text-brand-white font-semibold mb-2">Call Us!</h3>
            <p className="text-brand-white/70 text-sm">
              +233(0)302244515 <span>/</span>
            </p>
            <p className="text-brand-white/70 text-sm">+233(0)558598589</p>
          </Link>

          {/* Main Office Location */}
          <Link
            href="https://www.google.com/maps/place/6CQXPQ2C%2B3H3/@5.7001428,-0.231153,17z/data=!3m1!4b1!4m4!3m3!8m2!3d5.7001375!4d-0.2285781?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            className="bg-brand-dark-light border border-brand-white/10 rounded-lg p-6 text-center hover:border-brand-gold/40 transition-colors"
          >
            <div className="w-14 h-14 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-7 h-7 text-brand-gold" />
            </div>
            <h3 className="text-brand-white font-semibold mb-2">Main Office</h3>
            <p className="text-brand-white/70 text-sm leading-relaxed">
              Kokomlemle, just before the Circle overpass connecting Kokomlemle
              to Adabraka
            </p>
          </Link>

          {/* Branch Office Location */}
          <Link
            href="https://www.google.com/maps/place/Swanzy+Shopping+Arcade/@5.5530766,-0.2137793,17z/data=!3m1!4b1!4m6!3m5!1s0xfdf90a4ec8dfd13:0x5127d75ee6bfdff4!8m2!3d5.5530713!4d-0.211199!16s%2Fg%2F1hd_h54pr?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            className="bg-brand-dark-light border border-brand-white/10 rounded-lg p-6 text-center hover:border-brand-gold/40 transition-colors"
          >
            <div className="w-14 h-14 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-7 h-7 text-brand-gold" />
            </div>
            <h3 className="text-brand-white font-semibold mb-2">
              Branch Office
            </h3>
            <p className="text-brand-white/70 text-sm leading-relaxed">
              Swanzy Shopping Arcade near Cocoa House, Accra Central
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}
