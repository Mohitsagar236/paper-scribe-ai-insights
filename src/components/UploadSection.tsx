
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { FileUp, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const UploadSection = () => {
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const fileType = e.dataTransfer.files[0].type;
      if (fileType === "application/pdf" || 
          fileType === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
        setFile(e.dataTransfer.files[0]);
      } else {
        toast({
          title: "Invalid file format",
          description: "Please upload a PDF or DOCX file.",
          variant: "destructive",
        });
      }
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const fileType = e.target.files[0].type;
      if (fileType === "application/pdf" || 
          fileType === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
        setFile(e.target.files[0]);
      } else {
        toast({
          title: "Invalid file format",
          description: "Please upload a PDF or DOCX file.",
          variant: "destructive",
        });
      }
    }
  };

  const openFileSelector = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const removeFile = () => {
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = () => {
    if (!file) {
      toast({
        title: "No file selected",
        description: "Please upload a PDF or DOCX file to continue.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Processing your document",
      description: "We're analyzing your paper. This may take a few moments.",
    });
    
    // Here we would normally upload and process the file
    // For now, we'll just simulate a redirect to results
    setTimeout(() => {
      window.location.href = "/results";
    }, 3000);
  };

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <h2 className="text-2xl font-serif font-bold text-center mb-6">
          Upload Your Research Paper
        </h2>
        <p className="text-gray-600 text-center mb-8">
          Upload a PDF or DOCX file to receive AI-powered feedback on your academic writing
        </p>

        <div
          className={`upload-drop-zone ${dragActive ? "active" : ""} p-8 flex flex-col items-center justify-center`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,.docx"
            onChange={handleFileInput}
            className="hidden"
          />

          {!file ? (
            <>
              <FileUp className="h-16 w-16 text-paperMentor-purple mb-4" />
              <p className="text-lg font-medium text-gray-700 mb-1">
                Drag & drop your file here
              </p>
              <p className="text-gray-500 mb-6">
                or
              </p>
              <Button
                onClick={openFileSelector}
                className="bg-paperMentor-purple hover:bg-paperMentor-deepPurple"
              >
                Browse Files
              </Button>
              <p className="mt-4 text-sm text-gray-500">
                Supported formats: PDF, DOCX
              </p>
            </>
          ) : (
            <div className="w-full">
              <div className="flex items-center justify-between bg-paperMentor-softPurple p-4 rounded-lg">
                <div className="flex items-center">
                  <FileUp className="h-6 w-6 text-paperMentor-purple mr-3" />
                  <div>
                    <p className="font-medium text-gray-900 truncate max-w-xs">
                      {file.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {(file.size / (1024 * 1024)).toFixed(2)} MB
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={removeFile}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </div>
          )}
        </div>

        <div className="mt-8 text-center">
          <Button
            onClick={handleSubmit}
            disabled={!file}
            size="lg"
            className="bg-paperMentor-purple hover:bg-paperMentor-deepPurple"
          >
            Analyze Paper
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UploadSection;
