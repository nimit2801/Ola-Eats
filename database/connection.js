import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export const conn = async () => {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(process.env.MONGO_URI, {}),
      console.log('Database connected to Ola Eats');
  } catch (e) {
    console.log(e);
  }
};
