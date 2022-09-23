const express = require('express');

const router = express.Router();

const {
  getDoctor, getDoctorLk, updateDoctor, getStars,
} = require('../controllers/doctoreController');

router.get('/doctor/:id', getDoctor);
router.get('/doctor/lk/:id', getDoctorLk);
router.post('/doctor/lk/:id', updateDoctor);
router.get('/doctor/:id/stars', getStars);

module.exports = router;
