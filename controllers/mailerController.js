const mailerDao = require("../services/mailerService.js");
const mailerService = mailerDao.getInstance();

const formContact = async (req, res) => {
  try {
    await mailerService.formContact(req.body.name, req.body.email, req.body.message);
    console.log("el mensaje se envio")
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  formContact,
};
