"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import * as React from "react";

export default function ContactUs() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log("Form submitted");
    };

    return (
        <section className="container mx-auto px-4 pt-12 pb-24">
            <div
                className="px-0 py-4 sm:px-20 sm:py-8 bg-white"
                style={{ borderRadius: "2rem" }}
            >
                <Card className="border-none bg-transparent shadow-none">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold text-center text-purple-600">
                            Contact Us
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                                <div className="space-y-2">
                                    <Label htmlFor="firstName">
                                        First Name
                                    </Label>
                                    <Input
                                        id="firstName"
                                        // placeholder="Enter your first name"
                                        required
                                        className="py-6 text-lg px-4"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="lastName">Last Name</Label>
                                    <Input
                                        id="lastName"
                                        // placeholder="Enter your last name"
                                        required
                                        className="py-6 text-lg px-4"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                                <div className="space-y-2">
                                    <Label htmlFor="contactNumber">
                                        Contact Number
                                    </Label>
                                    <Input
                                        id="contactNumber"
                                        type="tel"
                                        // placeholder="Enter your contact number"
                                        required
                                        className="py-6 text-lg px-4"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="emailId">Email ID</Label>
                                    <Input
                                        id="emailId"
                                        type="email"
                                        // placeholder="Enter your email address"
                                        required
                                        className="py-6 text-lg px-4"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                                <div className="space-y-2">
                                    <Label htmlFor="preferredDestination">
                                        Preferred Destination
                                    </Label>
                                    <Select>
                                        <SelectTrigger id="preferredDestination" className="py-6 text-lg px-4">
                                            <SelectValue placeholder="" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-white">
                                            <SelectItem
                                                value="usa"
                                                className="cursor-pointer hover:!bg-purple-500 hover:!text-white"
                                            >
                                                USA
                                            </SelectItem>
                                            <SelectItem
                                                value="uk"
                                                className="cursor-pointer hover:!bg-purple-500 hover:!text-white"
                                            >
                                                UK
                                            </SelectItem>
                                            <SelectItem
                                                value="canada"
                                                className="cursor-pointer hover:!bg-purple-500 hover:!text-white"
                                            >
                                                Canada
                                            </SelectItem>
                                            <SelectItem
                                                value="australia"
                                                className="cursor-pointer hover:!bg-purple-500 hover:!text-white"
                                            >
                                                Australia
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="planToStudy">
                                        When do you plan to study?
                                    </Label>
                                    <Select>
                                        <SelectTrigger id="planToStudy" className="py-6 text-lg px-4">
                                            <SelectValue placeholder="" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-white">
                                            <SelectItem
                                                value="immediately"
                                                className="cursor-pointer hover:!bg-purple-500 hover:!text-white"
                                            >
                                                Immediately
                                            </SelectItem>
                                            <SelectItem
                                                value="3months"
                                                className="cursor-pointer hover:!bg-purple-500 hover:!text-white"
                                            >
                                                Within 3 months
                                            </SelectItem>
                                            <SelectItem
                                                value="6months"
                                                className="cursor-pointer hover:!bg-purple-500 hover:!text-white"
                                            >
                                                Within 6 months
                                            </SelectItem>
                                            <SelectItem
                                                value="1year"
                                                className="cursor-pointer hover:!bg-purple-500 hover:!text-white"
                                            >
                                                Within 1 year
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                                <div className="space-y-2">
                                    <Label htmlFor="fundingSource">
                                        How would you fund your education?
                                    </Label>
                                    <Select>
                                        <SelectTrigger id="fundingSource" className="py-6 text-lg px-4">
                                            <SelectValue placeholder="" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-white">
                                            <SelectItem
                                                value="self"
                                                className="cursor-pointer hover:!bg-purple-500 hover:!text-white"
                                            >
                                                Self-funded
                                            </SelectItem>
                                            <SelectItem
                                                value="loan"
                                                className="cursor-pointer hover:!bg-purple-500 hover:!text-white"
                                            >
                                                Education Loan
                                            </SelectItem>
                                            <SelectItem
                                                value="scholarship"
                                                className="cursor-pointer hover:!bg-purple-500 hover:!text-white"
                                            >
                                                Scholarship
                                            </SelectItem>
                                            <SelectItem
                                                value="other"
                                                className="cursor-pointer hover:!bg-purple-500 hover:!text-white"
                                            >
                                                Other
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="studyLevel">
                                        Study level
                                    </Label>
                                    <Select>
                                        <SelectTrigger id="studyLevel" className="py-6 text-lg px-4">
                                            <SelectValue placeholder="" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-white">
                                            <SelectItem
                                                value="undergraduate"
                                                className="cursor-pointer hover:!bg-purple-500 hover:!text-white"
                                            >
                                                Undergraduate
                                            </SelectItem>
                                            <SelectItem
                                                value="postgraduate"
                                                className="cursor-pointer hover:!bg-purple-500 hover:!text-white"
                                            >
                                                Postgraduate
                                            </SelectItem>
                                            <SelectItem
                                                value="phd"
                                                className="cursor-pointer hover:!bg-purple-500 hover:!text-white"
                                            >
                                                PhD
                                            </SelectItem>
                                            <SelectItem
                                                value="other"
                                                className="cursor-pointer hover:!bg-purple-500 hover:!text-white"
                                            >
                                                Other
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <div className="flex items-center justify-center w-full">
                                <Button
                                    type="submit"
                                    className="bg-purple-600 hover:bg-purple-700 text-white px-10 py-5"
                                >
                                    Submit your detail
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
