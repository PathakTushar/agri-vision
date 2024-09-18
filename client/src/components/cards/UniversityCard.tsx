import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface University {
    id: number;
    name: string;
    program: string;
    location: string;
    image: string;
}

function UniversityCard({ university }: { university: University }) {
    return (
        <Card className="overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-95">
            <img
                src={university.image}
                alt={university.name}
                className="w-full h-40 object-cover"
            />
            <CardContent className="p-4">
                <h3 className="text-sm text-gray-500">{university.name}</h3>
                <p className="font-semibold text-lg leading-tight mt-1">
                    {university.program}
                </p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
                <p className="text-sm text-gray-500">{university.location}</p>
            </CardFooter>
        </Card>
    );
}

export default UniversityCard;
