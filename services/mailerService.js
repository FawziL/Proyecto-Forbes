const transporter = require("../nodemailer.js")

let instance;

class mailerDAO {

formContact = async(name, email, phone) => {
  const mailOptions = {
    from: "pg394261@gmail.com",
    to: "xerxeszerofjlr11@gmail.com",
    subject: `Nuevo mensaje de ${name}`,
    html: 
    `
    <h2>Hola, me llamo: ${name}</h2>
    <h3>Mis datos de contacto son:</h3>
    <p>${email}</p>
    <p>${phone}</p>
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