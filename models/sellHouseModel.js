const mongoose = require("mongoose");

const sellHouseSchema = new mongoose.Schema({
    location:{type:String, required: true},
    name:{type:String, required: true},
    email:{type:String, required: true},
    phone:{type:Number, required: true},
    agent:{type:String, required: true},
});

const sellHouseModel = mongoose.model('sellHouse', sellHouseSchema);

module.exports = sellHouseModel