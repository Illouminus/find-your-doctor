const router = require('express').Router();
// const { register } = require('../controllers/register');
const { body } = require('express-validator');
const DocController = require('../controllers/doc-controller');
const authMiddleware = require('../middlewares/auth-middlewaire');

router.post(
  '/register',
  body('email').isEmail(),
  body('password').isLength({ min: 6, max: 32 }),
  DocController.registration,
);
router.post('/login', DocController.login);
router.post('/logout', DocController.logout);
router.get('/activate/:link', DocController.activate);
router.get('/refresh', DocController.refresh);
router.get('/users', authMiddleware, DocController.getUsers);
router.get('/appointments/:id', DocController.getAppointments);

module.exports = router;
