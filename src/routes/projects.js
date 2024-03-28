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

router.post("/api/projects", adminOnlyRouteMiddleware, createProject);

router.patch("/api/projects/:id", adminOnlyRouteMiddleware, UpdateOneProject);

router.delete("/api/projects/:id", adminOnlyRouteMiddleware, deleteOneProject);

export default router;
