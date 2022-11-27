const mongoose = require("mongoose");

const houseSchema = new mongoose.Schema({
    title:{type:String,required: true},
    thumbnail:{type:String,required: true},
    price:{type:Number,required: true},
    description:{type:String,required: true},
    category:{type:String,required: true},
    location:{type:String,required: true},
});


const houseModel = mongoose.model('House', houseSchema);

module.exports = houseModel