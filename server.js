const express = require('express')
const { Server: HttpServer } = require('http')
const app = express()
const httpServer = new HttpServer(app)
const engine = require("express-handlebars");
const path = require("path")
const passport = require("passport");
const initPassport = require("./passport/init.js");
const rutas = require('./routes/index')
require('dotenv').config();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const mongoose = require("mongoose");
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_DATABASE}?retryWrites=true&w=majority`, () => {
  console.log("Conectada la base de datos");
});

const cookieParser = require("cookie-parser");
const session = require("express-session");
const MongoStore = require("connect-mongo");
  
app.use(cookieParser());
app.use(
  session({
    store: MongoStore.create({
      mongoUrl: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_DATABASE}?retryWrites=true&w=majority`,
    }),
    secret: "forbes",
    resave: false,
    saveUninitialized: false,
    rolling: false,
    cookie: {
      maxAge: 5000000,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());
initPassport(passport);

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

const connectedServer = httpServer.listen(process.env.PORT, () => {
  console.log(`Servidor escuchando en el puerto: ${connectedServer.address().port}`)
})

connectedServer.on('error', error => console.log(`Error en servidor ${error}`))


