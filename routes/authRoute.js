const express = require('express')
const router = express.Router();
const {registerController , loginController} = require('../controllers/authController')
const {authValidateRegister,authValidateLogin } = require('../validates/authValidate')
const {checkRole} = require('../middlewares/roleMiddleware')
const authMiddleware = require('../middlewares/authMiddleware')

router.post('/register',authValidateRegister,registerController )
router.post('/login',authValidateLogin,loginController );
router.get('/dashboard', authMiddleware, (req, res) => {
  res.status(200).send(`Hello ${req.user.username}, this is your dashboard.`);
});
router.get('/admin',authMiddleware, checkRole('admin'),(req,res)=>{
    res.status(200).send('Admin');
})
router.get('/manger',authMiddleware, checkRole('manager'),(req,res)=>{
    res.status(200).send('Manger');
})
router.get('/teacher',authMiddleware, checkRole('teacher'),(req,res)=>{
    res.status(200).send('Teacher');
})
router.get('/student',authMiddleware, checkRole('student'),(req,res)=>{
    res.status(200).send('Student');
})



module.exports = router;