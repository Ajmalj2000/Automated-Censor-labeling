const express = require('express')
const router = express.Router()

const userController = require('./user.controller');

router.post('/addvideo',userController.AddVideo)
router.post('/viewvideos',userController.viewVideo)
router.post('/DeleteVideo',userController.deleteVideo)
router.post('/getVideo',userController.getvideo)
router.post('/updateVideo',userController.updatevideo)
router.get('/viewvideo',userController.viewvideos)
router.post('/addfeedback',userController.addFeedback)
router.get('/viewfeedback',userController.viewFeedback)









module.exports=router