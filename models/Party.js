var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const Party = new Schema({
    name: String,
    size: Number,
    phoneNumber: Number,
    seatingType: String
})

module.exports = mongoose.model('Party', party);