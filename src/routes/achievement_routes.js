import { Router } from "express";
import {
  createAchievement,
  deleteOneAchievement,
  getAllAchievement,
  getOneAchievement,
  updateOneAchievement,
} from "../controllers/achievement_controller.js";

const route = Router();

route.get("/api/achievement", getAllAchievement);

route.get("/api/achievement/:id", getOneAchievement);

route.post("/api/achievement", createAchievement);

route.patch("/api/achievement/:id", updateOneAchievement);

route.delete("/api/achievement", deleteOneAchievement);

export default route;
