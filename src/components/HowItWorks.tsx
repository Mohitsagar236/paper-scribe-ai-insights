
import { ArrowRight } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Upload your paper",
    description:
      "Upload your research paper in PDF or DOCX format to our secure platform.",
  },
  {
    id: "02",
    title: "AI Analysis",
    description:
      "Our AI analyzes your paper for improvements in title, abstract, structure, grammar, and citations.",
  },
  {
    id: "03",
    title: "Review Feedback",
    description:
      "Get comprehensive feedback organized by sections with actionable suggestions for improvement.",
  },
  {
    id: "04",
    title: "Revise & Improve",
    description:
      "Apply the suggestions to enhance your paper before submitting to academic journals.",
  },
];

const HowItWorks = () => {
  return (
    <div className="py-16 bg-paperMentor-softPurple sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-paperMentor-purple font-semibold tracking-wide uppercase">
            Simple Process
          </h2>
          <p className="mt-2 text-3xl font-serif leading-8 font-bold text-gray-900 sm:text-4xl">
            How PaperMentor Works
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
            Four easy steps to improve your academic writing and increase your
            chances of publication.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.id} className="relative">
                <div className="bg-white p-8 rounded-lg shadow-sm h-full flex flex-col">
                  <div className="text-3xl font-bold text-paperMentor-purple mb-4">
                    {step.id}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                  
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-5 top-1/2 transform -translate-y-1/2">
                      <ArrowRight className="h-10 w-10 text-paperMentor-lightPurple" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
