const { Router} = require('express');
const router = Router()
const auth = require("../middlewares/isAuth")
const {getAcount, formulario, login, failedLogin, signup, failedSignup, logout} = require("../controllers/userController.js")
const passport = require ('passport') 

router.get("/micuenta", auth, getAcount);

router.get('/formulario', auth, formulario);

router.get("/login", login);

router.post('/login',passport.authenticate('login',{failureRedirect: '/failedLogin',failureMessage: true}), login);

router.get('/failedLogin', failedLogin);  

router.get("/signup", signup);  

router.post('/signup',passport.authenticate('register',{ failureRedirect: '/failedSignup',failureMessage: true}), login); 
 
router.get('/failedSignup', failedSignup);

router.get('/logout', logout) 

module.exports = router;

