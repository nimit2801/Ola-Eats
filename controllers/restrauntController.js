import { Restraunt } from '../database/model/index.js';

// @desc create new restraunt
// @route POST /restraunt
// @access Admin

export const newRestraunt = async (req, res) => {
  const newRestraunt = await Restraunt.create({
    restName: 'Random2801',
  });
};
