
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthForm from "@/components/auth/AuthForm";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Signup = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 space-y-6">
              <div>
                <h1 className="text-4xl font-serif font-bold text-gray-900 tracking-tight">
                  Join PaperMentor
                </h1>
                <p className="mt-4 text-xl text-gray-600">
                  Improve your academic writing with AI-powered feedback and analysis
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="bg-paperMentor-softPurple p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-paperMentor-purple"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium text-gray-900">Upload your paper</h3>
                      <p className="text-gray-500 text-sm">Support for PDF and DOCX formats</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-paperMentor-softPurple p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-paperMentor-purple"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium text-gray-900">Get expert feedback</h3>
                      <p className="text-gray-500 text-sm">AI analysis on title, abstract, grammar, and more</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-paperMentor-softPurple p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-paperMentor-purple"><path d="M14 3v4a1 1 0 0 0 1 1h4"></path><path d="M5 8v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-9l-7-7H6a1 1 0 0 0-1 1Z"></path><path d="M12 17v-6"></path><path d="M9 14h6"></path></svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium text-gray-900">Improve your writing</h3>
                      <p className="text-gray-500 text-sm">Specific suggestions to enhance your paper</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <AuthForm type="signup" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Signup;
