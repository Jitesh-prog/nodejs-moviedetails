const mongoose = require("mongoose");

const post_schema = new mongoose.Schema({
    name:{
        type:String,
        required :true
    },
    img:{
        type:String,
        required: true
    },
    summary:{
        type:String,
        required:true
    }

});

const Movie = mongoose.model("Post",post_schema);

module.exports = Movie;