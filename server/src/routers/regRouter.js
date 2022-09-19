const router = require('express').Router();
// const { register } = require('../controllers/register');
const { body } = require('express-validator');
const UserController = require('../controllers/user-controller');
const authMiddleware = require('../middlewares/auth-middlewaire');

router.post(
  '/register',
  body('email').isEmail(),
  body('password').isLength({ min: 6, max: 32 }),
  UserController.registration,
);
router.post('/login', UserController.login);
router.post('/logout', UserController.logout);
router.get('/activate/:link', UserController.activate);
router.get('/refresh', UserController.refresh);
router.get('/users', authMiddleware, UserController.getUsers);
router.get('/user/:id', UserController.getUserLk);

module.exports = router;
