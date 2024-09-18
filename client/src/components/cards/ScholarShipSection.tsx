import BlogCard from "./BlogCard";

interface BlogPost {
    id: number;
    title: string;
    date: string;
    readTime: string;
    imageUrl: string;
}

const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "CFTRI - Central Food Technological Research Institute",
        date: "28 march 2024",
        readTime: "5 min read",
        imageUrl:
            "https://media.istockphoto.com/id/1371896330/photo/happy-asian-woman-in-his-graduation-day.jpg?s=612x612&w=0&k=20&c=Ur3moWl1fKFms-6UACseglMjoYAynYKzsanZpgK8lFk=",
    },
    {
        id: 2,
        title: "CFTRI - Central Food Technological Research Institute",
        date: "28 march 2024",
        readTime: "5 min read",
        imageUrl:
            "https://media.istockphoto.com/id/1371896330/photo/happy-asian-woman-in-his-graduation-day.jpg?s=612x612&w=0&k=20&c=Ur3moWl1fKFms-6UACseglMjoYAynYKzsanZpgK8lFk=",
    },
    {
        id: 3,
        title: "CFTRI - Central Food Technological Research Institute",
        date: "28 march 2024",
        readTime: "5 min read",
        imageUrl:
            "https://media.istockphoto.com/id/1371896330/photo/happy-asian-woman-in-his-graduation-day.jpg?s=612x612&w=0&k=20&c=Ur3moWl1fKFms-6UACseglMjoYAynYKzsanZpgK8lFk=",
    }
];

export default function ScholarShipSection() {
    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-purple-600 mb-8">
                    Explore Scholarship
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogPosts.map((post) => (
                        <BlogCard key={post.id} post={post} type="scholarship"/>
                    ))}
                </div>
            </div>
        </section>
    );
}
