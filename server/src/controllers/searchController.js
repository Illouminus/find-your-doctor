const { Doctor } = require('../../db/models');

async function getDoctors(req, res) {
  try {
    const { inputspecialist, inputplace } = req.params;
    console.log(inputSpecialist, inputPlace);
    const theDoctors = await Doctor.findAll();
    console.log(theDoctors);
    return res.json(theDoctors);
  } catch (e) {
    console.log(e);
  }
}

module.exports = { getDoctors };
