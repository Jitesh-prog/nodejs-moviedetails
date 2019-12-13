const router = require("express").Router();
const mongoose = require("mongoose");

const Post = mongoose.model("Post")

router.post("/",async(req,res)=>{
    try{
        const post = new Post();
        post.name = req.body.name;
        post.img = req.body.img;
        post.summary = req.body.summary;
        await post.save();
        res.send(post)
    }catch(error){
        res.status(500)
    }
    
});

module.exports = router;