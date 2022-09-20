const express = require('express');

const router = express.Router();
const { setAppointment, cancelAppointment } = require('../controllers/appointmentController');

router.post('/appointment', setAppointment);
router.post('/appointment/undo', cancelAppointment);

module.exports = router;
