import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const dbConnect = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Mongodb connected on host ${dbConnect.connection.host}`);
  } catch (error) {
    console.error(` Error:${error.message} `);
    process.exit(1);
  }
};

export default connectDB;
