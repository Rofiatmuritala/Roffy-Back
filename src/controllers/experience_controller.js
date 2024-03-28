import { Experience } from "../models/experience.js";

export const createExperience = async (req, res, next) => {
  try {
    const experience = await Experience.create(req.body);
    res.json({ experience: experience });
  } catch (error) {
    next(error);
  }
};

export const getAllExperience = async (req, res, next) => {
  try {
    const experiences = await Experience.find();
    res.json({ experiences: experiences });
  } catch (error) {
    next(error);
  }
};

export const getOneExperience = async (req, res, next) => {
  try {
    const experience = await Experience.findById(req.params.id);
    res.json({ experience: experience });
  } catch (error) {
    next(error);
  }
};

export const updateExperience = async (req, res, next) => {
  try {
    const experience = await Experience.updateOne(req.params.id, req.body);
    res.json({ experience: experience });
  } catch (error) {
    next(error);
  }
};

export const deleteOneExperience = async (req, res, next) => {
  try {
    const experience = await Experience.findByIdAndDelete(req.params.id);
    res.json({ experience: experience });
  } catch (error) {
    next(error);
  }
};

export const deleteExperience = async (req, res, next) => {
  try {
    const experience = await Experience.deleteMany(req.body);
    res.json({ experience: experience });
  } catch (error) {
    next(error);
  }
};
