
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeedbackSection from "@/components/feedback/FeedbackSection";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

const Results = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
            <div>
              <h1 className="text-3xl font-serif font-bold text-gray-900">
                Paper Analysis Results
              </h1>
              <p className="mt-2 text-gray-600">
                Machine Learning Approaches for Predictive Analytics in Healthcare Settings.pdf
              </p>
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Button variant="outline" className="flex items-center gap-2">
                <Download size={18} />
                Download Report
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <FileText size={18} />
                View Original
              </Button>
            </div>
          </div>

          <FeedbackSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Results;
