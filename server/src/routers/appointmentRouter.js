const express = require('express');

const router = express.Router();
const { setAppointment, cancelAppointment, updCommentAppointment } = require('../controllers/appointmentController');

router.post('/appointment', setAppointment);
router.post('/appointment/undo', cancelAppointment);
router.post('/appointment/updcomment', updCommentAppointment);

module.exports = router;
