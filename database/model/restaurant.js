import mongoose from 'mongoose';
const { Schema } = mongoose;

const foodItem = new Schema({
  itemNumber: { type: Number },
  name: { type: String },
  price: { type: Number },
});

export const restaurant = new Schema({
  restName: { type: String, required: true, unique: true },
  foodCategory: { type: Array },
  foodItem: { type: [foodItem] },
  timings: { type: String, required: true },
  created: { type: Date, default: new Date() },
});
