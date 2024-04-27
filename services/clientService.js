const clientModel = require("../models/sellHouseModel.js");
const mailerDao = require("./mailerService.js");
const mailerService = mailerDao.getInstance();

let instance;

class clientDAO {
  constructor() {
    this.collection = clientModel;
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

newClient = async (location, name, email, phone) => {
  try {
    const newClient = new clientModel({ location, name, email, phone });
    const createdProduct = await newClient.save();
    mailerService.formContact(name, email, phone);
    return createdProduct;
  } catch (err) {
    console.log(err);
  }
};

  static getInstance() {
    if (!instance) {
      instance = new clientDAO();
    }
    return instance;
  }
}

module.exports = clientDAO;