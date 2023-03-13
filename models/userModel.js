const mongoose = require("mongoose");

const userSchema =  new mongoose.Schema({
    password: { type: String, required: true },
    username: { type: String, required: true },
    name: { type: String, required: true },
    cargo: { type: String, required: true },
    phone: { type: Number, required: true },
    avatar: { type: String, required: true},
    description: { type: String, required: true},
})

const userModel = mongoose.model('User', userSchema);

module.exports = userModel
