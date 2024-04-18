const nodemailer = require("nodemailer");
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: `${process.env.USER_MAILER}`,
    pass: `${process.env.PASSWORD_MAILER}`
  }
});
module.exports = transporter
