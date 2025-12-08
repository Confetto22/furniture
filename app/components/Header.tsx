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
                href="#"
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
                href="#"
                className="text-brand-dark/80 hover:text-brand-gold transition-colors font-medium"
              >
                Contact us
              </a>
            </div>

            {/* Right Side Icons */}
            <div className="flex items-center gap-4">
              <button className="lg:hidden text-brand-dark/80">Menu</button>
              <button className="text-brand-dark/80 hover:text-brand-gold transition-colors font-medium">
                Log In
              </button>
              <button className="relative text-brand-dark/80 hover:text-brand-gold transition-colors">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="absolute -top-2 -right-2 bg-brand-gold text-brand-dark text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
