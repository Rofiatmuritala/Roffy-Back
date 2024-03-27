import mongoose from "mongoose";

const schema = mongoose.Schema;

const BlogSchema = new schema(
  {
    name: {
      type: String,
      required: [true, "The name of the project is required"],
    },
    description: {
      type: String,
      required: [true, "The description of the project is required"],
    },
    image: {
      type: String,
      required: [true, "the image field is required"],
    },
    content: {
      type: String,
      required: [true, "the content field is required"],
    },
  },
  {
    timestamps: true,
  }
);

export const Blogs = mongoose.model("Blogs", BlogSchema);
