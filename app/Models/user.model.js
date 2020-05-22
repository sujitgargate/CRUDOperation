const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name:String,
    city : String,
    Age : Number
},{
    timestamps:true
})

module.exports=mongoose.model('User',UserSchema)