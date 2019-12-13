const mongoose = require("mongoose");
require("dotenv").config();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URI,{ 
    useNewUrlParser: true,
    useUnifiedTopology: true
 });

 mongoose.connection.on('connected',()=>{
     console.log("Mongoose is connected");
 })