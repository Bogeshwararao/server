
const express = require("express");
const router = express.Router();
const { homeHandler, regHandler } = require('../controllers/auth-controller');



router.route('/').get(homeHandler);
router.route('/reg').get(regHandler);

module.exports = router;
