import { Blogs } from "../models/blog.js";

export const getAllBlog = async (req, res) => {
  const blog = await Blogs.find({});
  res.json({ blog: blog });
};

export const getOneBlog = async (req, res) => {
  const getOneBlog = await Blogs.findById(req.params.id);
  res.json({ getOneBlog: getOneBlog });
  console.log("Getting Blogs by id");
};
export const createBlog = async (req, res) => {
  const createBlog = await Blogs.create(req.body);
  res.json({ createBlog: createBlog });
  console.log("Getting Blogs by id");
};
export const updateOneBlog = async (req, res) => {
  const updateOneBlog = await Blogs.findByIdAndUpdate(req.params.id);
  res.json({ updateOneBlog: updateOneBlog });
  console.log("Getting Blogs by id");
};
export const deleteOneBlog = async (req, res) => {
  const deleteOneBlog = await Blogs.findByIdAndDelete(req.params.id);
  res.json({ deleteOneBlog: deleteOneBlog });
  console.log("Getting Blogs by id");
};
