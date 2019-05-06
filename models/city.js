const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const citySchema = new Schema({
    title:String,
    photo:String,
    cityName:String,
    
});

const City = mongoose.model('City', citySchema);
module.exports = City;