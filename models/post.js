const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {
    type: String,
    default: ""
},
    content: {
    type: String,
    default: ""
},
    city:String,
});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;