
import { Button } from "@/components/ui/button";
import { CheckCircle, CircleX } from "lucide-react";
import { Link } from "react-router-dom";

const PricingSection = () => {
  const plans = [
    {
      name: "Free",
      price: "₹0",
      period: "forever",
      description: "Perfect for trying out PaperMentor",
      features: [
        { text: "1 document analysis per month", included: true },
        { text: "Basic title & abstract feedback", included: true },
        { text: "Grammar & structure suggestions", included: true },
        { text: "Citation format check", included: true },
        { text: "Journal recommendations", included: false },
        { text: "Similar papers suggestions", included: false },
        { text: "Unlimited document history", included: false },
        { text: "Priority analysis", included: false },
      ],
      cta: "Start for Free",
      ctaLink: "/signup",
      highlight: false,
    },
    {
      name: "Pro",
      price: "₹199",
      period: "per month",
      description: "For researchers who want comprehensive feedback",
      features: [
        { text: "Unlimited document analyses", included: true },
        { text: "Advanced title & abstract feedback", included: true },
        { text: "Grammar & structure suggestions", included: true },
        { text: "Citation format check", included: true },
        { text: "Journal recommendations", included: true },
        { text: "Similar papers suggestions", included: true },
        { text: "Unlimited document history", included: true },
        { text: "Priority analysis", included: true },
      ],
      cta: "Get Pro",
      ctaLink: "/signup",
      highlight: true,
    },
  ];

  return (
    <div id="pricing" className="py-16 bg-white sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-paperMentor-purple font-semibold tracking-wide uppercase">
            Pricing
          </h2>
          <p className="mt-2 text-3xl font-serif leading-8 font-bold text-gray-900 sm:text-4xl">
            Simple, transparent pricing
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Choose the plan that best fits your research needs
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:max-w-4xl lg:mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-lg shadow-lg divide-y divide-gray-200 ${
                plan.highlight
                  ? "border-2 border-paperMentor-purple relative"
                  : "border border-gray-200"
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3">
                  <span className="bg-paperMentor-purple text-white text-xs font-semibold px-4 py-1 rounded-full uppercase">
                    Popular
                  </span>
                </div>
              )}
              <div className="p-6">
                <h3 className="text-2xl font-semibold leading-6 text-gray-900">
                  {plan.name}
                </h3>
                <p className="mt-4">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-base font-medium text-gray-500">
                    /{plan.period}
                  </span>
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  {plan.description}
                </p>
                <Button
                  asChild
                  className={`mt-8 w-full ${
                    plan.highlight
                      ? "bg-paperMentor-purple hover:bg-paperMentor-deepPurple"
                      : "bg-gray-800 hover:bg-gray-900"
                  }`}
                >
                  <Link to={plan.ctaLink}>{plan.cta}</Link>
                </Button>
              </div>
              <div className="px-6 pt-6 pb-8">
                <h4 className="text-sm font-medium text-gray-900">
                  What's included
                </h4>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex space-x-3">
                      {feature.included ? (
                        <CheckCircle className="flex-shrink-0 h-5 w-5 text-green-500" />
                      ) : (
                        <CircleX className="flex-shrink-0 h-5 w-5 text-gray-400" />
                      )}
                      <span
                        className={`text-sm ${
                          feature.included
                            ? "text-gray-500"
                            : "text-gray-400"
                        }`}
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
