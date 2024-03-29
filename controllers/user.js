const  bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../models/User')

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
        const user = new User({
            email: req.body.email,
            password: hash
        })
        user.save()
        .then(() => res.status(201).json({message:'User created'}))
        .catch(error => res.status(400).json({error}))
    })
    .catch(error => res.status(500).json({error}))
}

exports.login = (req, res, next) => {
    User.findOne({email : req.body.email})
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
exports.addFavorites = (req, res, next) => {

    fav= req.query.favorites

    User.updateOne(
        {_id: req.params.id}, 
        {$push: {"favorites":`${fav}`}})
    .then(() => res.status(200).json({message: 'Movie added'}))
    .catch((error) => res.status(400).json({error}))
}


