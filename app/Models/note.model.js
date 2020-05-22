const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
    name: String,
    city: String
},{
    timestamps: true
});

module.exports = mongoose.model('Note', noteSchema);