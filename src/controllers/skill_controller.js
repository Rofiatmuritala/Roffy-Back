import { Skills } from "../models/skill.js";

export const getAllSkills = async (req, res) => {
  const Skill = await Skills.find({});
  res.json({ Skills: Skill });
};

export const getOneSkill = async (req, res) => {
  const getOneSkill = await Skills.findById(req.params.id);
  res.json({ getOneSkill: getOneSkill });
};

export const createSkill = async (req, res) => {
  const createSkill = await Skills.create(req.body);
  res.json({ createSkill: createSkill });
};

export const updateOneSkill = async (req, res) => {
  const updateOneSkill = await Skills.findByIdAndUpdate(req.params.id);
  res.json({ updateOneSkill: updateOneSkill });
};

export const deleteOneSkill = async (req, res) => {
  const deleteOneSkill = await Skills.findByIdAndDelete(req.params.id);
  res.json({ deleteOneSkill: deleteOneSkill });
};
