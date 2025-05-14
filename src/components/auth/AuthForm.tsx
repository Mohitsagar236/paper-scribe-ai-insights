
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

type AuthFormProps = {
  type: "login" | "signup";
};

const emailSchema = z.string().email({ message: "Invalid email address" });
const passwordSchema = z.string().min(8, { message: "Password must be at least 8 characters" });

const AuthForm = ({ type }: AuthFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
    confirmPassword?: string;
  }>({});
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const validateForm = () => {
    const newErrors: {
      email?: string;
      password?: string;
      confirmPassword?: string;
    } = {};
    
    try {
      emailSchema.parse(email);
    } catch (error) {
      if (error instanceof z.ZodError) {
        newErrors.email = error.errors[0].message;
      }
    }
    
    try {
      passwordSchema.parse(password);
    } catch (error) {
      if (error instanceof z.ZodError) {
        newErrors.password = error.errors[0].message;
      }
    }
    
    if (type === "signup" && password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    
    // Simulate authentication
    setTimeout(() => {
      setIsLoading(false);
      
      toast({
        title: type === "login" ? "Logged in successfully" : "Account created successfully",
        description: type === "login" 
          ? "Welcome back to PaperMentor!" 
          : "Your account has been created. You can now access PaperMentor.",
      });
      
      // Redirect (would normally happen after actual auth)
      window.location.href = "/upload";
    }, 1500);
  };

  return (
    <div className="max-w-md w-full mx-auto bg-white p-8 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-2xl font-serif font-bold text-center">
        {type === "login" ? "Log in to your account" : "Create an account"}
      </h2>
      <p className="text-gray-600 text-center mt-2 mb-6">
        {type === "login"
          ? "Enter your details to access your account"
          : "Join PaperMentor to improve your academic writing"}
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email address
          </label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            autoComplete="email"
            required
            className={errors.email ? "border-red-500" : ""}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
            autoComplete={type === "login" ? "current-password" : "new-password"}
            required
            className={errors.password ? "border-red-500" : ""}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </div>
        
        {type === "signup" && (
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
              Confirm password
            </label>
            <Input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="********"
              autoComplete="new-password"
              required
              className={errors.confirmPassword ? "border-red-500" : ""}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
            )}
          </div>
        )}
        
        {type === "login" && (
          <div className="flex justify-end">
            <Link to="/forgot-password" className="text-sm text-paperMentor-purple hover:underline">
              Forgot your password?
            </Link>
          </div>
        )}
        
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-paperMentor-purple hover:bg-paperMentor-deepPurple"
        >
          {isLoading ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {type === "login" ? "Logging in..." : "Creating account..."}
            </span>
          ) : (
            <>{type === "login" ? "Log in" : "Create account"}</>
          )}
        </Button>
      </form>
      
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          {type === "login" ? "Don't have an account?" : "Already have an account?"}
          <Link
            to={type === "login" ? "/signup" : "/login"}
            className="ml-1 text-paperMentor-purple hover:underline"
          >
            {type === "login" ? "Sign up" : "Log in"}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
