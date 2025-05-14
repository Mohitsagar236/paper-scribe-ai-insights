
import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="flex items-center">
              <span className="text-xl font-serif font-bold text-paperMentor-purple">
                Paper<span className="text-paperMentor-deepPurple">Mentor</span>
              </span>
            </Link>
            <p className="mt-3 text-sm text-gray-600">
              Helping researchers improve their academic writing with AI-powered feedback.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/pricing" className="text-sm text-gray-600 hover:text-paperMentor-purple">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-paperMentor-purple">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-paperMentor-purple">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-paperMentor-purple">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-paperMentor-purple">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            © {year} PaperMentor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
