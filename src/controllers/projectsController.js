import router from "../routes/projects.js";
import Project from "../models/Project.js";

export const getAllProjects = async (req, res) => {
  const projects = await Project.find();
  res.json({ msg: "This is getting the project", projects: projects });
};

export const getOneProject = async (req, res) => {
  const project = await Project.findById(req.params.id);
  res
    .status(200)
    .json({ msg: `This is getting by id ${req.params.id}`, project: project });
};

export const createProject = async (req, res) => {
  const project = await Project.create(req.body);
  res.json({ msg: "This is adding the project", project: project });
};

export const updateProjects = async (req, res) => {
  const project = await Project.updateMany(req.body);
  res.json({ msg: "This is updating the project", project: project });
};

export const UpdateOneProject = async (req, res) => {
  const project = await Project.updateOne(req.body);
  res.json({
    msg: `This is updating one the project ${req.params.id}`,
    project: project,
  });
};

export const deleteOneProject = async (req, res) => {
  const project = await Project.findByIdAndDelete(req.body);
  res.json({
    msg: `This is deleting the project${req.params.id} `,
    project: project,
  });
};

export const deleteAllProjects = async (req, res) => {
  const project = await Project.deleteMany();
  res.json({ msg: "This is deleting the project" });
};
