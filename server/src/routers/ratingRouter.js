const router = require('express').Router();
const RatingController = require('../controllers/ratingController');

router.post('/getstars', RatingController.getStars);
router.post('/setstars', RatingController.setStars);

module.exports = router;
