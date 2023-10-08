const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var Users = new mongoose.Schema({
    Username:{
        type:String,
        required:true,
        unique:true,
    },
    long:{
        type:String,
        required:true,
    },
    lat:{
        type:String,
        required:true,
    },
    weather:{
        type:String,
    },
    date : {
        type : Date
    }
});

//Export the model
const Userss = mongoose.model("Users",Users);

module.exports = Userss;