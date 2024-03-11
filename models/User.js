const mongoose = require ('mongoose')
const uniqueValidator = require ('mongoose-unique-validator')

const userShema = mongoose.Schema({
    email : {type: String, required: true, unique: true},
    pseudo : {type: String, required:true, unique: true},
    password: {type: String, required: true},
    profilPicture:{type: String},
    favorites:[{type: String}],
    recomandations:[{type: String}],
    watchlist:[{type: String}],
    seenMovie:[{type: String}]

})

userShema.plugin(uniqueValidator)

module.exports = mongoose.model('User', userShema)