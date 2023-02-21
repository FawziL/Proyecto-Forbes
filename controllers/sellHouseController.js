const sellHouseDao = require("../services/sellHouseService.js");
const sellHouseService = sellHouseDao.getInstance();

const getAll = async (req, res) => {
  try {
    const products = await sellHouseService.getAll();
    res.render("sellHouses", {products});
  } catch (err) {
    console.log(err);
  }
};

const sellHouse = async (req, res) => {
  try {
    await sellHouseService.sellHouse(req.body);
    const { location, name, email, agent, phone} = req.body;
    res.render("created", {
      location,
      name,
      email,
      agent,
      phone,
    });
  } catch (err) {
    console.log(err);
  }
};
module.exports = {
  getAll,
  sellHouse
};
