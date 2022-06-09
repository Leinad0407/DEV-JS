const express = require ("express")
const Post = require("../usecases/post.usecase")

const router = express.Router()

router.post("/",async(req,res)=>{
    const newPost = await Post.createPost(req.body)

    res.json(newPost)
})

router.get("/", async(req,res)=>{
    const month = Number(req.query.month)

    const filtro = {}

    const posts = await Post.getPosts(filtro)

    res.json(posts)
})

router.patch("/:id",async(req,res)=>{
    const id = req.params.id

    const postInfo = req.body

    const updatedPost = await Post.updatePost(id, postInfo)

    res.json(updatedPost)
})

//Falta el delete//

router.delete("/:id",async(req,res)=>{
    const id = req.params.id

    const deletePost = await Post.deletePost(id)

    res.json(deletePost)
})

module.exports = router;