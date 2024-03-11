const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth.js')
const multer = require('../middleware/multer-config.js')

const userCtrl = require ('../controllers/user.js')

router.post('/signup', userCtrl.signup)
router.post('/login', userCtrl.login)

router.get('/profil/:id', auth, userCtrl.getProfil)
router.get ('/usersprofil/:pseudo', auth, userCtrl.getOneProfil)

router.post('/usersprofil', auth, userCtrl.searchProfils)

router.post('/profilpicture/:id', auth, multer, userCtrl.changeProfilPicture)




module.exports= router