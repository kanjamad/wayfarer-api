const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    username: String,
    currentCity: String,
    joinDate: Date,
    posts: Array
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
