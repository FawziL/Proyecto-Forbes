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

    createProduct = async(newProduct) => {
    try {
      const createdProduct = await this.collection.create(newProduct);

      return createdProduct;
    } catch (err) {
      console.log(err);

      throw new CustomError(500, "Error creating product");
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

  
  updateProducts = async(product, id) => {
    try {
        const document = this.collection.findById(id);
        const updatedProduct = await document.updateOne(product);
        return updatedProduct
    } catch (error) {
        throw new Error(`Error al modificar: ${error}`)
    }

}
 
deleteById = async(id)  =>{
try {
    const document = this.collection.findById(id);
    const deleteProduct = await document.deleteOne();
    return deleteProduct
} catch (error) {
    throw new Error(`Error al modificar: ${error}`)
}
} 

getByCategory = async(category) => {
  const doc = await this.collection.find({category:category});
  return doc || { error: 'producto no encontrado' }
}

  static getInstance() {
    if (!instance) {
      instance = new HouseMongoDAO();
    }
    return instance;
  }
}

module.exports = HouseMongoDAO;