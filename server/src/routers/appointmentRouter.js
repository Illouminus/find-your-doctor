const express = require('express');

const router = express.Router();
const { setAppointment } = require('../controllers/appointmentController');

router.post('/appointment', setAppointment);

module.exports = router;
