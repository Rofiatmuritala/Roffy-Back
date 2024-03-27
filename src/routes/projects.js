import express from "express";
import { adminOnlyRouteMiddleware } from "../middlewares/user_middleware.js";
import {
  UpdateOneProject,
  createProject,
  deleteAllProjects,
  deleteOneProject,
  getAllProjects,
  getOneProject,
  updateProjects,
} from "../controllers/projectsController.js";

const router = express.Router();

router.get("/api/projects", getAllProjects);

router.get("/api/projects/:id", getOneProject);

router.post("/api/projects", createProject);

// router.patch("/api/projects", adminOnlyRouteMiddleware, updateProjects);

router.patch("/api/projects/:id", adminOnlyRouteMiddleware, UpdateOneProject);

router.delete("/api/projects/:id", adminOnlyRouteMiddleware, deleteOneProject);

// router.delete("/api/projects", deleteAllProjects);

export default router;
