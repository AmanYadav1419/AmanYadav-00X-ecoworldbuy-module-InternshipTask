import leaf from "../assets/leaf.svg";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center px-4 py-16 text-center max-w-3xl mx-auto">
      <img src="/logo.svg" alt="Eco Logo" className="w-20 mb-4" />
      <h1 className="text-4xl md:text-5xl font-montserrat text-green-600 mb-4 leading-tight">
        Welcome to EcoWorldBuy
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Your one-stop shop for sustainable and eco-friendly products.
      </p>
      <button className="px-6 py-2 border border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition rounded-full cursor-pointer">
        Shop Now
      </button>
      <div className="mt-10">
        <img src={leaf} alt="Floating Leaf" className="w-10 animate-float" />
      </div>
    </section>
  );
};

export default HeroSection;
