
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import UploadSection from "@/components/UploadSection";

const Upload = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-serif font-bold text-gray-900">
              Analyze Your Research Paper
            </h1>
            <p className="mt-3 text-xl text-gray-600">
              Get AI-powered feedback to improve your academic writing
            </p>
          </div>
          <UploadSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Upload;
