var express = require("express");
var router = express.Router();
var controller = require("../controller/CommonPayment")


router.post('/api/payment',controller.payment)
router.post('/api/paymentVerification',controller.paymentVerification)


module.exports = router;