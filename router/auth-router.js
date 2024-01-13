
const express = require("express");
const router = express.Router();
const authcontrollers = require('../controllers/auth-controller');



router.route('/').get(authcontrollers.homeHandler);
router.route('/reg').post(authcontrollers.regHandler);
router.route('/login').post(authcontrollers.login);

module.exports = router;
