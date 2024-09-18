'use client'
import { useEffect, useState } from "react";
import axios from "axios";
import BlogCard from "./BlogCard";

interface BlogPost {
  id: number;
  title: string;
  date: string;
  readTime: string;
  imageUrl: string;
  content: string;
}

export default function BlogSection() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await axios.get(`${process.env.SERVER}/blogs`);
        setBlogPosts(response.data.blogs); // Assuming the API returns an array of blog posts
      } catch (error) {
        setError("Failed to fetch blog posts");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-purple-600 mb-8">
          See our blogs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} type="blog" />
          ))}
        </div>
      </div>
    </section>
  );
}
