
const express = require("express");
const router = express.Router();
const authcontrollers = require('../controllers/auth-controller');
const validate = require("../middlewares/validate");
const signupSchema = require("../validation/auth-validation");



router.route('/').get(authcontrollers.homeHandler);
router.route('/reg').post(validate(signupSchema), authcontrollers.regHandler);
router.route('/login').post(authcontrollers.login);

module.exports = router;
