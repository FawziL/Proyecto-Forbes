const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'pg394261@gmail.com',
    pass: 'evgwiatkadriirxs'
  }
});
module.exports = transporter
