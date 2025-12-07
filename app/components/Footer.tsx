'use client';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        {/* Newsletter Section */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Art Of Comfort</h2>
          <h3 className="text-2xl md:text-3xl font-semibold mb-6">Transforming Spaces, Transforming Style</h3>
          <p className="text-primary-foreground/80 mb-6">Your email is safe with us, we dont spam. Privacy Policy</p>
          <div className="max-w-md mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <h4 className="font-semibold mb-2">Transit Protocol</h4>
              <p className="text-sm text-primary-foreground/70">Eget arcu dictum varius duis at lorem donec.</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold mb-2">Chat Assistance</h4>
              <p className="text-sm text-primary-foreground/70">Quam quisque id diam vel quam aecenas.</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold mb-2">Email Interaction</h4>
              <p className="text-sm text-primary-foreground/70">Quis varius quam id diam vel lecento.</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold mb-2">Global Stores</h4>
              <p className="text-sm text-primary-foreground/70">Condimentum id venenatis a vitae sapien.</p>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-xl font-bold mb-4">TeaPoy Site</h4>
            <p className="text-primary-foreground/70 text-sm">
              Proin a interdum elit. Etiam eu sapien sem. Suspendisse a massa justo. 
              Cras eget lorem nunc. Fusce nec urna tempus tempus
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Useful links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">History</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Services Offered</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Product Catalog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Information</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">FAQ/Return</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Privacy/Terms</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Affiliate</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Sizing Guide</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Accessibility</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Your Account</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Press Release</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Return Centre</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">App Download</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Advertisements</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/70 text-sm mb-4 md:mb-0">
            ©TeaPoy site all rights Reserved
          </p>
          <div className="text-sm text-primary-foreground/70">
            Follow @Instagram
          </div>
        </div>
      </div>
    </footer>
  );
}

