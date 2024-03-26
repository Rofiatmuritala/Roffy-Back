import mongoose from "mongoose";

const skillSchema = new mongoose.Schema({
  title: { type: String, required: [true, "The start date is required"] },

  proficiency: {
    type: String,
    required: [true, "The description is required"],
  },
});

export const Skills = mongoose.model("Skills", skillSchema);
