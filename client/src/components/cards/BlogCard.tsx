import Image from "next/image";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import Link from "next/link";


interface BlogPost {
    id: number;
    title: string;
    date: string;
    readTime: string;
    imageUrl: string;
}
function BlogCard({ post, type }: { post: BlogPost, type: string }) {
    return (
        <Card className={`overflow-hidden ${type === "blog" ? "cursor-pointer transform transition-transform duration-300 hover:scale-95" : ""} `}>
            <CardHeader className="p-2">
                <Image
                    src={post.imageUrl}
                    alt={post.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-md"
                />
            </CardHeader>
            <CardContent className="p-4">
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <h3 className="font-semibold text-lg leading-tight mb-2">
                    {post.title}
                </h3>
            </CardContent>
            <CardFooter className="p-4 pt-0">
                {
                    type === "blog" ? (
                        <p className="text-sm text-gray-500">{post.readTime}</p>
                    ) : (
                        <Link href={"#"} className="text-sky-600 font-semibold">Explore More</Link>
                    )
                }
            </CardFooter>
        </Card>
    );
}

export default BlogCard;
