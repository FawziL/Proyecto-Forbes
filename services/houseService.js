const House = require("../models/houseModel.js");

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

    createProduct = async(newProduct, user) => {
    try {
      const {name, phone, description, avatar} = user
      console.log(avatar)
      const product = {...newProduct, name, phone, description, avatar}
      console.log(product)
      const createdProduct = await this.collection.create(product);
      return createdProduct;
    } catch (err) {
      console.log(err);
    }
  }
  getById = async(id) => {
    try{
        const doc = await this.collection.findById(id);
        return doc
    }catch(error){
        console.log(error);
    }

}
getByLocation = async(location) => {
  const doc = await this.collection.find({location:location});
  return doc 
}

  
updateProducts = async(product, id) => {
    try {
        const document = this.collection.findById(id);
        const updatedProduct = await document.updateOne(product);
        return updatedProduct
    } catch (error) {
       console.log(error)
    }

}
 
deleteById = async(id)  =>{
try {
    const document = this.collection.findById(id);
    const deleteProduct = await document.deleteOne();
    return deleteProduct
} catch (error) {
  console.log(error)
}
} 

getByPrice = async(price) => {
  const doc = await this.collection.find({price:{$lte:price}});
  return doc
}

  static getInstance() {
    if (!instance) {
      instance = new HouseMongoDAO();
    }
    return instance;
  }
}

module.exports = HouseMongoDAO;