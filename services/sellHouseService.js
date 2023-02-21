const House = require("../models/sellHouseModel.js");

let instance;

class HouseMongoDAO {
  constructor() {
    this.collection = House;
  }
 
getAll = async() => {
  try {
      const products = await this.collection.find().lean();
      return products;
  } catch (err) {
      console.log(err)
      return []
  }
}

sellHouse = async(newProduct) => {
  try {
    const createdProduct = await this.collection.create(newProduct);
    return createdProduct;
  } catch (err) {
    console.log(err);
  }
}

  static getInstance() {
    if (!instance) {
      instance = new HouseMongoDAO();
    }
    return instance;
  }
}

module.exports = HouseMongoDAO;