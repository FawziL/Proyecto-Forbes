const transporter = require("../nodemailer.js")

let instance;

class mailerDAO {

formContact = async(name, email, message) => {
  const mailOptions = {
    from: `${email}`,
    to: "pg394261@gmail.com",
    subject: `Nuevo mensaje de ${name}`,
    html: 
    `
    <h1>Hola, te escribe:${name}</h1>
    <p>${message}</p>
    <p>${email}</p>
    `,
  };
    await transporter.sendMail(mailOptions);
}

  static getInstance() {
    if (!instance) {
      instance = new mailerDAO();
    }
    return instance;
  }
}

module.exports = mailerDAO;