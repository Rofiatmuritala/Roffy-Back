import mongoose from "mongoose";

const schema = mongoose.Schema;

const achievementSchema = new schema({
  name: {
    type: String,
    required: [true, "The name is required"],
  },
  institution: {
    type: String,
    required: [true, "The institution name is required"],
  },
  date: {
    type: Date,
    required: [true, "The date is required"],
  },
  certificate: {
    type: String,
    required: [true, "The certificate field is required"],
  },
});

export const Achievement = mongoose.model("Achievement", achievementSchema);
