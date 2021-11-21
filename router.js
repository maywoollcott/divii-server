const router = require('express').Router();
const userController = require('./controllers/user.controller');

router.post('/register', userController.createUser);
router.post('/login', userController.logInUser);

module.exports = router;
