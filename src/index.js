import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import ProjectRoutes from "./routes/projects.js";
import UserRoutes, { registerAdmin } from "./routes/users_routes.js";
import ExperienceRoutes from "./routes/experience_routes.js";
import AchievementRoutes from "./routes/achievement_routes.js";
import BlogRoutes from "./routes/blog_routes.js";
import SkillRoutes from "./routes/skill_routes.js";
import connectDB from "../config/db.js";

//Initializing the app
const app = express();

// Middlewares
app.use(cors({ origin: process.env.FRONTEND_URI }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.json({ msg: "Hello world" });
});

app.use(ProjectRoutes);
app.use(UserRoutes);
app.use(ExperienceRoutes);
app.use(AchievementRoutes);
app.use(BlogRoutes);
app.use(SkillRoutes);

app.listen(PORT, async () => {
  await connectDB();
  console.log("App is running");
});
