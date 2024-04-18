const mongoose = require("mongoose");

const houseSchema = new mongoose.Schema({
    title:{type:String, required: true},
    thumbnail:{type:String, required: true},
    price:{type:Number, required: true},
    location:{type:String, required: true},
    welcomeThumbnail:{type:String, required: true},
    welcomeTitle:{type:String, required: true},
    welcomeContent:{type:String, required: true},
    benefitThumbnail1:{type:String, required: true},
    benefitThumbnail2:{type:String, required: true},
    benefitThumbnail3:{type:String, required: true},
    benefitTitle1:{type:String, required: true},
    benefitTitle2:{type:String, required: true},
    benefitTitle3:{type:String, required: true},
    benefitContent1:{type:String, required: true},
    benefitContent2:{type:String, required: true},
    benefitContent3:{type:String, required: true},
    detailThumbnail:{type:String, required: true},
    detailTitle1:{type:String, required: true},
    detailTitle2:{type:String, required: true},
    detailTitle3:{type:String, required: true},
    detailTitle4:{type:String, required: true},
    detailBenefit1:{type:String, required: true},
    detailBenefit2:{type:String, required: true},
    detailBenefit3:{type:String, required: true},
    detailBenefit4:{type:String, required: true},
    avatar:{type:String, required: true},
    name:{type:String, required: true},
    description:{type:String, required: true},
    phone:{type:Number, required: true},
});

const houseModel = mongoose.model('House', houseSchema);

module.exports = houseModel