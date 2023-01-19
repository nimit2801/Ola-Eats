import { Restaurant } from '../database/model/index.js';

// @desc create new restaurant
// @route POST /restaurant
// @access Admin

export const newrestaurant = async (req, res) => {
  try {
    const [restName, foodCategory, foodItem, timings] = await [
      req.body.restName,
      req.body.foodCategory,
      req.body.foodItem,
      req.body.timings,
    ];
    const newrestaurant = await Restaurant.create({
      restName,
      foodCategory,
      foodItem,
      timings,
    });
    if (!newrestaurant) {
      return res.status(404).json({
        success: false,
        message: 'restaurant was not created!',
      });
    } else {
      return res.status(200).json({
        success: true,
        message: `${newrestaurant.restName} was created!`,
      });
    }
  } catch (error) {
    return res.status(404).json({
      success: false,
      error: error,
    });
  }
};

export const updateRestaurant = async (req, res) => {
  try {
    const [restName, foodCategory, foodItem, timings] = await [
      req.body.restName,
      req.body.foodCategory,
      req.body.foodItem,
      req.body.timings,
    ];
    const query = { restName };
    const newRestaurant = await Restaurant.findOneAndUpdate(query, {
      foodCategory,
      foodItem,
      timings,
    });
    return res.status(200).json({
      success: true,
      message: `${newRestaurant.restName} was updated!`,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      error: error,
    });
  }
};
