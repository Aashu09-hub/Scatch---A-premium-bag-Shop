const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/scatch');

const ownerSchema = mongoose.Schema({
    fullname : {
        type:String,
        minLength:3,
        trim:true,
    },
    email : String,
    password : String,
    products:{
        type:Array,
        default:[],
    },
    picture : String,
    gstin:String

});

module.exports = mongoose.model("owner",ownerSchema);