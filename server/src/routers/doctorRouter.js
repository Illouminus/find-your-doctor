const express = require('express');

const router = express.Router();
const { getDoctor, getDoctorLk, updateDoctor } = require('../controllers/doctoreController');

router.get('/doctor/:id', getDoctor);
router.get('/doctor/lk/:id', getDoctorLk);
router.post('/doctor/lk/:id', updateDoctor);

module.exports = router;
