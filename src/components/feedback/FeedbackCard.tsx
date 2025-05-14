
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type FeedbackCardProps = {
  title: string;
  type: "positive" | "suggestion" | "issue";
  children: React.ReactNode;
};

const FeedbackCard = ({ title, type, children }: FeedbackCardProps) => {
  const getBadgeVariant = () => {
    switch (type) {
      case "positive":
        return "bg-green-100 text-green-800 hover:bg-green-100";
      case "suggestion":
        return "bg-blue-100 text-blue-800 hover:bg-blue-100";
      case "issue":
        return "bg-red-100 text-red-800 hover:bg-red-100";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100";
    }
  };

  const getBadgeText = () => {
    switch (type) {
      case "positive":
        return "Strength";
      case "suggestion":
        return "Suggestion";
      case "issue":
        return "Issue";
      default:
        return "Feedback";
    }
  };

  return (
    <Card className="mb-6 shadow-sm">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-medium">{title}</CardTitle>
          <Badge className={`font-normal ${getBadgeVariant()}`}>
            {getBadgeText()}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default FeedbackCard;
