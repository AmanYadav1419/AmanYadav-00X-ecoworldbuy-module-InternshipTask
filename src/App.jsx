import React from "react";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";

const App = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col justify-between">
      <HeroSection />

      <main className="max-w-7xl mx-auto px-4 py-8 flex-1">
        <h2 className="text-2xl font-bold text-green-700 mb-6">Our Products</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProductCard
            title="Eco-Friendly Pots"
            description="Biodegradable, stylish, and perfect for your home garden."
            image="/leaf.svg"
          />
          <ProductCard
            title="Natural Fertilizer"
            description="Organic compost blend that enriches the soil naturally."
            image="/leaf.svg"
          />
          <ProductCard
            title="Seed Kit"
            description="Starter kits with non-GMO seeds and instructions."
            image="/leaf.svg"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
