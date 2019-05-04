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
    posts: [{
        type: Schema.Types.ObjectId,  //REFERENCING :D
        ref: 'Post'
    }],
    
});

const User = mongoose.model('User', UserSchema);
module.exports = User;






