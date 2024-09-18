import { Blog } from "../models/blog.js";

export const getBlog = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json({
            success: true,
            blogs
        });
    } catch (error) {
        res.status(500).json({ message: "Error retrieving blogs", error });
    }
}

export const createBlog = async (req, res) => {
    try {
        const { title, date, readTime, imageUrl, content } = req.body;

        const newBlog = new Blog({
            title,
            date,
            readTime,
            imageUrl,
            content
        });

        const savedBlog = await newBlog.save();
        res.status(201).json({
            success: true,
            blog: savedBlog
        });
    } catch (error) {
        res.status(500).json({ message: "Error creating article", error });
    }
};