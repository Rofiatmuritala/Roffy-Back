import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema({
  startDate: {
    type: Date,
    required: [true, "The start date is required"],
  },
  endDate: {
    type: Date,
    required: [true, "The end date is required"],
  },
  role: {
    type: String,
    required: [true, "The role is required"],
  },
  company: {
    type: String,
    required: [true, "The company name is required"],
  },
  description: {
    type: String,
    required: [true, "The description is required"],
  },
});

export const Experience = mongoose.model("Experience", experienceSchema);
