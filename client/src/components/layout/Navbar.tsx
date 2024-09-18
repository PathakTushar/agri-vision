import React, { useState } from "react";
import Container from "@/components/layout/Container";
import Logo from "./Logo";
import CommonAvatar from "./Avatar";
import Link from "next/link";
import {
    MdOutlinePeopleAlt,
    MdKeyboardArrowDown,
    MdOutlineAssignment,
    MdOutlinePsychology,
} from "react-icons/md";

import {LuGraduationCap} from "react-icons/lu"
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu"; // Import Dropdown components from shadcn

const Navbar = () => {
    return (
        <div className="fixed w-full bg-white z-10 shadow-sm">
            <div className="py-6">
                <Container>
                    <div className="flex justify-between items-center gap-4">
                        {/* Logo and Title */}
                        <div className="flex space-x-2 items-center">
                            <Logo />
                            <h1 className="font-bold text-2xl text-[#5f407a]">
                                E-NEST
                            </h1>
                        </div>

                        {/* Links hidden on small screens */}
                        <div className="hidden md:flex items-center space-x-2 lg:space-x-10">
                            <Link
                                href="/"
                                className="flex items-center font-semibold text-gray-700 hover:text-purple-500"
                            >
                                <LuGraduationCap
                                    size={20}
                                    className="mr-1 lg:mr-2 font-semibold"
                                />
                                Program
                            </Link>
                            <Link
                                href="/"
                                className="flex items-center font-semibold text-gray-700 hover:text-purple-500"
                            >
                                <MdOutlineAssignment
                                    size={20}
                                    className="mr-1 lg:mr-2 font-semibold"
                                />
                                Test Series
                            </Link>
                            <Link
                                href="/"
                                className="flex items-center text-gray-700 font-semibold hover:text-purple-500"
                            >
                                <MdOutlinePsychology
                                    size={20}
                                    className="mr-1 lg:mr-2 font-semibold"
                                />
                                Skill Connect
                            </Link>
                            <Link
                                href="/"
                                className="flex items-center text-gray-700 font-semibold hover:text-purple-500"
                            >
                                <MdOutlinePeopleAlt
                                    size={20}
                                    className="mr-1 lg:mr-2 font-semibold"
                                />
                                Expert Connect
                            </Link>
                            <Link
                                href="/"
                                className="flex items-center text-gray-700 font-semibold hover:text-purple-500"
                            >
                                More
                                <MdKeyboardArrowDown
                                    size={20}
                                    className="mr-1 lg:mr-2 font-semibold"
                                />
                            </Link>
                        </div>

                        {/* Avatar with dropdown */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <CommonAvatar
                                    src={
                                        "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    }
                                />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="md:hidden w-48 mt-4 bg-white">
                                <DropdownMenuItem>
                                    <Link
                                        href="/"
                                        className="flex items-center w-full font-semibold text-gray-700 hover:text-purple-500"
                                    >
                                        <LuGraduationCap size={20} className="mr-2" />
                                        Program
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link
                                        href="/"
                                        className="flex items-center w-full font-semibold text-gray-700 hover:text-purple-500"
                                    >
                                        <MdOutlineAssignment size={20} className="mr-2" />
                                        Test Series
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link
                                        href="/"
                                        className="flex items-center w-full font-semibold text-gray-700 hover:text-purple-500"
                                    >
                                        <MdOutlinePsychology size={20} className="mr-2" />
                                        Skill Connect
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link
                                        href="/"
                                        className="flex items-center w-full font-semibold text-gray-700 hover:text-purple-500"
                                    >
                                        <MdOutlinePeopleAlt size={20} className="mr-2" />
                                        Expert Connect
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link
                                        href="/"
                                        className="flex items-center w-full font-semibold text-gray-700 hover:text-purple-500"
                                    >
                                        More
                                        <MdKeyboardArrowDown size={20} className="ml-2" />
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Navbar;
