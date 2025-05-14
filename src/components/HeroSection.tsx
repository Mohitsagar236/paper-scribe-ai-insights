
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-b from-white to-paperMentor-softPurple">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12">
            <h1 className="text-4xl font-serif font-bold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Improve your</span>
              <span className="block text-paperMentor-purple">academic writing</span>
              <span className="block">with AI</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              PaperMentor provides detailed AI feedback on your research papers, helping you improve clarity, 
              structure, and citations before submitting to journals.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-paperMentor-purple hover:bg-paperMentor-deepPurple text-lg"
              >
                <Link to="/upload">
                  Try for free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-paperMentor-purple text-paperMentor-purple hover:bg-paperMentor-softPurple text-lg"
              >
                <Link to="/">
                  Learn more
                </Link>
              </Button>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 lg:w-1/2">
            <div className="relative mx-auto w-full rounded-lg shadow-lg">
              <img
                className="w-full rounded-lg"
                src="https://images.unsplash.com/photo-1456324504439-367cee3b3c32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                alt="Researcher working on academic paper"
              />
              <div className="absolute inset-0 rounded-lg bg-paperMentor-purple opacity-10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
