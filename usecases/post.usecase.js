const Post = require ("../models/post.model")

async function getPosts(filter){
    const posts = await Post.find(filter)

    return posts
}

async function createPost(post){
    const newPost = new Post (post)

    await Post.create(newPost)
}

async function updatePost(id,post){
    const filter = {
        _id : id
    }

    await Post.findOneAndUpdate(filter,post)
    const updatedPost = Post.findOne(filter)

    return updatedPost
}

//falta agregar función de eliminar post// ->>>>>>>>>

async function deletePost(id,post){
    const filter = {
        _id : id
    }

    await Post.findByIdAndDelete(filter,post)

    const posts = await Post.find(filter)

    return posts

}

module.exports = {
    getPosts,
    createPost,
    updatePost,
    deletePost
}