const mongoose = require("mongoose");

const houseSchema = new mongoose.Schema({
    title:{type:String,required: true},
    thumbnail:{type:String,required: true},
    price:{type:Number,required: true},
    location:{type:String,required: true},
    welcomeThumbnail:{type:Array,required: true},
    welcomeTitle:{type:Array,required: true},
    welcomeContent:{type:Array,required: true},
    benefitThumbnail1:{type:Array,required: true},
    benefitThumbnail2:{type:Array,required: true},
    benefitThumbnail3:{type:Array,required: true},
    benefitTitle1:{type:Array,required: true},
    benefitTitle2:{type:Array,required: true},
    benefitTitle3:{type:Array,required: true},
    benefitContent1:{type:Array,required: true},
    benefitContent2:{type:Array,required: true},
    benefitContent3:{type:Array,required: true},
    detailThumbnail:{type:Array,required: true},
    detailTitle1:{type:Array,required: true},
    detailTitle2:{type:Array,required: true},
    detailTitle3:{type:Array,required: true},
    detailTitle4:{type:Array,required: true},
    detailBenefit1:{type:Array,required: true},
    detailBenefit2:{type:Array,required: true},
    detailBenefit3:{type:Array,required: true},
    detailBenefit4:{type:Array,required: true},
    sellerThumbnail:{type:Array,required: true},
    sellerName:{type:Array,required: true},
    sellerDescription:{type:Array,required: true},
});


const houseModel = mongoose.model('House', houseSchema);

module.exports = houseModel