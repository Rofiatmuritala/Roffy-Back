import { Router } from "express";
import {
  createBlog,
  deleteOneBlog,
  getAllBlog,
  getOneBlog,
  updateOneBlog,
} from "../controllers/blog_controller.js";

const route = Router();

route.get("/api/blog", getAllBlog);

route.get("/api/blog/:id", getOneBlog);

route.post("/api/blog", createBlog);

route.patch("/api/blog/:id", updateOneBlog);

route.delete("/api/blog", deleteOneBlog);

export default route;
