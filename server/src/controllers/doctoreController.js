const { Doctor, Tag, Raiting } = require('../../db/models');

async function getDoctor(req, res) {
  try {
    // console.log(req.params);
    const { id } = req.params;
    const data = await Doctor.findAll({
      where: { id },
      include: { model: Tag },
    });
    res.json(data);
  } catch (error) {
    console.log(error);
  }
}

async function getStars(req, res) {
  try {
    const { id } = req.params;
    const data = await Raiting.findAll({ where: { doctor_id: id } });
    if (data.length > 0) {
      const totalScore = data.reduce((sum, item) => sum + item.stars, 0);
      const decimal = 1;
      const result = (Math.round((totalScore / data.length) * 2) / 2).toFixed(decimal);
      res.json(result);
    } else {
      res.json(null);
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = { getDoctor, getStars };
