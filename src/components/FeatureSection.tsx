
import { Book, FileText, Search, CircleCheck } from "lucide-react";

const features = [
  {
    name: "Smart Paper Analysis",
    description:
      "Upload your research paper and get instant AI-powered feedback on title clarity, abstract, structure, and more.",
    icon: FileText,
  },
  {
    name: "Citation & Reference Check",
    description:
      "Automatically detect citation issues and ensure your references follow the proper format for your target journal.",
    icon: Book,
  },
  {
    name: "Journal Recommendations",
    description:
      "Get personalized recommendations for journals that are most likely to accept your research paper based on content and style.",
    icon: Search,
  },
  {
    name: "Grammar & Structure Improvement",
    description:
      "Receive detailed suggestions to improve your writing style, clarity, and academic tone.",
    icon: CircleCheck,
  },
];

const FeatureSection = () => {
  return (
    <div className="py-16 bg-white sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-paperMentor-purple font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl font-serif leading-8 font-bold text-gray-900 sm:text-4xl">
            Everything you need for academic excellence
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            PaperMentor offers comprehensive tools to help researchers craft publication-ready papers.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name} className="card-hover-effect bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-paperMentor-softPurple text-paperMentor-purple">
                  <feature.icon className="h-6 w-6" />
                </div>
                <div className="mt-5">
                  <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
