const express = require("express");
const router = express.Router();
const sendMail = require("../controllers/mailController");

router.post("/sendMail",sendMail.sendMail);
router.post("/subscribe", sendMail.subscribe);

module.exports = router;
