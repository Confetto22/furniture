import Link from "next/link";

export default function ContactHero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="bg-[url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&q=80')] bg-cover bg-center w-full md:min-h-[60vh] min-h-[40vh]">
        <div className="content md:min-h-[60vh] min-h-[40vh] bg-brand-dark/80 flex flex-col items-center justify-center w-full h-full">
          {/* Main Title */}
          <h1
            className="text-5xl md:text-6xl lg:text-7xl text-brand-white mb-6 drop-shadow-lg"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Contact Us
          </h1>

          {/* Breadcrumbs */}
          <div className="text-sm font-semibold md:text-base text-brand-white/90 font-light tracking-wide">
            <Link href="/" className="hover:text-brand-white transition-colors">
              Home
            </Link>
            <span className="mx-2 text-brand-white/60">/</span>
            <span className="text-brand-white/70">Contact Us</span>
          </div>
        </div>
      </div>
    </section>
  );
}
