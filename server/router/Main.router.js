let express=require("express")
let router=express.Router()
let firstcontroller=require("../controller/first.controlller")

router.post('/cform',firstcontroller.Cform)
router.post('/rform',firstcontroller.Rform)
router.post('/lform',firstcontroller.sessions)
router.post('/dform',firstcontroller.Dform)


router.post('/findalleducation'.firstcontroller.findAllEducation)









module.exports=router
