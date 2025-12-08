"use client";

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-50 bg-brand-white shadow-sm">
      {/* Main Navigation */}
      <nav className="border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-brand-gold flex items-center justify-center">
                <span className="text-brand-dark text-lg font-bold">J</span>
              </div>
              <span className="text-2xl font-bold text-brand-dark">
                JCL Services
              </span>
            </div>

            {/* Navigation Links */}
            <div className="hidden lg:flex items-center gap-8">
              <a
                href="#"
                className="text-brand-dark/80 hover:text-brand-gold transition-colors font-medium"
              >
                Home
              </a>
              <a
                href="about"
                className="text-brand-dark/80 hover:text-brand-gold transition-colors font-medium"
              >
                About
              </a>
              <a
                href="#"
                className="text-brand-dark/80 hover:text-brand-gold transition-colors font-medium"
              >
                Collection
              </a>
              <a
                href="#"
                className="text-brand-dark/80 hover:text-brand-gold transition-colors font-medium"
              >
                Blog
              </a>
              <a
                href="contact"
                className="text-brand-dark/80 hover:text-brand-gold transition-colors font-medium"
              >
                Contact us
              </a>
            </div>

            {/* Right Side - Mobile Menu */}
            <div className="flex items-center">
              <button className="lg:hidden text-brand-dark/80 hover:text-brand-gold transition-colors font-medium">
                Menu
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
