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

route.get("/api/achievement", getAllAchievement);

route.get("/api/achievement/:id", getOneAchievement);

route.post("/api/achievement", adminOnlyRouteMiddleware, createAchievement);

route.patch(
  "/api/achievement/:id",
  adminOnlyRouteMiddleware,
  updateOneAchievement
);

route.delete(
  "/api/achievement",
  adminOnlyRouteMiddleware,
  deleteOneAchievement
);

export default route;
