const router = require('express').Router();
const DocumentController = require('../controllers/documentController');

router.post('/', DocumentController.getDocs);

module.exports = router;
