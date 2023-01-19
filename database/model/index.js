import mongoose from 'mongoose';
import { restaurant } from '../model/restaurant.js';

// Models from one file
export const Restaurant = mongoose.model('restaurant', restaurant);
