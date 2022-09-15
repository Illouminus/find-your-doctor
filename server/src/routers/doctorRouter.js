const express = require('express');

const router = express.Router();
const { getDoctor } = require('../controllers/doctoreController');

router.get('/doctor/:id', getDoctor);

module.exports = router;
