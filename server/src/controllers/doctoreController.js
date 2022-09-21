const { Doctor, Tag } = require("../../db/models");

async function getDoctorLk(req, res) {
  try {
    const { id } = req.params;
    console.log('id', id);
    const user = await Doctor.findOne({ where: { id } });
    console.log('user', user);
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
    console.log('!!!!', req.body);
    const { id } = req.params;
    const {
      first_name, last_name, email, telephone,
    } = req.body;
    const newUser = await Doctor.update({
      first_name, last_name, email, telephone,
    }, { where: { id } });
    // const data = 'Данные изменены';
    const user = await Doctor.findOne({ where: { id } });
    console.log('user', user);
    res.json(user);
  } catch (error) {
    console.log(error);
  }
}

module.exports = { getDoctor, getDoctorLk, updateDoctor };
