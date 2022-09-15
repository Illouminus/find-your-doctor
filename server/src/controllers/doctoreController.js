const { Doctor, Tag } = require("../../db/models");

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

module.exports = { getDoctor };
