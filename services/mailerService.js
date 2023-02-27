const transporter = require("../nodemailer.js")

let instance;

class mailerDAO {

formContact = async(name, email, message) => {
  const mailOptions = {
    from: "pg394261@gmail.com",
    to: "xerxeszerofjlr11@gmail.com",
    subject: `Nuevo mensaje de ${name}`,
    html: 
    `
    <h2>Hola, te escribe: ${name}</h2>
    <h3>Te escribo por: ${message}</h3>
    <h3>Mis datos de contacto son:</h3>
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