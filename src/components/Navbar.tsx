
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white py-4 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-serif font-bold text-paperMentor-purple">
                Paper<span className="text-paperMentor-deepPurple">Mentor</span>
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-paperMentor-purple transition-colors">
              Home
            </Link>
            <Link to="/pricing" className="text-gray-700 hover:text-paperMentor-purple transition-colors">
              Pricing
            </Link>
            <Link to="/login" className="text-gray-700 hover:text-paperMentor-purple transition-colors">
              Log in
            </Link>
            <Button asChild className="bg-paperMentor-purple hover:bg-paperMentor-deepPurple">
              <Link to="/signup">
                <LogIn className="mr-2 h-4 w-4" />
                Sign up
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="flex items-center justify-center"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className="h-6 w-6 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-paperMentor-purple transition-colors">
                Home
              </Link>
              <Link to="/pricing" className="text-gray-700 hover:text-paperMentor-purple transition-colors">
                Pricing
              </Link>
              <Link to="/login" className="text-gray-700 hover:text-paperMentor-purple transition-colors">
                Log in
              </Link>
              <Button asChild className="bg-paperMentor-purple hover:bg-paperMentor-deepPurple w-full">
                <Link to="/signup">
                  <LogIn className="mr-2 h-4 w-4" />
                  Sign up
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
