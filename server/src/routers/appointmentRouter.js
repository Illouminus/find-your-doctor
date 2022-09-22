const express = require('express');
const multer = require('multer');

const upload = multer({ dest: 'uploads/documents' });

const router = express.Router();
const { setAppointment, cancelAppointment, updCommentAppointment, getDocuments } = require('../controllers/appointmentController');

router.post('/appointment', upload.array('file', 12), setAppointment);
router.post('/appointment/undo', cancelAppointment);
router.post('/appointment/updcomment', updCommentAppointment);
router.post('/getDocuments', getDocuments);

module.exports = router;
