/* eslint-disable camelcase */
const { Raiting } = require('../../db/models');

class RatingController {
  async getStars(req, res, next) {
    const { user_id, doctor_id } = req.body;
    const stars = await Raiting.findOne({ where: { user_id, doctor_id } });
    res.json(stars);
  }

  async setStars(req, res, next) {
    console.log(req.body);
    const { user_id, doctor_id, stars } = req.body;
    try {
      const result = await Raiting.findOne({ where: { user_id, doctor_id } });
      if (result) {
        const resStars = await Raiting.update({ stars }, { where: { user_id, doctor_id } });
        res.json(resStars);
      } else {
        const resStars = await Raiting.create({ doctor_id, user_id, stars });
        res.json(resStars);
      }
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new RatingController();
