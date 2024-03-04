

const mongoose = require('mongoose')
const express = require('express')

const userRoutes = require('./routes/user.js')
const userMovieRoutes= require('./routes/userMovie.js')
const auth = require('./middleware/auth.js')
const path = require('path')

const app = express()

app.use(express.json())

//Connect to MongoDB database
mongoose.connect('mongodb+srv://Luc:cT0TVbNZqj0SXjvi@soireetv.fhxfw1w.mongodb.net/?retryWrites=true&w=majority')
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'))


//CORS rules
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization, Credentials');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

//Routes
app.use('/images', express.static(path.join(__dirname,'images')))
app.use('/api/auth', userRoutes)
app.use('/api/fav/', userMovieRoutes)






module.exports = app