const mailerDao = require("../services/mailerService.js");
const mailerService = mailerDao.getInstance();

const formContact = async (req, res) => {
  try {
    res.redirect("/");
    await mailerService.formContact(
      req.body.name,
      req.body.email,
      req.body.message
    );
    console.log("El mensaje ha sido enviado");
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  formContact,
};
