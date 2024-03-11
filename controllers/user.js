const  bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const fs = require('fs')

const User = require('../models/User')
const filter = {password:0, email:0}

//Global User routes
exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
        const user = new User({
            email: req.body.email,
            pseudo: req.body.pseudo,
            password: hash
        })
        user.save()
        .then(() => res.status(201).json({}))
        .catch(error => res.status(400).json({error}))
        
    })
    .catch(error => res.status(500).json({error}))
}
exports.login = (req, res, next) => {
    User.findOne({pseudo : req.body.pseudo})
    .then(user => {
        if(!user){
            return res.status(401).json({message : 'email ou mot de passe incorrecte'})
        } else {
            bcrypt.compare(req.body.password, user.password)
            .then (valid => {
                if(!valid) {
                    return res.status(401).json({message : 'email ou mot de passe incorrecte'})
                } else {
                    res.status(200).json({
                        userId: user.id,
                        token: jwt.sign(
                            {userId: user._id},
                            'RANDOM_TOKEN_SECRET',
                            { expiresIn: '24h'}
                        )
                    })
                }
            })
            .catch(error => res.status(500).json({error}))
        }
    })
    .catch(error => res.status(500).json({error}))
}
exports.getProfil = (req, res, next) => {
    User.findOne({_id: req.params.id})
    .then(user => res.status(200).json(user))
    .catch(error => res.status(400).json({error}))
}
exports.searchProfils = (req, res, next) => {
    const resData = {"pseudo": { $regex: req.body.data}}
    const filterData = {_id: 0, email: 0, password:0, favorites:0,recomandations:0,watchlist:0,seenMovie:0}
        User.find(resData, filterData)
        .then (users => res.status(200).json(users))
        .catch(error => res.status(400).json({error})) 
}
exports.getOneProfil = (req, res, next) => {
    User.findOne({pseudo: req.params.pseudo}, filter)
    .then(user => res.status(200).json(user))
    .catch(error => res.status(400).json({error}))
}

//Profil Picture
exports.changeProfilPicture = (req, res, next) => {
if (req.file.filename === undefined) {
    return res.status(400).json({message: "Aucun fichier n'a été envoyé"})
}
 User.findOne({_id: req.params.id})
 .then ((user) => {
    const filename = user.profilPicture.split('/images/')[1]
    fs.unlink(`images/${filename}`, () => {
        User.updateOne(
        {_id: req.params.id},
        {profilPicture:`${req.protocol}://${req.get('host')}/images/${req.file.filename}`}
    )
    .then(()=>res.status(201).json({message: "Photo de profil modifié"}))
    .catch((error) => res.status(400).json({error}))})
 })
 .catch(error => {res.status(500).json({error})})
    }
  



