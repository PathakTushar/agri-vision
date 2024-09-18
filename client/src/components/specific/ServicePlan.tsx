"use client";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useEffect, useState } from "react";
import PlanCard from "../cards/PlanCard";

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

export default function ServicePlan() {
    const [plans, setPlans] = useState<PlanProps[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const [activeIndex, setActiveIndex] = useState<number>(0)

    useEffect(() => {
        const fetchPlans = async () => {
            try {
                const response = await axios.get(
                    `${process.env.SERVER}/services`
                );
                setPlans(response.data.services); // Assuming the API returns an array of plans
            } catch (error) {
                setError("Failed to fetch plans");
            } finally {
                setLoading(false);
            }
        };

        fetchPlans();
    }, []);

    if (loading) return <p className="text-white text-center">Loading...</p>;
    if (error) return <p className="text-red-500 text-center">{error}</p>;

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-900 p-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-white text-center mb-4">
                    Service Plan
                </h1>
                <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industrys
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {plans.map((plan, index) => (
                        <PlanCard onClick={() => setActiveIndex(index)} key={index} {...plan} active={index === activeIndex}/>
                    ))}
                </div>
                <div className="text-center">
                    <Button
                        variant={"outline"}
                        className="hover:text-slate-300 hover:border-slate-300 text-white"
                    >
                        Book first consultation free
                    </Button>
                </div>
            </div>
        </div>
    );
}
