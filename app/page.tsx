import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HomeDecorHub from './components/HomeDecorHub';
import ProductGrid from './components/ProductGrid';
import FAQ from './components/FAQ';
import InnovativeFurniture from './components/InnovativeFurniture';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <HomeDecorHub />
      <ProductGrid />
      <FAQ />
      <InnovativeFurniture />
      <Testimonials />
      <Blog />
      <Footer />
    </div>
  );
}
