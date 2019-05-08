const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    username: String,
    currentCity: String,
    photo:String,
    password: {type: String,required: true,},
    email: {type:String, required:true, lowercase:true,trim:true},
    // posts: [{type: Schema.Types.ObjectId,ref: 'Post'}],
    joinDate: {type:Date, default:Date.now},

    
});

const User = mongoose.model('User', UserSchema);
module.exports = User;






