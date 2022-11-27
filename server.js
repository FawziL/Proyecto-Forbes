const express = require('express')
const { Server: HttpServer } = require('http')
const app = express()
const httpServer = new HttpServer(app)
const puerto = process.env.PORT || 8080;
const engine = require("express-handlebars");
const path = require("path")
const rutas = require('./routes/index')
const config = require("./config/config.js");

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://Fawzi:Fawzi123@cluster0.5qcwzcb.mongodb.net/?retryWrites=true&w=majority", () => {
    console.log("Conectada la base de datos");
  });

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/', rutas)
app.use(express.static('public'))
app.engine(
    "hbs",
    engine({
      extname: ".hbs",
      defaultLayout: path.join(__dirname, "/public/views/layout/main.hbs"),
      runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true
      }
    })
  );
  app.set("views", path.join(__dirname, "./public/views"));
  app.set("view engine", "hbs");


const connectedServer = httpServer.listen(puerto, () => {
    console.log(`Servidor escuchando en el puerto: ${connectedServer.address().port}`)
})

connectedServer.on('error', error => console.log(`Error en servidor ${error}`))


