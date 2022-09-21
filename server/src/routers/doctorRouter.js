const express = require('express');

const router = express.Router();
const { getDoctor, getStars } = require('../controllers/doctoreController');

router.get('/doctor/:id', getDoctor);
router.get('/doctor/:id/stars', getStars);

module.exports = router;
