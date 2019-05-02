const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    username: String,
    currentCity: String,
    password: {
        type: String,
        // required: true,
    },
    email: {type:String, required:true, lowercase:true,trim:true},
    joinDate: {type:Date, default:Date.now},
    posts: Array,
    // posts: [{
    //     title: String,
    //     content: String,
    // }],
});

const User = mongoose.model('User', UserSchema);
module.exports = User;






