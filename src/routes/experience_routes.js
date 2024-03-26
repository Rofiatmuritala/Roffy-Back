import express, { Router } from "express";
import {
  createExperience,
  deleteExperience,
  deleteOneExperience,
  getAllExperience,
  getOneExperience,
  updateExperience,
} from "../controllers/experience_controller.js";

const route = Router();

route.post("/api/experiences", createExperience);

route.get("/api/experiences", getAllExperience);

route.get("/api/experiences/:id", getOneExperience);

route.patch("/api/experiences/:id", updateExperience);

route.delete("/api/experiences/:id", deleteOneExperience);

route.delete("/api/experiences", deleteExperience);

export default route;
