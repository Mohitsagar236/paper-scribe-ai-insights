
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <div className="bg-paperMentor-purple">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold text-white sm:text-4xl">
            Ready to improve your research paper?
          </h2>
          <p className="mt-4 text-lg text-paperMentor-softPurple">
            Join thousands of researchers who have improved their papers with PaperMentor. 
            Get detailed AI feedback that helps increase your chances of publication.
          </p>
          <div className="mt-8 flex justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-paperMentor-purple hover:bg-paperMentor-softPurple"
            >
              <Link to="/signup">
                Try PaperMentor for free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
