import mongoose from "mongoose";

const schema = mongoose.Schema;

const achievementSchema = new schema({
  date: { type: String, required: [true, "The date is required"] },
  institution: {
    type: String,
    required: [true, "The institution name is required"],
  },
  image: { type: String, required: [true, "The image field is required"] },
});

export const Achievements = mongoose.model("Achievement", achievementSchema);
