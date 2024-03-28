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

route.post("/api/achievements", createAchievement);

route.patch("/api/achievements/:id", updateOneAchievement);

route.delete("/api/achievements/:id", deleteOneAchievement);

export default route;
