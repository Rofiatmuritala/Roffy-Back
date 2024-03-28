import { Achievement } from "../models/achievement.js";

export const getAllAchievement = async (req, res) => {
  try {
    const achievements = await Achievement.find({});
    res.json({ achievements: achievements });
  } catch (error) {
    next(error);
  }
};

export const getOneAchievement = async (req, res) => {
  try {
    const achievement = await Achievement.findById(req.params.id);

    if (!achievement) {
      const error = new Error(
        `Can't find achievement with the id of ${req.params.id}`
      );

      error.statusCode = 404;

      return next(error);
    }
    res.json({ achievement: achievement });
  } catch (error) {
    next(error);
  }
};

export const createAchievement = async (req, res) => {
  try {
    const achievement = await Achievement.create(req.body);
    res.json({ achievement: achievement });
  } catch (error) {
    next(error);
  }
};

export const updateOneAchievement = async (req, res) => {
  try {
    const achievement = await Achievement.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.json({ achievement: achievement });
  } catch (error) {
    next(error);
  }
};

export const deleteOneAchievement = async (req, res) => {
  try {
    const deleteOneAchieve = await Achievement.findByIdAndDelete(req.params.id);
    res.json({ deleteOneAchieve: deleteOneAchieve });
  } catch (error) {
    next(error);
  }
};
