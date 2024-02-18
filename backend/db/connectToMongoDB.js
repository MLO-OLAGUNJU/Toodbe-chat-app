import { mongoose } from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("Coonected to MongoDB");
  } catch (error) {
    console.log("Error connecting", error.message);
  }
};

export default connectToMongoDB;
