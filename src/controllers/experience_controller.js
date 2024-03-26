import { Experience } from "../models/experience.js";
import route from "../routes/experience_routes.js";

export const createExperience = async (req, res) => {
  const experiences = await Experience.create(req.body);
  res.json({ experiences: experiences });
};
export const getAllExperience = async (req, res) => {
  const experiences = await Experience.find({});
  res.json({ experiences: experiences });
};
export const getOneExperience = async (req, res) => {
  const experiences = await Experience.findById(req.params.id);
  res.json({ experiences: experiences });
};
export const updateExperience = async (req, res) => {
  const experiences = await Experience.updateOne(req.params.id);
  res.json({ experiences: experiences });
};
export const deleteOneExperience = async (req, res) => {
  const experiences = await Experience.findByIdAndDelete(req.params.id);
  res.json({ experiences: experiences });
};
export const deleteExperience = async (req, res) => {
  const experiences = await Experience.deleteMany(req.body);
  res.json({ experiences: experiences });
};
