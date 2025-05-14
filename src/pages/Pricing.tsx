
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";

const Pricing = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif font-bold text-gray-900">
              Simple, Transparent Pricing
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Choose the plan that fits your research needs
            </p>
          </div>
        </div>
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
