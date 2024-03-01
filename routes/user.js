const exporess = require('express')
const router = exporess.Router()
const auth = require('../middleware/auth.js')

const userCtrl = require ('../controllers/user.js')

router.post('/signup', userCtrl.signup)
router.post('/login', userCtrl.login)
router.put('/addfavorite/:id',auth, userCtrl.addFavorites)


module.exports= router