const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth.js')

const userMovieCtrl = require ('../controllers/userMovie.js')


router.put('/add/favorite/:id',auth, userMovieCtrl.addFavorites)
router.post('/check/favorite/:id',auth, userMovieCtrl.checkFavorites)
router.post('/delete/favorite/:id', auth, userMovieCtrl.deleteFavorites)

router.put('/add/recommandations/:id',auth, userMovieCtrl.addRecommandations)
router.post('/check/recommandations/:id',auth, userMovieCtrl.checkRecommandations)
router.post('/delete/recommandations/:id', auth, userMovieCtrl.deleteRecommandations)

router.put('/add/watchlist/:id',auth, userMovieCtrl.addWatchlist)
router.post('/check/watchlist/:id',auth, userMovieCtrl.checkWatchlist)
router.post('/delete/watchlist/:id', auth, userMovieCtrl.deleteWatchlist)

router.put('/add/seemovie/:id',auth, userMovieCtrl.addSeenMovie)
router.post('/check/seemovie/:id',auth, userMovieCtrl.checkSeenMovie)
router.post('/delete/seemovie/:id', auth, userMovieCtrl.deleteSeenMovie)

module.exports= router