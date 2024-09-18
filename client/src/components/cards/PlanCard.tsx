import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PlanFeature {
  name: string;
  included: boolean;
}

interface PlanProps {
  name: string;
  price: string;
  description: string;
  features: PlanFeature[];
}

interface PlanCardProps extends PlanProps {
  active: boolean;
  onClick: () => void;
}

function PlanCard({ name, price, description, features, active, onClick }: PlanCardProps) {
    return (
      <Card onClick={onClick} className={`w-full bg-gray-800 opacity-90 text-white cursor-pointer ${active ? "border-2 border-green-700" : ""}`}>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">{name}</CardTitle>
          <p className="text-sm text-gray-400">{description}</p>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-bold mb-6">{price}</p>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center">
                {feature.included ? (
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                ) : (
                  <X className="mr-2 h-4 w-4 text-red-500" />
                )}
                <span className={feature.included ? "text-white" : "text-gray-400"}>{feature.name}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-purple-600 hover:bg-purple-700">Book consultation</Button>
        </CardFooter>
      </Card>
    );
  }

export default PlanCard;