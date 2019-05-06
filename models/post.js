const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: String,
    content: String,
    photo:String,
    user: { type: Schema.Types.ObjectId, ref: 'User'}, 
    city: {type: Schema.Types.ObjectId,  ref: 'City'},
    joinDate: {type:Date, default:Date.now},
});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;