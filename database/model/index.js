import mongoose from 'mongoose';
import { restraunt } from '../model/restraunt.js';

// Models from one file
export const Restraunt = mongoose.model('Restraunt', restraunt);
