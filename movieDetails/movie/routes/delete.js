const router = require("express").Router();
const mongoose = require("mongoose");
const Post = mongoose.model("Post")


router.delete("/:postId",async(req,res)=>{
    try {
        const post = await Post.findByIdAndRemove({
            _id : req.params.postId
        });
        res.send(post)
    } catch (error) {
        
    }
});

module.exports = router;