const houseDao = require("../services/houseService.js");
const houseService = houseDao.getInstance();

const getAll = async (req, res) => {
  try {
    const products = await houseService.getAll();
    return res.json(products);
  } catch (err) {
    console.log(err);
  }
};

const renderProducts = async (req, res) => {
  try {
    const products = await houseService.getAll();
    res.render("products", { products });
  } catch (err) {
    console.log(err);
  }
};

const createProduct = async (req, res) => {
  try {
    const product = await houseService.createProduct(
      req.body,
      req.user,
      req.files
    );
    res.render("houseCreated", { product });
  } catch (err) {
    console.log(err);
  }
};
const getByName = async (req, res) => {
  try {
    const { username, name, address, age, phone, description, avatar } =
      req.user;
    const housesByName = await houseService.getByName(req.user.name);
    res.render("userInfo", {
      username,
      name,
      address,
      age,
      phone,
      description,
      avatar,
      housesByName,
    });
  } catch (err) {
    console.log(err);
  }
};

const updateProductsPlantilla = async (req, res) => {
  try {
    const productId = req.params._id;
    res.render("formularioUserUpdate", { id: productId });
  } catch (err) {
    console.log(err);
  }
};

const updateProducts = async (req, res) => {
  try {
    res.json(
      await houseService.updateProducts(req.body, req.params._id, req.files)
    );
    res.redirect("/micuenta");
  } catch (err) {
    console.log(err);
  }
};

const getById = async (req, res) => {
  try {
    console.log(req.params._id);
    res.json(await houseService.getById(req.params._id));
  } catch (err) {
    console.log(err);
  }
};

const getByLocation = async (req, res) => {
  try {
    const products = await houseService.getByLocation(req.params.location);
    res.render("products", { products });
  } catch (err) {
    console.log(err);
  }
};

const getByPriceMenor = async (req, res) => {
  try {
    const products = await houseService.getByPriceMenor(req.params.price);
    res.render("products", { products });
  } catch (err) {
    console.log(err);
  }
};

const getByPriceMayor = async (req, res) => {
  try {
    const products = await houseService.getByPriceMayor(req.params.price);
    res.render("products", { products });
  } catch (err) {
    console.log(err);
  }
};

const deleteById = async (req, res) => {
  try {
    await houseService.deleteById(req.params._id);
    res.redirect("/micuenta");
  } catch (err) {
    console.log(err);
  }
};

const renderProductById = async (req, res) => {
  try {
    const house = await houseService.getById(req.params._id);
    console.log(req.params._id);
    res.render("houseById", { house });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getAll,
  getById,
  createProduct,
  updateProductsPlantilla,
  updateProducts,
  deleteById,
  getByPriceMenor,
  getByPriceMayor,
  renderProducts,
  getByLocation,
  renderProductById,
  getByName,
};
