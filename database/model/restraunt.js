import mongoose from 'mongoose';
const { Schema } = mongoose;

const restraunt = new Schema({
  restName: { type: String, required: true, unique: true },
  foodCategory: { type: Array },
  foodItem: { type: Array },
  timings: { type: String, required: true },
  created: { type: Date, default: new Date() },
});
