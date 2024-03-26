import { Router } from "express";
import {
  createSkill,
  deleteOneSkill,
  getAllSkills,
  getOneSkill,
  updateOneSkill,
} from "../controllers/skill_controller.js";

const route = Router();

route.post("/api/skills", createSkill);

route.get("/api/skills", getAllSkills);

route.get("/api/skills/:id", getOneSkill);

route.patch("/api/skills/:id", updateOneSkill);

route.delete("/api/skills/:id", deleteOneSkill);

export default route;
