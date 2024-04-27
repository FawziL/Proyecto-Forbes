const clientDao = require("../services/clientService.js");
const clientService = clientDao.getInstance();

const getAll = async (req, res) => {
  try {
    const products = await clientService.getAll();
    res.render("clients", {products});
  } catch (err) {
    console.log(err);
  }
};

const newClient = async (req, res) => {
  try {
    const {location, name, email, phone} = req.body;
    await clientService.newClient(location, name, email, phone);
    res.render("created", {
      location,
      name,
      email,
      phone,
    });
  } catch (err) {
    console.log(err);
  }
};
module.exports = {
  getAll,
  newClient
};
