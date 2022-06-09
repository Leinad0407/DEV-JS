const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    commentsQty : String,
    date: String,
    hashtagsGroup: Array,
    reactionsQty: String,
    timeRead: String,
    title: String,
    userName: String
})

const Post = mongoose.model("posts",postSchema)

module.exports = Post