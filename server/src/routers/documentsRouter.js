const router = require('express').Router();
const DocumentController = require('../controllers/documentController');

router.post('/', DocumentController.getDocs);
router.post('/ava', DocumentController.getAva);

module.exports = router;
