const express=require('express')
const router=express.Router()

const registerController=require('./register.controller')

router.post('/register',registerController.register)
router.post('/login',registerController.logIn)

router.get('/viewuser', registerController.viewUser)
router.post('/deleteUser',registerController.deleteUser)
router.post('/edituser',registerController.editUser)
router.post('/finduser', registerController.findUser)
router.post('/blockuser', registerController.blockUser)
router.put('/profile/:id',registerController.profileupdate)
router.get('/profile/:id',registerController.profile)
router.post('/userDatas', registerController.userDatas)


module.exports=router