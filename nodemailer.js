const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
    user: 'jermaine.marks34@ethereal.email',
    pass: '1MMPpYtzWR3C33cn75'
  }
})

module.exports = transporter
