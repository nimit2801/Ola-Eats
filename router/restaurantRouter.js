import express from 'express';
import {
  newrestaurant,
  updateRestaurant,
} from '../controllers/restaurantController.js';
export const router = express.Router();

router.route('/').post(newrestaurant).put(updateRestaurant);

export default router;
