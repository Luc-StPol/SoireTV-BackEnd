const User = require('../models/User')

//Favorites routes
exports.addFavorites = (req, res, next) => {
    fav= req.body.data
    User.findOne({favorites:fav})  
 .then((favorites) => {
    if(!favorites) {
        return     User.updateOne(
            {_id: req.params.id}, 
            {$push: {"favorites":`${fav}`}})
        .then(() => res.status(200).json({message: 'Movie added'}))
        .then(console.log(`${fav} added to favorites`))
        .catch((error) => res.status(400).json({error}))
    } else {
        return console.log("Object already added"),
        res.status(400).json("Object already added")
        
    }
 })
 .catch(error => res.status(404).json({error}))
}
exports.checkFavorites = (req, res, next) => {
    fav = req.body.data
    User.findOne({favorites:fav})
    .then((favorites) => {
        if(favorites) {
            return res.status(200).json(true) //déja enregistré dans les favoris
        } else {
            return res.status(200).json(false)
        }
    })
    .catch((error) => res.status(400).json({error}))
}
exports.deleteFavorites = (req, res, next) => {
    fav = req.body.data
    User.findOne({favorites:fav})
    .then(User.updateOne(
        {_id:req.params.id},
        {$pull: {"favorites": `${fav}`}})
    .then(() => res.status(200).json({message: 'Movie remove from favorites'}))
    .catch((error)=> res.status(400).json({error}))
    )
}


//Recommandation routes
exports.addRecommandations = (req, res, next) => {
    reco= req.body.data
    User.findOne({recomandations:reco})  
 .then((recomandations) => {
    if(!recomandations) {
        return     User.updateOne(
            {_id: req.params.id}, 
            {$push: {"recomandations":`${reco}`}})
        .then(() => res.status(200).json({message: 'Movie added'}))
        .then(console.log(`${reco} added to recomandations`))
        .catch((error) => res.status(400).json({error}))
    } else {
        return console.log("Object already added"),
        res.status(400).json("Object already added")
        
    }
 })
 .catch(error => res.status(404).json({error}))
}
exports.checkRecommandations = (req, res, next) => {
    reco = req.body.data
    User.findOne({recomandations:reco})
    .then((recomandations) => {
        if(recomandations) {
            return res.status(200).json(true) //déja enregistré dans les recomandations
        } else {
            return res.status(200).json(false)
        }
    })
    .catch((error) => res.status(400).json({error}))
}
exports.deleteRecommandations = (req, res, next) => {
    reco = req.body.data
    User.findOne({recomandations:reco})
    .then(User.updateOne(
        {_id:req.params.id},
        {$pull: {"recomandations": `${reco}`}})
    .then(() => res.status(200).json({message: 'Movie remove from recomandations'}))
    .catch((error)=> res.status(400).json({error}))
    )
}


//Watchlist routes
exports.addWatchlist = (req, res, next) => {
    toWatch= req.body.data
    User.findOne({watchlist:toWatch})  
 .then((watchlist) => {
    if(!watchlist) {
        return     User.updateOne(
            {_id: req.params.id}, 
            {$push: {"watchlist":`${toWatch}`}})
        .then(() => res.status(200).json({message: 'Movie added'}))
        .then(console.log(`${toWatch} added to watchlist`))
        .catch((error) => res.status(400).json({error}))
    } else {
        return console.log("Object already added"),
        res.status(400).json("Object already added")
        
    }
 })
 .catch(error => res.status(404).json({error}))
}
exports.checkWatchlist = (req, res, next) => {
    toWatch = req.body.data
    User.findOne({watchlist:toWatch})
    .then((watchlist) => {
        if(watchlist) {
            return res.status(200).json(true) //déja enregistré dans les favoris
        } else {
            return res.status(200).json(false)
        }
    })
    .catch((error) => res.status(400).json({error}))
}
exports.deleteWatchlist = (req, res, next) => {
    toWatch = req.body.data
    User.findOne({watchlist:toWatch})
    .then(User.updateOne(
        {_id:req.params.id},
        {$pull: {"watchlist": `${toWatch}`}})
    .then(() => res.status(200).json({message: 'Movie remove from watchlist'}))
    .catch((error)=> res.status(400).json({error}))
    )
}


//seenMovie routes
exports.addSeenMovie = (req, res, next) => {
    movie= req.body.data
    User.findOne({seenMovie:movie})  
 .then((seenMovie) => {
    if(!seenMovie) {
        return     User.updateOne(
            {_id: req.params.id}, 
            {$push: {"seenMovie":`${movie}`}})
        .then(() => res.status(200).json({message: 'Movie added'}))
        .then(console.log(`${movie} added to seenMovie`))
        .catch((error) => res.status(400).json({error}))
    } else {
        return console.log("Object already added"),
        res.status(400).json("Object already added")
        
    }
 })
 .catch(error => res.status(404).json({error}))
}
exports.checkSeenMovie = (req, res, next) => {
    movie = req.body.data
    User.findOne({favorites:movie})
    .then((seenMovie) => {
        if(seenMovie) {
            return res.status(200).json(true) //déja enregistré dans les films vus
        } else {
            return res.status(200).json(false)
        }
    })
    .catch((error) => res.status(400).json({error}))
}
exports.deleteSeenMovie = (req, res, next) => {
    movie = req.body.data
    User.findOne({seenMovie:movie})
    .then(User.updateOne(
        {_id:req.params.id},
        {$pull: {"seenMovie": `${movie}`}})
    .then(() => res.status(200).json({message: 'Movie remove from seenMovie'}))
    .catch((error)=> res.status(400).json({error}))
    )
}
