const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
    content: {type: String, required: true}, 
    date: {type: Date, default: Date.now},
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    post: {type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
});

const Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;