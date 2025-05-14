
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FeedbackCard from "./FeedbackCard";

const FeedbackSection = () => {
  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-serif font-bold mb-6">Paper Analysis Results</h2>

      <Tabs defaultValue="title-abstract" className="w-full">
        <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-4">
          <TabsTrigger value="title-abstract">Title & Abstract</TabsTrigger>
          <TabsTrigger value="structure">Structure</TabsTrigger>
          <TabsTrigger value="grammar">Grammar</TabsTrigger>
          <TabsTrigger value="citations">Citations</TabsTrigger>
          <TabsTrigger value="journals">Journal Fit</TabsTrigger>
          <TabsTrigger value="similar">Similar Papers</TabsTrigger>
        </TabsList>

        <TabsContent value="title-abstract" className="animate-fade-in">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <FeedbackCard title="Title Clarity" type="suggestion">
              <p className="text-gray-700">
                Your title "<strong>Machine Learning Approaches for Predictive Analytics in Healthcare Settings</strong>"
                is clear but could be more specific about the exact healthcare application.
              </p>
              <div className="mt-4 bg-paperMentor-softPurple p-4 rounded">
                <p className="font-medium text-gray-900">Suggestion:</p>
                <p className="text-gray-700">
                  Consider revising to "<strong>Deep Learning Models for Predicting Patient Readmission Rates in Urban Hospitals</strong>"
                  to highlight the specific technique (deep learning) and application (readmission prediction).
                </p>
              </div>
            </FeedbackCard>

            <FeedbackCard title="Abstract Structure" type="positive">
              <p className="text-gray-700">
                Your abstract follows the recommended structure with clear problem statement, methods, results, and conclusion sections.
                The length (248 words) is appropriate for most journals.
              </p>
              <div className="mt-4 border-l-4 border-green-500 pl-4">
                <p className="text-gray-700">
                  The use of quantitative results (85.7% accuracy) strengthens your abstract and helps establish the significance of your findings.
                </p>
              </div>
            </FeedbackCard>

            <FeedbackCard title="Abstract Clarity" type="issue">
              <p className="text-gray-700">
                The methodology section of your abstract contains jargon that may not be familiar to a broader audience.
              </p>
              <div className="mt-4 bg-red-50 p-4 rounded">
                <p className="font-medium text-gray-900">Issue:</p>
                <p className="text-gray-700">
                  Terms like "<em>multi-headed attention mechanism</em>" and "<em>stochastic gradient descent with momentum</em>"
                  could be simplified or briefly explained for readers outside your specific field.
                </p>
              </div>
            </FeedbackCard>
          </div>
        </TabsContent>

        <TabsContent value="structure" className="animate-fade-in">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <FeedbackCard title="Section Organization" type="positive">
              <p className="text-gray-700">
                Your paper follows a logical structure with clear sections: Introduction, Literature Review, Methodology, Results, Discussion, and Conclusion.
              </p>
            </FeedbackCard>
            
            <FeedbackCard title="Section Balance" type="issue">
              <p className="text-gray-700">
                The methodology section (8 pages) is disproportionately long compared to your results section (3 pages).
              </p>
              <div className="mt-4 bg-paperMentor-softPurple p-4 rounded">
                <p className="font-medium text-gray-900">Suggestion:</p>
                <p className="text-gray-700">
                  Consider condensing technical details in the methodology section and expanding on the implications of your results.
                </p>
              </div>
            </FeedbackCard>
          </div>
        </TabsContent>

        <TabsContent value="grammar" className="animate-fade-in">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <FeedbackCard title="Grammar Issues" type="issue">
              <p className="text-gray-700">
                We identified 14 grammatical issues throughout your paper, primarily related to subject-verb agreement and tense consistency.
              </p>
              <div className="mt-4 space-y-2">
                <div className="bg-red-50 p-3 rounded">
                  <p className="text-sm text-gray-600">Page 3, paragraph 2:</p>
                  <p className="text-gray-700">
                    "The data <span className="line-through">were</span> <span className="text-red-600 font-medium">was</span> collected over a six-month period."
                  </p>
                </div>
                <div className="bg-red-50 p-3 rounded">
                  <p className="text-sm text-gray-600">Page 7, paragraph 1:</p>
                  <p className="text-gray-700">
                    "The algorithms <span className="line-through">performs</span> <span className="text-red-600 font-medium">perform</span> well under these conditions."
                  </p>
                </div>
              </div>
            </FeedbackCard>
            
            <FeedbackCard title="Academic Tone" type="positive">
              <p className="text-gray-700">
                Your writing maintains an appropriate academic tone throughout, avoiding colloquialisms and maintaining formality.
              </p>
            </FeedbackCard>
          </div>
        </TabsContent>

        <TabsContent value="citations" className="animate-fade-in">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <FeedbackCard title="Citation Format" type="issue">
              <p className="text-gray-700">
                Your paper uses mixed citation styles. Some citations follow APA format while others use IEEE format.
              </p>
              <div className="mt-4 bg-paperMentor-softPurple p-4 rounded">
                <p className="font-medium text-gray-900">Suggestion:</p>
                <p className="text-gray-700">
                  Standardize all citations to follow IEEE format, which is commonly used in computer science and engineering publications.
                </p>
              </div>
            </FeedbackCard>
            
            <FeedbackCard title="Recent Literature" type="suggestion">
              <p className="text-gray-700">
                Most of your citations (78%) are from literature published more than 5 years ago. For rapidly evolving fields like machine learning, more recent references would strengthen your paper.
              </p>
              <div className="mt-4 bg-paperMentor-softPurple p-4 rounded">
                <p className="font-medium text-gray-900">Suggested recent papers:</p>
                <ul className="list-disc pl-5 text-gray-700">
                  <li>Zhang et al. (2023) "Advanced Transformer Models for Healthcare Predictive Analytics"</li>
                  <li>Patel & Johnson (2022) "Privacy-Preserving Machine Learning in Clinical Settings"</li>
                  <li>Rodriguez et al. (2023) "Benchmarking Deep Learning Models for Medical Prediction Tasks"</li>
                </ul>
              </div>
            </FeedbackCard>
          </div>
        </TabsContent>

        <TabsContent value="journals" className="animate-fade-in">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <FeedbackCard title="Journal Recommendations" type="suggestion">
              <p className="text-gray-700">
                Based on your paper's topic, methodology, and findings, the following journals would be good matches:
              </p>
              <div className="mt-4 space-y-4">
                <div className="border border-paperMentor-purple rounded-lg p-4 bg-paperMentor-softPurple">
                  <h4 className="font-medium text-lg">1. IEEE Journal of Biomedical and Health Informatics</h4>
                  <p className="text-sm mt-1">Impact Factor: 5.78</p>
                  <p className="mt-2">Strong fit for your methodology and healthcare application. Publishes similar machine learning research.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-medium text-lg">2. JMIR Medical Informatics</h4>
                  <p className="text-sm mt-1">Impact Factor: 4.32</p>
                  <p className="mt-2">Good match for applied healthcare ML research with clinical implications.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-medium text-lg">3. Artificial Intelligence in Medicine</h4>
                  <p className="text-sm mt-1">Impact Factor: 5.32</p>
                  <p className="mt-2">Appropriate for novel AI/ML techniques in medical applications.</p>
                </div>
              </div>
            </FeedbackCard>
          </div>
        </TabsContent>

        <TabsContent value="similar" className="animate-fade-in">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <FeedbackCard title="Similar Research Papers" type="suggestion">
              <p className="text-gray-700">
                We've identified these recent papers with similar methodology or applications that you may want to reference:
              </p>
              <div className="mt-4 space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-medium text-lg">1. "Deep Learning for Hospital Readmission Prediction: A Systematic Review"</h4>
                  <p className="text-sm mt-1">Chen et al., 2023 - Journal of Medical Systems</p>
                  <p className="mt-2">Recent review covering several techniques similar to yours. Could provide context for your results.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-medium text-lg">2. "Transformer Models for Patient Trajectory Prediction in Critical Care"</h4>
                  <p className="text-sm mt-1">Martinez et al., 2022 - Nature Digital Medicine</p>
                  <p className="mt-2">Uses similar attention mechanisms for healthcare predictions.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-medium text-lg">3. "Explainable AI for Medical Decision Support Systems"</h4>
                  <p className="text-sm mt-1">Wong & Patel, 2023 - Artificial Intelligence in Medicine</p>
                  <p className="mt-2">Addresses interpretability issues that complement your research focus.</p>
                </div>
              </div>
            </FeedbackCard>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FeedbackSection;
