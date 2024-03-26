import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "The name of the project is required"],
  },
  description: {
    type: String,
    required: [true, "The description of the project is required"],
  },
  images: [
    {
      type: String,
    },
  ],

  repos: [
    {
      name: {
        type: String,
        required: [true, "The repo name is required"],
      },

      link: {
        type: String,
        required: [true, "The link of the repo is required"],
      },
    },
  ],

  livedemo: [
    {
      name: {
        type: String,
        required: [true, "The livedemo name is required"],
      },

      link: {
        type: String,
        required: [true, " The live demo link is required"],
      },
    },
  ],
});

const Project = mongoose.model("Project", projectSchema);

export default Project;
