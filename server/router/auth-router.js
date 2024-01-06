const express = require("express");
const router = express.Router();
const { home, reg } = require("../controller/auth-control");

router.route("/").get(home);
router.route("/reg").get(reg);

module.exports = router;
