"use client";

export default function Header() {
  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-4">
              <span>Invite friends and earn rewards!</span>
              <span className="hidden md:inline">
                Join our Scheme and earn rewards!
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="hidden md:inline">
                Free shipping on order over $100!
              </span>
              <select className="bg-transparent border-none text-primary-foreground cursor-pointer">
                <option>USD, $</option>
                <option>INR, ₹</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="text-2xl font-bold text-foreground">
              TeaPoy Site
            </div>

            {/* Navigation Links */}
            <div className="hidden lg:flex items-center gap-6">
              <a
                href="#"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                Pages
              </a>
              <a
                href="#"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                Shop
              </a>
              <a
                href="#"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                Collection
              </a>
              <a
                href="#"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                Blog
              </a>
              <a
                href="#"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                Contact us
              </a>
            </div>

            {/* Right Side Icons */}
            <div className="flex items-center gap-4">
              <button className="lg:hidden text-foreground/70">Menu</button>
              <button className="text-foreground/70 hover:text-primary transition-colors">
                Log In
              </button>
              <button className="relative text-foreground/70 hover:text-primary transition-colors">
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
                <span className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
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
