const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
    location:{type:String, required: true},
    name:{type:String, required: true},
    email:{type:String, required: true},
    phone:{type:String, required: true},
});

const clientModel = mongoose.model('client', clientSchema);

module.exports = clientModel