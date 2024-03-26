import { Achievements } from "../models/achievement.js";

export const getAllAchievement = async (req, res) => {
  const achieve = await Achievements.find({});
  res.json({ achieve: achieve });
};

export const getOneAchievement = async (req, res) => {
  const getOneAchieve = await Achievements.findById(req.params.id);
  res.json({ getOneAchieve: getOneAchieve });
};

export const createAchievement = async (req, res) => {
  const createAchieve = await Achievements.create(req.body);
  res.json({ createAchieve: createAchieve });
};

export const updateOneAchievement = async (req, res) => {
  const updateOneAchieve = await Achievements.findByIdAndUpdate(req.params.id);
  res.json({ updateOneAchieve: updateOneAchieve });
};

export const deleteOneAchievement = async (req, res) => {
  const deleteOneAchieve = await Achievements.findByIdAndDelete(req.params.id);
  res.json({ deleteOneAchieve: deleteOneAchieve });
};
