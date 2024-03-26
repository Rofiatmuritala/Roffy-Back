import express from "express";
import Project from "../models/Project.js";
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

router.patch("/api/projects", updateProjects);

router.patch("/api/projects/:id", UpdateOneProject);

router.delete("/api/projects/:id", deleteOneProject);

router.delete("/api/projects", deleteAllProjects);

export default router;
