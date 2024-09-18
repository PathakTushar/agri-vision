"use client";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import axios from "axios";
import { countries } from "countries-list";
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { ComboboxDemo } from "../shared/ComboBoxDemo";
import UniversityCard from "./UniversityCard";

interface University {
    id: number;
    name: string;
    program: string;
    location: string;
    image: string;
    country: string;
}

const filters = [
    "Consectetur",
    "Lorem ipsum",
    "Lorem ipsum dolor",
    "Consectetur",
    "Lorem ipsum",
    "Lorem ipsum dolor",
    "Consectetur",
    "Consectetur",
    "Lorem ipsum",
    "Lorem ipsum dolor",
    "Consectetur",
    "Lorem ipsum",
    "Lorem ipsum dolor",
    "Consectetur",
];

export default function UniversityExplorer() {
    const [universities, setUniversities] = useState<University[]>([]);
    const [filterIndex, setFilterIndex] = useState(0);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [countryName, setCountryName] = useState<string | null>(null);
    useEffect(() => {
        const fetchUniversities = async () => {
            try {
                console.log(countries);
                const response = await axios.get(
                    `${process.env.SERVER}/universities?country=${countryName}`
                );
                setUniversities(response.data.universities); // Assuming the API returns an array of universities
            } catch (error) {
                setError("Failed to fetch universities");
            } finally {
                setLoading(false);
            }
        };

        fetchUniversities();
    }, [countryName]);

    const onChoose = (country: string) => {
        setCountryName(country);
    };

    if (loading) return <p className="text-center text-gray-500">Loading...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-6">
                Explore universities and colleges across the world
            </h2>

            <ScrollArea className="w-full whitespace-nowrap mb-4">
                <div className="flex w-max space-x-4 p-4">
                    {filters.map((filter, index) => (
                        <Button
                            key={index}
                            onClick={() => setFilterIndex(index)}
                            className={`flex-shrink-0 rounded-full transition-colors duration-300 ${
                                filterIndex === index
                                    ? "bg-purple-600 hover:bg-purple-700 text-white"
                                    : "bg-transparent text-black border border-gray-600"
                            }`}
                        >
                            {filter}
                        </Button>
                    ))}
                </div>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>
            <div className="flex justify-end">
                <ComboboxDemo onChoose={onChoose} />
            </div>
            {universities.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
                    {universities.map((university) => (
                        <UniversityCard
                            key={university.id}
                            university={university}
                        />
                    ))}
                </div>
            ) : (
                <div className="w-full pt-10">
                    <h3 className="text-center text-black font-bold text-lg">
                        No Universities found in {countryName}
                    </h3>
                </div>
            )}

            <div className="mt-8 text-center">
                <Button
                    variant="outline"
                    className="px-8 py-6 rounded-lg text-lg text-slate-500 font-bold"
                >
                    Explore all colleges, universities
                    <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
            </div>
        </div>
    );
}
