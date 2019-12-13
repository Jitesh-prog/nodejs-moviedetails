const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");


//database connection
require("./mongo")

//Models
require("./model/Post")


//Middleware
app.use(bodyParser.json())
    .use(morgan());


//Routes

app.use("/get",require("./routes/get"))

app.use("/insert",require("./routes/insert"))

app.use("/update",require("./routes/update"))

app.use("/delete",require("./routes/delete"))

/*
const Post = mongoose.model("Post")

app.get("/posts",async(req, res)=>{
    try{
        const posts = await Post.find({})
        res.send(posts)
    }
    catch(error){
        res.status(500)
    }
});

app.get("/posts/:postId",async (req,res)=>{
    try {
        const post = await Post.find({name : req.params.postId })
        res.send(post)
    } catch (error) {
        res.status(500);
    }
})


app.delete("/posts/:postId",async(req,res)=>{
    try {
        const post = await Post.findByIdAndRemove({
            _id : req.params.postId
        });
        res.send(post)
    } catch (error) {
        
    }
})


*/



app.listen(3001,function(){
    console.log("Server is running on port 3001");
})

