const mongoose = require("mongoose");

const sellHouseSchema = new mongoose.Schema({
    location:{type:String},
    name:{type:String},
    email:{type:String},
    phone:{type:Number},
    agent:{type:String},
});

const sellHouseModel = mongoose.model('sellHouse', sellHouseSchema);

module.exports = sellHouseModel