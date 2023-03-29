const House = require("../models/houseModel.js");
let instance;

class HouseMongoDAO {
  constructor() {
    this.collection = House;
  }

  getAll = async () => {
    try {
      const products = await this.collection.find().lean();
      return products;
    } catch (err) {
      console.log(err);
      return [];
    }
  };

  createProduct = async (newProduct, user, imgs) => {
    try {
      const {
        thumbnailArray,
        welcomeThumbnailArray,
        benefitThumbnail1Array,
        benefitThumbnail2Array,
        benefitThumbnail3Array,
        detailThumbnailArray,
      } = imgs;
      const thumbnail = `/imgs/property/${thumbnailArray[0].filename}`;
      const welcomeThumbnail = `/imgs/property/${welcomeThumbnailArray[0].filename}`;
      const benefitThumbnail1 = `/imgs/property/${benefitThumbnail1Array[0].filename}`;
      const benefitThumbnail2 = `/imgs/property/${benefitThumbnail2Array[0].filename}`;
      const benefitThumbnail3 = `/imgs/property/${benefitThumbnail3Array[0].filename}`;
      const detailThumbnail = `/imgs/property/${detailThumbnailArray[0].filename}`;

      const { name, phone, description, avatar } = user;
      const product = {
        ...newProduct,
        name,
        phone,
        description,
        avatar,
        thumbnail,
        welcomeThumbnail,
        benefitThumbnail1,
        benefitThumbnail2,
        benefitThumbnail3,
        detailThumbnail,
      };
      const createdProduct = await this.collection.create(product);
      return createdProduct;
    } catch (err) {
      console.log(err);
    }
  };
  
  getById = async (id) => {
    try {
      const doc = await this.collection.findById(id);
      return doc;
    } catch (error) {
      console.log(error);
    }
  };

  getByLocation = async (location) => {
    const doc = await this.collection.find({ location: location });
    return doc;
  };

  getByName = async (name) => {
    const doc = await this.collection.find({ name: name });
    return doc;
  };

  updateProducts = async (product, id) => {
    try {
      const document = this.collection.findById(id);
      const updateFields = {};
      for (const [key, value] of Object.entries(product)) {
        if (value !== "") {
          if (!isNaN(value)) {
            updateFields[key] = parseFloat(value);
          } else {
            updateFields[key] = value;
          }
        }
      }
      await document.updateOne(updateFields);
      return updateFields;
    } catch (error) {
      console.log(error);
    }
  };

  deleteById = async (id) => {
    try {
      const document = this.collection.findById(id);
      const deleteProduct = await document.deleteOne();
      return deleteProduct;
    } catch (error) {
      console.log(error);
    }
  };

  getByPriceMenor = async (price) => {
    const doc = await this.collection.find({ price: { $lte: price } });
    return doc;
  };

  getByPriceMayor = async (price) => {
    const doc = await this.collection.find({ price: { $gte: price } });
    return doc;
  };

  static getInstance() {
    if (!instance) {
      instance = new HouseMongoDAO();
    }
    return instance;
  }
}

module.exports = HouseMongoDAO;
