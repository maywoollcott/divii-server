const router = require('express').Router();
const userController = require('./controllers/user.controller');
const cardController = require('./controllers/card.controller');

router.post('/register', userController.createUser);
router.post('/login', userController.logInUser);
router.post('/card', cardController.createCard);

module.exports = router;
