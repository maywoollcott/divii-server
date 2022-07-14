const router = require('express').Router();
const userController = require('./controllers/user.controller');
const cardController = require('./controllers/card.controller');
const spreadController = require('./controllers/spread.controller');
const readingController = require('./controllers/reading.controller');
const sendEmailController = require('./controllers/sendEmail.controller');

router.post('/register', userController.createUser);
router.post('/login', userController.logInUser);
router.post('/updateuser', userController.updateUser);
router.post('/getuserbytoken', userController.getUserByToken);
router.post('/card', cardController.createCard);
router.post('/sendresetemail', sendEmailController.sendResetEmail);
router.get('/cards', cardController.getAllCards);
router.get('/cardbynumber:deckNumber', cardController.getCardByNumber);
router.post('/spread', spreadController.createSpread);
router.get('/spreadbynumber:spreadNumber', spreadController.getSpreadByNumber);
router.get('/spreads', spreadController.getAllSpreads);
router.post('/reading', readingController.createReading);
router.get('/readingbyid:id', readingController.getReadingsById);

module.exports = router;
