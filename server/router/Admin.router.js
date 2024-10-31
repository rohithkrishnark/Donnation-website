var express = require("express");
var router = express.Router();
var controller = require("../controller/Admin.controller")


router.get('/api/education/request',controller.education)
router.post('/api/education/approval',controller.educationapproval)


module.exports = router;