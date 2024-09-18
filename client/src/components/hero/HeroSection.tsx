import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MdOutlineSearch as Search } from "react-icons/md";

interface HeroProps {
    name: string;
}

export default function HeroSection({ name = "Sindhu" }: HeroProps) {
    return (
        <div
            className="relative h-[400px] w-full overflow-hidden rounded-3xl bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage:
                    "url('https://c0.wallpaperflare.com/preview/416/179/610/kings-college-cambridge-uk-university.jpg')",
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent">
                <div className="container mx-auto h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                        Hello {name}!
                    </h1>
                    <p className="text-xl md:text-2xl text-white mb-8">
                        Start your{" "}
                        <span className="font-bold">study abroad</span> dream
                        journey from here
                    </p>
                    <div className="flex flex-row max-w-2xl bg-white p-1 rounded-lg">
                        <div className="flex-grow flex items-center">
                            <Search className="h-6 w-6 ml-1" color="#475569" />
                            <Input
                                type="text"
                                placeholder="Search colleges, university and more"
                                className="bg-white/90 text-slate-600 text-md outline-none border-none focus:outline-none focus:border-none"
                            />
                        </div>
                        <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8">
                            Search
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
