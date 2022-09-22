/* eslint-disable camelcase */
const { Doctor, Tag, Raiting } = require('../../db/models');

async function getDoctorLk(req, res) {
  try {
    const { id } = req.params;
    console.log("id", id);
    const user = await Doctor.findOne({ where: { id } });
    console.log("user", user);
    res.json(user);
  } catch (error) {
    console.log(error);
  }
}

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

async function updateDoctor(req, res) {
  try {
    console.log("!!!!", req.body);
    const { id } = req.params;
    const {
      first_name,
      last_name,
      email,
      telephone,
      sex,
      speciality,
      education,
      experience,
    } = req.body;

    const newUser = await Doctor.update(
      {
        first_name,
        last_name,
        email,
        telephone,
        sex,
        education,
        experience,
        speciality,
      },
      { where: { id } }
    );
    // const data = 'Данные изменены';
    const user = await Doctor.findOne({ where: { id } });
    console.log("user", user);
    res.json(user);
  } catch (err) {
    console.log(err);
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

module.exports = {
  getDoctor, getDoctorLk, updateDoctor, getStars,
};
