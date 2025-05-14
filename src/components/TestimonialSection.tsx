
const testimonials = [
  {
    content:
      "PaperMentor has completely transformed how I prepare my research papers. The AI feedback helped me improve my abstract and structure, leading to acceptance in a high-impact journal.",
    author: "Dr. Sarah Chen",
    position: "Associate Professor, Computer Science",
  },
  {
    content:
      "I was struggling with proper citations and references in my dissertation. PaperMentor not only helped me fix all citation issues but also recommended more relevant papers to include.",
    author: "Michael Rodriguez",
    position: "PhD Candidate, Biochemistry",
  },
  {
    content:
      "As a non-native English speaker, academic writing has always been challenging. PaperMentor's grammar and structure suggestions have significantly improved my papers' clarity.",
    author: "Dr. Anika Patel",
    position: "Researcher, Environmental Sciences",
  },
];

const TestimonialSection = () => {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-paperMentor-purple font-semibold tracking-wide uppercase">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl font-serif leading-8 font-bold text-gray-900 sm:text-4xl">
            Researchers love PaperMentor
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            See how PaperMentor has helped academic professionals improve their research papers.
          </p>
        </div>

        <div className="mt-16 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-paperMentor-softBlue p-8 rounded-lg shadow-sm flex flex-col"
            >
              <div className="flex-1">
                <svg
                  className="h-8 w-8 text-paperMentor-purple opacity-40"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="mt-4 text-lg text-gray-600">{testimonial.content}</p>
              </div>
              <footer className="mt-6">
                <p className="text-base font-medium text-gray-900">
                  {testimonial.author}
                </p>
                <p className="text-sm text-gray-500">{testimonial.position}</p>
              </footer>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
