const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth.js')
const multer = require('../middleware/multer-config.js')

const userCtrl = require ('../controllers/user.js')

router.post('/signup', userCtrl.signup)
router.post('/login', userCtrl.login)

router.get('/profil/:id', auth, multer, userCtrl.getProfil)




module.exports= router