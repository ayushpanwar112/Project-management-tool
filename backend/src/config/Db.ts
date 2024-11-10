import mongoose from 'mongoose';

export const connectDb = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.DB_KEY as string);
    console.log("DB is connected");
  } catch (error) {
    console.error("DB connection failed:", error);
  }
};



