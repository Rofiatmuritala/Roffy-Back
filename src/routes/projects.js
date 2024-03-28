import express from "express";
import { adminOnlyRouteMiddleware } from "../middlewares/user_middleware.js";
import {
  UpdateOneProject,
  createProject,
  deleteOneProject,
  getAllProjects,
  getOneProject,
} from "../controllers/projectsController.js";

const router = express.Router();

router.get("/api/projects", getAllProjects);

router.get("/api/projects/:id", getOneProject);

router.post("/api/projects", createProject);

router.patch("/api/projects/:id", UpdateOneProject);

router.delete("/api/projects/:id", deleteOneProject);

export default router;
