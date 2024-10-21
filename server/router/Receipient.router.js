let express=require("express")
let router=express.Router()

let controller=require("../controller/Receipient.controller")

router.post("/recepientregister",controller.Authentication)
router.post("/recepientlogin",controller.Recepientlogin)
router.post("/api/totalsubmission",controller.FindAllSubmission)
router.post("/api/dressform",controller.Dressform)
router.post("/api/viewdressform",controller.DressSubmission)
router.post("/api/foodform",controller.Foodform)
router.post("/api/viewfoodform",controller.FoodSubmission)
router.post("/api/orphangeform",controller.Orphangeform)
router.post("/api/viewOrphangeform",controller.OrphanageSubmission)
router.post("/api/deleteform",controller.Educationdelete)
router.post("/api/dressdeleteform",controller.Dressdelete)
router.post("/api/fooddeleteform",controller.Fooddelete)
router.post("/api/orphangedeleteform",controller.orphanagedelete)
router.post("/educationedit",controller.edited)
router.post("/educationeditview",controller.updatedit)
router.post("/foodeditview",controller.Foodupdatedit)
router.post("/api/foodedit",controller.Recepientfoodedit)
router.post("/dresseditview",controller.Dressupdatedit)
router.post("/api/dressedit",controller.Recepientdressedit)
router.post("/orphangeeditview",controller.Orphanageupdatedit)
router.post("/api/orphangeedit",controller.Recepientorphanageedit)

router.post("/api/education/notification",controller.EductaionNotification)
router.post("/api/dress/notification",controller.DressNotification)
router.post("/api/food/notification",controller.FoodNotification)
router.post("/api/orphanage/notification",controller.FoodNotification)



router.get("/api/orpahn/foruser",controller.OrphanforUser)

























module.exports=router
