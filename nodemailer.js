const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
      user: 'miguel.braun99@ethereal.email',
      pass: 'PXZY3Suys4sWayHzzy'
  }
})

module.exports = transporter
