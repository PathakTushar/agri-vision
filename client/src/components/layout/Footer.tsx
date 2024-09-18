import Image from "next/image";
import Link from "next/link";
import { Instagram, Youtube, Twitter, Linkedin, MapPin } from "lucide-react";

const quickLinks = [
    { name: "Program", href: "#" },
    { name: "Test series", href: "#" },
    { name: "Skill Connect", href: "#" },
    { name: "Expert Connect", href: "#" },
    { name: "Study Abroad", href: "#" },
];

const companyLinks = [
    { name: "About us", href: "#" },
    { name: "Why choose us", href: "#" },
    { name: "Policies", href: "#" },
    { name: "Privacy Policy", href: "#" },
];

const securityLinks = [
    { name: "Report", href: "#" },
    { name: "Trademark Notice", href: "#" },
    { name: "Advertise with us", href: "#" },
    { name: "Help & Support", href: "#" },
];

const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "Youtube", icon: Youtube, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
];

export default function Footer() {
    return (
        <footer className="bg-white">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {/* Logo and Tagline */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-1 flex flex-col items-center gap-12">
                        <div className="flex items-center flex-col">
                            <Image
                                src="https://static.vecteezy.com/system/resources/previews/020/088/173/original/initial-e-nest-logo-vector.jpg"
                                alt="E-NEST Logo"
                                width={100}
                                height={50}
                            />
                            <p className="mt-2 text-sm text-gray-600">
                                Empowering Agri and food technology
                            </p>
                        </div>
                        <div className="flex items-center flex-col">
                            <h3 className="font-semibold text-lg">
                                Contact with us
                            </h3>
                            <p className="text-sm text-gray-600 mb-2">Email</p>
                            <p className="text-sm text-gray-600">
                                Talk to A Councellor
                            </p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col items-center">
                        <h3 className="font-semibold text-lg mb-4">
                            Quick Link
                        </h3>
                        <ul className="flex items-center flex-col space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-gray-600 hover:text-purple-600"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div className="flex flex-col items-center">
                        <h3 className="font-semibold text-lg mb-4">Company</h3>
                        <ul className="flex items-center flex-col space-y-2">
                            {companyLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-gray-600 hover:text-purple-600"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Security Links */}
                    <div className="flex flex-col items-center">
                        <h3 className="font-semibold text-lg mb-4">Security</h3>
                        <ul className="flex items-center flex-col space-y-2">
                            {securityLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-gray-600 hover:text-purple-600"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Incubated by */}
                    <div className="flex flex-col items-center">
                        <h3 className="font-semibold text-lg mb-4">
                            Incubated by
                        </h3>
                        <div className="space-y-4">
                            <Image
                                src="https://okcredit-blog-images-prod.storage.googleapis.com/2021/07/msme3.jpeg"
                                alt="MSME Logo"
                                width={100}
                                height={50}
                            />
                            <Image
                                src="https://iimaventures.com/wp-content/uploads/2024/01/IIMA-Logo.png"
                                alt="IIMA Ventures Logo"
                                width={100}
                                height={50}
                            />
                        </div>
                    </div>
                </div>

                {/* Contact, Address, and Social */}
                <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-8">
                    <div className="flex flex-col items-center">
                        <h3 className="font-semibold text-lg mb-4">Address</h3>
                        <p className="text-sm text-gray-600 flex items-center">
                            <MapPin className="mr-2 h-4 w-4" /> Address link
                        </p>
                    </div>

                    {/* App Store Links */}
                    <div className="col-span-1 lg:col-span-3 flex items-center justify-center">
                        <div className="flex justify-center items-center space-x-4">
                            <Link href="#" className="mb-2">
                                <Image
                                    src="https://cdn.pixabay.com/photo/2021/09/22/16/07/google-play-6647242_1280.png"
                                    alt="Get it on Google Play"
                                    width={140}
                                    height={42}
                                />
                            </Link>
                            <Link href="#" className="mb-2">
                                <Image
                                    src="https://cdn.pixabay.com/photo/2021/09/22/16/07/app-store-6647240_1280.png"
                                    alt="Download on the App Store"
                                    width={140}
                                    height={42}
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <h3 className="font-semibold text-lg mb-4">
                            Let's get social:
                        </h3>
                        <div className="flex space-x-4">
                            {socialLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-600 hover:text-purple-600"
                                >
                                    <link.icon className="h-6 w-6" />
                                    <span className="sr-only">{link.name}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="bg-purple-900 text-white py-4">
                <div className="container mx-auto px-4 text-center text-sm">
                    Copyright © AgriVision4U Pvt. Ltd. 2024
                </div>
            </div>
        </footer>
    );
}
