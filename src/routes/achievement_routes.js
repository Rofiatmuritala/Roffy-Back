import { Router } from "express";
import {
  createAchievement,
  deleteOneAchievement,
  getAllAchievement,
  getOneAchievement,
  updateOneAchievement,
} from "../controllers/achievement_controller.js";
import { adminOnlyRouteMiddleware } from "../middlewares/user_middleware.js";

const route = Router();

route.get("/api/achievements", getAllAchievement);

route.get("/api/achievements/:id", getOneAchievement);

route.post("/api/achievements", adminOnlyRouteMiddleware, createAchievement);

route.patch(
  "/api/achievements/:id",
  adminOnlyRouteMiddleware,
  updateOneAchievement
);

route.delete(
  "/api/achievements/:id",
  adminOnlyRouteMiddleware,
  deleteOneAchievement
);

export default route;
