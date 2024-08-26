import Mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const ConnectingURL = process.env.DATABASE_URL;

const connectDB = async () => {
  try {
    await Mongoose.connect(ConnectingURL).then(() => {
      console.log("Database connected Successfully");
    });
  } catch (error) {
    console.log("Database Connection Error");
  }
};

export default connectDB;