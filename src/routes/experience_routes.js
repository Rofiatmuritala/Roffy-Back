import { Router } from "express";
import {
  createExperience,
  deleteOneExperience,
  getAllExperience,
  getOneExperience,
  updateExperience,
} from "../controllers/experience_controller.js";
import { adminOnlyRouteMiddleware } from "../middlewares/user_middleware.js";

const route = Router();

route.post("/api/experiences", adminOnlyRouteMiddleware, createExperience);

route.get("/api/experiences", getAllExperience);

route.get("/api/experiences/:id", getOneExperience);

route.patch("/api/experiences/:id", adminOnlyRouteMiddleware, updateExperience);

route.delete(
  "/api/experiences/:id",
  adminOnlyRouteMiddleware,
  deleteOneExperience
);

export default route;
