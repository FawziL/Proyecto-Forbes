const mongoose = require("mongoose");

const houseSchema = new mongoose.Schema({
    title:{type:String},
    thumbnail:{type:String},
    price:{type:Number},
    location:{type:String},
    welcomeThumbnail:{type:String},
    welcomeTitle:{type:String},
    welcomeContent:{type:String},
    benefitThumbnail1:{type:String},
    benefitThumbnail2:{type:String},
    benefitThumbnail3:{type:String},
    benefitTitle1:{type:String},
    benefitTitle2:{type:String},
    benefitTitle3:{type:String},
    benefitContent1:{type:String},
    benefitContent2:{type:String},
    benefitContent3:{type:String},
    detailThumbnail:{type:String},
    detailTitle1:{type:String},
    detailTitle2:{type:String},
    detailTitle3:{type:String},
    detailTitle4:{type:String},
    detailBenefit1:{type:String},
    detailBenefit2:{type:String},
    detailBenefit3:{type:String},
    detailBenefit4:{type:String},
    avatar:{type:String},
    name:{type:String},
    description:{type:String},
    phone:{type:Number},
});

const houseModel = mongoose.model('House', houseSchema);

module.exports = houseModel