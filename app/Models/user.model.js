const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: String,
    city: String,
    age: Number
    
},{
    timestamps: true
});

module.exports = mongoose.model('User',userSchema);