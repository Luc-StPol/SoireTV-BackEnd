const exporess = require('express')
const router = exporess.Router()

const userCtrl = require ('../controllers/user.js')

router.post('/signup', userCtrl.signup)
router.post('/login', userCtrl.login)
router.put('/addfavorite/:id', userCtrl.addFavorites)


module.exports= router