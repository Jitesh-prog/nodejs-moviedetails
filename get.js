const router = require("express").Router();
const mongoose = require("mongoose");

const Post = mongoose.model("Post")

router.get("/",async(req, res)=>{
    try{
        const posts = await Post.find({})
        res.send(posts)
    }
    catch(error){
        res.status(500)
    }
});
router.put("/:postId",async(req,res)=>{
    try {
        const post = await Post.findByIdAndUpdate({ 
            _id : req.params.postId 
        }, req.body,{
           new : true,
           runValidators :true 
        });

        res.send(post) 

    } catch (error) {
        res.status(500);
    }
});


module.exports = router;