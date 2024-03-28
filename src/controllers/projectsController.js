import Project from "../models/Project.js";

export const getAllProjects = async (req, res, next) => {
  try {
    const projects = await Project.find();
    res.json({ msg: "This is getting the project", projects: projects });
  } catch (error) {
    next(error);
  }
};

export const getOneProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      const error = new Error(
        `Can't find project with the id of ${req.params.id}`
      );

      error.statusCode = 404;

      return next(error);
    }
    res.status(200).json({
      msg: `This is getting by id ${req.params.id}`,
      project: project,
    });
  } catch (error) {
    next(error);
  }
};

export const createProject = async (req, res) => {
  try {
    const project = await Project.create(req.body);
    res.json({ msg: "This is adding the project", project: project });
  } catch (error) {
    next(error);
  }
};

export const UpdateOneProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body);
    res.json({
      msg: `This is updating one the project ${req.params.id}`,
      project: project,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteOneProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    res.json({
      msg: `This is deleting the project${req.params.id} `,
      project: project,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteAllProjects = async (req, res) => {
  try {
    const project = await Project.deleteMany();
    res.json({ msg: "This is deleting the project" });
  } catch (error) {
    next(error);
  }
};
